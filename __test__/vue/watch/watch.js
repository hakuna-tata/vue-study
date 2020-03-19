new Vue({
  el: '#app',
  template:`
    <div @click="change">
      {{ this.firstName + this.lastName}} 
    </div>
  `,
  data(){
    return{
      firstName: 'Feng',
      lastName: 'Xue',
      useless: 0,
      nested:{
        a:{
          b:1
        }
      }
    }
  },
  computed:{
    name(){
      if(this.useless > 0){
        return this.firstName + this.lastName
      }
    }
  },
  methods:{
    change(){
      this.useless++
      this.lastName = "Li"
      this.nested.a.b = 2
    }
  },
  watch:{
    useless(newVal){
      console.log('useless:', newVal)
    },
    name:{
      immediate: true,
      handler(newVal){
        console.log('name:', newVal)
      }
    },
    nested:{
      deep: true, // false
      // sync: true, 
      handler(newVal){
        console.log('nested:', newVal.a.b)
      }
    }
  }
})