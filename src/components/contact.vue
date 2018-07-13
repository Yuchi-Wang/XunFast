<template>
  <div class="news">
    <div class="news-bg">
      <div class="bottom-round"></div>
    </div>
    <div>
      <h3 class="animated slideInDown">服务承诺</h3>
      <p>公司严格按照ISO9001国际质量体系认证企业的《服务控制》要求，以客户满意为第一宗旨，以互联网远程部署、远程维护、电话维护、现场维护等有效的方式，确保系统稳定运行。</p>
    </div>
    <div class="container-fluid down">
      <img src="../../static/bil/imgamge/20180702131057.jpg" alt="">
      <div class="tel">
        <h4 class="tel-title">联系方式：</h4>
        <ul class="row">
          <li class="col-md-4">运维技术支持工程师电话：021-6816 0161（马工）</li>
          <li class="col-md-4">运维技术支持工程师手机：15821312137 （马工）</li>
          <li class="col-md-4">运维技术支持工程师邮箱：make@xunfast.com.cn（马工）</li>
          <li class="col-md-4">运维技术支持微信号：15821312137（马工）</li>
          <li class="col-md-4">运维技术支持QQ号：313775583（马工）</li>
          <li class="col-md-4">运维负责人电话：18160196096（黄）</li>
          <li class="col-md-4">运维负责人邮箱：Alex.Huang@xunfast.com.cn（黄）</li>
          <li class="col-md-4">运维监督投诉电话：15221678631（李）</li>
        </ul>
      </div>
    </div>
    <div class="container-fluid download">
      <h4>服务下载</h4>
      <div class="row">
        <div class="col-sm-4">
          <p style="text-align: center">油品标准密度换算</p>
        </div>
        <div class="col-sm-2">
            <img src="../../static/bil/imgamge/20180626133453.png" alt="">
        </div>
        <div class="col-sm-3">
          <router-link to="/down">使用说明</router-link>
        </div>
        <div class="col-sm-2">
          <a href="http://apk.xunfast.com/Densimeter.Convert.apk" class="downloaded">下载</a>
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
  }
</script>

<style scoped>
  .news-bg {
    width: 100%;
    height: 5rem;
    background: url("../../static/bil/imgamge/20180703125214.jpg") no-repeat;
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
    margin-left:11%;
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
    margin:0 10% 0 11%;
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

  .download .row > div img {
    width: .32rem;
    margin-top: .2rem;
    margin-left: .8rem;
  }

  .download .row > div .product-name p {
    padding-top: .1rem;
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
  @media (max-width: 1199.98px) {
    .news-bg {
      height: 8rem;
      background-position: 15% 50%;
    }
    .news h3, .download h4 {
      font-size: .38rem;
    }
    .news h3:after, .download h4:after {
      top: .7rem;
    }
    .news p {
      width: 90%;
    }
    .news p, .tel {
      font-size: .25rem;
      line-height: .35rem;
      margin: auto;
      text-align: left;
    }
    .down img {
      width: 90%;
      margin-bottom: 30px;
    }
    .tel .row {
      margin: 0 3% 0 4%;
    }
    .tel-title {
      margin-left: 4%;
    }
    .download .row {
      height: 1rem;
      margin: 0 5% .7rem;
    }
    .download .row > div > p, .download .row > div a {
      font-size: .25rem;
      line-height: 1rem;
    }
    .download .row > div img{
      width: .5rem;
    }
    .download .row > div .downloaded {
      width: 1rem;
      height: .4rem;
      line-height: .4rem;
    }
    }
  @media (max-width: 767.98px) {
    .news-bg {
      height: 9rem;
      background-position: 12% 50%;
    }
    .news h3, .download h4 {
      font-size: .56rem;
    }
    .news h3:after, .download h4:after {
      top: 1rem;
    }
    .news p, .tel {
      font-size: .35rem;
      line-height: .6rem;
    }
    .tel .row {
      margin: 0 3% 0 4%;
    }
    .tel-title {
      margin-left: 4%;
    }
    .download .row {
      height: 1.5rem;
      margin: 0 3% .7rem;
    }
    .download .row > div > p, .download .row > div a {
      font-size: .35rem;
      line-height: 1.5rem;
    }
    .download .row > div img{
      width: .8rem;
    }
    .download .row > div .downloaded {
      width: 1.5rem;
      height: .6rem;
      line-height: .6rem;
      margin-top: .45rem;
    }
  }
  @media (max-width: 575.98px) {
    .news-bg {
      height: 15rem;
    }
    .bottom-round {
      display: none;
    }
    .news h3, .download h4 {
      font-size: .8rem;
    }
    .news h3:after, .download h4:after {
      top: 1.5rem;
    }
    .news p, .tel {
      font-size: .58rem;
      line-height: .8rem;
    }
    .tel .row {
      margin: 0 15px;
    }
    .tel-title {
      margin-left: 15px;
    }
    .download .row {
      height: 7rem;
      margin: 0 0 2rem 0;
    }
    .download .row > div > p, .download .row > div a {
      font-size: .56rem;
      line-height: 2rem;
    }
    .download .row > div:nth-of-type(1) {
      padding-left:0;
    }
    .download .row > div img{
      width: .8rem;
      margin: 0;
    }
    .download .row > div:nth-of-type(4) {
      text-align:center;
      padding-right:0;
    }
    .download .row > div .downloaded {
      width: 2rem;
      height: .8rem;
      line-height: .8rem;
      margin-top: 0;
    }
  }
</style>
