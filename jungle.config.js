const svelte = require("rollup-plugin-svelte");
const { terser } = require("rollup-plugin-terser");
const resolve = require("@rollup/plugin-node-resolve").default;
const commonjs = require("@rollup/plugin-commonjs");
const preprocess = require("svelte-preprocess");
const fetch = require("node-fetch");
const ssr = require("rollup-plugin-svelte-ssr");
const { junglePreprocess } = require("junglejs");

const production = !!process.env.PRODUCTION;

const fs = require("fs");
const templateHtml = fs.readFileSync("src/template.html", {
  encoding: "utf8",
  flag: "r",
});

module.exports = async () => {
  const postsRes = await (
    await fetch(
      "https://potion-api.now.sh/table?id=c26cb20b4e14416ba62a42fd5cb6178c"
    )
  ).json();
  let posts = [];

  /*Some data reformatting 🙄*/
  for (post of postsRes) {
    let modifiedPost = post;
    Object.keys(post.fields).forEach((fieldKey) => {
      if (fieldKey == "publish_date") {
        const startDate = modifiedPost.fields[fieldKey].start_date;
        modifiedPost.fields[fieldKey] = startDate;
      }
    });
    modifiedPost.fields.html = await (
      await fetch(`https://potion-api.now.sh/html?id=${post.id}`)
    ).text();
    posts.push(modifiedPost.fields);
  }
  const cvRes = await (
    await fetch(
      "https://potion-api.now.sh/html?id=24d5b04c50834b8e909d1dbc9001638c"
    )
  ).text();

  return {
    clientInputOptions: (filename, extension) => {
      return {
        input: `jungle/build${extension}/${filename}/main.js`,
        plugins: [
          svelte({
            dev: !production,
            hydratable: true,
            preprocess: [junglePreprocess, preprocess()],
          }),

          resolve({
            browser: true,
            dedupe: ["svelte"],
          }),
          commonjs(),

          production && terser(),
        ],
      };
    },
    clientOutputOptions: (filename, extension) => {
      return {
        sourcemap: /*!production ? 'inline' : */ false,
        format: "iife",
        name: "app",
        file: `jungle/build${extension}/${filename}/bundle.js`,
      };
    },
    ssrInputOptions: (filename, extension) => {
      const processedFilename =
        filename == "."
          ? "Index"
          : filename
              .split("-")
              .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
              .join("");

      return {
        input: `src/routes${extension}/${processedFilename}.svelte`,
        plugins: [
          svelte({
            dev: !production,
            preprocess: [junglePreprocess, preprocess()],
            generate: "ssr",
            hydratable: true,
            css: (css) => {
              css.write(`jungle/build${extension}/${filename}/bundle.css`);
            },
          }),

          resolve({
            browser: true,
            dedupe: ["svelte"],
          }),
          commonjs(),

          production && terser(),

          ssr({
            fileName: "index.html",
            configureExport: function (html, css) {
              return templateHtml.replace("{jungle.export.html}", html);
            },
          }),
        ],
      };
    },
    ssrOutputOptions: (filename, extension) => {
      return {
        sourcemap: !production ? "inline" : false,
        format: "cjs",
        file: `jungle/build${extension}/${filename}/ssr.js`,
      };
    },
    dataSources: [
      {
        format: "json",
        name: "post",
        items: posts,
        queryArgs: { title: "String!" },
      },
      {
        format: "json",
        name: "cv",
        items: [{ title: "cv", html: cvRes }],
        queryArgs: { title: "String!" },
      },
    ],
  };
};
