const CompA = {
  template: `
   <div>
    <p>Name:{{ name }}</p>
    <p>NickName:{{ nickName }}</p>
   </div>
  `,
  props:['name', 'nick-name']
}

const CompB = {
  template:`
    <div>
      <p>Age: {{ age }}</p>
      <p>Sex: {{ sex }}</p>
    </div>
  `,
  props:{
    age: Number,
    sex:{
      type: String,
      default: 'female',
      validator(value){
        return value === 'male' || value === 'female'
      }
    },
    hobby:{
      type: Object,
      default(){
        return{
          ball: "basketball"
        }
      }
    }
  }
}

new Vue({
  el: "#app",
  components: {CompA,CompB},
  template:`
    <div>
      <comp-a name="Jackson" nick-name="Jack"></comp-a>
      <comp-b :age="18" sex="male"></comp-b>
    </div>
  `
})