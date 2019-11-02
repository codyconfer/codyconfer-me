<template>
  <main class="container">
    <Header></Header>
    <Nav></Nav>
    <section class="content" v-html="loremIpsum"></section>
    <Footer></Footer>
  </main>
</template>

<script>
import Header from '~/components/Header.vue'
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'
import LoremIpsum from '~/blog/LoremIpsum.md'

export default {
  components: {
    LoremIpsum,
    Header,
    Nav,
    Footer
  },
  computed: {
      loremIpsum() {
        return LoremIpsum;
      }
    }
}
</script>
