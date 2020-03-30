new Vue({
  el:"#app",
  template:`<ul :class="bindCls" class="list" v-if="isShow">
    <li v-for="(item, index) in data" @click="clickItem(index)">{{ item }}:<{{ index }}</li>
    <p>123<div>456</div></p>
  </ul>`,
  data(){
    return{
      bindCls: 'a',
      isShow: true,
      data: ['A','B','C','D']
    }
  },
  methods: {
    clickItem(index){
      console.log(index)
    }
  },
})