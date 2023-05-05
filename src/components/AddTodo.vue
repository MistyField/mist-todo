<template>
  <div>
    <div class="input-add-todo">
      <date-picker v-model="date" mode="dateTime" :min-date="new Date()" :attributes='attrs' color="indigo" style="box-shadow: 4px 4px 7px #d9d9d9, -4px -4px 7px rgb(245, 246, 252);border: none" is24hr>
      </date-picker>
      <input type="text" v-model="todoContent"/>
      <button @click.stop="addTodo">
        <font-awesome-icon class="plus" icon="fa-solid fa-plus" />
      </button>
    </div>
  </div>
</template>

<script>
import {EventBus} from "@/utils/EventBus";
import path from "path";
import fs from "fs";

export default {
  name: "AddTodo",
  data() {
    return {
      date: new Date(),
      attrs: [
        {
          key: 'today',
          dot: true,
          dates: new Date(),
        },
      ],
      todoContent:'',
    }
  },
  methods:{
    addTodo() {
      EventBus.$emit('toggle-alert', false,'');
      EventBus.$emit('toggle-success', false,'');
      const curTime = new Date();
      const curTimestamp = curTime.getTime()
      if (this.todoContent === ''){
        EventBus.$emit('toggle-alert', true,'empty-content');
      }
      else if (this.date.getTime()<curTimestamp){
        EventBus.$emit('toggle-alert', true,'err-deadline');
      }
      else{
        const jsonFilePath = path.resolve(__dirname, '../app/data/todos/data.json');
        const data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
        let curId = 0;
        let maxId = -1;
        for (var key in data){
            let id = data[key].id;
            if (id > maxId) {
              maxId = id;
          }
        }
        curId = maxId + 1;
        data.push({id: curId, status: 'unfinished', content: this.todoContent, deadline: this.date.getTime()});
        fs.writeFileSync(jsonFilePath, JSON.stringify(data));
        EventBus.$emit('toggle-success', true,this.todoContent);
        this.todoContent = ''
        this.date = new Date()
      }
    },
  },
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
  transition: 300ms ease-in-out;
  box-shadow: 3px 3px 5px #d9d9d9, -3px -3px 5px rgb(245, 246, 252);
}
.input-add-todo input:focus{
  box-shadow: 0px 6px 2px -4px rgba(0, 0, 0, 0.2), 0px 4px 4px 0px rgba(0, 0, 0, 0.14), 0px 2px 10px 0px rgba(0, 0, 0, 0.12);
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
  transform: scale(1);
  box-shadow: 3px 3px 5px #d9d9d9, -3px -3px 5px rgb(245, 246, 252);
  transition: all ease-in-out .3s;
}
.input-add-todo button:active {
  background: linear-gradient(135deg, #E0C3FC 0%,#8EC5FC 100%);
  box-shadow: inset 3px 3px 5px #d9d9d9, inset -3px -3px 5px rgb(245, 246, 252);
  transition: all ease-in-out .3s;
  transform: scale(.95);
}
.input-add-todo .plus {
  display: block;
  width: 100%;
  height: 60%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
  transition: all ease-in-out .3s;
}
.input-add-todo button:active .plus {
  transform: scale(.9);
  transition: all ease-in-out .3s;
}
</style>