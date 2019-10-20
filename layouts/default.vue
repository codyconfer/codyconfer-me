<template>
  <section>
    <header class="container">
      <section>
        <h1>cody confer</h1>
      </section>
    </header>
    <nav class="container">
      <b-nav>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </nav>
    <nuxt />
  </section>
</template>

<style lang="sass">
/* fonts */
$body-font: 'Titillium Web'
$feature-font: 'Quicksand'
$heading-font: 'Oswald'
$link-font: 'Quicksand'
$mono-font: 'Roboto Mono'

/* light mode */
$light-background-highlight: #8eacc5
$light-background: #fff
$light-foreground: #1c2532
$light-foreground-blue: #0194ef
$light-foreground-green: #4fcf3f

/* dark mode */
$dark-background-highlight: #283243
$dark-background: #1c2532
$dark-foreground: #fff
$dark-foreground-blue: #26c2c9
$dark-foreground-green: #96bf47

/* colors */
// $main-background: $light-background
// $main-foreground: $light-foreground
// $main-background-highlight: $light-background-highlight
// $main-foreground-highlight: $light-foreground-blue
// $main-foreground-hover: $light-foreground-green
$main-background: $dark-background
$main-foreground: $dark-foreground
$main-background-highlight: $dark-background-highlight
$main-foreground-highlight: $dark-foreground-blue
$main-foreground-hover: $dark-foreground-green

html, body
  font-family: $body-font, sans-serif
  font-size: 1em
  background: $main-background
  color: $main-foreground

header
  max-height: 150px

main
  margin: 0 auto
  min-height: 100vh
  display: grid
  justify-content: center
  align-items: center
  text-align: left

.container
  margin: 0 auto
  display: grid
  justify-content: left
  align-items: left
  text-align: left

.short
  max-height: 100px

.nav-link
  padding: 10px 40px 10px 0
  font-family: $link-font, sans-serif
  color: $main-foreground-highlight
  &:hover
    color: $main-foreground-hover

h1, h2, h3, h4, h5, h6 
  font-family: $heading-font, sans-serif

h1 
  font-size: 2.6em
  margin: 1.8em 0

h2
  font-size: 2em
  margin: 1.6em 0

h3
  font-size: 1.6em
  margin: 1.4em 0

h4
  font-size: 1.4em
  margin: 1.2em 0

h5
  font-size: 1.2em
  margin: 1em 0

h6
  font-size: 1em
  margin: 1em 0

.feature
  font-family: $feature-font, sans-serif
  font-size: 1.4em
  margin: 1em
  padding: 1em

.code
  display: block
  font-family: $mono-font, monospace
  font-size: .8em
  margin: 3em
  padding: 1.2em
  background-color: $main-background-highlight

</style>
