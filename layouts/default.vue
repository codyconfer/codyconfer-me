<template>
  <section>
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
$light-cursor-color: rgba(28,37,50,0.8)

/* dark mode */
$dark-background-highlight: #283243
$dark-background: #1c2532
$dark-foreground: #fff
$dark-foreground-blue: #26c2c9
$dark-foreground-green: #96bf47
$dark-cursor-color: rgba(255,255,255,0.8)

/* colors */
$main-background: $dark-background
$main-foreground: $dark-foreground
$main-background-highlight: $dark-background-highlight
$main-foreground-highlight: $dark-foreground-blue
$main-foreground-active: $dark-foreground-green
$main-cursor-color: $dark-cursor-color

html, body
  font-family: $body-font, sans-serif
  font-size: 1em
  background: $main-background
  color: $main-foreground

.nav-link
  color: $main-foreground-highlight
  &:hover
    color: $main-foreground-active
  &.active
    color: $main-foreground-active

.site-header-highlight
  color: $main-foreground-highlight 

.site-heading-cursor
  color: $main-cursor-color

main
  margin: 0 auto
  min-height: 100vh
  display: grid
  grid-template-rows: 150px auto auto
  justify-content: center
  align-items: center
  text-align: left

.container
  margin: 0 auto
  display: grid
  justify-content: left
  align-items: left
  text-align: left

.hide
  display: none
  visibility: hidden

h1, h2, h3, h4, h5, h6 
  font-family: $heading-font, sans-serif

h1 
  font-size: 2.6em
  margin: 1.6em 0

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

blockquote
  font-family: $feature-font, sans-serif
  font-size: 1.4em
  margin: 1em
  padding: 1em

pre code
  display: block
  font-family: $mono-font, monospace
  font-size: .8em
  font-weight: 400
  margin: 3em
  padding: 1.2em
  background-color: $main-background-highlight
  color: $main-foreground

.hljs-keyword, .hljs-title
  font-weight: 400
</style>
