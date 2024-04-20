import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 导入elementPlus
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// 项目使用SVG
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path"; // path 是 Node.js 提供的一个模块，用于处理文件路径的工具。

export default defineConfig({
  plugins: [
    vue(),

    // 注册使用Svg插件
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")], // 设置矢量图标存放的地方
      symbolId: "icon-[dir]-[name]",  // 唯一标识而已, 并无太多用处
    }),

    // 以自动导入的方式 继承 elementPlus
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
