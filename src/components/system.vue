<template>
  <div>
    <div class="banner">
      <div class="bottom-round"></div>
    </div>
    <div class="container-fluid solution first">
      <h3>中国航油计量检定信息智慧管理平台</h3>
      <div class="row">
        <div class="solution-txt">
          <p>{{content}}</p>
        </div>
      </div>
    </div>
    <div class="disadvantage">
      <h3 class="safe animated fadeInLeft">行业现状与痛点</h3>
      <img src="../../static/bil/imgamge/20180703183929.jpg" alt="">
    </div>
    <div class="solution six">
      <h3>六个方面</h3>
      <img src="../../static/bil/imgamge/20180703115834.jpg" alt="">
    </div>
    <div class="disadvantage function">
      <h3>系统基础应用功能</h3>
      <img src="../../static/bil/imgamge/20180703122133.jpg" alt="">
    </div>
    <div class="solution six">
      <h3>系统核心功能</h3>
      <img src="../../static/bil/imgamge/20180703120652.jpg" alt="">
    </div>
    <div class="disadvantage">
      <h3>系统优势</h3>
      <img src="../../static/bil/imgamge/20180703120811.jpg" alt="">
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
  import bottom from '../components/bottom'

  export default {
    components: {bottom},
    name: 'system',
    data: function () {
      return {
        content: '计量检定作为测量设备量值传递的主要形式，是保证量值准确一致的重要措施，具有准确度判定要求严格、数据处理' +
        '工作量大等特点。一直以来，中国航油计量检定/校准工作的数据处理以及合格性判定工作依赖于人工计算处理和数据复核，这' +
        '导致工作强度过大，数据处理过程中人为因素易导致差错。为此, 中国航空油料责任有限公司华东公司质量计量检测中心与上海' +
        '迅发信息技术有限公司自主研发了一套“计量检定信息智慧管理平台”，为计量检定提供高准确度的计算结果，确保了工作人员' +
        '的工作效率及证书的准确度。',

      }
    }
  }
</script>

<style scoped>
.banner{
  width: 100%;
  height: 5rem;
  background: url("../../static/bil/imgamge/20180702171902.jpg");
  background-size: cover;
  background-position: 50% 30%;
  margin-top: 70px;
  position: relative;
}
.bottom-round {
  width: 100%;
  position: absolute;
  bottom:-30px;
  height: 60px;
  background: white;
  z-index: 99;
  border-radius: 100%;
}
 .safe {
   text-align: center;
  font-size: .28rem;
  color: #151515;
  margin: .1rem auto .6rem;
  position: relative;
}

 .safe:after {
  width: 60px;
  position: absolute;
  left: 50%;
  margin-left: -30px;
  top: .5rem;
  border-bottom: 2px solid #008fd7;
  content: "";
}
.disadvantage, .solution,.six {
  padding: .7rem 0;
  background: white;
  text-align: center;
}
.disadvantage {
  background:#f9f9f9;
}
.disadvantage h3, .solution h3, .advantage h3,.disadvantage h3 {
  display: block;
  width: 100%;
  font-size: .28rem;
  margin-bottom: .6rem;
  color: #151515;
  position: relative;
}
.six h3,.first h3 {
  margin-bottom: .2rem;
}

.disadvantage h3:after, .solution h3:after {
  width: 60px;
  position: absolute;
  left: 50%;
  margin-left: -30px;
  top: .5rem;
  border-bottom: 2px solid #008fd7;
  content: "";
}
.disadvantage img {
  width: 800px;
}
.six img,.solution img{
  width: 1000px;
}
.solution .row {
  margin: 0 15%;
}
.solution-txt {
  padding-left: 60px;
}
.solution p {
  font-size: .15rem;
  text-align: justify;
  line-height: .25rem;
  color: #666666;
  margin-top: .2rem;
}
.solution-bg {
  width: 100%;
  background: url("../../static/bil/imgamge/20180624183016.png") no-repeat;
  background-size: cover;
  height: 2rem;
}
.function {
  position: relative;
}

</style>
