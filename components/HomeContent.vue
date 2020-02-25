<template lang="md">
::: .content
::: .heading
::: .info
<span class="icon"><i class="fa-resume fa fa-user-circle"></i></span><span>Software Engineer</span>
<span class="icon"><i class="fa-resume fa fa-map-marker"></i></span><span>Denver, Colorado</span>
:::

::: .contact
<a target="_blank" href="mailto:mail@codyconfer.me"><i class="fa-resume scale-down fa fa-envelope"></i><span>mail@codyconfer.me</span></a>
<span class="hide-mobile"><a target="_blank" href="https://codyconfer.me"><i class="fa-resume fa fa-globe"></i><span>codyconfer.me</span></a></span>
<a target="_blank" href="https://twitter.codyconfer.me"><i class="fa-resume fa fa-twitter"></i><span>twitter</span></a>
<a target="_blank" href="https://linkedin.codyconfer.me"><i class="fa-resume fa fa-linkedin"></i><span>linkedin</span></a>
<a target="_blank" href="https://github.codyconfer.me"><i class="fa-resume fa fa-github"></i><span>github</span></a>
:::
:::

::: .skills
::: .summary
Full stack solutions engineering with a focus on Microsoft Technologies: C#, .NET Core, Typescript, and Azure. Interested in Serverless and Distributed paradigms. 
:::
::: .skills-grid
<a target="_blank" href="https://docs.microsoft.com/en-us/dotnet/csharp/">![c sharp](/skills/csharp.png)</a>
<a target="_blank" href="https://docs.microsoft.com/en-us/dotnet/core/">![dot net](/skills/dotnet.png)</a>
<a target="_blank" href="https://visualstudio.microsoft.com/">![visual studio](/skills/visualstudio.png)</a>
<a target="_blank" href="https://azure.microsoft.com/en-us/services/devops/">![dev ops](/skills/devops.png)</a>
<a target="_blank" href="https://azure.microsoft.com/en-us/services/devops/pipelines/">![pipelines](/skills/pipelines.png)</a>
<a target="_blank" href="https://docs.microsoft.com/en-us/azure/">![azure](/skills/azure.png)</a>
<a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-functions/">![functions](/skills/functions.png)</a>
<a target="_blank" href="https://azure.microsoft.com/en-us/services/api-management/">![api management](/skills/apimanagement.png)</a>
<a target="_blank" href="https://docs.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr">![signalr](/skills/signalr.svg)</a>
<a target="_blank" href="https://www.typescriptlang.org/docs/home.html">![typescript](/skills/ts.png)</a>
<a target="_blank" href="https://vuejs.org/v2/guide/">![vue](/skills/vue.png)</a>
<a target="_blank" href="https://nuxtjs.org/guide">![nuxt](/skills/nuxt-square-white.svg)</a>
<a target="_blank" href="http://reactivex.io/intro.html">![reactive extensions](/skills/rx.png)</a>
<a target="_blank" href="https://angular.io/docs">![angular](/skills/angular.png)</a>
<a target="_blank" href="https://ionicframework.com/docs/intro">![ionic](/skills/ionic.png)</a>
<a target="_blank" href="https://redis.io/topics/introduction">![redis](/skills/redis.png)</a>
<a target="_blank" href="https://mqtt.org/">![mqtt](/skills/mqtt.png)</a>
<a target="_blank" href="https://aws.amazon.com/">![aws](/skills/aws.png)</a>
:::
:::
</template>

<script lang="ts">
export default {}
</script>

<style lang="sass">
.content
  display: grid
  @media #{$is-mobile}
    justify-content: center
    text-align: center

.heading
  border-bottom: $main-foreground-muted 1px solid
  p
    margin: 3em 0 3em 0

.contact p
  display: grid
  grid-template-columns: auto auto auto auto 1fr
  margin: 3em 0 3em 0
  .fa-resume
    margin-right: 5px
  @media #{$is-tablet}
    a
      margin-right: 25px
  @media #{$is-desktop}
    a
      margin-right: 35px
  @media #{$is-mobile}
    grid-template-columns: 1fr 1fr 1fr 1fr
    a .scale-down
      font-size: 1.5rem
    a .scale-up
      font-size: 2rem
    a
      height: 5vh
      margin: 0
      font-size: 1.75rem
      span
        display: none

.skills
  p  
    margin: 3em 0 3em 0
  .summary
    p
      margin: 3em 0 1em 0
    
.skills-grid
  p
    margin: 3vh 0 0 0
    @media #{$is-mobile}
      display: grid
      grid-template-columns: auto auto auto
    img
      height: 64px
      width: 64px
      margin: 32px
      @media #{$is-mobile}
        height: 64px
        width: 64px
        margin: 16px 0 16px 0

.experience-skills-grid
  p
    img
      height: 48px
      width: 48px
      margin: 8px
      @media #{$is-mobile}
        height: 32px
        width: 32px

.info
  p
    display: grid
    grid-template-columns: auto 1fr
    align-content: center
    height: 3em
    .icon
      display: grid
      align-content: center
      justify-content: center
    span 
      margin: 0
    .fa-resume
      margin-right: 8px
    @media #{$is-mobile}
      justify-content: center
      grid-template-columns: auto auto
      span
        text-align: left
</style>