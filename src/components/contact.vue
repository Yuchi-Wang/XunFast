<template>
  <div class="news">
    <div class="news-bg"></div>
    <div>
      <h3 class="animated slideInDown">服务下载 <br>
      </h3>
    </div>
    <div class="container-fluid down">
      <img src="../../static/bil/imgamge/20180625100148.png" alt="">
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import bottom from '../components/bottom'
export default {
  components: {bottom},
  name: 'contact',
}
</script>

<style scoped>
 .news-bg{
   width: 100%;
   height: 5rem;
   background:url("../../static/bil/imgamge/20180625095608.jpg") no-repeat;
   background-size: cover;
   background-position: 50% 50%;
   margin-top: 70px;
 }
  .news h3{
    font-family: "Source Han Serif SC";
    font-size: .28rem;
    color: #151515;
    position: relative;
    margin: .7rem 0;
    text-align: center;
  }
  .news h3:after{
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -36px;
    top: .6rem;
    border-bottom: 2px solid #008fd7;
    content: "";
  }
 .down {
   text-align: center;
   padding-bottom: .7rem;
 }
  .down img {
    width: 1000px;
  }

</style>
