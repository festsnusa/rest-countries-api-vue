<template lang="pug">
.search
  font-awesome-icon(icon="fa-solid fa-magnifying-glass")
  input(type="text" v-model="input" placeholder="Search for a country...")
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
  props: ["filter"],
}
</script>

<style lang="scss" scoped></style>