<template>
  <div class="layout_container">
    <div class="layout_tabbar">
      <Tabbar></Tabbar>
    </div>
    <div class="layout_slider">
      <MenuComp></MenuComp>
      <!-- <el-scrollbar class="scrollbar">
        default-active的作用是菜单中某一项处于选中状态，页面刷新后，那一项会依旧被选中，而且展开，不会被重置
        <el-menu
          background-color="#525354"
          text-color="white"
          active-text-color="yellowgreen"
          unique-opened
          :default-active="$route.path"
          :collapse="layoutSetStore.isFold ? false : true"
        >
          根据路由动态生成菜单
          <MenuComp :menuList="userStore.menuRoutes"></MenuComp>
        </el-menu>
      </el-scrollbar> -->
    </div>
    <div
      class="layout_main"
      :class="{ fold: layoutSetStore.isFold ? false : true }"
    >
      <MainComp></MainComp>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuComp from './MenuComp/index.vue'
import Tabbar from './TabbarComp/index.vue'
import MainComp from './MainComp/index.vue'
import useLayoutSetStore from '@/store/modules/setting'

const layoutSetStore = useLayoutSetStore()
</script>
<script lang="ts">
export default {
  name: 'Layout',
}
</script>

<style scoped lang="scss">
.layout_container {
  position: relative;
  width: 100%;
  height: 100vh;
  .layout_slider {
    position: fixed;
    top: 50px;
    left: 0;
    // .scrollbar {
    //   width: 100%;
    //   height: calc(100vh - $base_menu_logo_height);

    //   .el-menu {
    //     border-right: none;
    //   }
    // }
  }

  .layout_tabbar {
    position: fixed;
    width: 100%;
    height: $base_tabbar_height;
    top: 0;
    left: 0;
    background: #fff;
  }

  .layout_main {
    width: 100%;
    height: 100vh;
    background: #f1f1f1;
  }
}
</style>
