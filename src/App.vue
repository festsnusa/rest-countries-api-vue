<script>
import AppHeader from './components/AppHeader.vue'
export default {
  name: "App",
  components: {
    AppHeader,
  },
  data() {
    return {
      mode: 'dark',
    }
  },
}
</script>

<template lang="pug">
AppHeader(:mode="mode")
RouterView
</template>
