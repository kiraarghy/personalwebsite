<style type="text/scss">
  .container {
    max-width: 650px;
    min-width: 300px;
    margin: 0 3rem;
    width: 70%;
  }

  .page-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>

<div class="page-container">
  <div class="container">
    <slot />
  </div>
</div>
