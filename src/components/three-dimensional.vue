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
      <h3 class="animated slideInDown">行业痛点</h3>
      <div class="row animated fadeInLeftBig">
        <div class="col-md-3 col-sm-6" v-for="item in disadvantage" :key="item.disadvantage">
          <img :src="item.imgArray" alt="" width="135" height="135">
          <p>{{item.txt}}</p>
        </div>
      </div>
    </div>
    <div class="container-fluid threeD" id="threeD">
      <h3>三维全景数字化平台优势</h3>
      <div class="row">
        <p>{{advantage}}</p>
      </div>
      <img src="../../static/bil/imgamge/20180525105548.png" alt="">
    </div>
    <div class="main container-fluid" id="main">
      <h3>平台特性</h3>
      <div class="row">
        <div class="col-md-6 main_bg" ></div>
        <div class=" col-sm-12 col-md-6 maintxt">
          <div v-for="item in characteristic" :key="item.characteristic">
            <p><img :src="item.imgArray" alt="" width="40" height="40">{{item.title}}</p>
            <p class="del">{{item.txt}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid threeD" id="three_D">
      <h3>整体系统架构图</h3>
      <img src="../../static/bil/imgamge/20180629091657.png" alt="">
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
  import bottom from '../components/bottom'
    export default {
      components: {bottom},
      name: "three-dimensional",
      data: function () {
          return{
            introduction: ' 三维全景数字化平台是利用工程级三维数字化技术构建的一个物理工厂全生命周期，完整、准确、可用的虚拟镜像。',
            disadvantage: [
              {imgArray: '../../static/bil/imgamge/20180525151046.png', txt: '无法直观的观察设备状态'},
              {imgArray: '../../static/bil/imgamge/20180525151327.png', txt: '必须专员进入现场查看设备'},
              {imgArray: '../../static/bil/imgamge/20180525151416.png', txt: '数据不完整性'},
              {imgArray: '../../static/bil/imgamge/20180525151440.png', txt: '无法利用现有零散数据产生收益'},
            ],
            advantage:'系统为设计方、施工方、业主等项目相关人员提供了一个全新的跨部门的云协同工作平台。不同角色的项目人员都可以在此平台\n' +
            '        无障碍的直观获取和处理各种项目信息，从而查阅、分享、协调和管理项目。无论在办公室、加工车间或施工现场，项目参与各\n' +
            '        方均可获得最新的项目信息以及同步进行的团队合作。',
            characteristic: [
              {
                imgArray: '../../static/bil/imgamge/point.png', title: '模块化设计',
                txt: '根据不同企业应用场景，提供应用、计算、存储节点等不同层次的模块配置，满足企业三维定制化需求。'
              },
              {
                imgArray: '../../static/bil/imgamge/point.png', title: '高效计算模块',
                txt: '根据企业的实际应用需求，提供最适配的内存、高速SSD和CPU/GPU，如Tesla P4或 K80等计算资源，帮助企业优化计算投入的成本效益。'
              },
              {
                imgArray: '../../static/bil/imgamge/point.png', title: '数据模型',
                txt: '采集企业中现有的各系统数据，分析数据，建立各种数据模型，让企业对设备状态、市场进行预测。'
              },
              {
                imgArray: '../../static/bil/imgamge/point.png', title: '最佳的交互方式',
                txt: '企业可在PC端、看板、手机端等屏幕上进行查看三位全景和数据分析结果，让企业人员随时随地都可以直观的观察工厂设备及数据。'
              },
            ]
          }
      }
    }
</script>

<style scoped>
  .bg {
    background: url("../../static/bil/imgamge/20180619164352.jpg") no-repeat;
    height: 5rem;
    width: 100%;
    background-size: cover;
    background-position: 50% 20%;
    position: relative;
    z-index: 9999;
    margin-top: 70px;
  }

  .question h3, .threeD h3,.main h3 {
    color: #FFF;
    font-size: .28rem;
    margin-bottom: .6rem;
    font-weight: 100;
  }
  .threeD h3{
    color: #151515;
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
    font-size: .15rem;
    font-weight: 200;
    line-height: .32rem;
    color: #666666;
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
    width: 1080px;
    margin-top: 30px;
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
    font-size: .15rem;
  }
  .solution p{
    margin: auto;
  }
  .main_bg{
    background:url("../../static/bil/imgamge/20180528141802.png") no-repeat;
    width: 100%;
    height: inherit;
    background-size: cover;
  }
  @media (max-width:1199.98px) {
    .bg{
      height: 8rem;
    }
    .solution p, .threeD p {
      font-size: .25rem;
      line-height: .35rem;
    }
    .threeD img{
      width: 750px;
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
      background-position: 50% 30%;
    }
    .solution p, .threeD p {
      font-size: .35rem;
      line-height: .6rem;
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
    }
    .question h3:after, .threeD h3:after, .main>h3:after {
      top: 1.5rem;
    }
    .threeD img{
      width: 90%;
      height: 90%;
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
