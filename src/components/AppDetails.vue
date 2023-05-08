<template lang="pug">
.card-view(:class="`card-view_${mode}`")
  .card-view__back
    button.card-view__button(:class="`card-view__button_${mode}`" @click="$router.go(-1)")
      font-awesome-icon(:icon="['fas', 'arrow-left']") 
      | Back
  .card-view__main
    .card-view__left
      img.card-view__image(:src="current.flags.svg" :alt="current.name")
    .card-view__right
      h1.card-view__title {{ current.name }}
      .card-view__description
        .card-view__description_left
          p.card-view__native-name 
            span Native Name: 
            | {{ current.nativeName }}
          p.card-view__population
            span Population: 
            | {{ current.population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") }}
          p.card-view__region 
            span Region: 
            | {{ current.region }}
          p.card-view__subregion 
            span Sub Region: 
            | {{ current.subregion }}
          p.card-view__capital 
            span Capital: 
            | {{ current.capital }}
        .card-view__description_right
          p.card-view__tld
            span Top Level Domain: 
            | {{current.topLevelDomain[0]}}
          p.card-view__currencies
            span Currencies: 
            | {{ current.currencies[0].name }}
          p.card-view__languages 
            span Languages: 
            | {{ current.languages.map(a => a.name).join(', ') }}
      .border-countries(v-show="current.borders")
        p.border-countries__title 
          span Border Countries:
        ul.border-countries__list
          RouterLink(v-for="value in current.borders" 
          :to="{ name: 'card', params: {name: this.json.find(e => e.alpha3Code === value).name} }")
            li.border-countries__country(:class="`border-countries__country_${mode}`" :key="value" @click="windows.location.reload()") {{this.json.find(e => e.alpha3Code === value).name}}
</template>

<script>
import { mapStores } from 'pinia'
import useModeStore from '@/stores/mode'

export default {
  name: "AppDetails",
  props: ["arr", "json"],
  computed: {
    ...mapStores(useModeStore)
  },
  watch: {
    $route() {
      window.location.reload()
    }
  },
  data() {
    return {
      current: null,
      mode: '',
    }
  },
  created() {
    this.current = this.arr[0]

    this.mode = this.modeStore.mode

    this.modeStore.$subscribe((mutation, state) => {
      this.mode = state.mode
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/vars';

.card-view {

  padding: 2rem;

  span {
    font-weight: 700;
  }

  &_dark {
    background-color: $dark;
    color: $white;
  }

  &_light {
    background-color: $lightGray;
  }

  &__button {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background: transparent;

    &_dark {
      color: $white;
    }

    &_light {
      color: $dark;
    }
  }

  &__image {
    width: 100%;
  }

  &__main {
    display: flex;
    flex-direction: column;
  }

  &__description {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    flex-direction: column;
  }
}

.border-countries {

  &__list {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }

  &__country {
    cursor: pointer;
    padding: 1rem 2rem;
    box-shadow: 4px 8px 8px 0px rgba(34, 60, 80, 0.2);

    &_dark {
      background-color: $darkBlue;
      color: $white;

    }

    &_light {
      background-color: $white;
      color: $dark;
    }
  }
}

@media (min-width: 1000px) {
  .card-view {
    &__main {
      flex-direction: row;
      justify-content: space-between;
    }

    &__description {
      flex-direction: row;
    }
  }
}
</style>