<template>
  <div>
    <div class="system_banner">
      <h2>实验室信息管理与应用分析平台</h2>
      <div class="bottom-round"></div>
    </div>
    <div class="disadvantage">
      <h3>行业现状与痛点</h3>
      <img src="../../static/bil/imgamge/20180704172228.png" alt="">
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
      <img src="../../static/bil/imgamge/20180704164522.png" alt="">
    </div>
    <div class="characteristic">
      <h3>技术特点</h3>
      <img src="../../static/bil/imgamge/20180705101007.png" alt="">
    </div>
    <div class="advantage">
      <h3>系统功能</h3>
      <img src="../../static/bil/imgamge/20180704161834.png" alt="">
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
        content: '迅发实验室信息管理平台遵循ISO90001、ISO/IEC 17025、GLP(Good laboratory practice)、GALP(Good Automated Laboratory Practices)' +
        '等标准化管理规范，采用模块化的设计框架，围绕人、机、物、料、法、环、质等重点环节，运用新一代信息技术、物联网技术，组成一个开放的分布式体系，' +
        '实现检测数据智能采集、实验方法智能配置、分析报告自动生成、实验质量可追溯、人员量化考核，是连接实验室、生产部门、质量管理部门的信息智慧管理平台。',
      }
    }
  }
</script>

<style scoped>
  .system_banner {
    text-align: center;
    width: 100%;
    height: 5rem;
    background: url("../../static/bil/imgamge/20180705104101.jpg") no-repeat;
    background-size: cover;
    margin-top: 70px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .system_banner h2 {
    display: inline-block;
    color: #fff;
    font-size: .6rem;
    letter-spacing: 1px;
    font-weight: bold;
    text-shadow: 5px 5px 5px #0e2734;
    padding-bottom: 5px;
    border-bottom: 2px solid #fff;
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
    margin-top: .2rem;
  }

  .solution-bg {
    width: 100%;
    background: url("../../static/bil/imgamge/20180705091256.png") no-repeat;
    background-size: cover;
    height: 2rem;
  }

  @media (max-width: 1199.98px) {
    .system_banner {
      height: 8rem;
    }
    .system_banner h2 {
      font-size: .8rem;
    }
    .disadvantage h3, .solution h3, .advantage h3, .characteristic h3 {
      font-size: .38rem;
    }
    .disadvantage h3:after, .solution h3:after, .advantage h3:after, .characteristic h3:after {
      top: .6rem;
    }
    .disadvantage img, .advantage img, .characteristic img {
      width: 95%;
    }
    .solution-bg {
      height: 2.5rem;
    }
    .solution .row {
      margin: 0 5%;
    }
    .solution-txt {
      padding-left: 30px;
    }
    .solution p {
      font-size: .25rem;
      line-height: .35rem;
    }
  }
  @media (max-width: 767.98px) {
    .system_banner {
      height: 9rem;
    }
    .system_banner h2 {
      font-size: 1rem;
    }
    .disadvantage h3, .solution h3, .advantage h3, .characteristic h3 {
      font-size: .56rem;
    }
    .disadvantage h3:after, .solution h3:after, .advantage h3:after, .characteristic h3:after {
      top: 1rem;
    }
    .solution-bg {
      height: 5rem;
      margin-bottom: 10px;
    }
    .solution p {
      font-size: .35rem;
      line-height: .6rem;
    }
  }
  @media (max-width: 575.98px) {
    .system_banner {
      height: 15rem;
      padding: 0 15px;
    }
    .bottom-round {
     display: none;
    }
    .system_banner h2 {
      font-size: 1.2rem;
      border-bottom: none;
    }
    .disadvantage h3, .solution h3, .advantage h3, .characteristic h3 {
      font-size: .8rem;
      margin-bottom: 1rem;
    }
    .disadvantage h3:after, .solution h3:after, .advantage h3:after, .characteristic h3:after {
      top: 1.5rem;
    }
    .solution p {
      font-size: .58rem;
      line-height: .8rem;
    }
  }
</style>
