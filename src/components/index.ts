// 注册components文件夹内部全部全局组件

import type { App, Component } from 'vue' // 导入需要使用的 vue 的类型
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'

// 全局组件注册
const globalComponents: { [name: string]: Component } = { SvgIcon, Pagination } // TODO 这个需要理解一下

export default {
  // 批量注册全局组件: install函数名: Vue插件的约定，Vue会在安装插件时自动调用该方法
  install(app: App) {
    Object.keys(globalComponents).forEach((item: string) => {
      app.component(item, globalComponents[item])
    })
  },
}

/**
 * 此处相当于是 自己写的插件, install 是Vue插件的约定规范
 * 在全局文件 mian.js 导入中也是 以插件的方式 使用该文件的
 *  app.use('***')
 */
