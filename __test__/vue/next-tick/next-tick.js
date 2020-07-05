new Vue({
  el: "#app",
  template:`
    <div id="app">
      <div ref="msg">{{ msg }}</div>
      <button @click="change">change</button>
    </div>
  `,
  data(){
    return{
      msg: 'hello parent'
    }
  },
  methods:{
    change(){
      this.$nextTick(() => {
        setTimeout(() => {
          console.log('nextTick setTimeout:', this.$refs.msg.innerText)
        }, 0)
      })
      this.$nextTick(() => {
          console.log('nextTick:', this.$refs.msg.innerText)
      })
      this.msg = 'hello vue'
      console.log('sync:', this.$refs.msg.innerText)
      this.$nextTick().then(() => {
        console.log('nextTick with promise:', this.$refs.msg.innerText)
      })
    }
  }
})

