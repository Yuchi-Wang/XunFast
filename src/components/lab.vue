<template>
  <div>
    <div class="system_banner">
      <div class="bottom-round"></div>
    </div>
    <div class="disadvantage">
      <h3>行业现状与痛点</h3>
      <img src="../../static/bil/imgamge/20180628132656.jpg" alt="">
    </div>
    <div class="container-fluid solution">
      <h3>解决方案</h3>
      <div class="row">
        <div class="col-md-5 solution-bg"></div>
        <div class="col-md-7 solution-txt">
          <p>{{content}}</p>
        </div>
      </div>
    </div>
    <div class="advantage">
      <h3>系统优势</h3>
      <img src="../../static/bil/imgamge/20180628135608.jpg" alt="">
    </div>
    <div class="characteristic">
      <h3>技术特点</h3>
      <img src="../../static/bil/imgamge/20180628152610.png" alt="">
    </div>
    <div class="advantage">
      <h3>系统功能</h3>
      <img src="../../static/bil/imgamge/20180629094514.png" alt="">
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
  import bottom from '../components/bottom'
  export default {
    components: {bottom},
    name: 'lab',
    data() {
      return {
        content: ' 运用云计算、大数据、移动互联等新一代信息技术，采用SOA的服务架构体系，基于物联网的数据智能采集，在实验大数据深度' +
        '挖掘分析的基础下，结合可视化图形报表的形式直观展现。依托IS09001的标准管理体系来管理油品质量过程，强化数据管理，规' +
        '范管理流程，从而达到夯实研发基础，降低工作成本，增强工作效率，提高工作质量，提升工作水平的作用。实现工作流程化、' +
        '运营体系化、管理信息化、服务主动化的目标。',
      }
    }
  }
</script>

<style scoped>
  .system_banner {
    text-align: center;
    width: 100%;
    height: 5rem;
    background: url("../../static/bil/imgamge/20180628155836.jpg") no-repeat;
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
  .solution, .characteristic {
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
    margin-top: .4rem;
  }
  .solution-bg {
    width: 100%;
    background: url("../../static/bil/imgamge/20180628143954.jpg") no-repeat;
    background-size: cover;
    height: 2rem;
  }


</style>
