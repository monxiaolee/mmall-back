<template>
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

    <Layout>
        <Header class="header-con">
            <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange">
                <!-- <user :user-avator="userAvator"/> -->
                <user></user>
                <!-- <fullscreen v-model="isFullscreen" style="margin-right: 10px;"/> -->
            </header-bar>
        </Header>
        <Content class="main-content-con">
            <Layout class="main-layout-con">
            <!-- <div class="tag-nav-wrapper">
                <tags-nav :value="$route" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag"/>
            </div> -->
            <Content class="content-wrapper">
                <!-- <keep-alive :include="cacheList">
                <router-view/>
                </keep-alive> -->
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </Content>
            </Layout>
        </Content>
    </Layout>

</Layout>
</template>
<script>
/* eslint-disable */
import SideMenu from './components/side-menu/Side-menu'
import User from './components/user/User'
import HeaderBar from './components/header-bar/Header-bar'
import './Main.less' // vue中import引入样式的时候不需要加from
export default {
  data () {
      return {
        collapsed: false
      }
  },
  components: {
      SideMenu,
      User,
      HeaderBar
  },
  computed: {
    menuList () {
      return this.$store.getters.menuList
    },
  },
  methods: {
      turnToPage () {
          // 跳转页面
      },
      handleCollapsedChange (state) {
          this.collapsed = state
      }
  }
}
</script>
<style lang="less" scoped>

</style>
