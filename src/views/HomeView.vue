<template lang="pug">
main.main(:class="`main_${mode}`")
  AppFilter(:filter="filter" :searchCountry="searchCountry")
  AppCard(:arr="arr")
</template>

<script>
import AppFilter from '@/components/AppFilter.vue'
import AppCard from '@/components/AppCard.vue'
import json from '@/data.json'

import { mapStores } from 'pinia';
import useModeStore from '@/stores/mode'

export default {
  name: "HomeView",
  components: {
    AppFilter,
    AppCard
  },
  computed: {
    ...mapStores(useModeStore)
  },
  data() {
    return {
      mode: '',
      arr: json,
    }
  },
  methods: {
    filter() {
      this.arr = json
      const region = document.querySelector('.search__select').value
      if (region == '') return
      this.arr = this.arr.filter(e => e.region === region)
    },
    searchCountry(value) {
      this.arr = json
      if (value.length == 0) return
      this.arr = this.arr.filter(e => e.name.toLowerCase().includes(value.toLowerCase()))
    }
  },
  created() {

    this.mode = this.modeStore.mode

    this.modeStore.$subscribe((mutation, state) => {
      this.mode = state.mode
    })

  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/vars';

.main {
  &_dark {
    background-color: $dark;
  }

  &_light {
    background-color: $lightGray;
  }
}
</style>