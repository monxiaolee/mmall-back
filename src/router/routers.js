import Main from '@/view/main/Main'

export default [
  // {
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: () => import('@/components/HelloWorld')
  // },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/view/home/Home')
  },
  {
    path: '/product',
    name: 'product',
    meta: {
      icon: '',
      title: '商品'
    },
    component: Main,
    children: [
      {
        path: 'productManage',
        name: '商品管理',
        meta: {
          icon: '',
          title: '商品管理'
        },
        component: () => import('@/view/product/Product')
      },
      {
        path: 'categoryManage',
        name: '品类管理',
        meta: {
          icon: '',
          title: '品类管理'
        },
        component: () => import('@/view/category/Category')
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    meta: {
      icon: '',
      title: '订单'
    },
    component: Main,
    children: [
      {
        path: 'orderManage',
        name: '订单管理',
        meta: {
          icon: '',
          title: '商品管理'
        },
        component: () => import('@/view/order/Order')
      }
    ]
  }
]
