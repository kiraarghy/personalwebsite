<script>
  import Nav from "../components/Nav.svelte";
  import WhatImUpTo from "../components/WhatImUpTo.svelte";
  import Layout from "../components/Layout.svelte";
  import Footer from "../components/Footer.svelte";
  import Interested from "../components/Interested.svelte";
</script>

<style type="text/scss">
  main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    font-family: "Poppins", Sans-Serif;
    grid-template-areas:
      "header header header header"
      "stuff stuff stuff stuff"
      "interested interested interested interested"
      "footer footer footer footer";
  }
  h1 {
    font-family: "Abril Fatface", Cursive;
  }
  .header {
    grid-area: header;
    line-height: 3rem;
    font-family: "Abril Fatface", Cursive;
  }
  @media only screen and (min-width: 600px) {
    main {
      grid-template-rows: 2fr 3fr 0.5fr;
    }
  }
</style>

<svelte:head>
  <title>About Kara Stubbs</title>
</svelte:head>

<Layout>
  <Nav page="/" />
  <main>
    <header class="header">
      <h1>
        Hi, I'm Kara Stubbs. I'm a software developer, creative coder, and
        organiser based in London.
      </h1>
    </header>
    <WhatImUpTo />
    <Interested />
  </main>
</Layout>
<Footer />
