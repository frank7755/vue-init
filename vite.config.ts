import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";

const project = ({ mode }) => {
  return defineConfig({
    plugins: [
      vue(),
      viteMockServe({
        mockPath: "./src/mock",
        localEnabled: mode == "mock" ? true : false,
        supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
        watchFiles: true, // 监视文件更改
      }),
    ],
    css: {},
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  });
};
// https://vitejs.dev/config/
export default project;
