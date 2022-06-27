const routes: any = [
  {
    path: "/",
    component: () => import("@/pages/layout/BaseLayout.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "首页",
        component: () => import("@/pages/home/home.vue"),
        children: [
          {
            path: "/test",
            name: "测试",
            component: () => import("@/pages/home/test.vue"),
            children: [
              {
                path: "/home1",
                name: "首1",
                component: () => import("@/pages/home/home1.vue"),
                children: [
                  {
                    path: "/home2",
                    name: "首2",
                    component: () => import("@/pages/home/home2.vue"),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  { path: "/login", component: () => import("@/pages/login/login.vue") },
];

export default routes;
