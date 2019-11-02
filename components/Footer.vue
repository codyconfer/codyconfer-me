<template>
  <footer>
    <section class="site-footer-content">
      <span class="site-footer-text">
        &copy; {{year}} Cody Confer
      </span>
    </section>
  </footer>
</template>

<script>
export default {
  data: function() {
      return {
        year: new Date().getFullYear(),
      }
  },
}
</script>

<style lang="sass">
.site-footer-content
  display: grid
  justify-content: right
</style>