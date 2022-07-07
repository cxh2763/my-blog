import Vue from "vue"
export default function (domp, props) { //得到组件生成的根dom
  const vm = new Vue({
    render: (h) => h(domp, { props }),
  })
  vm.$mount();
  return vm.$el;
}