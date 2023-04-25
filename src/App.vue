<script>
import AppHeader from './components/AppHeader.vue'
import AppFilter from './components/AppFilter.vue'
import AppCard from './components/AppCard.vue'
import json from './data.json'
export default {
  name: "App",
  components: {
    AppHeader,
    AppFilter,
    AppCard
  },
  data() {
    return {
      mode: 'dark',
      arr: json,
    }
  },
  methods: {
    filter() {
      this.arr = json
      console.log(this.arr.length)
      const region = document.querySelector('.search__select').value
      console.log(typeof region)
      this.arr = this.arr.filter(e => e.region === region)
      console.log(this.arr.length)
    }
  }
}
</script>

<template lang="pug">
AppHeader(:mode="mode")
AppFilter(:filter="filter")
AppCard(:arr="arr")
</template>
