<template>
  <div>
    <div class="f_banner">
      <div class="bottom-round"></div>
    </div>
    <div class="app">
      <div>
        <h3>密度换算APP</h3>
        <div class="bg">
          <div>
            <h2>油品标准密度换算</h2>
            <a href="http://apk.xunfast.com/Densimeter.Convert.apk"><i></i>手机app下载</a>
          </div>
          <img src="../../static/bil/imgamge/1@1x.jpg" alt="" class="mob">
          <img src="../../static/bil/imgamge/2@1x.jpg" alt="" class="mob">
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
        name: "down"
    }
</script>

<style scoped>
  .app>div {
    margin: 0 18%;
    padding: .7rem .68rem  0;
    background: url("../../static/bil/imgamge/app-bg.jpg");
    height: 1200px;
    background-size: cover;
    background-position: 50% 30%;
    position: relative;
  }
  .app h3 {
    text-align: center;
    font-size: .28rem;
    color: white;
    margin:.7rem auto;
    position: relative;
  }
  .app h3:after {
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: .5rem;
    border-bottom: 2px solid white;
    content: "";
  }
  .app .bg {
    height: 850px;
    background: white;
  }
  .app .bg h2 {
    padding: 0 40px;
    height: 40px;
    background: #2a97f3;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 3px;
    margin: 26px 29px 45px 0;
  }
  .bg a {
    font-size: 14px;
    color: #666666;
  }
  .bg a i {
    width: 23px;
    height: 28px;
    display: inline-block;
    margin-right: 15px;
    vertical-align: middle;
    background: url("../../static/bil/imgamge/android.png") no-repeat center;
    background-size: 100% 100%;
  }
  .mob {
    display: block;
    margin:0 auto 100px;
  }
</style>
