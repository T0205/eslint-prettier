import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 按需导入elementPlus, 所使用的插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 项目使用SVG
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path' // path 是 Node.js 提供的一个模块，用于处理文件路径的工具。

export default defineConfig({
  plugins: [
    vue(),

    // 注册使用Svg插件
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')], // 设置矢量图标存放的地方
      symbolId: 'icon-[dir]-[name]', // 唯一标识而已, 并无太多用处
    }),

    // 全局导入'vue', 'vue-router'的方法, 不用个文件都导入了.
    AutoImport({
      dts: 'types/auto-imports.d.ts',
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: 'types/components.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
