<template>
  <div>
    <div class="bg">
      <div class="bottom-round"></div>
    </div>
    <div class="question container-fluid">
      <h3 class="animated slideInDown">国内制造业存在的问题</h3>
      <div class="row animated fadeInRightBig">
        <div class="col-md-4 questionlist" v-for="item in disadvantage" :key="item.disadvantage">
          <img :src="item.imgArray" alt="" width="135" height="135">
          <p>{{item.title}}</p>
          <div class="question_txt">
             <span><img :src="item.point" width="40" height="40">{{item.txt}}</span><br>
            <span><img :src="item.point" width="40" height="40">{{item.txts}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid solution" id="w_solution">
      <h3>解决方案</h3>
      <div class="row">
        <p>{{solution}}</p>
      </div>
    </div>
    <!--核心-->
    <div class="container-fluid core" id="core">
      <h3>智能制造核心</h3>
      <div class="row">
        <p id="core_txt">
          CPS是一个综合计算、网络和物理环境的多维复杂系统，通过3C（Computation、Communication、Control）技术的有机融合与
          深度协作，实现制造系统的实时感知、动态控制和信息服务。
        </p>
        <div class="col-md-4">
          <div class="core_img">
            <img src="../../static/bil/imgamge/20180524162004.jpg" alt="" width="100%" height="auto">
          </div>
          <div class="core_txt">
            <div>
              <h4>虚拟与现实世界的完美融合</h4>
              <p>生产过程中的每一步都将在虚拟世界被设计、仿真以及优化，为真实的物理世界包括物料、产品、工厂等建立起一个高仿
                真的数字“双胞胎”。</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="core_txt">
            <div>
              <h4>生产网络</h4>
              <p>
                生产系统种所有生产要素构成庞大的物联网络，生产价值链中所有环节和用户可以实时获得和交换实时的生产信息。
              </p>
            </div>
          </div>
          <div class="core_img">
            <img src="../../static/bil/imgamge/20180524163439.jpg" alt="" width="100%" height="auto">
          </div>
        </div>
        <div class="col-md-4">
          <div class="core_img">
            <img src="../../static/bil/imgamge/20180524163159.png" alt="" width="100%" height="auto">
          </div>
          <div class="core_txt">
            <div>
              <h4>制造系统的沟通与交流</h4>
              <p>产品信息被输入到产品零部件本身，根据自身生产需求，直接与生产系统和设备沟通，发出生产工序指令，指挥设备进行
                自组织生产，满足每个用户的“定制需求”。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid threeD" id="threeD">
      <div>
        <h3>智能制造系统三维架构图</h3>
        <img src="../../static/bil/imgamge/20180524184941.png" alt="" width="600" height="603">
      </div>
    </div>
    <div class="container-fluid content"  id="content">
      <div class="row">
        <h3>生产管理核心指标</h3>
        <div class="mod-wrap new">
          <div class="mod-inner">
            <div class="mod-content qc-grids with-slot">
              <div data-index="0" class="product qc-unit-5-24 qc-unit-active b_l  b_b" style="height:500px;" >
                <img src="../../static/bil/imgamge/20180511151747.png" alt="" width="" height="">
                <h4>生命周期管理</h4>
                <p>
                  对设备的参数、健康状态等数据进行实时监测和预测，对设备故障进行智能预警，有效地及时地预防事故的发生，消除隐患减少损失。
                </p>
              </div>
              <div data-index="1" class="product qc-unit-5-24 b_b">
                <img src="../../static/bil/imgamge/20180511151802.png" alt="" width="" height="">
                <h4>产品质量保证</h4>
                <p>
                  运用新一代光纤传感技术+自动化技术实现严格周密的质量控制过程、全周期质量追溯，可以减少不良产品数量，提升产品质量。
                </p>
              </div>
              <div data-index="2" class="product qc-unit-5-24 b_b">
                <img src="../../static/bil/imgamge/20180511151816.png" alt="" width="" height="">
                <h4>企业成本控制</h4>
                <p>
                  通过物联网技术达到设备自动化、信息自动收集到云端以控制人力成本、材料消耗，最大限度的减少资源浪费，降低生产能耗。
                </p>
              </div>
              <div data-index="3" class="product qc-unit-5-24 b_b">
                <img src="../../static/bil/imgamge/20180511151827.png" alt="" width="" height="">
                <h4>企业生产效率</h4>
                <p>
                  整合工业软件信息系统，极力打造中国制造2025数字化共厂：工业物联网，MES，现场管理提升生产效率，直接缩短交期，实现柔性制造。
                </p>
              </div>
              <div data-index="4" class="product qc-unit-5-24 b_b">
                <img src="../../static/bil/imgamge/20180511151841.png" alt="" width="" height="">
                <h4>大数据可视化</h4>
                <p>
                  采集个系统零散数据，整合数据资产，通过数据分析帮助企业快速定位问题，预测市场变化，快速决策。
                </p>
              </div>
            </div>
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
          {imgArray: '../../static/bil/imgamge/20180524144215.png', title: '数据管理',
            point:'../../static/bil/imgamge/point.png',txt:'  数据更新慢',txts:'数据零散，互通困难'},
          {imgArray: '../../static/bil/imgamge/20180524144827.png', title: '技术问题',
            point:'../../static/bil/imgamge/point.png',txt:'高耗能高污染低附加值',txts:'缺乏自主创新'},
          {imgArray: '../../static/bil/imgamge/20180524154403.png', title: '设备问题',
            point:'../../static/bil/imgamge/point.png',txt:'设备无法进行自动监测',txts:'设备无法进行自动预警'}
        ],
        solution:'迅发信息智能制造解决方案是基于互联网、大数据和物联网的整合，使得产品与生产设备之间、不同的生产设备之间以及数字世界和物理世界之间能够互\n' +
        '          联，使得机器、工作部件、系统以及企业人员会通过网络持续地保持数字信息的交流，实现产品生命周期各环节以及制造装\n' +
        '          备（生产线、工厂）智能化。'
      }
    },
    mounted: function () {
      $('.mod-content .product').hover(function () {
        $(this).addClass('qc-unit-active').siblings().removeClass('qc-unit-active')
        $(this).css('height', '500px').siblings().css('height', '400px')
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

 .question h3,.solution h3,.core h3,.threeD h3 {
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
  /*question*/
  .question {
    width: 100%;
    background-size: cover;
    padding: 30px 0;
    text-align: center;
    position: relative;
    z-index: 999;
  }

  .question h3,.solution h3{
    color: black;
  }

  .question h3:after,.solution h3:after,.core h3:after,.content h3:after,.threeD h3:after{
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: .5rem;
    border-bottom: 2px solid #008fd7;
    content: "";
  }

  .question .row {
    margin: 0 10%;

  }
  .question .row > div {
    position: relative;
  }

  .question .row > div>img {
    width: 135px;
    transition: .8s;
  }
  .question .row > div>.question_txt img{
    width: 40px;
  }
  .question .row > div>img:hover{
    transform: rotateY(180deg);
  }
  .question .row > div p {
    font-size: .18rem;
    margin: 15px 0;
  }

  .question .row > div span {
    display: inline-block;
    font-size: .16rem;
    text-align: left;
  }

  .question_txt {
    display: inline-block;
    text-align: left;
  }

  .solution{
    width: 100%;
    margin-top:80px;
    background: whitesmoke;
    background-size: cover;
    padding: .5rem 0;
    text-align: center;
    position: relative;
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
  .content{
    text-align: center;
    padding-bottom: 1.5rem;
  }
  .content h3{
    display: inline-block;
    width: 100%;
    font-size: .28rem;
    margin:.7rem auto .4rem;
    letter-spacing:10px;
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
    margin-top: .2rem;
  }
  .mod-inner h4:after{
    width: 12%;
    position: absolute;
    top: 2rem;
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
    width: 18.75%
  }
  .b_l{
    border-left: 1px solid #d9d9d9;
  }
  .b_b{
    border-bottom: 1px solid #d9d9d9;
  }
  /*改变宽度*/
  .qc-unit-active {
    width: 25%
  }
  .new .product {
    background-color: #fff;
    border-top: 4px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
    padding: 0 15px;
    position: relative;
    height: 400px;
    transition: all .3s cubic-bezier(.4, 0, .2, 1), z-index 0s .12s;
    min-height: 0;
    overflow: hidden
  }
  .product.qc-unit-active {
    border-top: 4px solid #7ECEF4;
    margin-top: -30px;
    border-left: 1px solid #7ECEF4;
    border-right: 1px solid #7ECEF4;
    border-bottom: 1px solid #7ECEF4;
    padding-bottom: 20px;
    box-shadow: 0 3px 20px rgba(0, 0, 0, .1);
    transform: translate3d(0, -2px, 0)
  }
  .mod-inner p{
    opacity: 0;
    margin-top: 1rem;
    text-align: justify;
    transition: all .3s;
  }
  .product.qc-unit-active p{
    opacity: 1
  }
  .product.qc-unit-active h4:after{
    left:10%;
    width:90%;
    border-bottom: 1px solid #7ECEF4;
  }
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
  @media (max-width:1024px) {
    .bg{
      height: 8rem;
    }
    .question h3, .solution h3, .core h3, .threeD h3,.content h3 {
      font-size: .38rem;
      margin-bottom: .8rem;
    }
    .question h3:after, .solution h3:after, .core h3:after, .content h3:after, .threeD h3:after,.content h3:after {
      top: .7rem;
    }
    .question .row > div>img{
      width: 100px;
      height: 100px;
    }
    .question .row > div p {
      font-size: .25rem;
    }
    .question .row > div span {
      font-size: .2rem;
      height: 30px;
      line-height: 30px ;
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
    .question h3, .solution h3, .core h3, .threeD h3,.content h3 {
      font-size: .56rem;
      margin-bottom: 1rem;
    }
    .question h3:after, .solution h3:after, .core h3:after, .content h3:after, .threeD h3:after,.content h3:after {
      top: 1rem;
    }
    .questionlist{
      margin-top: 30px;
    }
    .question .row > div>img{
      width: 100px;
      height: 100px;
    }
    .question .row > div p {
      margin: 10px 0;
      font-size: .4rem;
    }
    .question .row > div span {
      font-size: .36rem;
      height: 30px;
      line-height: 30px ;
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
    .question h3, .solution h3, .core h3, .threeD h3,.content h3 {
      font-size: .8rem;
    }
    .question h3:after, .solution h3:after, .core h3:after, .content h3:after, .threeD h3:after,.content h3:after {
      top: 1.3rem;
    }

    .question .row > div p {
      font-size: .56rem;
    }
    .question .row > div span {
      font-size: .52rem;
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








