<template>
  <Header />
  <Characters />
</template>

<script>
import Characters from '../components/Characters.vue'
import Header from '../components/Header.vue'

export default {
  name: 'Home',
  components: {Header, Characters}
}
</script>
