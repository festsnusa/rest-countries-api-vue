<template lang="pug">
.cards
  RouterLink.card(:class="`card_${mode}`" v-for="value in arr"
    :to="{ name: 'card', params: {name: value.name} }" )
    img.card__img(:src="value.flags.svg" alt="flag")
    .card__footer
      .card__title {{value.name}}
      p.card__population
        span Population: 
        | {{ value.population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") }}
      p.card__region
        span Region: 
        | {{ value.region }} 
      p.card__capital
        span Capital: 
        | {{ value.capital }}
</template>

<script>
import { mapStores } from 'pinia';
import useModeStore from '@/stores/mode'

export default {
  name: "AppCard",
  props: ["arr"],
  computed: {
    ...mapStores(useModeStore)
  },
  data() {
    return {
      mode: '',
    }
  },
  created() {

    this.mode = this.modeStore.mode

    this.modeStore.$subscribe((mutation, state) => {
      this.mode = state.mode
      console.log(this.mode)
    })

  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/vars';

.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
  padding: 2rem;
}

.card {
  width: 400px;
  border-radius: 1rem;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  &_dark {
    color: $white;
    background-color: $darkBlue;
  }

  &_light {}

  &__img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    overflow: hidden;
  }

  &__title {
    font-weight: 700;
    font-size: 1.3rem;
  }

  &__footer {
    padding: 2rem;

    span {
      font-weight: 700;
    }
  }
}
</style>