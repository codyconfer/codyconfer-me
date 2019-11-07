<template>
  <header>
      <section class="site-header-content">
        <h1 class="site-header-text">
          <span class="site-header-highlight site-header-title-container">
            <span class="hide-mobile">
              cody@
            </span>
            <span class="site-header-title-container">
              <span class="hide-desktop mobile-header-carrot">></span>
              <span class="site-header-title">codyconfer.me</span>
            </span>
          </span>
          <span class="site-header-location-container hide-mobile">
            <span class="site-header-separator">
              :
            </span>
            <span class="site-header-location">
              {{location}}
            </span>
            <span class="site-header-highlight">
              $
            </span>
          </span>
          <span class="site-header-command hide hide-mobile">
            cd blog
          </span>
          <span class="site-heading-cursor hide-mobile" v-bind:class="{ 'hide': hideCursor }">
            &#9608;
          </span>
        </h1>
      </section>
    </header>
</template>

<script>
import { Observable } from 'rxjs/Rx';

const blinkCursor = Observable.interval(750);

export default {
  data: function() {
      return {
        hideCursor: true,
        location: "~"
      }
  },
  methods: {
    toggleHideCursor: function() {
      this.hideCursor = !this.hideCursor;
    }
  },
  subscriptions: {
      blinkCursor$: blinkCursor
  },
  mounted() {
    this.$subscribeTo(blinkCursor, this.toggleHideCursor)
  }
}
</script>

<style lang="sass">
.site-header-text
  display: grid
  grid-template-columns: auto auto auto
  justify-content: left
  @media #{$is-mobile}
    align-content: center
    justify-content: center
    grid-template-columns: auto

.site-header-title-container
  display: grid
  align-items: center
  justify-content: center
  grid-template-columns: auto auto
  cursor: pointer

.site-header-location-container
  display: grid
  grid-template-columns: auto auto auto
  @media #{$is-mobile}
    display: none
    visibility: none

.site-heading-cursor
  font-size: 0.8em
  margin: auto 10px 8px 10px
</style>