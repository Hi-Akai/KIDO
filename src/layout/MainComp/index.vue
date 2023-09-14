<template>
  <div class="main-box" :class="layoutSetStore.isFold ? 'fold' : ''">
    <ul class="main-container">
      <li v-for="(item, index) in mainList" :key="index">
        <!-- 父类标题 -->
        <div class="father-name">{{ item.name }}</div>
        <!-- 有子类 -->
        <div v-if="item.children && item.children.length > 0">
          <ul class="name-list">
            <li
              v-for="(child, idx) in item.children"
              :key="idx"
            >
              <!-- 子类标题 -->
              <div @click="item.active = idx">{{ child.childName }}</div>
            </li>
          </ul>
          <!-- 子类网站 -->
          <ul class="web-list" v-for="(child, idx) in item.children" :key="idx">
            <li
              class="web-item"
              v-show="item.active == idx ? 'active' : ''"
              v-for="(web, i) in child.webList"
              :key="i"
              @click="desOpen"
            >
              <img width="20" height="20" :src="getIcon(web.logo)" alt="" />
              <div class="web-content">
                <span class="web-name">{{ web.webName }}</span>
                <div class="web-des">
                  <el-icon><View /></el-icon>
                  <span>{{ web.views }}</span>
                  <el-icon><Star /></el-icon>
                  <span>{{ web.likes }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 没有子类 -->
        <div v-else>
          <!-- 父类网站 -->
          <ul class="web-list">
            <li class="web-item" v-for="(web, i) in item.webList" :key="i" @click="desOpen">
              <img width="20" height="20" :src="getIcon(web.logo)" alt="" />
              <span>{{ web.webName }}</span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <!-- 详情抽屉 -->
    <el-drawer
      v-model="drawer"
      title="网站详情"
      direction="btt"
      size="400"
    >
      <div class="des-box">
        <!-- 网站图片 -->
        <div class="des-img"></div>
        <div class="des-content">
          <div class="des-title">
            <!-- 网站名称 -->
            <span class="title">小红书</span>
            <!-- 网站标签 -->
            <ul class="tags-list">
              <li>
                <div class="tag-color red"></div>
                <span>日常</span>
              </li>
              <li>
                <div class="tag-color blue"></div>
                <span>资讯</span>
              </li>
              <li>
                <div class="tag-color green"></div>
                <span>设计</span>
              </li>
            </ul>
          </div>
          <!-- 网站简介 -->
          <div class="des-intro">
            <div class="intro-title">
              <span>简介</span>
              <div class="intro-line"></div>
            </div>
            <p class="intro-content">起点课堂（原起点学院）是人人都是产品经理旗下职业教育品牌。面向企业和个人，提供数字化的产品、运营和营销人才培养方案。讲师以BAT一线互联网公司资深人士为主，平均工作经验10年以上，根据大厂用人标准和能力模型打造课程内容，为中国的全面数字化转型赋能。</p>
          </div>
          <div class="btn">
            <el-select v-model="sortType" class="m-2" placeholder="Select">
              <el-option
                v-for="item in sortList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-button class="star-btn" icon="Star" round>收藏</el-button>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useLayoutSetStore from "@/store/modules/setting";
const layoutSetStore = useLayoutSetStore();
const drawer = ref(false);
/**
 * 父类名称 name
 * 子类名称 childName
 * 子类中网站列表 webList(logo,webName,link,views,likes)
 */
let mainList = ref([
  {
    name: "灵感搜集",
    active: 0, //当前选中的子类
    children: [
      {
        childName: "艺术",
        webList: [
          {
            logo: "../../assets/images/xiaohongshu.png",
            webName: "小红书",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
          {
            logo: "../../assets/images/xiaohongshu.png",
            webName: "小红书",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
          {
            logo: "../../assets/images/xiaohongshu.png",
            webName: "小红书",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
          {
            logo: "../../assets/images/xiaohongshu.png",
            webName: "小红书",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
        ],
      },
      {
        childName: "设计",
        active: 0,
        webList: [
          {
            logo: "../../assets/images/xiaohongshu.png",
            webName: "小红书",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
          {
            logo: "../../assets/images/xiaohongshu.png",
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
    name: "常用工具",
    active: 0,
    children: [
      {
        childName: "44",
        webList: [
          {
            logo: "../../assets/images/xiaohongshu.png",
            webName: "小红书",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
          {
            logo: "../../assets/images/xiaohongshu.png",
            webName: "小红书",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
          {
            logo: "../../assets/images/xiaohongshu.png",
            webName: "小红书",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
          {
            logo: "../../assets/images/xiaohongshu.png",
            webName: "小红书",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
          {
            logo: "../../assets/images/xiaohongshu.png",
            webName: "小红书",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
          {
            logo: "../../assets/images/xiaohongshu.png",
            webName: "小红书",
            link: "https://www.xiaohongshu.com",
            views: 12,
            likes: 25,
          },
          {
            logo: "../../assets/images/xiaohongshu.png",
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
    name: "行业资讯",
    active: 0,
    webList: [
      {
        logo: "../../assets/images/xiaohongshu.png",
        webName: "555",
        link: "https://www.xiaohongshu.com",
        views: 12,
        likes: 25,
      },
      {
        logo: "../../assets/images/xiaohongshu.png",
        webName: "111",
        link: "https://www.xiaohongshu.com",
        views: 12,
        likes: 25,
      },
    ],
  },
]);
const getIcon = (url: string) => {
  return new URL(url, import.meta.url).href;
};
const desOpen = () => {
  drawer.value = true;
};
const sortType = ref(0)
const sortList = ref([
  {label:'推荐分类',value:0},
  {label:'我的分类',value:1},
])
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
  transition: all 0.6s;
  &.fold {
    padding-left: calc($base_menu_min_width + 60px);
  }
  .main-container {
    .father-name {
      font-size: 20px;
      font-weight: 600;
      padding-bottom: 12px;
    }
    .name-list {
      display: flex;
      color: green;
      padding-bottom: 12px;
    }
    .web-list {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 12px;
      .web-item {
        display: flex;
        align-content: center;
        align-items: center;
        padding: 0 0 0 20px;
        margin: 0 18px 20px 0;
        width: 200px;
        height: 74px;
        background-color: #fff;
        border-radius: 8px;
        img {
          width: 44px;
          height: 44px;
          margin-right: 20px;
        }
        .web-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          .web-name {
            font-size: 18px;
            font-weight: 500;
          }
          .web-des {
            display: flex;
            padding-top: 5px;
          }
        }
      }
    }
  }
  .des-box {
    display: flex;
    width: 100%;
    height: 100%;
    .des-img {
      width: 500px;
      height: 280px;
      overflow: hidden;
      background: url(../../assets/images/des-img.png) 0 0/cover;
      box-shadow: 0px 0px 5px 5px #ccc;
    }
    .des-content {
      display: flex;
      flex-direction: column;
      width: calc(100% - 500px);
      height: 280px;
      padding: 20px 20px 20px 30px;
      .des-title {
        display: flex;
        padding-bottom: 20px;
        .title {
          font-size: 24px;
          font-weight: 600;
          margin-right: 30px;
        }
        .tags-list {
          display: flex;
          align-items: center;
          li {
            display: flex;
            margin-right: 20px;
            line-height: 20px;
          }
          .tag-color {
            width: 20px;
            height: 20px;
            border-radius: 10px;
            margin-right: 6px;
            &.red {
              background-color: red;
            }
            &.blue {
              background-color: blue;
            }
            &.green {
              background-color: green;
            }
          }
        }
      }
      .des-intro {
        display: flex;
        flex-direction: column;
        padding-bottom: 76px;
        .intro-title {
          font-size: 14px;
          color: $base-color;
          padding-bottom: 10px;
          position: relative;
          .intro-line {
            position: absolute;
            top: 50%;
            left: 42px;
            width: calc(100% - 43px);
            height: 2px;
            background-color: $base-color;
          }
        }
      }
      .btn {
        float: right;
        .m-2 {
          width: 100px;
          margin-right: 30px;
        }
      }
    }
  }
}
</style>
