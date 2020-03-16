Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { 
    path: '/foo', 
    component: Foo,
    children:[
      {
        path: 'bar',
        component: Bar
      }
    ]
 }
]

const router = new VueRouter({
  routes
})

var App = {
  template:`
      <div id="app">
        <h1>Hello App!</h1>
        <p>
          <router-link to="/foo">Go to Foo</router-link>
          <router-link to="/bar">Go to Bar</router-link>
        </p>
        <router-view></router-view>
      </div>
  `
}

new Vue({
  el: '#app',
  render(h) {
    return h(App)
  },
  router
})