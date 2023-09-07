<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <LogoComp></LogoComp>
      <img src="@/assets/icons/list.svg" @click="changeFold"/>
    </div>
    <div class="tabbar_right">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import Setting from './setting/index.vue'
import LogoComp from '../LogoComp/index.vue'
import useLayoutSetStore from '@/store/modules/setting'

const layoutSetStore = useLayoutSetStore()
const changeFold = ()=>{
  layoutSetStore.changeFold()
}
</script>
<script lang="ts">
export default {
  name: 'TabbarComp',
}
</script>

<style lang="scss" scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .tabbar_left {
    display: flex;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
    }
  }

  .tabbar_right {
    display: flex;
    align-items: center;
  }
}
</style>
