<template>
  <nav>
    <div
      class="mobile-nav-collapse hide-desktop"
      v-bind:class="{ 'zero-deg': hideNav, 'inverted': !hideNav }"
      v-on:click="toggleNav"
    >
      <div class="arrow-down">
        <div class="arrow-down small"></div>
      </div>
    </div>
    <b-nav
      class="nav-container"
      v-bind:class="{ 'hide-mobile-animated': hideNav, 'show-mobile-animated': !hideNav }"
    >
      <b-nav-item active>home</b-nav-item>
    </b-nav>
  </nav>
</template>

<script>
<script lang="ts">
export default {
    data: function() {
        return {
            hideNav: true
        }
    },
    methods: {
        toggleNav: function() {
            this.hideNav = !this.hideNav
        }
    }
}
</script>

<style lang="sass">
.nav, .nav-container, .show-mobile-animated
  @media #{$is-mobile}
    border-bottom: 1px solid $main-foreground

.mobile-nav-collapse
  cursor: pointer
  width: 100%
  display: grid
  justify-content: center
  align-content: center
  @media #{$is-mobile}
    height: 50px

.arrow-down
  width: 0
  height: 0
  border-left: 16px solid transparent
  border-right: 16px solid transparent
  border-top: 16px solid
  display: grid
  justify-content: center
  align-content: center
  .small
    border-left: 8px solid transparent
    border-right: 8px solid transparent
    border-top: 8px solid
    margin: 0 0 18px 0

.nav-container
  @media #{$is-mobile}
    display: grid
    grid-template-columns: repeat(3, 1fr)
    text-align: center
    justify-content: center
    align-content: center
    margin: 0 0 10px 0

.nav-item
  margin: 0 2em 0 0
  @media #{$is-mobile}
    margin: 2em 0
    width: 100%

.nav-link
  padding: 0
  margin: 0
</style>