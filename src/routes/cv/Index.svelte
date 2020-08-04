<script>
  const QUERY = `
    query {
      cv(slug: "cv") {
        slug
        html
      }
    }
  `;
  const QUERYRES = {};
  import Nav from "../../components/Nav.svelte";
  import Layout from "../../components/Layout.svelte";
  import Footer from "../../components/Footer.svelte";
</script>

<style>
  @screen lg {
    .content {
      max-width: 50vw;
      margin: 0 auto;
    }
  }
  .title {
    font-size: 2.6em;
    font-weight: 500;
    margin-bottom: 7px;
  }
  .subtitle {
    font-size: 1.4em;
    font-weight: 400;
    color: #757575;
    margin-bottom: 20px;
  }
  .authorLabel {
    margin-bottom: 40px;
  }
  .profilePic {
    border-radius: 50%;
    margin-right: 20px;
  }
  .pubDate {
    color: #757575;
    font-size: 14px;
  }
  .copyLink {
    margin: auto 0 auto auto;
    height: 20px;
    width: 20px;
    cursor: pointer;
  }
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }
  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }
  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }
  .content :global(ul) {
    line-height: 1.5;
  }
  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
  .html {
    margin-bottom: 4rem;
  }
</style>

<svelte:head>
  <title>Kara Stubbs CV</title>
</svelte:head>
<Layout>
  <Nav />
  <div class="html">
    {@html QUERYRES.cv.html}
  </div>
</Layout>
<Footer />
