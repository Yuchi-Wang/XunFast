<template>
  <div class="main">
    <div class="f_banner">
      <div class="bottom-round"></div>
    </div>
    <h3 class="safe animated fadeInLeft">互联网+航油安全服务</h3>
    <div class="container-fluid select">
      <div class="row">
        <div class="col-md-5">
          <div class="slider" v-on:mouseover="stop()" v-on:mouseout="move()">
            <transition-group tag="div" name="image" id="slider">
              <div v-for="(item, index) in banner" v-show="index===mark" :key="index" class="bg">
              </div>
            </transition-group>
            <div id="slider-btn">
        <span v-for="(item, index) in banner" v-on:mouseover="change(index)" :key="item.index"
              v-bind:style="{background:index===mark?'#FFF':'',}"></span>
            </div>
          </div>
        </div>
        <div class="col-md-7" id="introduce" style="padding-left: 30px">
          <p class="content">{{introduction}}</p>
        </div>
      </div>
    </div>
    <!--<div class="container-fluid person" id="person">
      <h3>专家顾问</h3>
      <div class="row">
        <div class="col-md-4 personlist" v-for="item in person" :key="item.person">
          <img :src="item.imgArray" alt="" width="135" height="135">
          <h4>{{item.name}}</h4>
          <p>{{item.introduction}}</p>
        </div>
      </div>
    </div>-->
    <div class="project container-fluid" id="project">
      <h4>创新成果</h4>
      <div class="row">
        <div class="col-md-4 projectlist">
          <div class="project-img"></div>
          <div class="txt">
            <h5>中国航空油质量检测实验室信息管理平台</h5>
            <p>
              为了高效地管理实验室油品检测业务，确保航油质量安全，中国航空油料责任有限公司华东公司质量计量检测中心与上海迅发信息技
              术有限公司，严格按照优良实验室规范...
            </p>
            <router-link to="system" class="detail">了解详情</router-link>
          </div>
        </div>
        <div class="col-md-4 projectlist">
          <div class="txt">
            <h5>中国航油计量检定信息智慧管理平台</h5>
            <p>
              计量检定作为测量设备量值传递的主要形式，是保证量值准确一致的重要措施，具有准确度判定要求严格、数据处理工作量大等特点。
              一直以来，中国航油计量检定/校准...
            </p>
            <router-link to="lab" class="detail">了解详情</router-link>
          </div>
          <div class="project-img project-img1"></div>
        </div>
        <div class="col-md-4">
          <div class="project-img project-img2"></div>

          <div class="txt">
            <h5>密度换算APP</h5>
            <p>
              中国航油华东公司原来在做密度检测时，需要根据修正后实测温度 ， 修正后实测密度计算出密度15  密度20，原始的方式是根据人
              工根据经验进行计算，结合Excel计算...
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
        timer: null,
        mark: 0,
        banner: [
          '',
          '',
          ''
        ],
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
        introduction: '为积极推进中国航油与互联网、大数据、人工智能等新一代信息技术的深度融合，经过合作各方充分的酝酿和协商，中国' +
        '航空油料责任有限公司华东公司、上海交通大学先进产业技术研究院、上海迅发信息技术有限公司共同签署“互联网+航油安全服务”战略合' +
        '作协议。旨在本着“平等互利、资源整合、优势互补、共同发展”的原则，充分发挥三方各自的资源优势，共同成立互联网+航油安全服务协' +
        '同创新中心，运用互联网、大数据、人工智能、物联网等新一代信息技术，构建互联网+航油安全服务智慧平台，实现华东公司安全智能化、' +
        '管理智能化、物流智能化、渠道智能化以及服务智能化的信息化建设目标，力争成为中国航油与新一代信息技术深度融合的示范。'
      }
    },
    methods: {
      autoPlay() {
        this.mark++;
        if (this.mark === 3) {
          this.mark = 0
        }
      },
      play() {
        this.timer = setInterval(this.autoPlay, 4000)
      },
      change(i) {
        this.mark = i
      },
      stop() {
        clearInterval(this.timer)
      },
      move() {
        this.timer = setInterval(this.autoPlay, 4000)
      }
    },
    created() {
      this.play()
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
    background: url("../../static/bil/imgamge/20180626113136.jpg");
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
  .select {
    padding-bottom: .8rem;
  }

  .main .safe {
    font-family: "Source Han Serif SC";
    font-size: .28rem;
    color: #151515;
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
  .slider {
    width: 100%;
    height: 2.7rem;
    position: relative;
  }
  /* 轮播图 */
  #slider {
    width: 100%;
    height: inherit;
  }

  #slider > div {
    width: 100%;
    position: absolute;
    height: inherit;
    z-index: 99;
  }

  #slider-btn {
    position: absolute;
    left: 50%;
    margin-left: -24px;
    bottom: 25px;
    font-size: 0;
    z-index: 9999;
  }

  #slider-btn span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ff8020;
    display: inline-block;
    margin: 0 7px;
    cursor: pointer;
  }

  #slider > div:nth-of-type(1) {
    background: url("../../static/bil/imgamge/20180624190232.jpg");
    background-size: cover;
    background-position: 50% 20%;
  }

  #slider > div:nth-of-type(2) {
    background: url("../../static/bil/imgamge/20180626091106.jpg");
    background-size: cover;
    background-position: 50% 20%;
  }
  #slider > div:nth-of-type(3) {
    background: url("../../static/bil/imgamge/20180624190210.jpg");
    background-size: cover;
    background-position: 50% 20%;
  }

  .image-enter-active {
    opacity: 1;
    transition: opacity .8s linear;
  }

  .image-leave-active {
    opacity: 0;
    transition: opacity .8s linear;
  }

  .image-enter {
    opacity: 0;
  }

  .image-leave {
    opacity: 1;
  }
/* 轮播结束 */
  .main .content {
    font-size: .15rem;
    text-align: justify;
    line-height: .32rem;
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
  /*.person {
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
  }*/

  .person h3:after, .project h4:after {
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: .5rem;
    border-bottom: 2px solid #008fd7;
    content: "";
  }
  .project h4:after {
    border-bottom: 2px solid white;
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
    background:url("../../static/bil/imgamge/20180626174348.jpg") no-repeat;
    background-position: 50% 50%;
    background-size: cover;
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
    background: rgba(255, 255, 255, 0.89);
    padding: 30px 30px 0 30px;
    height: 2.5rem;
  }

  .txt h5 {
    color: #333333;
    font-size: .22rem;
    margin-bottom: .1rem;
  }

  .txt p {
    text-align: justify;
    font-size: .15rem;
    line-height: .281rem;
    color: #666666;
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
    background: url("../../static/bil/imgamge/20180624183016.png") no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  .project-img1 {
    width: 100%;
    height: 2.5rem;
    background: url("../../static/bil/imgamge/20180624184222.png") no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  .project-img2 {
    width: 100%;
    height: 2.5rem;
    background: url("../../static/bil/imgamge/20180624184253.jpg") no-repeat;
    background-size: cover;
    background-position: 50% 50%;
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

  @media (max-width: 1199.98px) {
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
      font-size: .25rem;
      font-weight: bold;
    }

    .main .content, .person p, .txt p {
      font-size: .25rem;
      line-height: .35rem;
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
      height: 4rem;
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
    .slider {
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

    .projectlist {
      margin-bottom: 30px;
    }

    .project-img {
      height: 6rem;
    }

    .txt {
      height: 5rem;
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
      height: 10rem;
    }

    .project .detail {
      width: 2.5rem;
      font-size: .24rem;
      padding: .04rem 0;
    }
  }
</style>
