<template>
  <div>
    <div class="system_banner">
      <div class="bottom-round"></div>
    </div>
    <div class="container-fluid solution first">
      <h3>中国航空油质量检测实验室信息管理平台</h3>
      <div class="row">
        <div class="solution-txt">
          <p>{{content}}</p>
        </div>
      </div>
    </div>
    <div class="disadvantage">
      <h3>行业现状与痛点</h3>
      <img src="../../static/bil/imgamge/20180703183341.jpg" alt="">
    </div>
    <div class="advantage">
      <h3>系统优势</h3>
      <img src="../../static/bil/imgamge/20180702170746.jpg" alt="">
    </div>
    <div class="characteristic">
      <h3>技术特点</h3>
      <img src="../../static/bil/imgamge/20180702175538.jpg" alt="">
    </div>
    <div class="advantage">
      <h3>系统功能</h3>
      <img src="../../static/bil/imgamge/20180703123633.jpg" alt="">
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
  import bottom from '../components/bottom'
  export default {
    components: {bottom},
    name: 'in-lab',
    data() {
      return {
        content: ' 为了高效地管理实验室油品检测业务，确保航油质量安全，中国航空油料责任有限公司华东公司质量计量检测中心与' +
        '上海迅发信息技术有限公司，严格按照优良实验室规范(Good Laboratory Practice，GLP)和ISO/IEC17025标准，遵循MHT 6020-2012 ' +
        '《民用航空燃料质量控制和操作程序》和MHT 6044-2008《小型机场民用航空燃料质量控制和操作程序》等业务规范要求，运用互' +
        '联网、大数据、物联网、移动互联等新一代信息技术，完全自主开发的一套中国航空成品油品质量检测信息智慧管理平台。',
      }
    }
  }
</script>

<style scoped>
  .system_banner {
    text-align: center;
    width: 100%;
    height: 5rem;
    background: url("../../static/bil/imgamge/20180702171902.jpg") no-repeat;
    background-size: cover;
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
  .disadvantage, .solution, .advantage, .characteristic {
    padding: .7rem 0;
    background: white;
    text-align: center;
  }
  .disadvantage,.characteristic {
    background: #f9f9f9;
  }
  .disadvantage h3, .solution h3, .advantage h3, .characteristic h3 {
    display: block;
    width: 100%;
    font-size: .28rem;
    margin-bottom: .6rem;
    color: #151515;
    position: relative;
  }
  .first h3 {
    margin-bottom: .2rem;
  }
  .disadvantage h3:after, .solution h3:after, .advantage h3:after, .characteristic h3:after {
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: .5rem;
    border-bottom: 2px solid #008fd7;
    content: "";
  }
  .disadvantage img, .advantage img, .characteristic img {
    width: 1100px;
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


</style>
