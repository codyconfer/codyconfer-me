<template>
  <section class="content" v-html="loremIpsum"></section>
</template>

import LoremIpsum from '~/components/blog/LoremIpsum.md'

export default {
    components: {
        LoremIpsum
    },
    computed: {
        loremIpsum() {
            return LoremIpsum
        }
    }
}
</script>

<style lang="sass">
.resume
  h1
    margin-top: 3rem
  h3
    margin-top: 3rem
  h6
    margin-top: 3rem
</style>