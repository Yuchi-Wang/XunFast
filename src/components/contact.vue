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
      <img src="../../static/bil/imgamge/20180629092814.png" alt="">
      <div class="tel">
        <h4 class="tel-title">联系方式：</h4>
        <ul class="row">
          <li class="col-md-4">运维技术支持工程师电话：123456789</li>
          <li class="col-md-4">运维技术支持工程师手机：123456789</li>
          <li class="col-md-4">运维技术支持工程师邮箱：123456789</li>
          <li class="col-md-4">运维技术支持微信号：123456789</li>
          <li class="col-md-4">运维技术支持QQ号：123456789</li>
          <li class="col-md-4">运维负责人电话：123456789</li>
          <li class="col-md-4">运维负责人邮箱：123456789</li>
          <li class="col-md-4">运维监督投诉电话：123456788</li>
          <li class="col-md-4">运维监督投诉电话：123456789</li>
        </ul>
      </div>
    </div>
    <div class="container-fluid download">
      <h4>服务下载</h4>
      <div class="row">
        <div class="col-md-3">
          <p>航空油品计量检定系统</p>
        </div>
        <div class="col-md-5 clearfix">
          <div class="left">
            <img src="../../static/bil/imgamge/20180626133453.png" alt="">
          </div>
          <div class="left product-name">
            <p>油品标准密度换算</p>
            <span>2018-06-24</span>
          </div>
        </div>
        <div class="col-md-2">
          <router-link to="/system">使用说明</router-link>
        </div>
        <div class="col-md-2">
          <a href="javascript:;" class="downloaded" @click="down()">下载</a>
        </div>
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
    methods: {
      down() {
        alert("还在创建中!")
      }
    }
  }
</script>

<style scoped>
  .news-bg {
    width: 100%;
    height: 5rem;
    background: url("../../static/bil/imgamge/20180629091154.jpg") no-repeat;
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

  .news h3, .download h4 {
    font-family: "Source Han Serif SC";
    font-size: .28rem;
    color: #151515;
    position: relative;
    margin: .7rem 0;
    text-align: center;
  }
  .down {
    text-align: center;
    padding: 0;
  }


  .news h3:after, .download h4:after {
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: .6rem;
    border-bottom: 2px solid #008fd7;
    content: "";
  }
  .tel-title {
    text-align: left;
    margin-left:16%;
    color: #333333;
    font-weight: bolder;
  }
  .news p, .tel {
    font-size: .15rem;
    text-align: center;
    color: #666666;
    line-height: .32rem;
  }

  .tel {
    background: #f9f9f9;
    margin: .7rem 0;
    padding: 30px 0;
  }

  .tel .row {
    text-align: left;
    margin: 0 20% 0 23%;
  }
  .tel ul li {
    font-weight: bolder;
  }

  .down img {
    width: 1000px;
    margin-top: .7rem;
  }

  /* 产品下载 */
  .download .row {
    height: .8rem;
    margin: 0 15% .7rem;
    box-shadow: 0 0 11px rgba(0, 0, 0, 0.22);
  }

  .download .row > div {
    background: white;
    text-align: center;
  }

  .download .row > div:nth-of-type(1) {
    padding-left: 5.33333%;
  }

  .download .row > div:nth-of-type(4) {
    text-align: right;
    padding-right: 5.33333%;
  }

  .download .row > div > p {
    font-size: .15rem;
    color: #333333;
    line-height: .8rem;
    text-align: left;

  }

  .download .row > div .product-name {
    height: .8rem;
    text-align: center;
    margin-left: 1.3333333rem;
  }

  .download .row > div img {
    width: .32rem;
    margin-top: .2rem;
    margin-left: .8rem;
  }

  .download .row > div .product-name p {
    padding-top: .1rem;
  }

  .download .row > div .product-name span {
    color: #999999;
    font-size: .13rem;
  }

  .download .row > div a {
    color: #008fd7;
    font-size: .15rem;
    line-height: .8rem;
  }

  .download .row > div .downloaded {
    display: inline-block;
    background: #008fd7;
    width: .8rem;
    height: .27rem;
    line-height: .27rem;
    color: white;
    text-align: center;
    margin-top: .265rem;
  }
</style>
