<template>
  <div class="input-add-postit">
    <v-btn color="rgb(245, 246, 252)" block style="text-transform: none;font-family: Quicksand;font-weight: bold;font-size: 1rem">
      <font-awesome-icon icon="fa-regular fa-pen-to-square" style="color: #163268;" />
      <span style="color: #163268;">&nbsp;&nbsp;&nbsp;&nbsp;Add my Post-it!</span>
    </v-btn>
  </div>
</template>

<script>
import '@/assets/fonts/fonts.css'
export default {
  name: "AddPostit",
}
</script>

<style scoped>
.input-add-postit {
  position: relative;
  display: flex;
  align-items: center;
}
</style>