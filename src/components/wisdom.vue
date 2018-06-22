<template>
  <div>
    <div class="bg">
      <div class="bottom-round"></div>
    </div>
    <div class="container-fluid content"  id="content">
      <div class="row">
        <h3 class="animated  fadeInDown">智能制造面临的挑战</h3>
        <div class="mod-wrap new">
          <div class="mod-inner">
            <div class="mod-content qc-grids with-slot">
              <div data-index="0" class="product qc-unit-5-24 qc-unit-active b_l  b_b" style="height:400px;" >
                <img src="../../static/bil/imgamge/20180622164918.png" alt="" width="" height="">
                <h4>全连接</h4>
                <p>资金量、管理信息流、物流信息流、服务信息流等各个相关环节需要全面连接，缺少任一节点的连接，都有可能影响全面自动化的实现。</p>
              </div>
              <div data-index="1" class="product qc-unit-5-24 b_b">
                <img src="../../static/bil/imgamge/20180622164945.png" alt="" width="" height="">
                <h4>全控制</h4>
                <p>智能制造将数据流转作为核心，连接全部制造和相关环节，每个节点的交互设计和计算能力是实现全控制的基础。同时对智能设备(包括工业机器人)进行监测和控制。</p>
              </div>
              <div data-index="2" class="product qc-unit-5-24 b_b">
                <img src="../../static/bil/imgamge/20180622165047.png" alt="" width="" height="">
                <h4>资源整合</h4>
                <p>智能制造系统化工程需整合供应链、生产、物流、服务平台、营销资源等等，才能最大化的实现智能制造的自动化及产能最大化。</p>
              </div>
              <div data-index="3" class="product qc-unit-5-24 b_b">
                <img src="../../static/bil/imgamge/20180622165109.png" alt="" width="" height="">
                <h4>数据采集</h4>
                <p>企业内外大小数据的采集是智能制造效率的基础，尤其是外部环境数据、行业数据和用户数据的获取能力。</p>
              </div>
              <div data-index="4" class="product qc-unit-5-24 b_b">
                <img src="../../static/bil/imgamge/20180622165142.png" alt="" width="" height="">
                <h4>数据应用</h4>
                <p>数据将成为智能制造的生命线，数据收集、存储、快速调拨、模型搭建、规则创建及整合、计算和应用，每个环节都与连接、控制和自动化息息相关。</p>
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
          <li v-for="item in disadvantage" :key="item.disadvantage" >
              <span> <img :src="item.point" alt="">{{item.txt}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!--核心-->
    <div class="container-fluid core" id="core">
      <h3>  一个网络：CPS</h3>
      <div class="row">
        <p id="core_txt">
          CPS是英文CyberPhysical System的缩写，本质就是构建一套（Cyber空间与物理（Physical）空间之间基于数
          据自动流动的状态感知、实时分析、科学决策、精准执行的闭环赋能体系，解决生产制造、应用服务过程中的复杂性和不确定
          性问题，提高资源配置效率，实现资源优化。
        </p>
        <div class="col-md-4">
          <div class="core_img">
            <img src="../../static/bil/imgamge/20180524162004.jpg" alt="" width="100%" height="auto">
          </div>
          <div class="core_txt">
            <div>
              <h4>科学决策</h4>
              <p>通过大数据平台，实现异构系统数据的流动与知识的分享</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="core_txt">
            <div>
              <h4>状态感知</h4>
              <p>通过各种各样的传感器感知物质世界的运行状态</p>
            </div>
          </div>
          <div class="core_txt">
            <div>
              <h4>精准执行</h4>
              <p>通过控制器、执行器等机械硬件实现对决策的反馈响应，这一切都依赖于一个实时、可靠、安全的网络。</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="core_txt">
            <div>
              <h4>实时分析</h4>
              <p>通过工业软件实现数据、信息、知识的转化</p>
            </div>
          </div>
          <div class="core_img">
            <img src="../../static/bil/imgamge/20180524163159.png" alt="" width="100%" height="auto">
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid threeD" id="threeD">
      <div>
        <h3>智能车间架构图</h3>
        <img src="../../static/bil/imgamge/20180524184941.png" alt="" width="600" height="603">
      </div>
    </div>
    <div class="container-fluid" id="solution">
      <div class="row">
        <h3 class="solution_title">三项集成</h3>
        <div class="col-md-4">
          <div class="cardlist">
            <div class="imgbox imgbox1"></div>
            <h4>纵向集成</h4>
          </div>
          <div class="imgtxt imgtxt2">
            <p>
              纵向集成就是解决企业内部信息孤岛的集成，智能制造所要追求的就是在企业内部实现所有环节信息无缝链接，这是所有智能化的基础。
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cardlist">
            <div class="imgbox imgbox2"></div>
            <h4>横向集成</h4>
          </div>
          <div class="imgtxt  imgtxt3">
            <p>
              横向集成是企业之间通过价值链以及信息网络所实现的一种资源整合，为实现各企业间的无缝合作，提供实时产品与服务，
              推动企业间研产供销、经营管理与生产控制、业务与财务全流程的无缝衔接和综合集成，实现产品开发、生产制造、经营
              管理等在不同的企业间的信息共享和业务协同。
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cardlist">
            <div class="imgbox imgbox3"></div>
            <h4>端到端集成</h4>
          </div>
          <div class="imgtxt imgtxt1">
            <p>端对端集成是“通过产品全价值链和为客户需求而协作的不同公司，使现实世界与数字世界完成整合”。更是突出了以产
              品的研发、生产、销售、服务等为主线，实现企业间的集成。
            </p>
          </div>
        </div>
      </div>
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
    data () {
      return {
        disadvantage: [
          {point:'../../static/bil/imgamge/point.png',txt:'  一个网络：CPS'},
          {point:'../../static/bil/imgamge/point.png',txt:'  两大主题：智能工厂、智能车间'},
          {point:'../../static/bil/imgamge/point.png',txt:' 三项集成：横向集成、纵向集成、端到端集成'}
        ],
        solution:'智能制造技术是传感技术、网络技术、自动化技术、人工智能技术等新一代信息技术与先进自动化技术、传感技术、' +
        '控制技术、数字制造技术结合，通过智能化的感知、人机交互、决策和执行技术，实现产品生命周期各环节以及制造装备（车间、' +
        '工厂）智能化。智能实现工厂和企业内部、企业之间和产品全生命周期的实时管理和优化的新型制造系统。'
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
    background: url("../../static/bil/imgamge/20180621095757.jpg") no-repeat;
    height: 5rem;
    width: 100%;
    background-size: cover;
    background-position: 50% 50%;
    position: relative;
    margin-top: 70px;
  }

  .solution h3,.core h3,.threeD h3 {
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
    bottom:-30px;
    height: 60px;
    background: white;
    z-index: 99;
    border-radius: 100%;
  }
  /*  挑战开始 */
  .content{
    text-align: center;
    padding-bottom: .4rem;
  }
  .content h3{
    font-size: .28rem;
    margin:.7rem auto .4rem;
    font-weight: 100;
  }
  .content p{
    width: 100%;
    font-size: .15rem;
    margin:.2rem auto;
    font-weight: 300;
  }
  .content .mod-wrap{
    margin-top: .2rem;
    width: 100%;;
    height: 400px;
  }
  .qc-grids {
    font-size: 0
  }
  .mod-inner img{
    width: .6rem!important;
    margin-top: .4rem;
  }
  .mod-inner h4{
    width: 100%;
    font-size: .18rem;
    margin-top: .1rem;
    color: #1790d4;
  }
  .mod-inner h4:after{
    width: 12%;
    position: absolute;
    top: 1.5rem;
    left:50%;
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
  .b_l{
    border-left: 1px solid #d9d9d9;
  }
  .b_b{
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
  .mod-inner p{
    opacity: 0;
    margin-top: .4rem;
    text-align: justify;
    transition: all .3s;
  }
  .product.qc-unit-active p{
    opacity: 1
  }
  .product.qc-unit-active h4:after{
    left:50%;
    margin-left: -40%;
    width:80%;
    border-bottom: 1px solid #7ECEF4;
  }
  /*挑战结束*/

  /* 解决方案 */
  .solution{
    width: 100%;
    margin-top:80px;
    background: whitesmoke;
    background-size: cover;
    padding: .5rem 0;
    text-align: center;
    position: relative;
  }
  .solution h3{
    color: black;
    margin-bottom: .4rem;
  }
  .solution h3:after,.core h3:after,.content h3:after,.threeD h3:after, #solution h3:after{
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: .5rem;
    border-bottom: 2px solid #008fd7;
    content: "";
  }
  .solution .row {
    margin:  0 18%;
  }
  .solution img{
    width: 40px;
  }
  .solution ul{
   margin: auto;
  }
  .solution ul li {
    float: left;
    margin-left: 30px;
    font-size: .16rem;
  }
  .solution p,.core p{
    display: block;
    width: 100%;
    font-size: .17rem;
    font-weight: 200;
    line-height: .33rem;
    margin-bottom: .2rem;
    text-align:center;
  }
  /*核心开始*/
  .core{
    width: 100%;
    position: relative;
    text-align: center;
    padding: .7rem 0;
    background: url("../../static/bil/imgamge/20180524142826.png") no-repeat;
    background-size: cover;
  }
  .core p{
    color: white;
  }
  .core_img{
    height: 2.6665994047rem;
    overflow: hidden;
    padding: 10px;
  }
  .core_img img{
    width: 100%;
    transition: .5s;
  }
  .core_img img:hover{
    transform: scale(1.08);
  }
  .core_txt{
    padding:10px;
  }
  .core_txt>div{
    height: 2.55rem;
    border: 2px solid #008fd7;
    padding:0 15px;
  }
  .core_txt h4{
    color: white;
    font-size: .18rem;
    font-weight: 100;
    margin: .5rem 0;
  }
  .core_txt p{
      font-size: .16rem;
  }
  /* 核心结束 */
  /* 三维架构图 */
  .threeD{
    text-align: center;
    position: relative;
    background: url("../../static/bil/imgamge/20180524142826.png") no-repeat;
    background-size: cover;
  }
  .threeD>div{
    width: 100%;
    height: inherit;
    background: rgba(4,10,16,.3);
    opacity: 50%;
    padding: .7rem 0;
  }
  .threeD img{
      width: 600px;
  }
  /* 解决方案 */
  #solution {
    width: 100%;
    background: #f9f9f9;
    padding: .7rem 0;
    position: relative;
  }

 #solution > .row {
    text-align: center;
  }

  #solution > .row > div {
    padding: 24px;
    transition: .8s;
  }

  #solution h3{
    display: block;
    width: 100%;
    font-size: .28rem;
    margin-bottom: .6rem;
  }

  .cardlist {
    background: white;
  }

  .imgbox {
    width: 100%;
    background: url("../../static/bil/imgamge/20180622155509.png") no-repeat;
    height: 3rem;
    background-size: cover;
    transition: .3s;
    background-position: 50% 50%;
  }

  #solution > .row > div:hover {
    transform: scale(1.05);
  }

  .imgbox1 {
    background: url("../../static/bil/imgamge/20180622155427.png") no-repeat;
    height: 3rem;
    background-size: cover;
    background-position: 50% 50%;
  }

  .imgbox2 {
    background: url("../../static/bil/imgamge/20180622153205.png") no-repeat;
    height: 3rem;
    background-size: cover;
    background-position: 50% 50%;
  }

  .imgtxt {
    position: relative;
    padding: 40px 35px 0;
  }

  .cardlist h4 {
    font-size: .18rem;
    text-align: center;
    font-weight: 600;
    padding: 15px 0;
  }

  .imgtxt p {
    font-size: .15rem;
    text-align: justify;
    line-height: .25rem;
  }
  /* 解决方案结束 */
  @media (max-width:1024px) {
    .bg{
      height: 8rem;
    }
   .solution h3, .core h3, .threeD h3,.content h3 {
      font-size: .38rem;
      margin-bottom: .8rem;
    }
    .solution h3:after, .core h3:after, .content h3:after, .threeD h3:after,.content h3:after {
      top: .7rem;
    }
    .core_txt h4 {
      font-size: .28rem;
      margin: .3rem 0;
    }
    .solution p, .core p,.mod-inner p {
      font-size: .25rem;
      line-height: .4rem;
    }
    .core_txt>div {
      height: 3.2rem;
    }
    .core_img {
      height: 3.2rem;
      overflow: hidden;
    }
    .core_img img{
      height: 100%;
    }
    .threeD img {
      width: 500px;
      height: auto;
    }
    .mod-inner h4 {
      font-size: .28rem;
    }
    .content h3 {
      margin:0.4rem auto 1rem;
    }
    .content {
      padding-bottom: 1.5rem;
    }
    }
  @media (max-width:767.98px) {
    .bg{
      height: 9rem;
    }
    .solution h3, .core h3, .threeD h3,.content h3 {
      font-size: .56rem;
      margin-bottom: 1rem;
    }
     .solution h3:after, .core h3:after, .content h3:after, .threeD h3:after,.content h3:after {
      top: 1rem;
    }
    .core_txt h4 {
      font-size: .4rem;
    }
    .solution p, .core p,.mod-inner p {
      font-size: .35rem;
      line-height: .6rem;
      text-align: justify;
    }
    .core_txt>div {
      height: 6rem;
    }
    .core_img {
      height:6rem;
    }

    .threeD img {
      width: 90%;
      height: 90%;
    }
    .qc-unit-5-24 {
      width:100%
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
      height: 2300px;
    }
  }
  @media (max-width:575.98px) {
    .bg{
      height: 12rem;
    }
    .solution h3, .core h3, .threeD h3,.content h3 {
      font-size: .8rem;
    }
    .solution h3:after, .core h3:after, .content h3:after, .threeD h3:after,.content h3:after {
      top: 1.3rem;
    }
    .core_txt h4 {
      font-size: .6rem;
    }
    .solution p, .core p,.mod-inner p {
      font-size: .58rem;
      line-height: .8rem;
    }
    .core_txt>div {
      height: 8rem;
    }
    .core_img {
      height:8rem;
    }
    .content h3 {
      margin-bottom: 50px;
    }
    .mod-inner h4 {
      font-size: .6rem;
    }
    .mod-inner img {
      width: 2rem!important;
    }
    .product.qc-unit-active h4:after {
      top: 20%;
    }
    .mod-inner h4:after {
      top: 25%;
    }
    .mod-inner p {
      margin-top: 2rem;
    }

  }
</style>








