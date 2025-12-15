<script>
  let darkMode = true;
  function toggleTheme() {
    darkMode = !darkMode;
    window.document.querySelector("html").setAttribute("data-bs-theme", darkMode ? "dark" : "light")
  }
</script>


<button on:click={(e)=>{toggleTheme(); e.target.blur();}} class="btn h-100 fs-4 m-1 py-1 px-2">
  {#if darkMode}
    <i class="bi bi-moon-stars-fill"></i>
  {:else}
    <i class="bi bi-sun-fill"></i>
  {/if}
</button>