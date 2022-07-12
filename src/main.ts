import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import routes from "../config/routes";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; //Icon引入

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});
const isLogin = localStorage.getItem("token");

// router.beforeEach((to, from) => {
//   if (to.path != "/login" && !isLogin) {
//     return "/login";
//   }
// });
const app = createApp(App);
//整个应用支持路由。
app.use(router);
app.use(ElementPlus, {
  local: zhCn,
});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");

export { router };
