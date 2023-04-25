<template lang="pug">
.cards
  .card(v-for="value in arr")
    img.card__img(:src="value.flags.svg" alt="flag")
    .card.card__title {{value.name}}
    .card__footer 
      p.card__population Population: {{ value.population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") }}
      p.card__region Region: {{ value.region }} 
      p.card__capital Capital: {{ value.capital }}
</template>

<script>
export default {
  name: "AppCard",
  props: ["arr"]
}
</script>

<style lang="scss" scoped>
.cards {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
}

.card {
  width: 200px;

  &__img {
    width: 100%;
    height: 120px;
  }
}
</style>