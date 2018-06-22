<template>
  <div>
    <div class="bg">
      <div class="bottom-round"></div>
    </div>
    <div class="container-fluid solution" id="w_solution">
      <div class="row">
        <p class="animated slideInDown">{{introduction}}</p>
      </div>
    </div>
    <div class="question container-fluid">
      <h3 class="animated slideInDown">当前制造业设备痛点</h3>
      <div class="row animated fadeInLeftBig">
        <div class="col-md-3 col-sm-6" v-for="item in disadvantage" :key="item.disadvantage">
          <img :src="item.imgArray" alt="" width="135" height="135">
          <p>{{item.txt}}</p>
        </div>
      </div>
    </div>
    <div class="container-fluid threeD" id="threeD">
      <div class="row">
      <h3>设备健康动态监测架构图</h3>
      <p>数据自动上传至监测管理平台，企业通过管理平台实现对设备的分类管理，设备健康信息网络储存，健康数据统计分析，设备问题跟踪，设备问题预测，设备维修保养记录等管理功能。</p>
      <img src="../../static/bil/imgamge/20180524193228.jpg" alt="" width="1100" height="844.75">
      </div>
    </div>
    <div class="main container-fluid" id="main">
      <h3>平台特性</h3>
      <div class="row">
        <div class="col-md-6 main_bg"></div>
        <div class="col-sm-12 col-md-6 maintxt">
          <div v-for="item in characteristic" :key="item.characteristic">
            <p><img :src="item.imgArray" alt="" width="40" height="40">{{item.title}} </p>
            <p class="del">{{item.txt}}</p>
          </div>
        </div>z
      </div>
    </div>
    <div class="container-fluid threeD" id="three_D">
      <h3>整体系统架构图</h3>
      <img src="../../static/bil/imgamge/20180620103032.png" alt="" width="1100" height="637.55">
    </div>
     <bottom></bottom>
  </div>
</template>

<script>
  import bottom from '../components/bottom'
  export default {
    components: {bottom},
    name: "health",
    data: function () {
      return {
        introduction:'设备安全是社会公共安全的重要组成部分，现代工业设备日益系统化、复杂化，一旦发生故障，不但对工业生产产生一定的影\n' +
        '          响，甚至导致人员财产损失。因此，对设备的健康状态进行实时监测和预测，可以有效地及时地预防事故的发生，消除隐患减\n' +
        '          少损失，迅发科技可以为企业提供设备健康动态监测与智能预警一站式服务。',
        disadvantage: [
          {imgArray: '../../static/bil/imgamge/20180525160530.png', txt: '无法科学的去管理设备'},
          {imgArray: '../../static/bil/imgamge/20180525160544.png', txt: '设备的故障缺乏预判'},
          {imgArray: '../../static/bil/imgamge/20180525160558.png', txt: '无法快速锁定出现问题的位置'},
          {imgArray: '../../static/bil/imgamge/20180525160617.png', txt: '无法远程操作设备'},
        ],
        characteristic: [
          {
            imgArray: '../../static/bil/imgamge/point.png', title: '维修保养更科学',
            txt: '健康管理监测对检测的内容、频次、参数分析诊断等进行了科学设计，选定动力性、经济性、净化性、安全性四大类健康指标，为维修保养方案提供准确选择和有效指导。'
          },
          {
            imgArray: '../../static/bil/imgamge/point.png', title: '智能设备状态跟踪',
            txt: '健康监测追踪动态参数的变化，增加监测的频度和内容，在每次保养中都进行全面系统检测，有效监控设备工况的变异、防御自愈能力的衰减、损伤量变的程度，适时进行调整，恢复健康，防止故障生成。'
          },
          {
            imgArray: '../../static/bil/imgamge/point.png', title: '定期保养预警',
            txt: '系统根据设备库进行检索需要定期维护得设备，维护到期前自动以短信、邮件、弹窗以及其他方式提醒到相关人员。'
          },
          {
            imgArray: '../../static/bil/imgamge/point.png', title: '突发故障维保预警',
            txt: '传统管理方式对于突发损坏得设备难以实现故障快速定位，分析故障原因后再有针对性的维保周期长。本系统可以快速定位故障原因，并给出合理性的维保建议、维修厂商以及企业是否有可调配的替代设备。'
          },
          {
            imgArray: '../../static/bil/imgamge/point.png', title: '劳损极限维保预警',
            txt: '传统管理方式对于突发损坏得设备难以实现故障快速定位，分析故障原因后再有针对性的维保周期长。本系统可以快速定位故障原因，并给出合理性的维保建议、维修厂商以及企业是否有可调配的替代设备。'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .bg {
    background: url("../../static/bil/imgamge/20180620175533.jpg") no-repeat;
    height:5rem;
    width: 100%;
    background-size: cover;
    background-position: 50% 30%;
    position: relative;
    z-index: 9999;
    margin-top: 70px;
  }

  .question h3, .threeD h3,.main h3 {
    color: #FFF;
    font-size: .28rem;
    margin:0 auto .6rem;
    font-weight: 100;
  }
  .threeD h3{
    color: black;
  }
  .bottom-round {
    width: 100%;
    position: absolute;
    bottom:-30px;
    height: 60px;
    background: whitesmoke;
    z-index: 99;
    border-radius: 100%;
  }
  /*question*/
  .question {
    width: 100%;
    background: url("../../static/bil/imgamge/20180524142826.png") no-repeat;
    background-size: cover;
    padding: .5rem 0;
    text-align: center;
    position: relative;
    z-index: 999;
  }
  .question h3:after, .threeD h3:after,.main>h3:after{
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

  .question .row > div img {
    width: 135px;
    transition: .8s;
  }
  .question .row > div img:hover{
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
  }
  .question .row > div p {
    font-size: .18rem;
    margin: 15px 0;
    color:white;
  }

  .question .row > div span {
    width: 100%;
    display: inline-block;
    font-size: .16rem;
    text-align: left;
  }
  .solution{
    width: 100%;
    background: whitesmoke;
    background-size: cover;
    padding: 30px 0;
    position: relative;
  }
  .solution p,.threeD p{
    display: block;
    width: 100%;
    font-size: .17rem;
    font-weight: 200;
    line-height: .33rem;
    margin-bottom: .2rem;
    text-align: center;
  }
  .threeD{
    width: 100%;
    text-align: center;
    position: relative;
    background-size: cover;
    padding: .7rem 0;
  }
  .threeD img{
    width: 1100px;
   margin: auto;
  }
  .main{
    width: 100%;
    background:url("../../static/bil/imgamge/20180522133716.png") no-repeat;
    padding: .7rem 0;
    text-align: center;
    position: relative;
    background-size: cover;
  }
  .maintxt img{
    width: 40px;
  }
  .main .row{
    margin-top: 60px;
  }
  .maintxt{
    text-align: left;
  }
   .main p{
      color: white;
      font-weight: 100;
     font-size: .18rem;
  }
  .main .del{
      padding-left: 40px;
    font-size: .16rem;
  }
  .main_bg{
      background:url("../../static/bil/imgamge/20180525182458.jpg") no-repeat;
      width: 100%;
      height: inherit;
     background-size: cover;
    background-position: 50% 50%;
  }
  @media (max-width:1024px) {
    .bg{
      height: 8rem;
    }
    .solution p, .threeD p {
      font-size: .25rem;
      line-height: .4rem;
    }
    .question h3, .threeD h3, .main h3 {
      font-size: .38rem;
      margin-bottom: .8rem;
    }
    .question h3:after, .threeD h3:after, .main>h3:after {
      top: .7rem;
    }
    .question .row > div img{
      width: 100px;
      height: 100px;
    }
    .question .row > div p{
      font-size: .25rem;
    }
    .main p{
      font-size: .25rem;
    }
    .main .del{
      font-size: .23rem;
      font-weight: 100;
     }

  }
  @media (max-width:767.98px) {
    .bg{
      height: 9rem;
      background-position: 63% 30%;
    }
    .solution p, .threeD p {
      font-size: .36rem;
      line-height: .5rem;
      text-align: justify;
    }
    .question h3, .threeD h3, .main h3 {
      font-size: .56rem;
      margin-bottom: 1rem;
    }
    .question h3:after, .threeD h3:after, .main>h3:after {
      top: 1rem;
    }
    .threeD img{
      width: 577px;
      margin:30px auto 0;
    }
    .question .row > div p{
      font-size: .36rem;
    }
    .main p{
      font-size: .38rem;
    }
    .main .del{
      font-size: .35rem;
      margin-bottom: 30px;
    }
    .main_bg{
      display: none;
    }
  }
  @media (max-width:575.98px) {
    .bg{
      height: 12rem;
    }
    .solution p, .threeD p {
      font-size: .58rem;
      line-height: .8rem;
    }
    .question h3, .threeD h3, .main h3 {
      font-size: .8rem;
      margin-bottom: 1rem;
    }
    .question h3:after, .threeD h3:after, .main>h3:after {
      top: 1.5rem;
    }
    .threeD img{
      width: 100%;
      height: 100%;
    }
    .question .row > div p{
      font-size: .6rem;
    }
    .main p{
      font-size: .6rem;
    }
    .main .del{
      font-size: .58rem;
      padding: 0;
    }
  }
</style>
