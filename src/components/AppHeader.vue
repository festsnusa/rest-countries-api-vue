<template lang="pug">
header.header(:class="`header_${mode}`")
  RouterLink.header__left(:to="{ name: 'home'}") Where is the world?
  .header__right(@click="toggle")
    font-awesome-icon(icon="fa-regular fa-moon")
    span.header__mode {{mode.charAt(0).toUpperCase() + mode.slice(1)}} Mode
</template>

<script>
import { mapStores } from 'pinia';
import useModeStore from '@/stores/mode'

export default {
  name: "AppHeader",
  computed: {
    ...mapStores(useModeStore)
  },
  data() {
    return {
      mode: '',
    }
  },
  methods: {
    toggle() {
      this.modeStore.mode = this.modeStore.mode == 'dark' ? 'light' : 'dark'
      console.log(this.modeStore.mode)
    },
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;

  &_dark {
    background-color: $darkBlue;
  }

  &_light,
  &_light a {
    background-color: $lightGray;
    color: $verydarkBlue;
  }

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