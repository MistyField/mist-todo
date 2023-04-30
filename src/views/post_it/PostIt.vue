<template>
  <v-app>
    <v-main>
  <div class="container">
    <div class="doc">
      <!-- 工具栏 -->
      <Toolbar
          style="border-bottom: 1px solid #ccc;width: 100vw;"
          :editor="editor"
          :defaultConfig="toolbarConfig"
      />
      <!-- 编辑器 -->
      <div class="editor-container" style="width: 60%;" >
      <div class="title-container"><input placeholder="Title..." style="background-color: white;width: 100%;"></div>
      <Editor
          style="height: 600px; overflow-y: hidden;width: 100%"
          :defaultConfig="editorConfig"
          v-model="html"
          @onChange="onChange"
          @onCreated="onCreated"
      />
      </div>
    </div>
    <v-btn class="submit" color="rgb(245, 246, 252)" style="text-transform: none;font-family: Quicksand;font-weight: bold;font-size: 1rem"><font-awesome-icon icon="fa-solid fa-upload" style="color:#163268;"/><span>Submit</span></v-btn>
  </div>
    </v-main>
    <PageFooter></PageFooter>
  </v-app>
</template>

<script>
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import PageFooter from "@/components/PageFooter.vue";
import { Boot } from '@wangeditor/editor'
import formulaModule from '@wangeditor/plugin-formula'
import markdownModule from '@wangeditor/plugin-md'
import '@/assets/fonts/fonts.css'
Boot.registerModule(formulaModule)
Boot.registerModule(markdownModule)
export default {
  name: "PostIt",
  components: {PageFooter, Editor, Toolbar },
  data() {
    return {
      editor: null,
      html: "",
      toolbarConfig: {
        // toolbarKeys: [ /* 显示哪些菜单，如何排序、分组 */ ],
        // excludeKeys: [ /* 隐藏哪些菜单 */ ],
        insertKeys: {
          index: 0,
          keys: [
            'insertFormula', // “插入公式”菜单
            // 'editFormula' // “编辑公式”菜单
          ],
        },
      },
      editorConfig: {
        placeholder: "Please type in your post-it!",
        // autoFocus: false,
        hoverbarKeys: {
          formula: {
            menuKeys: ['editFormula'], // “编辑公式”菜单
          },
        },
        // 所有的菜单配置，都要在 MENU_CONF 属性下
        MENU_CONF: {},
      },
    };
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor); // 【注意】一定要用 Object.seal() 否则会报错
    },
    onChange(editor) {
      console.log("onChange", editor.getHtml()); // onChange 时获取编辑器最新内容
    },
    getEditorText() {
      const editor = this.editor;
      if (editor == null) return;

      console.log(editor.getText()); // 执行 editor API
    },
    printEditorHtml() {
      const editor = this.editor;
      if (editor == null) return;

      console.log(editor.getHtml()); // 执行 editor API
    },
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁 editor ，重要！！！
  },
};
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
<style scoped>
v-app {
  min-height: 100vh;
}
.container{
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background:linear-gradient(0deg,#fff 3%,hsla(0,0%,80%,0)),linear-gradient(0deg, #E0C3FC 0%,#8EC5FC 100%);
  animation: rotate-gradient 15s ease-in-out infinite;
  font-family: Quicksand,Smileysans,"PingFang SC", "Microsoft Yahei", sans-serif;
}
@keyframes rotate-gradient {
  0% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(0deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  5% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(18deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  10% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(36deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  15% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(54deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  20% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(72deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  25% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(90deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  30% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(108deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  35% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(126deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  40% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(144deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  45% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(162deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  50% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(180deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  55% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(198deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  60% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(216deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  65% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(234deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  70% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(252deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  75% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(270deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  80% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(288deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  85% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(306deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  90% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(324deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  95% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(342deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  100% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(360deg, #E0C3FC 0%,#8EC5FC 100%);
  }
}
.submit{
  transform: scale(1);
  box-shadow: 4px 4px 7px #d9d9d9, -4px -4px 7px rgb(245, 246, 252);
  transition: all ease-in-out .3s;
}
.submit:active{
  box-shadow: inset 4px 4px 7px #d9d9d9, inset -4px -4px 7px rgb(245, 246, 252);
  transition: all ease-in-out .3s;
  transform: scale(.95);
 }
.doc{
  display:flex;
  flex-direction: column;
  align-items: center;
}
input{
  font-family: Quicksand,Smileysans,"PingFang SC", "Microsoft Yahei", sans-serif;
  font-size: 2rem;
  font-weight:bold;
  border:0;
  outline: none;
  line-height:1;
}
.editor-container{
  background-color: white;
  margin:20px auto 10px auto;
  padding: 20px 50px 50px 50px;
  box-shadow: 10px 10px 20px #d9d9d9, -10px -10px 20px rgb(245, 246, 252);
  border-radius: 5px;
}
.title-container{
  padding:20px 0;
  border-bottom:1px solid #e8e8e8
}
</style>