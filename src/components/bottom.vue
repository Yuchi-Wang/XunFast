<template>
  <footer>
    <div class="container-fluid">
      <div class="row">
        <ul class="fin">
          <li>上海迅发信息技术有限公司</li>
        </ul>
      </div>
    </div>
    <div class="container-fluid fins" id="footer">
      <div class="row">
        <ul class="col-md-2 about" style="padding:0">
          <li>
            <router-link to="/about">关于我们</router-link>
          </li>
          <li>公司简介</li>
          <li>发展历程</li>
          <li>加入我们</li>
        </ul>
        <ul class="col-md-2 product">
          <li>产品与服务</li>
          <li>解决方案</li>
          <li>产品列表</li>
          <li>开发者文档</li>
        </ul>
        <ul class=" col-sm-12 col-md-3">
          <li>传真：021-6816 0169</li>
          <li>电话：86-021-6816 0161</li>
          <li>邮箱：xunfast@xunfast.com</li>
        </ul>
        <ul class=" col-sm-12 col-md-5 col-lg-4 address">
          <li>邮编：200120</li>
          <li>网址：www.xunfast.com</li>
          <li>地址：上海浦东新区康桥路666号三幢四楼</li>
        </ul>
        <ul class="col-md-1 er-img">
          <li>
            <img src="../../static/bil/imgamge/20180521102731.png" alt="">
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'bottom',
  }
</script>

<style scoped>
  .container-fluid > .row {
    margin: 0 10%;
  }

  footer {
    background: url("../../static/bil/imgamge/footer_bg.png");
    width: 100%;
    background-size: cover;
    color: #8a8a8a;
    font-size: .18rem;
  }

  footer > div:nth-of-type(1) {
    padding: .3rem 0 0;
  }

  .fin {
    width: 100%;
    margin-bottom: 10px;
    text-align: left;
  }
  .fins {
    padding: 0  0 .3rem;
  }

  .fins li, .fin li {
    font-size: .16rem;
    margin: 10px 0 5px;
    text-align: left;
  }

  .fin li {
    font-size: .22rem;
  }

  .product{
    padding: 0;
    text-align: left;
  }

  .er-img{
      padding-right: 0;
  }
  .er-img>li{
    text-align: right;
  }
  .fins img {
    width: 80px;
    height: 80px;
  }
  .about .router-link-exact-active {
    background: none;
    color:#8a8a8a;
  }

  @media (max-width: 1024px) {
    .fin li {
      font-size: .3rem;
    }
    .fins li {
      font-size: .25rem;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .address{
      padding-left: 5%;
    }
    .fins img {
     display: none;
    }
  }

  @media (max-width: 767.98px) {
    .address{
      padding-left:0;
    }
    .fin li {
      font-size: .6rem;
      text-align: center;
    }
    .fins li {
      font-size: .45rem;
      text-align: center;
    }
    .product, .about{
      display: none;
    }
    .fins img {
      width: 80px;
      height: 80px;
    }
  }

  @media (max-width: 575.98px) {
    .fin li{
      font-size: .8rem;
    }
    .fins li {
      font-size: .6rem;
    }
    .fins img {
      width: 60px;
      height: 60px;
    }
  }
</style>
