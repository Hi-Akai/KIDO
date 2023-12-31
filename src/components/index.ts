import SvgIcon from './SvgIcon/index.vue'
import type { App, Component } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const components: { [name: string]: Component } = { SvgIcon }

//对外暴露插件对象
export default {
  //务必叫做install方法
  install(app: App) {
    //注册项目全部的全局组件
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
    //将图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
