import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import product from '@/view/product/Product'
import Main from '@/view/main/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/product',
      name: 'product',
      component: Main,
      children: [
        {
          path: 'index',
          name: '商品',
          meta: {
            icon: '',
            title: '商品'
          },
          component: () => import('@/view/product/Product')
        }
      ]
    }
  ]
})
