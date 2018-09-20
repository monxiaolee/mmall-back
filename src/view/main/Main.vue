<template>
<div>
    <Layout style="height: 100%" class="main">
        <Sider hide-trigger collapsible :width="256" :collapsed-width="64" v-model="collapsed" class="left-sider" :style="{overflow: 'hidden'}">
            <side-menu accordion ref="sideMenu" :active-name="$route.name" :collapsed="collapsed" @on-select="turnToPage" :menu-list="menuList">
                <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
                <div class="logo-con">
                    <h1>logo区域</h1>
                <!-- <img v-show="!collapsed" :src="maxLogo" key="max-logo" />
                <img v-show="collapsed" :src="minLogo" key="min-logo" /> -->
                </div>
            </side-menu>
        </Sider>
    </Layout>
    <router-view/>
</div>
</template>
<script>
/* eslint-disable */
import SideMenu from './components/side-menu/Side-menu'
export default {
  data () {
      return {
        collapsed: false
      }
  },
  components: {
      SideMenu
  },
  computed: {
    menuList () {
      return this.$store.getters.menuList
    },
  },
  methods: {
      turnToPage () {
          // 跳转页面
      }
  }
}
</script>
<style lang="less" scoped>

</style>
