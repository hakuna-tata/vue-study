var AppLayout = {
  template: `
    <div class="container">
      <header><slot name="header"></slot></header>
      <main><slot>ÈªòËÆ§ÂÜÖÂÆπ</slot></main>
      <footer><slot name="footer"></slot></footer>
    </div>
  `
}

new Vue({
  el: '#app',
  template: `<div>
    <app-layout>
      <template v-slot:header>
        <h1>{{title}}</h1>
      </template>
      <p>{{msg}}</p>
      <p slot="footer">{{desc}}</p>
    </app-layout>
  </div>`,
  data() {
    return {
      title: "标题",
      msg: "内容",
      desc: "页脚"
    }
  },
  components: {
    AppLayout
  }
})