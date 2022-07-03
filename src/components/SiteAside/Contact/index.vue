<template>
  <ul class="contact-container">
    <li>
      <a>
        <div class="icon">
          <Icon type="qq"></Icon>
        </div>
        <span> 123453235 </span>
      </a>
      <div class="pop">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202105%2F19%2F20210519233901_63630.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659370800&t=702ffe04813ebb00645797cd6c187011"
        />
      </div>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon type="qq"></Icon>
        </div>
        <span> 123453235 </span>
      </a>
      <div class="pop">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202105%2F19%2F20210519233901_63630.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659370800&t=702ffe04813ebb00645797cd6c187011"
        />
      </div>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon type="qq"></Icon>
        </div>
        <span> 123453235 </span>
      </a>
      <div class="pop">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202105%2F19%2F20210519233901_63630.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659370800&t=702ffe04813ebb00645797cd6c187011"
        />
      </div>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon type="qq"></Icon>
        </div>
        <span> 123453235 </span>
      </a>
      <div class="pop">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202105%2F19%2F20210519233901_63630.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659370800&t=702ffe04813ebb00645797cd6c187011"
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  width: 100%;
  color: @gray;
  @itemHeight: 30px;
  li {
    position: relative;
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
    a {
      display: flex;
      align-content: center;
      cursor: pointer;
    }
    .icon {
      font-size: 26px;
      width: @itemHeight;
      &.weixin {
        font-size: 32px;
        text-indent: -3px;
      }
    }
    .pop {
      position: absolute;
      left: 0;
      box-sizing: border-box;
      padding: 10px 15px;
      bottom: @itemHeight + 5px;
      border-radius: 5px;
      background-color: #fff;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;
      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
      }
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        bottom: -4px;
        width: 8px;
        height: 8px;
        background: #fff;
      }
    }
  }
}
</style>