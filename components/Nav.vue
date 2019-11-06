<template>
  <nav>
      <div class="mobile-nav-collapse hide-desktop" v-on:click="toggleNav">{{navCollapse}}</div>
      <b-nav class="nav-container" v-bind:class="{ 'hide-mobile': hideNav }">
        <b-nav-item active>home</b-nav-item>
        <b-nav-item href="https://github.codyconfer.me/">github</b-nav-item>
        <b-nav-item href="https://linkedin.codyconfer.me/">linkedin</b-nav-item>
      </b-nav>
    </nav>
</template>

<script>
export default {
  data: function() {
      return {
        hideNav: true,
        navCollapse: '+'
      }
  },
  methods: {
    toggleNav: function() {
      this.hideNav = !this.hideNav;
      this.navCollapse = this.hideNav ? '+' : '-';
    }
  },
}
</script>

<style lang="sass">
.mobile-nav-collapse
  font-size: 1.5rem
  margin: 0 0.25rem
  cursor: pointer

.nav-container
  @media #{$is-mobile}
    text-align: center
</style>