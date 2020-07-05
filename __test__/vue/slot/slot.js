var App = {
  template: `
    <div class="container">
      <slot name="header"></slot>
      <slot name="footer"><h1>footer</h1></slot>
      <slot name="scoped" text="hello" :msg="msg"></slot>
    </div>
  `,
  data(){
    return{
      msg: "Vue"
    }
  }
}

new Vue({
  el: "#app",
  template: `<div>
    <app>
      <template v-slot:header>
        <h1>{{ title }}</h1>
      </template>
      <template v-slot:scoped="props">
        <p>Hello from parent</p>
        <p>{{ props.text + props.msg}}</p>
      </template>
    </app>
  </div>`,
  data() {
    return {
      title: "header"
    }
  },
  components: {
    App
  }
})