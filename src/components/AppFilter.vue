<template lang="pug">
.search
  font-awesome-icon.search__icon(icon="fa-solid fa-magnifying-glass")
  input.search__input(:class="`search__input_${mode}`" type="text" v-model="text" @input="searchCountry(text)" placeholder="Search for a country...")
  select.search__select(:class="`search__select_${mode}`" name="select" @change="filter()")
    option(value="") Filter by Region
    option(value="Africa") Africa
    option(value="Americas") America
    option(value="Asia") Asia
    option(value="Europe") Europe
    option(value="Oceania") Oceania
</template>

<script>
import { mapStores } from 'pinia';
import useModeStore from '@/stores/mode'

export default {
  name: "AppFilter",
  props: ["filter", "searchCountry"],
  computed: {
    ...mapStores(useModeStore)
  },
  data() {
    return {
      text: '',
      mode: '',
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

.search {
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 1.5rem;

  &__input {
    width: 100%;
    padding: 1rem;

    &_dark {
      background-color: $darkBlue;
      color: $white;
    }

  }

  &__select {
    padding: 1rem 1.5rem;

    &_dark {
      background-color: $darkBlue;
      color: $white;
    }

  }
}
</style>