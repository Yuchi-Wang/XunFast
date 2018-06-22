<template>
  <div class="main">
    <div class="f_banner">
      <div class="bottom-round"></div>
    </div>
    <h3 class="safe animated fadeInLeft">互联网+航油安全服务</h3>
    <div class="container-fluid select">
      <div class="row">
        <div class="col-md-5">
          <img src="../../static/bil/imgamge/20180622122359.png" alt="" class="fuel_img" width="100%" height="auto">
        </div>
        <div class="col-md-6" id="introduce" style="padding-left: 30px">
          <h4 class="introduce">案列介绍</h4>
          <p class="content">{{introduction}}</p>
          <router-link to="fuelDetailed" class="learn">了解详情</router-link>
        </div>
      </div>
    </div>
    <div class="container-fluid person" id="person">
      <h3>专家顾问</h3>
      <div class="row">
        <div class="col-md-4 personlist" v-for="item in person" :key="item.person">
          <img :src="item.imgArray" alt="" width="135" height="135">
          <h4>{{item.name}}</h4>
          <p>{{item.introduction}}</p>
        </div>
      </div>
    </div>
    <div class="project container-fluid" id="project">
      <h4>项目分类</h4>
      <div class="row">
        <div class="col-md-4 projectlist">
          <div class="project-img"></div>
          <div class="txt">
            <h5>航空油品计量检测系统</h5>
            <p>
              运用云计算、大数据、移动互联网等新一代信息技术、采用SOA的服务架构体系，基于物联网的数据智能采集，在实验
              大数据的深度挖掘分析的基础下，结合可视化图形报表的形式直观展现。
            </p>
            <router-link to="system" class="detail">了解详情</router-link>
          </div>
        </div>
        <div class="col-md-4 projectlist">
          <div class="txt">
            <h5>航空油品质量检测实验室</h5>
            <p>
              运用云计算、大数据、移动互联网等新一代信息技术、采用SOA的服务架构体系，基于物联网的数据智能采集，在实验
              大数据的深度挖掘分析的基础下，结合可视化图形报表的形式直观展现。
            </p>
            <router-link to="lab" class="detail">了解详情</router-link>
          </div>
          <div class="project-img project-img1"></div>
        </div>
        <div class="col-md-4">
          <div class="project-img project-img2"></div>

          <div class="txt">
            <h5>油品标准密度换算</h5>
            <p>
              运用云计算、大数据、移动互联网等新一代信息技术、采用SOA的服务架构体系，基于物联网的数据智能采集，在实验
              大数据的深度挖掘分析的基础下，结合可视化图形报表的形式直观展现。
            </p>
            <a href="javascript:;" class="detail">了解详情</a>
          </div>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
  import bottom from '../components/bottom'

  export default {
    components: {bottom},
    name: 'fuel',
    data: function () {
      return {
        person: [
          {
            imgArray: '../../static/bil/imgamge/20180524183027.png', name: '何祖源  公司高级顾问',
            introduction: '国家“千人计划”特聘专家，上海交通大学讲席教授，“区域光纤通信网与新型光通信系统”国家重点实验室主任，科技部\n' +
            '            国家重大基础研究计划（973计划）信息科学领域专家咨询组成员日本东京大学博士，历任日本东京大学助教、讲师、副教授、\n' +
            '            教授，曾任美国CIENA公司主任工程师。担任IEEE/OSA Journal of Lightwave Technology 期刊 Associate Editor，OFC、CLEO、\n' +
            '            OFS等光电子学领域顶级国际会议技术程序委员会 委员，2014年亚洲通信与光子学国际大会（ACP2014）主席，2016年亚太光\n' +
            '            学传感国际大会（APOS2016）主席。在光电子学领域主流国际期刊和学术会议上发表论文400余篇，申请国际发明专利21项，获授权12项。'
          },
          {
            imgArray: '../../static/bil/imgamge/20180524183121.png', name: '周水庚 公司高级顾问',
            introduction: '复旦大学计算机软件与理论理学博士，复旦大学计算机学院教授、博士生导师。目前研究兴趣包括网络数据管理与搜索、海量数据\n' +
            '            挖掘与学习、生物信息学和复杂网络等。近年来，主持和参与包括国家自然科学基金、国家863、97子课题等省部级以上项目二十多项。\n' +
            '            目前为IEEE、ACM SIGMOD、IEICE会员、中国人工智能学会理事、中国计算机学会高级会员；中国计算机学会数据库专委会委员、人工\n' +
            '            智能和模式识别专委会委员中国人工智能学会机器学习专业委员会常委。'
          },
          {
            imgArray: '../../static/bil/imgamge/20180524183141.png', name: '刘庆文  公司高级研究员',
            introduction: '  从事光传感与激光技术研究，致力于用原创性技术解决科学研究与工业生产中的技术难题，已发表学术论文80余篇，获授权发明专利22项，2012\n' +
            '            年获亚太光纤传感国际会议优秀论文奖、东京大学GCOE优秀发表奖，所指导学生在2017年光纤传感国际大会（OFS25）上获OSA最佳学生论文奖。'
          },


        ],
        introduction: '通过质量目标可视化管理云平台的建设，实现有关质量目标维护、数据采集、趋势推移图、月度考评、监控管理。\n' +
        '        并实现数据体系从图形到原始数据的贯通，为企业管理经营层提供可视化、穿透式的目标管理、考核支撑平台。基于过程\n' +
        '        计量型质量控制点，基于SPC（统计过程控制）系统展开，将涵盖过程自定义、质量特性自定义、控制图、直方统计图分析、\n' +
        '        统计量分析、过程能力监控、过程能力考评功能。'
      }
    }
  }
</script>

<style scoped>
  .main {
    text-align: center;
  }

  .f_banner {
    width: 100%;
    height: 5rem;
    background: url("../../static/bil/imgamge/20180614135941.jpg");
    background-size: cover;
    background-position: 50% 30%;
    margin-top: 70px;
    position: relative;
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

  .select .row {
    position: relative;
  }

  .main .safe {
    font-family: "Source Han Serif SC";
    font-size: .28rem;
    color: #333333;
    margin: .8rem auto .6rem;
    position: relative;
  }

  .main .safe:after {
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: .5rem;
    border-bottom: 2px solid #008fd7;
    content: "";
  }

  .main .introduce {
    font-size: .2365744026rem;
    text-align: left;
  }

  .fuel_img {
    position: relative;
    width: 100%;
    z-index: 9999;
  }

  .main .content {
    font-size: .1677rem;
    text-align: justify;
    line-height: .4631376121rem;
    color: #787878;
  }

  .learn {
    width: 1.5rem;
    margin-top: .3rem;
    font-size: .178rem;
    font-weight: 300;
    border: 1px solid #008fd7;
    color: #008fd7;
    padding: .12rem 0;
    float: left;
    transition: all .3s;
    border-radius: 40px;
  }

  .learn:hover, .detail:hover {
    background: #008fd7;
    border: 1px solid transparent;
    color: white !important;
  }

  /*专家栏目开始*/
  .person {
    width: 100%;
    background: whitesmoke;
    margin-top: .7rem;
    position: relative;
    text-align: center;
    padding: .7rem 0;
  }

  .person h3 {
    font-size: .28rem;
    margin-bottom: .8rem;
  }

  .person h3:after, .project h4:after {
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: .5rem;
    border-bottom: 2px solid #008fd7;
    content: "";
  }

  .person .row {
    margin: 0 10%;
  }

  .person .row > div {
    padding: 0 30px;
  }

  .person img {
    width: 135px;
  }

  .person h4 {
    font-size: .18rem;
    margin:.2rem 0;
    color: #008fd7;
  }

  .person p {
    font-size: .16rem;
    text-align: justify;
    color: #6e6e6e;
  }

  /*项目分类开始*/
  .main .project {
    background: rgb(125, 198, 235);
    padding:.7rem 0;
    position: relative;
  }

  .main .project h4 {
    width: 100%;
    color: white;
    font-size: .28rem;
    margin: 0 auto .6rem;
  }

  .project img {
    width: 100%;
  }

  .txt {
    background: #FFF;
    padding: .15rem 20px 0 20px;
    height: 2.5rem;
  }

  .txt h5 {
    font-size: .22rem;
    margin-bottom: .1rem;
  }

  .txt p {
    text-align: justify;
    font-size: .16rem;
    line-height: .281rem;
    font-weight: 200;
  }

  .project {
    position: relative;
  }

  .project .detail {
    display: inline-block;
    margin-top: .2rem;
    width: 1.3rem;
    font-size: .178rem;
    font-weight: 300;
    border: 1px solid #008fd7;
    color: #008fd7;
    padding: .03rem 0;
    transition: all .3s;
    float: right;
    border-radius: 40px;
  }

  .project-img {
    width: 100%;
    height: 2.5rem;
    background: url("../../static/bil/imgamge/20180508134228.jpg") no-repeat;
    background-size: cover;
  }

  .project-img1 {
    width: 100%;
    height: 2.5rem;
    background: url("../../static/bil/imgamge/20180508134210.jpg") no-repeat;
    background-size: cover;
  }

  .project-img2 {
    width: 100%;
    height: 2.5rem;
    background: url("../../static/bil/imgamge/20180508134220.jpg") no-repeat;
    background-size: cover;
  }

  #project > div > div {
    transition: .5s;
    position: relative;
    z-index: 1;
  }

  #project > div > div:hover {
    transform: scale(1.03);
    -webkit-transform: scale(1.03);
    -ms-transform: scale(1.03);
    -moz-transform: scale(1.03);
    -o-transform: scale(1.03);
    z-index: 999;
  }

  @media (max-width: 1024px) {
    .f_banner {
      height: 8rem;
    }

    .main .safe, .main .project h4, .person h3 {
      font-size: .38rem;
    }

    .main .safe:after, .person h3:after, .main .project h4:after {
      top: .7rem;
    }

    .main .introduce, .txt h5 {
      font-size: .3rem;
      font-weight: bold;
    }

    .main .content, .person p, .txt p {
      font-size: .25rem;
      line-height: .38rem;
    }

    .learn {
      width: 1.6rem;
      font-size: .23rem;
      font-weight: 500;
    }

    .person img {
      width: 100px;
      height: 100px;
    }

    .person h4 {
      font-size: .25rem;
    }

    .project-img, .txt {
      height: 3.5rem;
    }

    .project .detail {
      width: 1.4rem;
      font-size: .22rem;
      font-weight: 500;
    }
  }

  @media (max-width: 767.98px) {
    .f_banner {
      height: 9rem;
    }

    .main .safe, .main .project h4, .person h3 {
      font-size: .56rem;
    }

    .main .safe:after, .person h3:after, .main .project h4:after {
      top: 1rem;
    }

    .main .introduce, .txt h5 {
      font-size: .4rem;
      margin: 10px 15px;
    }

    #introduce {
      padding: 0 !important;
    }

    .main .content, .person p, .txt p {
      font-size: .35rem;
      line-height: .6rem;
      margin: 0 15px;
    }

    .learn {
      width: 2.2rem;
      font-size: .25rem;
      margin-left: 15px;
    }

    .person .row {
      margin: 0 5%;
    }

    .person h4 {
      font-size: .4rem;
    }

    .projectlist, .personlist {
      margin-bottom: 30px;
    }

    .project-img {
      height: 6rem;
    }

    .txt {
      height: 4rem;
    }

    .project .detail {
      width: 2.2rem;
      font-size: .24rem;
      padding: .04rem 0;
    }
  }

  @media (max-width: 575.98px) {
    .f_banner {
      height: 15rem;
    }

    .main .safe, .main .project h4, .person h3 {
      font-size: .8rem;
    }

    .main .safe:after, .person h3:after, .main .project h4:after {
      top: 1.5rem;
    }

    .main .introduce, .txt h5 {
      font-size: .6rem;
    }

    #introduce {
      padding: 0 !important;
    }

    .main .content, .person p, .txt p {
      font-size: .58rem;
      line-height: .8rem;
    }

    .learn {
      width: 2.2rem;
      font-size: .25rem;
      margin-left: 15px;
    }

    .person .row {
      margin: 0 5%;
    }

    .person h4 {
      font-size: .58rem;
    }

    .project-img {
      height: 8rem;
    }

    .txt {
      height: 7rem;
    }

    .project .detail {
      width: 2.5rem;
      font-size: .24rem;
      padding: .04rem 0;
    }
  }
</style>
