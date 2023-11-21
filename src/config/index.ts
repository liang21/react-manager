type ENV = "dev" | "stg" | "pro";

// let env: ENV = "dev";
// if (location.host.indexOf("localhost") > -1) {") {
//   env = "dev";
// } else if (location.host === "driver-stg.marsview.cc") {
//   env = "stg";
// } else {
//   env = "pro";
// }
const env = document.documentElement.dataset.env as ENV;
const config = {
  dev: {
    baseApi: "/api",
    uploadApi: "http://api-driver.marsview.cc",
    mockApi: "http://driver-stg.marsview.cc",
    mock: true,
    cdn: "http://cdn-driver.marsview.cc",
  },
  stg: {
    baseApi: "/api",
    uploadApi: "http://api-driver.marsview.cc",
    mockApi: "http://driver-stg.marsview.cc",
    mock: true,
    cdn: "http://cdn-driver.marsview.cc",
  },
  pro: {
    baseApi: "/api",
    uploadApi: "http://api-driver.marsview.cc",
    mockApi: "http://driver-stg.marsview.cc",
    mock: true,
    cdn: "http://cdn-driver.marsview.cc",
  },
};
export default {
  env,
  ...config[env],
};
