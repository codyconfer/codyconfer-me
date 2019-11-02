<template>
  <main class="container">
    <Header></Header>
    <Nav></Nav>
    <section class="content" v-html="resume"></section>
    <Footer></Footer>
  </main>
</template>

<script>
import Header from '~/components/Header.vue'
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'
import LoremIpsum from '~/components/blog/LoremIpsum.md'
import Resume from '~/components/markdown-pages/Resume.md'

export default {
  components: {
    LoremIpsum,
    Resume,
    Header,
    Nav,
    Footer
  },
  computed: {
      loremIpsum() {
        return LoremIpsum;
      },
      resume() {
        return Resume;
      }
    }
}
</script>
