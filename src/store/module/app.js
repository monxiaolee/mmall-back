import { getMenuByRouter } from '@/utils/index'
import routers from '@/router/routers'

export default {
    state: {

    },
    getters: {
        menuList: (state, getters) => getMenuByRouter(routers)
    },
    mutations: {

    }
}