<template>
  <main class="container">
    <siteHeader></siteHeader>
    <siteNav></siteNav>
    <section class="content" v-html="loremIpsum"></section>
  </main>
</template>

<script>
import SiteHeader from '~/components/siteHeader.vue'
import SiteNav from '~/components/siteNav.vue'
import LoremIpsum from '~/blog/loremIpsum.md'

export default {
  components: {
    LoremIpsum,
    SiteHeader,
    SiteNav
  },
  computed: {
      loremIpsum() {
        return LoremIpsum;
      }
    }
}
</script>
