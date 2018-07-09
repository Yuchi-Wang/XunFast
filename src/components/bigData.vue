<template>
  <div>
    <div class="banner">
      <div class="out-border">
        <div class="middle-border">
          <div class="inner-border">
            <h4>数据准备 ○ ○ ○ ○  数据建模 ○ ○ ○ ○ 数据可视化
            <span>< < < </span>
            </h4>
            <h3>新一代大数据可视化与3D建模</h3>
            <h5><span>> > > > ></span>互联网、大数据、人工智能、物联网等新一代信息技术</h5>
          </div>
        </div>
      </div>
      <div class="bottom-round"></div>
    </div>
    <div class="container-fluid solution" id="w_solution">
      <div class="row">
        <p class="animated slideInDown">{{souTxt}}</p>
      </div>
    </div>
    <div class="question container-fluid">
      <h3 class="animated slideInDown">行业痛点</h3>
      <div class="row animated fadeInLeftBig">
        <div class="col-md-3 col-sm-6" v-for="item in disadvantage" :key="item.disadvantage">
          <img :src="item.imgArray" width="135" height="135">
          <p>{{item.txt}}</p>
        </div>
      </div>
    </div>
    <div class="container-fluid threeD" id="threeD">
      <div class="row"></div>
      <h3>大数据可视化平台战略规划</h3>
      <p>{{threeTxt}}</p>
      <img src="../../static/bil/imgamge/20180702174821.jpg" alt="">
    </div>
    <div class="main container-fluid" id="main">
      <h3>平台特性</h3>
      <div class="row">
        <div class="col-md-6 main_bg"></div>
        <div class="col-sm-12 col-md-6 maintxt">
          <div v-for="item in characteristic" :key="item.characteristic">
            <p><img :src="item.imgArray" alt="" width="40" height="40">{{item.title}}</p>
            <p class="del">{{item.txt}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid threeD" id="three_D">
      <h3>整体系统架构图</h3>
      <img src="../../static/bil/imgamge/20180629091815.png" alt="">
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
  import bottom from '../components/bottom'

  export default {
    components: {bottom},
    name: "bigData",
    data: function () {
      return {
        disadvantage: [
          {imgArray: '../../static/bil/imgamge/20180525153301.png', txt: '无法精准分析竞争对手情况'},
          {imgArray: '../../static/bil/imgamge/20180525153147.png', txt: '市场分析不透彻'},
          {imgArray: '../../static/bil/imgamge/20180525153330.png', txt: '数据展示不直观'},
          {imgArray: '../../static/bil/imgamge/20180525153351.png', txt: '现有数据无法利用'},
        ],
        characteristic: [
          {
            imgArray: '../../static/bil/imgamge/point.png', title: '企业平台水平化设计',
            txt: '通过大数据计算对社交信息数据、客户互动数据等，可以帮助企业进行品牌信息的水平化设计和碎片化扩散。'
          },
          {
            imgArray: '../../static/bil/imgamge/point.png', title: '实时准确竞争对手状态',
            txt: '数据竞争已经成为企业提升核心竞争力的利器。来自各个方面零碎的庞大数据融合在一起，可以构建出企业竞争的全' +
            '景图，洞察到竞争环境和竞争对手的细微变化，从而快速响应，制定有效竞争策略'
          },
          {
            imgArray: '../../static/bil/imgamge/point.png', title: '企业快速做出决策',
            txt: '通过大数据分析，确定产品的营销情况，以保持最优的库存，降低成本；洞察销售全局，瞬间捕获到各种细微的变化，从而快速响应，制定营销策略'
          },
          {
            imgArray: '../../static/bil/imgamge/point.png', title: '数据可视化',
            txt: '通过数据采集、数据提取和数据挖掘，将数据进行处理分析，直观的将结果展示到企业决策人的面前'
          }
        ],
        souTxt: '迅发科技大数据建模与可视化平台用一站式业务和数据分析平台，整合你的数据资产。平台包括数据准备、数据建模、数据可视化三大块。',
         threeTxt: '迅发科技为您提供大数据战略规划和实施落地全面咨询服务，具体包括大数据整体战略规划以及基于具体应用场景的落地方案，从而实现系统规划、重点突破。'
      }
    }
  }
</script>

<style scoped>
  .banner {
    width: 100%;
    height: 5rem;
    background: url("../../static/bil/imgamge/20180705113117.jpg") no-repeat;
    background-size: cover;
    position: relative;
    margin-top: 70px;
    background-position: 50% 50%;
    padding-top:.75rem;
  }
  .out-border {
    width: 56%;
    height: 3.5rem;
    margin: auto;
    border: 1px solid #478cb1;
    padding: 15px;
  }
  .middle-border {
    width: 100%;
    height: 100%;
    border: 2px solid #478cb1;
    padding: 40px;
  }
  .inner-border {
    width: 100%;
    height: 100%;
    border: 2px solid #478cb1;
    color: #FFF;
    padding-top: .4rem;
  }
  .inner-border h4 {
    font-size: .25rem;
    text-align: center;
  }
  .inner-border h3 {
    text-align: center;
    font-size: .5rem;
    font-weight: bold;
    margin: .1rem 0;
    text-shadow: 5px 5px 5px #0f111e;
  }
  .inner-border h5 {
    text-align: center;
    font-size: .23rem;
  }
  .inner-border span {
    font-weight: bold;
  }
  .bottom-round {
    width: 100%;
    position: absolute;
    bottom: -30px;
    height: 60px;
    background: whitesmoke;
    z-index: 99;
    border-radius: 100%;
  }

  /*question*/
  .question {
    width: 100%;
    background: url("../../static/bil/imgamge/20180702170521.jpg") no-repeat;
    background-size: cover;
    padding: .5rem 0;
    text-align: center;
    position: relative;
    z-index: 999;
  }
  .question h3, .threeD h3, .main h3 {
    color: #FFF;
    font-size: .28rem;
    margin-bottom: .6rem;
    font-weight: 100;
  }

  .threeD h3 {
    color: #151515;
  }

  .question h3:after, .threeD h3:after, .main > h3:after {
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

  .question .row > div img:hover {
    transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
  }

  .question .row > div p {
    font-size: .18rem;
    margin: 15px 0;
    color: white;
  }

  .question .row > div span {
    width: 100%;
    display: inline-block;
    font-size: .16rem;
    text-align: left;
  }

  .solution {
    width: 100%;
    background: whitesmoke;
    background-size: cover;
    padding: 30px 0;
    position: relative;
  }

  .solution p, .threeD p {
    font-size: .15rem;
    font-weight: 100;
    line-height: .32rem;
  }

  .threeD {
    width: 100%;
    text-align: center;
    position: relative;
    background-size: cover;
    padding: .7rem 15px;
  }

  .threeD img {
    width:1200px;
  }

  .main {
    width: 100%;
    background: url("../../static/bil/imgamge/20180701185107.jpg") no-repeat;
    padding:.7rem 0;
    text-align: center;
    position: relative;
    background-size: cover;
  }

  .maintxt img {
    width: 40px;
  }

  .main .row {
    margin-top: 60px;
  }

  .maintxt {
    text-align: left;
  }

  .main p {
    color: white;
    font-weight: 100;
    font-size: .18rem;
  }

  .main .del {
    padding-left: 40px;
    font-size: .15rem;
    line-height: .25rem;
  }

  .solution p {
    margin: auto;
  }

  .main_bg {
    background-image: url("../../static/bil/imgamge/20180525115147.jpg");
    background-repeat: no-repeat;
    width: 100%;
    height: inherit;
    background-size: cover;
  }
  @media (max-width:1199.98px) {
    .banner {
      height: 8rem;
    }
    .solution p,.threeD p{
      font-size: .25rem;
      line-height: .4rem;
      text-align: justify;
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
    .threeD img {
      width: 738px;
    }
    .question .row > div p{
      font-size: .25rem;
    }
    .main p{
      font-size: .28rem;
    }
    .main .del{
      font-size: .25rem;
      font-weight: 100;
      text-align: justify;
    }

  }
  @media (max-width:767.98px) {
    .banner{
      height: 9rem;
    }
    .solution p, .threeD p {
      font-size: .35rem;
      line-height: .6rem;
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
    .banner{
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
      width: 100%;
      height: 100%;
    }
    .question .row > div p{
      font-size: .6rem;
    }
    .main p{
      font-size: .6rem;
    }
    .threeD img{
      margin-top: 0;
    }
    .main .del{
      font-size: .58rem;
      padding: 0;
    }
  }
</style>
