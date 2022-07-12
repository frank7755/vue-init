import request from "@/utils/request";

export const login = () => {
  request("/api/login").then((res: any) => {
    console.log(res);
  });
};
