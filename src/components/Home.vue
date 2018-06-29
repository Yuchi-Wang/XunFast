<template>
  <div>
    <div class="slider" v-on:mouseover="stop()" v-on:mouseout="move()">
      <transition-group tag="div" name="image" id="slider">
        <div v-for="(item, index) in banner" v-show="index===mark" :key="index" class="bg">
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
        </div>
      </transition-group>
      <div id="slider-btn">
        <span v-for="(item, index) in banner" v-on:mouseover="change(index)" :key="item.index"
              v-bind:style="{background:index===mark?'#FFF':'',}"></span>
      </div>
      <div class="bottom-round"></div>
    </div>
    <div class="container-fluid product">
      <h3 class="animated slideInDown">公司产品</h3>
      <div class="row">
        <div class="col-md-3 col-sm-6 production" v-for="item in production" :key="item.production">
          <div>
            <img :src="item.imgArray" alt="" width="135" height="135">
            <p>{{item.title}}</p>
            <router-link :to="item.url">深入了解</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="solution container-fluid" id="solution">
      <div class="row">
        <h3 class="solution_title">解决方案</h3>
        <div class="col-md-4">
          <div class="cardlist">
            <div class="imgbox imgbox1"></div>
            <h4><router-link to="/wisdom">智能制造</router-link></h4>
          </div>
          <div class="imgtxt imgtxt2">
            <p>
              迅发科技智能制造解决方案是基于信息物理系统实现智能工厂，以动态配置的生产方式实现“柔性生产”，帮助企业实现生产力的飞速发展。
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cardlist">
            <div class="imgbox imgbox2"></div>
            <h4><router-link to="/fuel">互联网+航油安全</router-link></h4>
          </div>
          <div class="imgtxt  imgtxt3">
            <p>
              迅发科技互联网+航油安全解决方案运用数据采集、智能判断等新一代信息技术，将标准信息化，对关键点数据的控制，对主观经
              验判断的痕迹和记录进行控制，确保质量在生命周期中可看、可查、可控、可追溯，从而保证油品质量安全。
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cardlist">
            <div class="imgbox imgbox3"></div>
            <h4><router-link to="/building">智慧建筑</router-link></h4>
          </div>
          <div class="imgtxt imgtxt1">
            <p>智慧建筑智慧建筑智慧建筑智慧建筑智慧建筑智慧建筑智慧建筑智慧建筑智慧建筑智慧建筑智慧建筑智慧建筑智慧建筑
              智慧建筑智慧建筑智慧建筑智慧建筑智慧建筑智慧建筑智慧建筑</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid about">
      <div class="row">
        <h4>关于我们</h4>
        <div class="col-md-12  a_img row" id="aimg">
          <div class="aimg1 col-md-6"><img src="../../static/bil/imgamge/20180612160849.png" alt="" style="width: 100%">
          </div>
          <div class="aimg2 col-md-6"><img src="../../static/bil/imgamge/20180622154348.png" alt="" style="width: 100%">
          </div>
        </div>
        <div class="col-md-12 abouttxt">
          <p>{{introduction}}</p>
          <router-link to="/about">了解详情</router-link>
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
    name: 'Home',
    data() {
      return {
        timer: null,
        mark: 0,
        production: [
          {imgArray: '../../static/bil/imgamge/20180626114012.png', title: '设备数据智能采集系统', url: '/scada'},
          {imgArray: '../../static/bil/imgamge/20180626113943.png', title: '实验室信息管理与应用分析平台', url: '/lab'},
          {imgArray: '../../static/bil/imgamge/20180613102454.png', title: '数字三维实景可视化平台', url: '/three-dimensional'},
          {imgArray: '../../static/bil/imgamge/20180613102436.png', title: '大数据建模与可视化', url: '/bigData'},
        ],
        introduction: '  上海迅发信息技术有限公司是拥有一支技术实力雄厚的硕士博士生团队的高科技企业，充分利用互联网、物联网、大数据、\n' +
        '            人工智能等新一代信息技术，专注于互联网+、大数据+行业应用的研发和产品化。公司在信息系统整体架构、大数\n' +
        '            据建模分析与可视化、机器视觉、人工智能等方面，有着独立自主、业内领先的算法和模型，公司拥有数十个软件著作\n' +
        '            权，并通过ISO9001质量管理体系认证。公司与上海交通大学、复旦大学、同济大学、华东师范大学等国内知名高校建\n' +
        '            立了深入的合作关系，整合了一直高水平的专家团队和高效率的技术开发团队，致力于通过持续的技术创新和优质的服\n' +
        '            务，不断为客户创造价值。',
        banner: [
          '',
          '',
          '',
        ],
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
  .slider {
    width: 100%;
    height: 6rem;
    position: relative;
    margin-top: 70px;
  }
  #slider {
    width: 100%;
    height: inherit;
  }
  .bg > div {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -2.5rem;
    width: 5rem;
    height:  5rem;
    border-radius: 50%;
    border: 1px solid #bdbdbd;
    transform-style: preserve-3d;
    transform: rotateX(80deg) rotateY(20deg);
  }
  .bg > div:nth-of-type(2) {
    transform: rotateX(-80deg) rotateY(20deg);
  }

  .bg > div:nth-of-type(3) {
    transform: rotateX(-70deg) rotateY(60deg);
  }

  .bg > div:nth-of-type(4) {
    transform: rotateX(70deg) rotateY(60deg);
  }

  .bg > div > div {
    width:  5rem;
    height:  5rem;
    position: relative;
    transform-style: preserve-3d;
    animation: trail_ 9s infinite linear;
  }

  .bg > div > div:after {
    content: "";
    position: absolute;
    top: -5px;
    box-shadow: 0 0 12px #fff;
    left: 50%;
    margin-left: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #b9f0ff;
    animation: particle_ 5s infinite linear;
  }

  .bg > div:nth-of-type(2) > div,
  .bg > div:nth-of-type(2) > div:after {
    animation-delay: -.5s;
  }

  .bg > div:nth-of-type(3)  > div,
  .bg > div:nth-of-type(3)  > div:after {
    animation-delay: -1s;
  }

  .bg > div:nth-of-type(4) > div,
  .bg > div:nth-of-type(4) > div:after {
    animation-delay: -1.5s;
  }

  @keyframes trail_ {
    from {
      transform: rotateZ(0deg);
    } to {
        transform: rotateZ(360deg);
      }
  }

  @keyframes particle_ {
    from {
      transform: rotateX(90deg) rotateY(0deg);
    } to {
        transform: rotateX(90deg) rotateY(-360deg);
      }
  }

  @keyframes nucleus_ {
    0% {
      box-shadow: 0 0 0 transparent;
    } 50% {
        box-shadow: 0 0 25px #fff;
      } 100% {
          box-shadow: 0 0 0 transparent;
        }
  }

  @keyframes zoom {
    0% {
      transform: scale(0.6);
    }
    100% {
      transform: scale(1);
    }
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
    bottom: 40px;
    font-size: 0;
    z-index: 9999;
  }

  #slider-btn span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #003d74;
    display: inline-block;
    margin: 0 7px;
    cursor: pointer;
  }

  #slider > div:nth-of-type(1) {
    background: url("../../static/bil/imgamge/20180619084726.jpg");
    background-size: cover;
    background-position: 50% 50%;
  }

  #slider > div:nth-of-type(2) {
    background: url("../../static/bil/imgamge/20180614135941.jpg");
    background-size: cover;
    background-position: 50% 50%;
  }
  #slider > div:nth-of-type(3) {
    background: url("../../static/bil/imgamge/20180627101728.jpg");
    background-size: cover;
    background-position: 50% 50%;
  }
  #slider > div:nth-of-type(3)>div {
    display: none;
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

  .bottom-round {
    width: 100%;
    position: absolute;
    bottom: -30px;
    height: 60px;
    background: white;
    z-index: 99;
    border-radius: 100%;
  }
  /* banner结束 */

  /* 产品 */
  .product {
    width: 100%;
    background: white;
    padding: 30px 0 .7rem;
    text-align: center;
    position: relative;
  }

  .product > div > div {
    transition: .3s;
  }

  .product > div > div > div {
    height: 4rem;
  }

  .product > div > div:hover {
    transform: translateY(-10px);
  }

  .product > div > div:nth-of-type(1) > div {
    background: url("../../static/bil/imgamge/20180626113254.jpg") no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  .product > div > div:nth-of-type(2) > div {
    background: url("../../static/bil/imgamge/20180626113428.jpg") no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  .product > div > div:nth-of-type(3) > div {
    background: url("../../static/bil/imgamge/20180613151524.png") no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  .product > div > div:nth-of-type(4) > div {
    background: url("../../static/bil/imgamge/20180613102014.png") no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  .product a {
    transition: .3s;
  }

  .product a:hover {
    background: white;
    color: #158fed !important;
    border: 1px solid white;
  }

  .product > .row {
    margin: 0 10%;
  }

  .product > .row > div {
    text-align: center;
  }

  .product > .row > div p {
    font-size: .18rem;
    margin-top: 22px;
    color: white;
  }

  .product > .row > div a {
    display: inline-block;
    width: 1.1rem;
    height: .3rem;
    line-height: .3rem;
    border-radius: 18px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #afbfc8;
    margin-top: .5rem;
    color: white;

  }

  .product h3:after, .solution h3:after, .about h4:after {
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: .5rem;
    border-bottom: 2px solid #008fd7;
    content: "";
  }

  .product img {
    width: 1rem;
    height: 1rem;
    margin-top: .8rem;
  }
  /* 产品结束 */

  /* 解决方案 */
  .solution {
    width: 100%;
    background: #f9f9f9;
    padding: .7rem 0;
    position: relative;
  }

  .solution > .row {
    text-align: center;
  }

  .solution > .row > div {
    padding: 24px;
    transition: .8s;
  }

  .solution h3, .product h3, .about h4 {
    display: block;
    width: 100%;
    font-size: .28rem;
    margin-bottom: .6rem;
    color: #151515;
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

  .solution > .row > div:hover {
    transform: scale(1.05);
  }

  .imgbox1 {
    background: url("../../static/bil/imgamge/20180622155427.png") no-repeat;
    height: 3rem;
    background-size: cover;
    background-position: 50% 50%;
  }

  .imgbox2 {
    background: url("../../static/bil/imgamge/20180625152209.png") no-repeat;
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
    color: #333333;
  }

  .imgtxt p {
    font-size: .15rem;
    text-align: justify;
    line-height: .25rem;
    color: #666666;
  }
  /* 解决方案结束 */

  /*关于我们*/
  .about {
    background: white;
    width: 100%;
    padding: .7rem 0;
    text-align: right;
  }

  .about > .row {
    margin: 0 10%;
  }

  .about h4 {
    position: relative;
    text-align: center;
  }

  .about p {
    font-size: .15rem;
    text-align: justify;
    line-height: .32rem;
    letter-spacing: 1px;
    margin-top: 20px;
    color:#666666;
  }

  .abouttxt {
    padding: 0;
  }

  .a_img {
    margin-left: 1px;
    padding: 0;
    margin-top: 24px;
  }

  .about .a_img > div {
    height: 3rem;
    overflow: hidden;
    margin-bottom: .15rem;
    padding-left: 0;
    padding-right: 30px;
  }

  .about .a_img > div:nth-of-type(2) {
    padding-right: 0;
    padding-left: 30px;
  }

  .about img {
    transition: all 1s;
  }

  .about img:hover {
    transform: scale(1.1);
  }

  .about a {
    text-align: center;
    display: inline-block;
    width: 1.5rem;
    height: .45rem;
    line-height: .45rem;
    color: #008fd7;
    border: 1px solid #008fd7;
    border-radius: 34px;
    font-size: .15rem;
    margin-top: 30px;
    transition: .3s;
  }

  .about a:hover {
    background: #008fd7;
    color: whitesmoke;
  }

  @media (max-width: 1199.98px) {
    .slider {
      height: 8rem;
    }

    .solution h3, .product h3, .about h4 {
      font-size: .38rem;
    }

    .product h3:after, .solution h3:after,.about h4:after {
      top: .6rem;
    }

    .product > .row > div p {
      font-size: .25rem;
    }

    .product > .row > div a, .about a {
      width: 1.6rem;
      height: .5rem;
      line-height: .5rem;
    }

    .product > div > div > div {
      height: 5rem;
    }

    .production {
      padding: 0 7.5px;
    }
    .solution > .row > div {
      padding: 15px;
    }

    .cardlist h4{
      font-size: .25rem;
    }
    .imgbox {
      height: 3.5rem;
    }

    .imgtxt p, .about p {
      font-size: .25rem;
      line-height: .35rem;
    }
    .about>.row {
      margin: 0 5%;
    }
    .about .a_img > div {
      height: 3.19rem;
    }
    .about .a_img > div {
      padding-right: 15px;
    }
    .about .a_img > div:nth-of-type(2) {
      padding-right: 0;
      padding-left: 15px;
    }

    .about span {
      font-size: .35rem;
    }
  }

  @media (max-width: 767.98px) {
    .slider {
      height: 9rem;
    }

    .solution h3, .product h3, .about h4 {
      font-size: .56rem;
    }

    .product h3:after, .solution h3:after,.about h4:after {
      top: 1rem;
    }

    .product > .row > div p {
      font-size: .36rem;
    }

    .product > .row > div a, .about a {
      width: 2.2rem;
      height: .7rem;
      line-height: .7rem;
      margin-bottom: 30px;
    }

    .product > .row > div a {
      margin-top: 1rem;
    }

    .product > div > div > div {
      height: 7.5rem;
      margin-bottom: 30px;
    }

    .product img {
      width: 100px;
      height: 100px;
      margin-top: 1.2rem;
    }
    .imgbox {
      height: 8rem;
    }
    .imgtxt {
      padding: 20px 15px 0;
    }

    .cardlist h4 {
      font-size: .4rem;
    }


    .imgtxt p, .about p {
      font-size: .35rem;
      line-height: .6rem;
    }
    .about .a_img > div {
      height: 5.2rem;
      padding: 0!important;
    }

    .about span {
      font-size: .5rem;
    }
  }

  @media (max-width: 575.98px) {
    .slider {
      height: 15rem;
    }

    .solution h3, .product h3 {
      font-size: .8rem;
      margin-bottom: 1rem;
    }

    .product h3:after, .solution h3:after,.about h4:after{
      top: 1.5rem;
    }

    .product > .row > div p {
      font-size: .6rem;
      margin-top: 20px;
    }

    .product > .row > div a, .about a {
      width: 3.5rem;
      height: 1rem;
      line-height: 1rem;
    }

    .product img {
      margin-top: 2.4rem;
    }

    .product > .row > div a {
      margin-top: 2rem;
    }

    .product > div > div > div {
      height: 13rem;
      margin-bottom: 30px;
    }
    .imgbox {
      height: 10rem;
    }
    .imgtxt {
      padding: 20px 15px;
    }

    .cardlist h4{
      font-size: .6rem;
    }

    .imgtxt p, .about p {
      font-size: .58rem;
      line-height: .8rem;
    }

    .about h4 {
      font-size: .8rem;
    }

    .about span {
      font-size: .7rem;
    }
  }
</style>
