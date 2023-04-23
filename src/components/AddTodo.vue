<template>
  <div class="input-add-todo">
    <input type="text"/>
    <button>
      <i class="plus"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
}
</script>

<style scoped>
.input-add-todo {
  position: relative;
  display: flex;
  align-items: center;
}
.input-add-todo input {
  padding: 16px 52px 16px 18px;
  border-radius: 48px;
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
  font-family: Opensans,Smileysans,"PingFang SC", "Microsoft Yahei", sans-serif;
  font-weight: bold;
  color: #163268;
  background: rgb(245, 246, 252);
}
.input-add-todo button {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, #E0C3FC 0%,#8EC5FC 100%);
  border: none;
  color: white;
  position: absolute;
  right: 0px;
  cursor: pointer;
  outline: none;
}
.input-add-todo .plus {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>