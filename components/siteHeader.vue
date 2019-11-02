<template>
  <header>
      <section>
        <h1 class="site-header-text">
          <span class="site-header-highlight">codyconfer@codyconfer.me</span>
          :~
          <span class="site-header-row-2">
            <span class="site-header-highlight">$</span>
            <span class="site-heading-cursor" v-bind:class="{ 'hide': hideCursor }">&#9608;</span>
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
  align-items: center
  grid-template-columns: auto auto auto
  justify-content: left
  @media #{$is-phone}
    grid-template-columns: auto

.site-header-title-container
  display: grid
  justify-content: left
  grid-template-columns: auto auto
  @media #{$is-phone}
    grid-template-columns: auto
    margin-left: -5px

.site-header-location-container
  display: grid
  grid-template-columns: auto auto auto
  @media #{$is-phone}
    display: none
    visibility: none

.site-header-first

.site-heading-cursor
  font-size: 0.8em
  margin: auto 10px 8px 10px
</style>