<style>
  .what-im-upto {
    grid-area: stuff;
    display: grid;
  }
  .what-ive-done {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
    margin: 3rem 0rem;
    grid-template-areas: "image image" "text text";
    grid-column-gap: 1rem;
    box-shadow: 0px 0px 12px 1px rgba(229, 229, 229, 0.64);
  }
  .what-ive-done-text {
    grid-area: text;
  }
  .what-ive-done-image {
    justify-self: center;
    grid-area: image;
    height: 278px;
    width: auto;
  }
  @media only screen and (min-width: 600px) {
    .what-ive-done {
      grid-template-areas: "image text";
    }
  }
</style>

<section class="what-im-upto">
  <h2>What I've been up to:</h2>
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
        align-items: center; justify-content: center; border: 2px solid; margin:
        1em 0; padding: 1em;"
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
        Cillum ea esse reprehenderit sit voluptate culpa laborum ad proident
        laboris eiusmod nisi exercitation. Fugiat aliqua anim do Lorem anim ad
        non. Culpa tempor mollit amet aliqua amet. Quis ut irure anim non esse
        et adipisicing commodo est nisi ut.
      </p>
    </div>
  </article>
  <article class="what-ive-done ">
    <img src="/rpkg-fs8.png" class=" what-ive-done-image" />
    <div class="what-ive-done-text">
      <h3>RunPkg</h3>
      <p>
        Cillum ea esse reprehenderit sit voluptate culpa laborum ad proident
        laboris eiusmod nisi exercitation. Fugiat aliqua anim do Lorem anim ad
        non. Culpa tempor mollit amet aliqua amet. Quis ut irure anim non esse
        et adipisicing commodo est nisi ut.
      </p>
    </div>
  </article>
</section>
