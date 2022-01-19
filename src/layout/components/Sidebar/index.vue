<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <!-- <el-scrollbar wrap-class="scrollbar-wrapper"> -->
      <el-menu
        :default-active="getCurrentMenuId"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="true"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        menu-trigger="hover"
        mode="horizontal"
        @select="selectMenu"
      >
        <sidebar-item v-for="menu in getMenuList" :key="menu.menuId" :item="menu" :base-path="menu.formRouterName || ''" />
      </el-menu>
    <!-- </el-scrollbar> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'sidebar',
      'getCurrentMenuId',
      'getMenuList'
    ]),
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    selectMenu (index, path) {
      if (this.getCurrentMenuId === index) return;
      this.$store.commit('user/SET_CURRENT_MENU_ID', index);
    },
  }
}
</script>
