<template>
  <div>
    <el-menu-item ref="item" :index="item.menuId + ''" :key="item.menuId" v-if="item.children == null || item.children.length <= 0">
      <template slot="title">
        <i v-if="item.icon" :class="item.icon" style="margin-right: 5px; font-size: 18px;"></i>
        <span slot="title" >{{item.menuName}}</span>
      </template>
    </el-menu-item>
    <el-submenu v-else ref="subMenu" popper-append-to-body :index="item.menuId + ''" :key="item.menuId">
      <template slot="title">
        <i v-if="item.icon" :class="item.icon" style="margin-right: 5px; font-size: 18px;"></i>
        <item :title="item.menuName" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.menuId"
        :is-nest="true"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {}
  },
  methods: {
  }
}
</script>
