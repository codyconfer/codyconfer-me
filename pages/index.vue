<template>
  <main class="container">
    <section v-html="info"></section>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Info from '~/components/info.md'

export default {
  components: {
    Logo,
    Info,
  },
  computed: {
      info() {
        return Info;
      }
    }
}
</script>
