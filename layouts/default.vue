<template>
  <main class="container">
    <Header></Header>
    <Nav></Nav>
    <nuxt />
    <Footer></Footer>
  </main>
</template>

    Header,
    Nav,
    Footer

<script>
import Header from '~/components/Header.vue'
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'

export default {
    components: {
        Header,
        Nav,
        Footer
    }
}
</script>