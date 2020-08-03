<script>
  export let page;
</script>

<style type="text/scss">
  .mainnav {
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 100px;
    grid-template-areas: "home . links links";
    align-items: center;
    justify-items: start;
  }

  .mainnav a {
    grid-area: home;
    text-align: center;
    text-decoration: none;
    font-size: 17px;
    font-family: "Poppins", Sans-Serif;
    color: #333232;
    &.home {
      font-weight: bold;
    }
  }

  .mainnav .links {
    justify-self: end;
    grid-area: links;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .links a {
    margin: 0 0.33rem;
    color: #696969;
  }
</style>

<div class="mainnav">
  <a href="/" class="home">Home</a>
  <div class="links">
    <a href="https://github.com/kiraarghy">Github</a>
    <a href="https://github.com/kiraarghy">Twitter</a>
    <a href="https://github.com/kiraarghy">Codepen</a>
  </div>

</div>
