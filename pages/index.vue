<template>
  <main class="container">
    <section v-html="info"></section>
  </main>
</template>

<script>
import Info from '~/components/info.md'

export default {
  components: {
    Info,
  },
  computed: {
      info() {
        return Info;
      }
    }
}
</script>
