<template lang="pug">
.search
  font-awesome-icon.search__icon(icon="fa-solid fa-magnifying-glass")
  input.search__input(type="text" v-model="text" @input="searchCountry(text)" placeholder="Search for a country...")
  p {{ text }}
select.search__select(name="select" @change="filter()")
  option(value="" disabled selected) Filter by Region
  option(value="Africa") Africa
  option(value="Americas") America
  option(value="Asia") Asia
  option(value="Europe") Europe
  option(value="Oceania") Oceania
</template>

<script>
export default {
  name: "AppFilter",
  props: ["filter", "searchCountry"],
  data() {
    return {
      text: ''
    }
  },
}
</script>

<style lang="scss" scoped></style>