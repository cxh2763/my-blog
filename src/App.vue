<template>
  <div>
      <Avatar url="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F09%2F20210709142454_dc8dc.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659327209&t=234c47dcf9753af2f2601a53225a5ea7"></Avatar>
      <Icon type="arrowDown"></Icon>
      <Pager :total="325" :current="current" @pageChange="pageChange"></Pager>
  </div>
</template>

<script>
import Avatar from "./components/Avatar"
import Icon from "./components/Icon"
import { types } from "./components/Icon"
import Pager from "./components/Pager"
export default {
  components:{
    Avatar,
    Icon,
    Pager,
  },
  mounted(){
    console.log(types)
  },
  data(){
    return {
       current:3,
    }
  },
  methods:{
    pageChange(newCurrent){
      this.current = newCurrent;
    }
  }

}
</script>

<style scoped>
  .icon-container{
    font-size: 24px;
    color: red;
  }
</style>