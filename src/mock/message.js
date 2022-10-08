// import Mock from "mockjs";
// import qs from "querystring";

// Mock.mock("/api/message", "post", {
//   code: 0,
//   msg: "",
//   data: {
//     id: "@guid",
//     nickname: "@cname",
//     content: "@cparagraph(1, 10)",
//     createDate: Date.now(),
//     "avatar|1": [
//       "https://img0.baidu.com/it/u=1249004965,1487984653&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
//       "https://img2.baidu.com/it/u=358250888,2362020092&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
//       "https://img2.baidu.com/it/u=2090606195,1473750087&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
//       "https://img0.baidu.com/it/u=2662827092,1973461665&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
//     ],
//   },
// });

// Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function (options) {
//   const query = qs.parse(options.url);

//   return Mock.mock({
//     code: 0,
//     msg: "",
//     data: {
//       total: 52,
//       [`rows|${query.limit || 10}`]: [
//         {
//           id: "@guid",
//           nickname: "@cname",
//           content: "@cparagraph(1, 10)",
//           createDate: Date.now(),
//           "avatar|1": [
//             "https://img0.baidu.com/it/u=1249004965,1487984653&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
//             "https://img2.baidu.com/it/u=358250888,2362020092&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
//             "https://img2.baidu.com/it/u=2090606195,1473750087&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
//             "https://img0.baidu.com/it/u=2662827092,1973461665&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
//           ],
//         },
//       ],
//     },
//   });
// });
