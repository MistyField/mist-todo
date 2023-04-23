<template>
  <date-picker v-model="date" mode="dateTime" />
</template>

<script>

export default {
  name: "DatePicker",
  data() {
    return {
      date: new Date(),
      timezone: '',
    }
  }
}
</script>

<style scoped>

</style>