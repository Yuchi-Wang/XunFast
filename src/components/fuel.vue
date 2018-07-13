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
    <div class="project container-fluid" id="project">
      <h4>创新成果</h4>
      <div class="row">
        <div class="col-md-4 projectlist">
          <div class="project-img"></div>
          <div class="txt">
            <h5>中国航空油质量检测实验室信息管理平台</h5>
            <p>
              为了高效地管理实验室油品检测业务，确保航油质量安全，中国航空油料责任有限公司华东公司质量计量检测中心与上海迅发信
              息技术有限公司，严格按照优良实验室规范(Good Laboratory Practice，GLP)和ISO/IEC17025标准，遵循MHT 60
              20-2012...
            </p>
            <router-link to="/in-lab" class="detail">了解详情</router-link>
          </div>
        </div>
        <div class="col-md-4 projectlist">
          <div class="txt">
            <h5>中国航油计量检定信息智慧管理平台</h5>
            <p>
              计量检定作为测量设备量值传递的主要形式，是保证量值准确一致的重要措施，具有准确度判定要求严格、数据处理工作
              量大等特点。一直以来，中国航油计量检定/校准工作的数据处理以及合格性判定工作依赖于人工计算处理和数据复核,这导致工作...
            </p>
            <router-link to="/system" class="detail">了解详情</router-link>
          </div>
          <div class="project-img project-img1"></div>
        </div>
        <div class="col-md-4">
          <div class="project-img project-img2"></div>

          <div class="txt">
            <h5>密度换算APP</h5>
            <p>
              中国航油华东公司原来在做密度检测时，需要根据修正后实测温度 ， 修正后实测密度计算出密度15  密度20，原始的方式是根据
              人工根据经验进行计算，结合Excel计算的方式，对于没有经验...
            </p>
            <router-link to="/app" class="detail">了解详情</router-link>
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
        introduction: '为积极推进中国航油与互联网、大数据、人工智能等新一代信息技术的深度融合，经过合作各方充分的酝酿和协商，中国' +
        '航空油料有限责任公司华东公司、上海交通大学先进产业技术研究院、上海迅发信息技术有限公司共同签署“互联网+航油安全服务”战略合' +
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
    background: url("../../static/bil/imgamge/20180702171902.jpg");
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
    background: url("../../static/bil/imgamge/20180702172141.jpg");
    background-size: cover;
    background-position: 50% 20%;
  }

  #slider > div:nth-of-type(2) {
    background: url("../../static/bil/imgamge/20180701184339.jpg");
    background-size: cover;
    background-position: 50% 20%;
  }
  #slider > div:nth-of-type(3) {
    background: url("../../static/bil/imgamge/20180702172050.jpg");
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

  /*项目分类开始*/
  .project h4:after {
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
  .main .project {
    background:url("../../static/bil/imgamge/20180702172400.jpg") no-repeat;
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
    height:3rem;
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
    height:2.5rem;
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
    .main .safe, .main .project h4{
      font-size: .38rem;
    }
    .main .safe:after, .main .project h4:after {
      top: .7rem;
    }
    .slider {
      height:3.5rem;
    }
     .txt h5 {
      font-size: .25rem;
      font-weight: bold;
    }
    .main .content,.txt p {
      font-size: .25rem;
      line-height: .35rem;
    }
    .project-img, .txt {
      height: 5rem;
    }
    .project .detail {
      width: 1.8rem;
      font-size: .22rem;
      font-weight: 500;
    }
  }

  @media (max-width: 767.98px) {
    .f_banner {
      height: 9rem;
    }
    .slider {
      height: 6rem;
      margin-bottom: 15px;
    }
    .main .safe, .main .project h4 {
      font-size: .56rem;
    }
    .main .safe:after,.main .project h4:after {
      top: 1rem;
    }
    .txt h5 {
      font-size: .4rem;
      margin: 10px 15px;
    }
    #introduce {
      padding: 0 !important;
    }
    .main .content,.txt p {
      font-size: .35rem;
      line-height: .6rem;
      margin: 0 15px;
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
      font-size: .25rem;
      padding: .07rem 0;
      margin: 0;
    }
  }

  @media (max-width: 575.98px) {
    .f_banner {
      height: 15rem;
    }
    .slider {
      height: 8rem;
    }
    .main .safe, .main .project h4 {
      font-size: .8rem;
    }
    .main .safe:after,.main .project h4:after {
      top: 1.5rem;
    }
    .main .txt h5 {
      font-size: .6rem;
    }
    #introduce {
      padding: 0 !important;
    }
    .main .content,.txt p {
      font-size: .58rem;
      line-height: .8rem;
    }
    .project-img {
      height: 8rem;
    }
    .txt {
      height: 10rem;
      padding: 15px 15px 0 15px;
    }
    .project .detail {
      width: 3rem;
      font-size: .48rem;
      padding: .2rem 0;
    }
  }
</style>
