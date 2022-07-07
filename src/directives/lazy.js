import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGif from "@/assets/default.gif";

let imgs = [];

function setImage(img) {
  img.dom.src = defaultGif;//先变成默认图片
  //处理图片
  //该图片是否在视口的范围内
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect();
  const height = rect.height || 150;
  if (rect.top >= -height && rect.top <= clientHeight) {
    //在视口范围内
    const tempImg = new Image();//生成一个img标签

    tempImg.onload = function () {
      img.dom.src = tempImg.src;//这个时候已经缓存了
    }

    tempImg.src = img.src;
    imgs = imgs.filter(i => i !== img)
  }
}

//调用该函数就可以设置那些合适的图片
function setImages() {
  for (const img of imgs) {
    setImage(img)
  }
}

function handleScroll(dom) {
  setImages()
}

// setInterval(() => {
//   console.log(imgs)
// }, 2000)

eventBus.$on("mainScroll", debounce(handleScroll, 50))

export default {
  inserted(el, bindings) {
    const img = {
      dom: el,
      src: bindings.value,
    }
    imgs.push(img)
    setImage(img);
  },
  unbind(el) {
    imgs = imgs.filter((img) => {
      img.dom !== el;
    })
  }
}