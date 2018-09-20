import Main from '@/view/main/Main'

export default [
//   {
//     path: '/',
//     name: 'HelloWorld',
//     component: () => import('@/components/HelloWorld')
//   },
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
