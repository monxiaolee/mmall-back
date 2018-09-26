import { forEach } from './tools'
/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @returns {Array}
 */

export const hasChild = (item) => {
    return item.children && item.children.length !== 0
}

const showThisMenuEle = (item, access) => {
    if (item.meta && item.meta.access && item.meta.access.length) {
      if (hasOneOf(item.meta.access, access)) return true
      else return false
    } else return true
}

 export const getMenuByRouter = (list, access) => {
     let res = []
     forEach(list, item => {
       if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
         let obj = {
           icon: (item.meta && item.meta.icon) || '',
           name: item.name,
           meta: item.meta
         }
         if ((hasChild(item) || (item.meta && item.meta.showAlways)) && showThisMenuEle(item, access)) {
           obj.children = getMenuByRouter(item.children, access)
         }
         if (item.meta && item.meta.href) obj.href = item.meta.href
         if (showThisMenuEle(item, access)) res.push(obj)
       }
     })
     return res
 }