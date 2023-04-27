<template lang="pug">
AppFilter(:filter="filter" :searchCountry="searchCountry")
AppCard(:arr="arr")
</template>

<script>
import AppFilter from '../components/AppFilter.vue'
import AppCard from '../components/AppCard.vue'
import json from '../data.json'

export default {
  name: "HomeView",
  components: {
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
      const region = document.querySelector('.search__select').value
      this.arr = this.arr.filter(e => e.region === region)
    },
    searchCountry(value) {
      this.arr = json
      if (value.length == 0) return
      this.arr = this.arr.filter(e => e.name.toLowerCase().includes(value.toLowerCase()))
      console.log(this.arr)
    }
  }
}
</script>

<style lang="scss" scoped></style>