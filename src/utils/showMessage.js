import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon"
import style from "@/styles/message.module.less"//开启css module
/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中心；如果不传，则显示到页面正中心
 * @param {Number} duration 多久后消失
*/
export default function (options = {}) {
  //content, type = "info", duration, container
  const content = options.content || '';
  const type = options.type || 'info';
  const duration = options.duration || 2000;
  const container = options.container || document.body;
  //创建消息元素
  const div = document.createElement('div');
  div.className = `${style.message} ${style[`message-${type}`]}`;
  const iconDom = getComponentRootDom(Icon, {
    type,
  })
  div.innerHTML = `<span class="${style.Icon}">${iconDom.outerHTML}</span><div>${content}</div>`
  if (!container) {
    container = document.body;
  } else {
    //容器的position
    if (options.container) { //如果传了container,否则相对于视口绝对定位
      if (getComputedStyle(container).position === "static") {
        container.style.position = "relative";
      }
    }
  }
  container.appendChild(div);
  //浏览器强行渲染
  div.clientHeight; //导致reflow 回流
  //回归到正常位置
  div.style.opacity = 1;
  div.style.transform = `translate(-50%,-50%)`;
  //等一段时间消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%,-50%) translateY(-15px)`;
    div.addEventListener("transitionend", () => {
      div.remove()
      options.callback && options.callback();//如果有回调函数，执行回调函数
    }, { once: true })
  }, duration)
}