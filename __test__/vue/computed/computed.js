new Vue({
  el: "#app",
  data(){
    return{
      firstName: 'Foo',
      lastName: 'Bar'
    }
  },
  template:`
   <div @click="changeData">{{ fullName }}</div>
  `,
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName + ' ' + this.test
    }
  },
  created(){
    this.test = "change1"
  },
  methods:{
    changeData(){
      this.test = "change2"
    }
  }
})