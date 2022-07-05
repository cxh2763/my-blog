import LoadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
//到处指令的配置对象
// export default {
//   bind(el, bindind) {
//     console.log("bind", el, bindind)
//     //创建一个img元素，放到el元素内部
//     //只调用一次，指令第一次绑定到元素时调用，在这里可以进行一次性的初始化设置
//   },
//   inserted(el, bindind) {
//     //被绑定元素插入父节点时调用
//   },
//   update(el, bindind) {
//     //更具binding.value的值，决定创建或者删除img元素
//     console.log("updated", el, bindind)
//     //所在组件的VNode更新时调用
//   }
// }
//如果 bind和update的效果一样可以如下这样写
export default function (el, bindind) {
  console.log(el)
  //更具binding.value的值，决定创建或者删除img元素
  if (bindind.value) {
    //创建img元素
    if (!getLoadingImage(el)) {
      const img = createLoadingImg();
      el.appendChild(img);
    }
  } else {
    //删除img元素
    if (getLoadingImage(el)) {
      const img = el.querySelector("img[data-role=loading]");
      img.remove();
    }
  }
}

function createLoadingImg() {
  const img = document.createElement("img");
  img.dataset.role = "loading";
  img.src = LoadingUrl;
  img.className = styles.loading;
  return img;
}

//判断el中是否存在loading效果的img元素
function getLoadingImage(el) {
  return !!el.querySelector("img[data-role=loading]");
}