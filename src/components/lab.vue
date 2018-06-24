<template>
<div>
  <div class="system_banner">
    <h3 class="animated fadeInDownBig">航空油品计量检定系统</h3>
  </div>
  <div class="solve container-fluid">
    <div class="row">
      <h4>解决方案</h4>
      <p>{{sou}}</p>
    </div>
  </div>
  <div class="point container-fluid">
    <div class="row" id="point">
      <h4>技术特点</h4>
      <div class="col-md-6 pz">
        <div> <img src="../../static/bil/imgamge/pz.png" alt=""></div>
        <span>实验室智能配置</span>
      </div>
      <div class="col-md-6 cj">
        <div> <img src="../../static/bil/imgamge/SN.png" alt=""></div>
        <span>实验室智能配置</span>
      </div>
      <div class="col-md-3 data col-sm-6" id="data">
        <div> <img src="../../static/bil/imgamge/datas.png" alt=""></div>
        <span>实验数据智能对比</span>
      </div>
      <div class="col-md-3 col-sm-6 pro">
        <div> <img src="../../static/bil/imgamge/error.png" alt=""></div>
        <span>实验过程智能预警 </span>
      </div>
      <div class="col-md-3 col-sm-6 resoult">
        <div> <img src="../../static/bil/imgamge/jug.png" alt=""></div>
        <span>实验结果智能判断 </span>
      </div>
      <div class="col-md-3 col-sm-6 qua">
        <div> <img src="../../static/bil/imgamge/qua.png" alt=""></div>
        <span>实验质量智能追溯 </span>
      </div>
    </div>
  </div>
  <div class="advantage container-fluid">
    <div class="row">
      <h4>系统优势</h4>
      <div id="demo" class="carousel slide" data-ride="carousel" style="width: 100%">
        <!-- 指示符 -->
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
          <li data-target="#demo" data-slide-to="3"></li>
          <li data-target="#demo" data-slide-to="4"></li>
          <li data-target="#demo" data-slide-to="5"></li>
          <li data-target="#demo" data-slide-to="6"></li>
        </ul>
        <!-- 轮播图片 -->
        <div class="carousel-inner">
          <div class="carousel-item active container-fluid m-p-0">
            <div class="row m-p-0">
            <div class="col-md-6 m-p-0 bannerfirst"></div>
            <div class="col-md-6 bannertxt">
              <h5>实验流程规范标准</h5>
              <p>对油样、化验项目，化验方法，实验，复核，报表打印及化验统计等进行统一的流程管理。每一步骤设计环环相扣，
                进一步保障数据准确性，实验流程严谨性。平台提供规范化的流程管理。有利于相关实验 针对化验类别，项目合格率、
                项目走势等 人员及管理人员对实验项目的掌控和规范化的操作，减少管理的不合理性，提高实验项目的准确性。
              </p>
            </div>
          </div>
          </div>
          <div class="carousel-item container-fluid m-p-0" v-for="item in advance" :key="item.advance">
            <div class="row m-p-0">
               <div class="col-md-6 m-p-0" v-bind:style="{ 'background-image': 'url(' + item.imgArray + ')','background-repeat':'no-repeat','background-size':'cover' }">
               </div>
            <div class="col-md-6 bannertxt">
              <h5>{{item.title}}</h5>
              <p>{{item.txt}}</p>
            </div>
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
import * as $ from 'jquery'
import '../../node_modules/bootstrap/dist/js/bootstrap.min'
import bottom from '../components/bottom'
console.log($)
export default {
  components: {bottom},
  name: 'lab',
  data () {
    return {
      sou:" 运用云计算、大数据、移动互联等新一代信息技术，采用SOA的服务架构体系，基于物联网的数据智能采集，在实验大数据的深度\n" +
      "挖掘分析的基础下，结合可视化图形报表的形式直观展现。依托IS09001的标准管理体系来管理油品质量过程，强化数据管理，规\n" +
      "范管理流程，从而达到夯实研发基础，降低工作成本，增强工作效率，提高工作质量，提升工作水平的作用。实现工作流程化、\n" +
      "运营体系化、管理信息化、服务主动化的目标。",
      advance: [
        {imgArray: '../../static/bil/imgamge/20180508134210.jpg', title: '实验数据实时共享',
          txt:'对实验数据实时共享，实时反馈实验情 况，油品质量情况，为领导提供直观实 时的决策分析，为操作人员提供实时的针' +
          '对工作人员进行多级权限设置，可以指定实验诊断。'},
        {imgArray: '../../static/bil/imgamge/20180508134220.jpg', title: '管理权限灵活配置',
          txt:'针对工作人员进行多级权限设置，可以指定软件功能模块和实验项目权限。通过平台进行灵活、快捷、简单的操作，优化了' +
          '整个流程的操作性，减少了流程的错误概率，缩短了管理人员的决策周期，提高了人员的工作效率，降低了工作强度。'},
        {imgArray: '../../static/bil/imgamge/20180509104306.jpg', title: '用户体检友好',
          txt:'针对软件功能进行全面优化，提升软件界面的友好度，提高操作的便捷性和灵活性，通过简单的操作，就能完成油样实验、' +
          '复核、报表等复杂逻辑业务功能。'},
        {imgArray: '../../static/bil/imgamge/20180509104325.jpg', title: '系统兼容拓展性强',
          txt:'平台采用可扩展的系统架构。特别是在化验项目，化验方法 程中，系统的高稳定性，能降低工作报表打印等方面，可灵活' +
          '配置，快速的处理更大规模的业务提高系统性能的同时向外延伸扩展。'},
        {imgArray: '../../static/bil/imgamge/20180509112819.jpg', title: '数据多维分析统计',
          txt:'针对化验类别，项目合格率、项目走势等人员及管理人员对实验项目的掌控和规范进行多维度的统计报表分析和图像报表' +
          '分析，为管理人员提供数据统计汇总，对项目进行合理的管控，为管理决策提供依据。'},
        {imgArray: '../../static/bil/imgamge/20180508174036.jpg', title: '系统稳定性高',
          txt:'系统稳定性是系统的首要工作条件在实验过程中，数据分析，质量控制过程中，系统的高稳定性，能降低工作负荷，提高' +
          '工作质量和工作效率。'}
      ],
    }
  }
}
</script>

<style scoped>
  .system_banner{
    text-align: center;
    padding-top: 1.2rem;
    width: 100%;
    height: 9rem;
    background: url("../../static/bil/imgamge/20180507143224.png") no-repeat;
    background-size: cover;
    margin-top: 70px;
  }
  .system_banner h3{
    font-size: .28rem;
  }
  .solve{
    padding: .7rem 0;
    background: rgb(245,251,254);
    text-align: justify;
  }
  
  .solve h4,.point h4,.advantage h4,.system_function h4{
    width: 100%;
    display: block;
    font-size: .28rem;
    text-align: center;
    position: relative;
    margin-bottom: .6rem;
  }
  .solve h4:after,.point h4:after,.advantage h4:after,.system_function h4:after{
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: .5rem;
    border-bottom: 2px solid #008fd7;
    content: "";
  }
  .solve p{
    display: block;
    width: 100%;
    font-size: .15rem;
    font-weight: 200;
    line-height: .32rem;
    margin-bottom: .2rem;
    text-align: justify;
    color: #666666;
  }
  .point{
    margin: 1rem 0;
  }
  .pz,.cj{
    background: url("../../static/bil/imgamge/500577473.png") no-repeat;
    width:100%;
    height:3rem;
    text-align: center;
    background-size: cover;
  }
  .cj{
    background: url("../../static/bil/imgamge/500467715.png") no-repeat;
    width:100%;
    height: 3rem;
    background-size: cover;
    text-align: center;
  }
  .point>div>div div{
    margin-top: .5rem;
    text-align:center
  }
  .point>div>div div img{
    width: 1.5rem;
    margin-bottom: .3rem;
  }
  .point>div>div span{
    color: white;
    font-size: .25rem;
  }
  .data{
    background: url("../../static/bil/imgamge/500646804.png") no-repeat;
    width:100%;
    height: 3rem;
    background-size: cover;
    text-align: center;
  }
  .pro{
    background: rgb(8,164,239);
    width:100%;
    height: 3rem;
    text-align: center;
  }
  .resoult{
    background: rgb(26,221,214);
    width:100%;
    height: 3rem;
    text-align: center;
  }
  .qua{
    background: url("../../static/bil/imgamge/500646804.png") no-repeat;
    width:100%;
    height: 3rem;
    background-size: cover;
    text-align: center;
  }
  .pro img{
    width: 1.35rem!important;
  }
  .advantage{
    margin-top: 30px;
    background: url("../../static/bil/imgamge/20180508174104.png") center no-repeat;
    background-size: cover;
    padding: .7rem 0 .8rem 0;
  }
  .advantage img{
   width: 90%;
  }
  .carousel-indicators {
    bottom: -29px!important;
  }
  .carousel-indicators li{
    cursor: pointer;
  }
  .bannerfirst{
      width: 100%;
      background: url("../../static/bil/imgamge/20180509110031.jpg") no-repeat;
    background-size: cover;

  }
  .bannertxt{
    height: 3rem;
    padding-left: 50px;
    text-align: justify;
  }
  .bannertxt h5{
    font-size: .22rem;
    margin-bottom: .1rem;
  }
  .bannertxt p{
    font-size: .167rem;
    line-height: .4631376121rem;
  }
  @media (max-width:1024px) {
    .system_banner{
      height: 11rem;
      background-position: 50% 50%;
    }
    .system_banner h3{
      font-size: .4rem;
    }
    .solve h4, .point h4, .advantage h4, .system_function h4{
      font-size: .38rem;
      margin-bottom: .8rem;
    }
    .solve h4:after, .point h4:after, .advantage h4:after, .system_function h4:after {
      top: .7rem;
    }
    .solve p{
      font-size: .25rem;
      font-weight: 300;
      line-height: .43rem;
    }
    .point>div>div span{
      font-size: .28rem;
    }
    .bannertxt{
      height: 4.1rem;
    }
    .bannertxt h5{
      font-size: .32rem;
      margin-bottom: .1rem;
    }
    .bannertxt p{
      font-size: .25rem;
      line-height: .4631376121rem;
    }
  }
  @media (max-width:767.98px) {
    .system_banner{
      height: 16rem;
      padding-top: 1rem;
      background-position: 56% 50%;
    }
    .solve {
      padding: .9rem 0;
    }
    .system_banner h3{
      font-size: .5rem;
    }
    .solve h4, .point h4, .advantage h4, .system_function h4{
      font-size: .56rem;
      margin-bottom: 1rem;
    }
    .solve h4:after, .point h4:after, .advantage h4:after, .system_function h4:after {
      top: .9rem;
    }
    .solve p{
      font-size: .34rem;
      font-weight: 300;
      line-height: .66rem;
    }
    #point>div{
      height: 4rem;
    }
    .point>div>div div img{
      width: 2rem;
      margin-bottom: .3rem;
    }
    .point>div>div span{
      font-size: .45rem;
    }
    .carousel-item>.row>div:nth-of-type(1){
      height: 4rem;
      background-size: cover;
    }
    .bannertxt{
      height: 3.5rem;
      padding: 0;
    }
    .bannertxt h5{
      margin-top: 30px;
      font-size: .4rem;
      margin-bottom: .1rem;
    }
    .bannertxt p{
      font-size: .34rem;
      line-height: .4831376121rem;
    }
  }
  @media (max-width:575.98px) {
    .system_banner{
      height: 20rem;
      padding-top: .6rem;
      background-position: 56% 50%;
    }
    .system_banner h3{
      font-size: .8rem;
    }
    .solve {
      padding: .9rem 0;
    }
    .solve h4, .point h4, .advantage h4, .system_function h4{
      font-size: .8rem;
    }
    .solve h4:after, .point h4:after, .advantage h4:after, .system_function h4:after {
      top:1.5rem;
    }
    .solve p{
      font-size: .58rem;
      font-weight: 300;
      line-height: .8rem;
      text-align: justify;
    }
    #point{
      padding-left: 0;
    }
    #point>div{
      height: 5rem;
    }
    .point>div>div div img{
      width: 2.5rem;
      margin-bottom: .5rem;
    }
    .point>div>div span{
      font-size: .55rem;
    }
    .carousel-item>.row>div:nth-of-type(1){
      height: 6rem;
      background-size: cover;
    }
    .bannertxt{
      height:7rem;
      padding: 0;
    }
    .bannertxt h5{
      margin-top: 30px;
      font-size: .62rem;
      margin-bottom: .1rem;
    }
    .bannertxt p{
      font-size: .58rem;
      line-height: .7rem;
    }
  }
</style>
