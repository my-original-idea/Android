import foo from './src/foo.vue'
foo.el = '#root'
export default new Vue(foo);

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import foo from './src/foo.vue'
// // import router from './router'
//
// Vue.config.productionTip = false
//
// export default new Vue({
//   el: '#root',
//   // router,
//   // template: '<foo/>',
//   components: { foo }
// })
