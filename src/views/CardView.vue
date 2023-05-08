<template lang="pug">
AppDetails(:arr="arr" :json="json")
</template>

<script>
import AppDetails from '@/components/AppDetails.vue'

export default {
  name: "CardView",
  props: ["arr", "json"],
  components: {
    AppDetails
  },
}
</script>

<style lang="scss" scoped></style>