<template>
  <div>
    <div class="bg">
      <div class="bottom-round"></div>
    </div>
    <div class="container-fluid content" id="content">
      <div class="row">
        <h3 class="animated  fadeInDown">智能制造面临的挑战</h3>
        <div class="mod-wrap new">
          <div class="mod-inner">
            <div class="mod-content qc-grids with-slot">
              <div data-index="0" class="product qc-unit-5-24 qc-unit-active b_l  b_b" style="height:400px;">
                <img src="../../static/bil/imgamge/20180622164918.png" alt="" width="" height="">
                <h4>全连接</h4>
                <p>{{challengeTitle}}</p>
              </div>
              <div v-for="item in challenge" :key="item.challenge" class="product qc-unit-5-24 b_b"
                   v-bind:data-index="item.index">
                <img :src="item.imgArray" alt="">
                <h4>{{item.title}}</h4>
                <p>{{item.txt}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid solution" id="w_solution">
      <h3>解决方案</h3>
      <div class="row">
        <p>{{solution}}</p>
        <ul class="clearfix">
          <li v-for="item in disadvantage" :key="item.disadvantage">
            <span> <img :src="item.point" alt="">{{item.txt}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!--核心-->
    <div class="container-fluid core" id="core">
      <h3> 一个网络：CPS</h3>
      <div class="row">
        <p id="core_txt">{{core}}</p>
        <div class="col-md-4">
          <div class="core_img">
            <img src="../../static/bil/imgamge/20180524162004.jpg" alt="" width="100%" height="auto">
          </div>
          <div class="core_txt">
              <h4>科学决策</h4>
              <p>通过大数据平台，实现异构系统数据的流动与知识的分享</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="core_txt">
              <h4>状态感知</h4>
              <p>通过各种各样的传感器感知物质世界的运行状态</p>
          </div>
          <div class="core_txt">
              <h4>精准执行</h4>
              <p>通过控制器、执行器等机械硬件实现对决策的反馈响应，这一切都依赖于一个实时、可靠、安全的网络。</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="core_img">
            <img src="../../static/bil/imgamge/20180702171553.jpg" alt="" width="100%" height="auto">
          </div>
          <div class="core_txt">
              <h4>实时分析</h4>
              <p>通过工业软件实现数据、信息、知识的转化</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid threeD" id="threeD">
      <h3>两大主题：智能工厂、智能车间</h3>
      <h4>智能工厂（六化）</h4>
      <div class="row">
        <div class="col-md-6 col-xl-4" v-for="item in certificate" :key="item.certificate"
             v-bind:style="{ 'background-image': 'url(' + item.imgArray + ')','background-repeat':'no-repeat','background-size':'cover','background-position':'50% 50%' }">
          <h4>{{item.title}}</h4>
          <p>{{item.txt}}</p>
        </div>
      </div>
    </div>
    <!--智能车间-->
    <div class="container-fluid wisdom">
      <h4>智能车间</h4>
      <img src="../../static/bil/imgamge/smart-car.gif" alt="">
    </div>
    <div class="container-fluid" id="solution">
      <h3 class="solution_title">三项集成：横向集成、纵向集成、端到端集成</h3>
      <img src="../../static/bil/imgamge/san.gif" alt="">
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
  import bottom from '../components/bottom'
  import * as $ from 'jquery'
  // console.log($)
  export default {
    components: {bottom},
    name: 'wisdom',
    data() {
      return {
        disadvantage: [
          {point: '../../static/bil/imgamge/point.png', txt: '  一个网络：CPS'},
          {point: '../../static/bil/imgamge/point.png', txt: '  两大主题：智能工厂、智能车间'},
          {point: '../../static/bil/imgamge/point.png', txt: ' 三项集成：横向集成、纵向集成、端到端集成'}
        ],
        challenge: [
          {
            index: '1', title: '全控制', imgArray: '../../static/bil/imgamge/20180622164945.png',
            txt: '资金量、管理信息流、物流信息流、服务信息流等各个相关环节需要全面连接，缺少任一节点的连接，都有可能影响全面自动化的实现。'
          },
          {
            index: '2', title: '资源整合', imgArray: '../../static/bil/imgamge/20180622165047.png',
            txt: '智能制造系统化工程需整合供应链、生产、物流、服务平台、营销资源等等，才能最大化的实现智能制造的自动化及产能最大化。'
          },
          {
            index: '3', title: '数据采集', imgArray: '../../static/bil/imgamge/20180622165109.png',
            txt: '企业内外大小数据的采集是智能制造效率的基础，尤其是外部环境数据、行业数据和用户数据的获取能力。'
          },
          {
            index: '4', title: '数据应用', imgArray: '../../static/bil/imgamge/20180622165142.png',
            txt: '数据将成为智能制造的生命线，数据收集、存储、快速调拨、模型搭建、规则创建及整合、计算和应用，每个环节都与连接、控制和自动化息息相关。'
          },
        ],
        certificate: [
          {
            imgArray: '../../static/bil/imgamge/20180701180456.jpg', title: '自动化',
            txt: '建设了覆盖全厂的DCS、SIS等系统，实现对整个工艺过程的监测与控制'
          },
          {
            imgArray: '../../static/bil/imgamge/20180627111401.jpg', title: '数字化',
            txt: '借助覆盖全厂的网路平台实现生产数据的实时采集，快速掌握生产运行情况，实现生产环境与信息系统的无缝对接，提升了管理人员对生产现场的感知和监控能力'
          },
          {
            imgArray: '../../static/bil/imgamge/20180627111230.jpg', title: '模型化',
            txt: '基于工厂模型构建煤化工的各类工艺、业务模型与规则，并与各种生产管理活动相匹配'
          },
          {
            imgArray: '../../static/bil/imgamge/20180627111158.jpg', title: '决策科学化',
            txt: '利用大数据技术，对各应用系统的数据进行集中存储和分析，协助公司领导层及时发现问题、分析问题原因、进行风险预警，实现决策的科学化'
          },
          {
            imgArray: '../../static/bil/imgamge/20180627105858.jpg', title: '可视化',
            txt: '根据设计院提供的设计图纸搭建了三维可视化工厂，并与生产工艺、设备信息、作业票、应急演练等功能进行集成，为生产操作和管理人员提供直接的业务场景展示'
          },
          {
            imgArray: '../../static/bil/imgamge/20180627111300.jpg', title: '集成化',
            txt: '建设了企业信息集成平台，以MES为核心，向上支撑企业经营管理，向下与生产过程的实时数据高度集成，将各自独立的信息系统连接成为一个完整可靠和有效的整体'
          },
        ],
        solution: '智能制造技术是传感技术、网络技术、自动化技术、人工智能技术等新一代信息技术与先进自动化技术、传感技术、' +
        '控制技术、数字制造技术结合，通过智能化的感知、人机交互、决策和执行技术，实现产品生命周期各环节以及制造装备（车间、' +
        '工厂）智能化。智能实现工厂和企业内部、企业之间和产品全生命周期的实时管理和优化的新型制造系统。',
        core:'  CPS是英文CyberPhysical System的缩写，本质就是构建一套（Cyber空间与物理（Physical）空间之间基于数据自动流' +
        '动的状态感知、实时分析、科学决策、精准执行的闭环赋能体系，解决生产制造、应用服务过程中的复杂性和不确定性问题，' +
        '提高资源配置效率，实现资源优化。',
        challengeTitle:'资金量、管理信息流、物流信息流、服务信息流等各个相关环节需要全面连接，缺少任一节点的连接，都有可能影响全面自动化的实现。'
      }
    },
    mounted: function () {
      $('.mod-content .product').hover(function () {
        $(this).addClass('qc-unit-active').siblings().removeClass('qc-unit-active')
        $(this).css('height', '400px').siblings().css('height', '320px')
      })
    }
  }
</script>

<style scoped>
  .bg {
    background: url("../../static/bil/imgamge/20180703144510.jpg") no-repeat;
    height: 5rem;
    width: 100%;
    background-size: cover;
    background-position: 50% 50%;
    position: relative;
    margin-top: 70px;
  }

  .solution h3, .core h3, .threeD h3 {
    color: #FFF;
    font-size: .28rem;
    margin-bottom: .6rem;
    font-weight: 100;
  }

  .bg p {
    color: #FFFF;
    font-size: .15rem;
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

  /*  挑战开始 */
  .content {
    text-align: center;
    padding-bottom: .4rem;
  }

  .content h3 {
    font-size: .28rem;
    margin: .7rem auto .4rem;
    font-weight: 100;
    color: #151515;
  }

  .content p {
    width: 100%;
    font-size: .15rem;
    margin: .2rem auto;
    font-weight: 300;
  }

  .content .mod-wrap {
    margin-top: .2rem;
    width: 100%;;
    height: 400px;
  }

  .qc-grids {
    font-size: 0
  }

  .mod-inner img {
    width: .6rem !important;
    margin-top: .4rem;
  }

  .mod-inner h4 {
    width: 100%;
    font-size: .18rem;
    margin-top: .1rem;
    color: #1790d4;
  }

  .mod-inner h4:after {
    width: 12%;
    position: absolute;
    top: 2rem;
    left: 50%;
    margin-left: -6%;
    border-bottom: 2px solid #cdcdcd;
    content: '';
  }

  .qc-grids [class*=qc-unit] {
    display: inline-block;
    zoom: 1;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
  }

  .qc-unit-5-24 {
    width: 16.75%
  }

  .b_l {
    border-left: 1px solid #d9d9d9;
  }

  .b_b {
    border-bottom: 1px solid #d9d9d9;
  }

  /*改变宽度*/
  .qc-unit-active {
    width: 20%
  }

  .new .product {
    background-color: #fff;
    border-top: 4px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
    padding: 0 38px;
    position: relative;
    height: 320px;
    transition: all .3s cubic-bezier(.4, 0, .2, 1), z-index 0s .12s;
    min-height: 0;
    overflow: hidden
  }

  .product.qc-unit-active {
    border-top: 4px solid #008fd7;
    margin-top: -30px;
    border-left: 1px solid #008fd7;
    border-right: 1px solid #008fd7;
    border-bottom: 1px solid #008fd7;
    padding-bottom: 20px;
    box-shadow: 0 3px 20px rgba(0, 0, 0, .1);
    transform: translate3d(0, -2px, 0)
  }

  .mod-inner p {
    opacity: 0;
    margin-top: .4rem;
    text-align: justify;
    transition: all .3s;
    color: #666666;
  }

  .product.qc-unit-active p {
    opacity: 1
  }

  .product.qc-unit-active h4:after {
    left: 50%;
    margin-left: -40%;
    width: 80%;
    border-bottom: 1px solid #7ECEF4;
    top: 1.5rem;
  }

  /*挑战结束*/

  /* 解决方案 */
  .solution {
    width: 100%;
    margin-top: 80px;
    background: whitesmoke;
    background-size: cover;
    padding: .5rem 0;
    text-align: center;
    position: relative;
  }

  .solution h3 {
    color: black;
    margin-bottom: .4rem;
  }

  .solution h3:after, .core h3:after, .content h3:after, .threeD h3:after, #solution h3:after, .wisdom h3:after {
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: .5rem;
    border-bottom: 2px solid #008fd7;
    content: "";
  }

  .solution .row {
    margin: 0 18%;
  }

  .solution img {
    width: 40px;
  }

  .solution ul {
    margin: auto;
  }

  .solution ul li {
    float: left;
    color: #333333;
    margin-left: 30px;
    font-size: .18rem;
    font-weight: bolder;
  }

  .solution p, .core p {
    display: block;
    width: 100%;
    font-size: .15rem;
    font-weight: 200;
    line-height: .32rem;
    color: #666666;
    margin-bottom: .2rem;
    text-align: justify;
  }

  /*核心开始*/
  .core {
    width: 100%;
    position: relative;
    text-align: center;
    padding: .7rem 0;
    background: url("../../static/bil/imgamge/20180702170521.jpg") no-repeat;
    background-size: cover;
  }
  .core .row>div {
    padding: 0 10px;
  }
  .core .row>div>div:nth-of-type(1) {
    margin-bottom: 30px;
  }

  .core p {
    color: white;
  }

  .core_img {
    height: 2.55rem;
    overflow: hidden;
  }

  .core_img img {
    width: 100%;
    transition: .5s;
  }

  .core_img img:hover {
    transform: scale(1.08);
  }

  .core_txt {
    height: 2.55rem;
    border: 2px solid #008fd7;
    padding: 0 30px;
  }

  .core_txt > div {
    height: inherit;
  }

  .core_txt h4 {
    color: white;
    font-size: .18rem;
    font-weight: 100;
    margin: .5rem 0;
  }

  .core_txt p {
    font-size: .16rem;
    text-align: center;
  }

  /* 核心结束 */
  /* 智能工厂（六化） */
  .threeD {
    text-align: center;
    position: relative;
    padding: .7rem 0;
  }

  .threeD h3 {
    color: #151515;
  }

  .threeD > h4, .wisdom h4 {
    text-align: left;
    font-size: .23rem;
    margin-bottom: 20px;
    color: #151515;
    margin-left: 7%;
    padding-left: 15px;
    border-left: 4px solid #008fd7;

  }

  .threeD > .row > div {
    padding: .378348rem .46242rem 0;
    transition: .8s;
    z-index: 1;
  }
  .threeD > .row > div:hover {
    transform:scale(1.05);
    z-index: 999;
  }
  .threeD > .row {
    margin: 0 7%;
  }

  .threeD > .row > div h4 {
    font-size: .25rem;
    color: white;
    text-shadow: 5px 5px 5px #151515;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .threeD > .row > div p {
    font-size: .15rem;
    color: white;
    line-height: .32rem;
    text-align: justify;
    text-shadow: 5px 5px 5px #151515;
  }

  .threeD > .row > div {
    width: 100%;
    height: 2.8rem;
  }

  /* 智能车间架构图 */
  .wisdom {
    padding: .7rem 0;
    text-align: center;
    position: relative;
  }

  .wisdom h3 {
    display: block;
    width: 100%;
    font-size: .28rem;
    color: #151515;
    margin: 0 auto .6rem;
    position: relative;
  }

  .wisdom img {
    width: 1180px;
  }

  /* 解决方案 */
  #solution {
    width: 100%;
    background: white;
    padding: .7rem 0;
    position: relative;
    text-align: center;
  }

  #solution h3 {
    display: block;
    width: 100%;
    font-size: .28rem;
    margin-bottom: .6rem;
  }

  #solution img {
    width: 1115px;
  }

  /* 解决方案结束 */
  @media (max-width: 1199.98px) {
    .bg {
      height: 8rem;
    }

    .solution h3, .core h3, .threeD h3, .content h3, .wisdom h3, #solution h3 {
      font-size: .38rem;
      margin-bottom: .8rem;
    }

    .solution h3:after, .core h3:after, .content h3:after, .threeD h3:after, .content h3:after, .wisdom h3:after, #solution h3:after {
      top: .7rem;
    }

    .new .product {
      padding: 0 15px;
    }

    .mod-inner p {
      margin-top: .3rem;
    }

    .mod-inner h4:after {
      top: 3rem;
    }

    .product.qc-unit-active h4:after {
      top: 1.7rem;
    }

    .core_txt h4 {
      font-size: .26rem;
      margin: .3rem 0;
    }

    .solution p, .core p, .mod-inner p,.threeD > .row > div p {
      font-size: .25rem;
      line-height: .35rem;
    }

    .solution .row {
      margin: 0 5%;
    }

    .core_txt {
      padding: 0 15px;
    }
    .core_txt > div {
      height: 3.2rem;
    }

    .solution ul li {
      font-size: .2rem;
    }
    .threeD > .row {
      margin: 0 5%;
    }
    .threeD img {
      width: 500px;
      height: auto;
    }

    .mod-inner h4,.threeD > .row > div h4 {
      font-size: .28rem;
    }

    .content h3 {
      margin: 0.4rem auto 1rem;
    }
    .threeD > h4, .wisdom h4 {
      font-size: .26rem;
      margin-left: 5%;
    }
    .threeD > .row > div {
      height: 3.2rem;
    }

    .content {
      padding-bottom: 1.5rem;
    }

    .wisdom img, #solution img {
      width: 738px;
    }
  }

  @media (max-width: 767.98px) {
    .bg {
      height: 9rem;
    }
    .content h3 {
      margin-top: .6rem;
    }
    .solution h3, .core h3, .threeD h3, .content h3, .wisdom h3, #solution h3 {
      font-size: .56rem;
      margin-bottom: 1rem;
    }

    .solution h3:after, .core h3:after, .content h3:after, .threeD h3:after, .content h3:after, .wisdom h3:after, #solution h3:after {
      top: 1rem;
    }

    .solution .row {
      margin: 0 5%;
    }

    .solution ul li {
      margin-left: 0;
    }

    .new .product {
      padding: 0 60px;
    }
    .core_txt {
      height: 5rem;
      margin-bottom: 30px;
    }
    .core_txt h4,.mod-inner h4, .threeD > .row > div h4 {
      font-size: .52rem;
    }

    .mod-inner img {
      width: 1.2rem !important;
    }

    .product.qc-unit-active h4:after {
      top: 2.5rem;
    }

    .content p {
      margin: .5rem auto;
    }

    .solution p, .core p, .mod-inner p,.threeD > .row > div p {
      font-size: .35rem;
      line-height: .6rem;
      text-align: justify;
    }

    .core_txt > div {
      height: 6rem;
    }

    .core_txt p {
      text-align: center;
    }
    .threeD > h4, .wisdom h4 {
      font-size: .4rem;
    }

    .threeD > .row > div {
      height: 6rem;
    }

    .threeD > .row > div > div p {
      font-size: .35rem;
      line-height: .6rem;
    }

    .core_img {
      height: 7rem;
    }

    .wisdom img, #solution img {
      width: 577px;
    }

    .qc-unit-5-24 {
      width: 100%
    }

    .qc-unit-active {
      width: 100%;
    }

    .mod-inner h4 {
      font-size: .4rem;
    }

    .new .product {
      border-left: 1px solid #d9d9d9;
    }

    .content {
      height: 1830px;
    }
  }

  @media (max-width: 575.98px) {
    .content h3{
      margin-top: 1rem;
    }
    .bg {
      height: 12rem;
    }

    .solution h3, .core h3, .threeD h3, .content h3, .wisdom h3, #solution h3 {
      font-size: .8rem;
    }

    .solution h3:after, .core h3:after, .content h3:after, .threeD h3:after, .content h3:after, .wisdom h3:after, #solution h3:after {
      top: 1.3rem;
    }

    .core_txt h4 {
      font-size: .6rem;
    }

    .solution p, .core p, .mod-inner p,.threeD > .row > div p {
      font-size: .58rem;
      line-height: .8rem;
    }
    .core_txt {
      height: 6rem;
    }
    .core_txt > div,.threeD > .row > div {
      height: 8rem;
    }

    .core_img {
      height: 8rem;
    }

    .content h3 {
      margin-top: 1.2rem;
      margin-bottom: 50px;
    }
    .threeD > h4, .wisdom h4 {
      font-size: .6rem;
    }
    .threeD > .row > div h4,.threeD > .row > div h4 {
      font-size: .6rem;
    }

    .mod-inner h4 {
      font-size: .6rem;
    }

    .product.qc-unit-active h4:after {
      top: 4rem;
    }

    .mod-inner img {
      width: 2rem !important;
    }

    .mod-inner h4:after {
      top: 5rem;
    }

    .mod-inner p {
      margin-top: 2rem;
    }

    .wisdom img, #solution img {
      width: 90%;
    }

  }
</style>








