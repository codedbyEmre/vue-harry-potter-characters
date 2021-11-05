<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  created(){
    this.$store.dispatch('getCharactersAction')
  }
}
</script>

<style lang="scss">

</style>
