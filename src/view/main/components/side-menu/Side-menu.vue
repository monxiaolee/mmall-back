<template>
<div class="side-menu-wrapper">
    <slot></slot>
    <Menu v-show="!collapsed" :themd="theme" width="auto">
        <template v-for="item in menuList">
            <template v-if="item.children && item.children.length === 1">
                <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
                <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`"><span>{{ showTitle(item.children[0]) }}</span></menu-item>
                </template>
                <template v-else>
                <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
                <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`"><span>{{ showTitle(item) }}</span></menu-item>
            </template>
        </template>
    </Menu>
</div>
</template>
<script>
/* eslint-disable */
import SideMenuItem from './side-menu-item.vue'
import mixin from './Mixin'

export default {
    name: 'Side-menu',
    mixins: [ mixin ],
    data () {
        return {

        }
    },
    props: {
        menuList: {
            type: Array,
            default () {
                return []
            }
        },
        collapsed: {
            type: Boolean
        },
        theme: {
            type: String,
            default: 'dark'
        }
    },
    components: {
        SideMenuItem
    },
    methods: {

    }
}
</script>
<style lang="less">
@import './Side-menu.less';
</style>

