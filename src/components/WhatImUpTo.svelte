<style>
  h2 {
    margin-bottom: 4rem;
  }
  .what-im-upto {
    grid-area: stuff;
  }
  .what-ive-done {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
    grid-template-areas: "image image" "text text";
    grid-column-gap: 1rem;
  }
  .what-ive-done-text {
    grid-area: text;
    color: black;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    margin-bottom: 4rem;
    display: block;
  }
  .what-ive-done-image {
    justify-self: center;
    grid-area: image;
    height: 278px;
    width: auto;
  }
  @media only screen and (min-width: 620px) {
    .what-ive-done {
      grid-template-areas: "image text";
      box-shadow: 0px 0px 12px 1px rgba(229, 229, 229, 0.84);
    }
  }
</style>

<section class="what-im-upto">
  <h2>What I've been up to:</h2>
  <a
    href="https://codepen.io/collection/AZvEzJ"
    aria-label="Look at my game disc beauty project.">
    <article class="what-ive-done ">
      <div class="what-ive-done-image">
        <p
          class="codepen "
          data-height="278"
          data-theme-id="light"
          data-default-tab="result"
          data-user="kiraarghy"
          data-slug-hash="pogLxdM"
          data-preview="true"
          style="height: 278px; box-sizing: border-box; display: flex;
          align-items: center; justify-content: center; border: 2px solid;
          margin: 1em 0; padding: 1em;"
          data-pen-title="Addie no Okurimono - To Moze from Addie﻿">
          <span>
            See the Pen
            <a href="https://codepen.io/kiraarghy/pen/pogLxdM">
              Addie no Okurimono - To Moze from Addie﻿
            </a>
            by Kiraarghy (
            <a href="https://codepen.io/kiraarghy">@kiraarghy</a>
            ) on
            <a href="https://codepen.io">CodePen</a>
            .
          </span>
        </p>
        <script async src="https://static.codepen.io/assets/embed/ei.js">

        </script>
      </div>
      <div class="what-ive-done-text">
        <h3>GameDiscBeauty</h3>
        <p>
          Creative coding project to better understand SVG elements, and paths.
          Ended up producing 30 pieces of art.
        </p>
      </div>
    </article>
  </a>
  <a href="https://www.runpkg.com/" aria-label="Look at the runpkg project.">
    <article class="what-ive-done ">
      <img
        src="/rpkg-fs8.jpg"
        class=" what-ive-done-image"
        alt="View of the runpkg webapp" />
      <div class="what-ive-done-text">
        <h3>RunPkg</h3>
        <p>WebApp to make packages on unpkg more easily explorable.</p>
      </div>
    </article>
  </a>
</section>
