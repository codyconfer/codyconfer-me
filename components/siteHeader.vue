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

<style lang="sass" scoped>
$header-font: 'Share Tech Mono'

header
  margin: 50px 0 0 0

.site-header-text
  font-family: $header-font, monospace;
  display: grid
  grid-template-columns: auto auto
  align-items: center
  justify-content: left

.site-heading-cursor
  font-size: 0.8em
  margin-bottom: 5px

.site-header-row-2
  display: grid
  grid-template-columns: 1em auto
  align-items: center
  justify-content: left
</style>