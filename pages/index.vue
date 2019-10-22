<template>
  <main class="container">
    <siteHeader></siteHeader>
    <siteNav></siteNav>
    <section class="content" v-html="info"></section>
  </main>
</template>

<script>
import SiteHeader from '~/components/siteHeader.vue'
import SiteNav from '~/components/siteNav.vue'
import Info from '~/components/info.md'

export default {
  components: {
    Info,
    SiteHeader,
    SiteNav
  },
  computed: {
      info() {
        return Info;
      }
    }
}
</script>
