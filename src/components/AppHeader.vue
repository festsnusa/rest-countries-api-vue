<template lang="pug">
header.header
  RouterLink.header__left(:to="{ name: 'home'}") Where is the world?
  .header__right
    font-awesome-icon(icon="fa-regular fa-moon")
    span.header__mode {{mode.charAt(0).toUpperCase() + mode.slice(1)}} Mode
</template>

<script>
export default {
  name: "AppHeader",
  props: ["mode"]
}
</script>

<style lang="scss" scoped>
@import '../assets/vars.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  background-color: $darkBlue;

  color: $lightGray;

  &__left {
    font-weight: 800;
    color: $white;
  }

  &__right {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 600;
  }
}
</style>