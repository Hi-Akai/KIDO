<template>
  <div class="main-box">
    <ul class="main-container">
      <li v-for="(item, index) in mainList" :key="index">
        <!-- 父类标题 -->
        <span>{{ item.name }}</span>
        <!-- 有子类 -->
        <div v-if="item.children && item.children.length > 0">
          <div v-for="(child, idx) in item.children" :key="idx">
            <!-- 子类标题 -->
            <div>{{ child.childName }}</div>
          </div>
          <!-- 网站列表 -->
          <div class="web-list">
            <!-- 单个网站项 -->
            <div class="web-item" v-for="(web, i) in webList" :key="i">
              <img width="20" height="20" :src=getIcon(web.logo) alt="" />
              <span>{{ web.webName }}</span>
            </div>
          </div>
        </div>
        <!-- 没有子类 -->
        <div v-else></div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
/**
 * 父类名称 name
 * 子类名称 childName
 * 子类中网站列表 webList(logo,webName,link,views,likes)
 */
let mainList = ref([
  {
    name: "灵感搜集",
    children: [
      {
        childName: "艺术",
        webList: [
          {
            logo: "../../assets/logo/OneMore.png",
            webName: "小红书",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
          {
            logo: "../../assets/logo/OneMore.png",
            webName: "小红书",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
          {
            logo: "../../assets/logo/OneMore.png",
            webName: "小红书",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
        ],
      },
      {
        childName: "设计",
        webList: [
          {
            logo: "../../assets/logo/OneMore.png",
            webName: "知乎",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
        ],
      },
    ],
  },
  {
    name: "灵感搜集",
    children: [
      {
        childName: "艺术",
        webList: [
          {
            logo: "../../assets/logo/OneMore.png",
            webName: "小红书",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
        ],
      },
    ],
  },
  {
    name: "灵感搜集",
    children: [
      {
        childName: "艺术",
        webList: [
          {
            logo: "../../assets/logo/OneMore.png",
            webName: "小红书",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
        ],
      },
    ],
  },
]);
const getIcon = (url: string)=> {
    return new URL(url, import.meta.url).href;
}
</script>
<script lang="ts">
export default {
  name: "MainComp",
};
</script>

<style lang="scss" scoped>
.main-box {
  padding-top: $base_tabbar_height + 20px;
  padding-left: calc($base_menu_width + 60px);
  width: 100%;
  height: 100vh;
  .main-container {
    .web-list {
      display: flex;
      .web-item {
        width: 200px;
        height: 74px;
        background-color: pink;
      }
    }
  }
}
</style>
