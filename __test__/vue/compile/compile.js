new Vue({
  el:"#app",
  template:`<div>
    <ul :class="bindCls" class="list" v-if="isShow">
      <li v-for="(item, index) in data" @click="clickItem(index)">{{ item }}:<{{ index }}</li>
    </ul>
    <p>123<div>456</div></p>
  </div>`,
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