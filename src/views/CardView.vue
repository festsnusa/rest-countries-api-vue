<template lang="pug">
.card-view
  .card-view Back
    img.card-view__flag(:src="current.flags.svg" :alt="current.name")
    h1.card-view__title {{ current.name }}
    p.card-view__native-name Native Name: {{ current.nativeName }}
    p.card-view__population Population: {{ current.population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") }}
    p.card-view__region Region: {{ current.region }}
    p.card-view__subregion Sub Region: {{ current.subregion }}
    p.card-view__capital Capital: {{ current.capital }}

    p.card-view__tld {{current.topLevelDomain}}
    p.card-view__currencies Currencies: {{ current.currencies[0].name }}
    p.card-view__languages Languages: {{ current.languages.map(a => a.name).join(', ') }}

    .border-countries
      p.border-countries__title Border Countries
      ul(v-for="value in current.borders" :key="value")
        li {{value}}

</template>

<script>
export default {
  name: "CardView",
  props: ["arr"],
  data() {
    return {
      current: null
    }
  },
  created() {
    this.current = this.arr[0]
  }
}
</script>

<style lang="scss" scoped></style>