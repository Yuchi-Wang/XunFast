<template>
  <div class="news">
    <div class="news-bg">
      <div class="bottom-round"></div>
    </div>
    <div>
      <h3 class="animated slideInDown">服务承诺</h3>
      <p>公司严格按照ISO9001国际质量体系认证企业的《服务控制》要求，以客户满意为第一宗旨，以互联网远程部署、远程维护、电
        话维护、现场维护等有效的方式，确保系统稳定运行。</p>
    </div>
    <div class="container-fluid down">
      <img src="../../static/bil/imgamge/20180625100148.png" alt="">
      <div class="tel">
        <ul>
          <li>运维技术支持工程师电话：123456789 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp 运维技术支持工程师手机:123456789</li>
          <li>运维技术支持工程师邮箱：123456789 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp 运维技术支持微信号:123456789</li>
          <li>运维技术支持QQ号：123456789 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp 运维负责人电话:123456789</li>
          <li>运维负责人邮箱：123456789 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp 运维监督投诉电话:123456788</li>
          <li>运维监督投诉电话：123456789</li>
        </ul>
      </div>
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
   background:url("../../static/bil/imgamge/20180626092332.jpg") no-repeat;
   background-size: cover;
   background-position: 50% 50%;
   margin-top: 70px;
   position: relative;
 }
 .bottom-round {
   width: 100%;
   position: absolute;
   bottom: -30px;
   height: 60px;
   background: white;
   z-index: 99;
   border-radius: 100%;
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
  .news p,.tel {
    font-size: .15rem;
    text-align: center;
    color: #666666;
    line-height: .32rem;
  }
  .tel {
    background: #f9f9f9;
    margin: .7rem 0;
    padding: 30px 0;
    font-weight: bolder;
  }
 .down {
   text-align: center;
   padding-bottom: .7rem;
 }
  .down img {
    width: 1000px;
    margin-top:.7rem;
  }

</style>
