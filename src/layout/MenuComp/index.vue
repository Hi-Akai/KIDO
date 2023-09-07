<template>
  <div class="menu-box" :class="layoutSetStore.isFold ?'fold':''">
    <el-select v-model="sortType" class="m-2" placeholder="Select">
      <el-option
        v-for="item in sortList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <div class="menu-container" :class="layoutSetStore.isFold ?'fold':''">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        :collapse="layoutSetStore.isFold ? true : false"
        background-color="#D7D7D7"
      >
        <el-menu-item v-for="(item,index) in menuList" :key="index" :index="index">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <template #title>{{ item.title }}</template>
        </el-menu-item>
      </el-menu>
      <div class="button-box">
        <el-button class="button" color="#D7D7D7" round>
          <el-icon><Plus /></el-icon>
        </el-button>
        <el-button class="button" color="#D7D7D7" round>
          <el-icon><Edit /></el-icon>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useLayoutSetStore from '@/store/modules/setting'

const sortType = ref(0)
const sortList = ref([
  {label:'推荐分类',value:0},
  {label:'我的分类',value:1},
])
const layoutSetStore = useLayoutSetStore()
const menuList = ref([
  {title:'灵感采集',icon:'document'},
  {title:'设计资源',icon:'setting'},
  {title:'行业视野',icon:'document'},
  {title:'灵感采集',icon:'document'},
  {title:'设计资源',icon:'setting'},
  {title:'行业视野',icon:'document'},
])
</script>

<script lang="ts">
export default {
  //为了使递归组件生效,并且在浏览器vue插件中展示这个名称，否则会展示为<index>
  name: 'MenuComp',
}
</script>

<style scoped lang="scss">
.menu-box {
  color: $base_font_color;
  height: calc(100vh - $base_tabbar_height);
  margin-left: 30px;
  width: $base_menu_width;
  transition: all 0.6s;
  &.fold {
    width: $base_menu_min_width;
  }
  .m-2 {
    padding: 20px 0;
  }
  .menu-container {
    display: flex;
    width: $base_menu_width;
    flex-direction: column;
    justify-content: space-between;
    height: $base_menu_height;
    background-color: $base_menu_background;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.6s;
    &.fold {
      width: $base_menu_min_width;
    }
    .el-menu {
      border: 0;
    }
    .button-box {
      padding: 10px;
      .button {
        width: 100%;
        border: 1px solid #4e4e4e;
        margin: 10px 0 0 0;
      }
    }
  }
}
</style>
