<template>
  <div>
    <div class="slider" v-on:mouseover="stop()" v-on:mouseout="move()">
      <transition-group tag="div" name="image" id="slider">
        <div v-for="(item, index) in banner" v-show="index===mark" :key="index" class="bg">
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <h3>{{item.title}}</h3>
          <h2>{{item.txt}}</h2>
          <h4>{{item.technology}}</h4>
          <h5>{{item.english}}</h5>
        </div>
      </transition-group>
      <div id="slider-btn">
        <span v-for="(item, index) in banner" v-on:mouseover="change(index)" :key="item.index" v-bind:style="{background:index===mark?'#FFF':'',}"></span>
      </div>
      <div class="bottom-round"></div>
    </div>
    <div class="container-fluid product">
      <h3 class="animated slideInDown">公司产品</h3>
      <div class="row">
        <div class="col-md-3 col-sm-6 production" v-for="item in production" :key="item.production">
          <div v-bind:style="{ 'background-image': 'url(' + item.bg + ')','background-repeat':'no-repeat','background-size':'cover','background-position':'50% 50%' }">
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
            <p>{{wisdomTxt}}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cardlist">
            <div class="imgbox imgbox2"></div>
            <h4><router-link to="/fuel">互联网+航油安全</router-link></h4>
          </div>
          <div class="imgtxt  imgtxt3">
            <p>{{fuelTxt}}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cardlist">
            <div class="imgbox imgbox3"></div>
            <h4><a href="javascript:;">人工智能+智慧建筑</a></h4>
          </div>
          <div class="imgtxt imgtxt1">
            <p>{{buildingTxt}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid about">
      <div class="row">
        <h4>关于我们</h4>
        <div class="col-md-12  a_img row" id="aimg">
          <div class="aimg1 col-md-6"><img src="../../static/bil/imgamge/20180701182835.jpg" alt="" style="width: 100%">
          </div>
          <div class="aimg2 col-md-6"><img src="../../static/bil/imgamge/20180701181036.jpg" alt="" style="width: 100%">
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
          {imgArray: '../../static/bil/imgamge/20180626114012.png', title: '设备数据智能采集系统', url: '/scada',
            bg:'../../static/bil/imgamge/20180626113254.jpg'},
          {imgArray: '../../static/bil/imgamge/20180626113943.png', title: '实验室信息管理与应用分析平台', url: '/lab',
            bg:'../../static/bil/imgamge/20180701175948.jpg'},
          {imgArray: '../../static/bil/imgamge/20180613102436.png', title: '设备全生命周期智慧管理系统', url: '/equipment',
            bg:'../../static/bil/imgamge/20180630202559.jpg'},
          {imgArray: '../../static/bil/imgamge/20180613102454.png', title: '数字三维实景可视化平台', url: '/three-dimensional',
            bg:'../../static/bil/imgamge/20180701182510.jpg'},
        ],
        introduction: '上海迅发信息技术有限公司是拥有一支技术实力雄厚的硕士博士生团队的高科技企业，充分利用互联网、物联网、大数据、'+
                      '人工智能等新一代信息技术，专注于互联网+、大数据+行业应用的研发和产品化。公司在信息系统整体架构、大数'+
                      '据建模分析与可视化、机器视觉、人工智能等方面，有着独立自主、业内领先的算法和模型。公司拥有数十个软件著作'+
                      '权，并通过ISO9001质量管理体系认证。公司与上海交通大学、复旦大学、同济大学、华东师范大学等国内知名高校建' +
                      '立了深入的合作关系，整合了一直高水平的专家团队和高效率的技术开发团队，致力于通过持续的技术创新和优质的服'+
                      '务，不断为客户创造价值。',
        wisdomTxt:'智能制造是将物联网、大数据、云计算等新一代信息技术与先进自动化技术、传感技术、控制技术、数字制造技术结合，'+
                  '实现工厂和企业内部、企业之间和产品全生命周期的实时管理和优化的新型制造系统。智能制造的特征在于实时感知、'+
                  '优化决策、动态执行等三个方面。 主要包括一个网络、两大主题、三项集成',
        fuelTxt:'上海迅发信息技术有限公司与中国航空油料有限责任公司华东公司、上海交通大学先进产业技术研究院共同成立互联'+
                '网+航油安全服务协同创新中心，运用互联网、大数据、人工智能、物联网等新一代信息技术，构建互联网+航油安全'+
                '服务智慧平台，实现航油安全智能化、管理智能化、物流智能化、渠道智能化',
        buildingTxt:'随着我国城市化进程的加快，建筑市场近年来增长迅速。同时，智能建筑和建筑节能的发展对建筑行业提出了更高的'+
                 '要求。运用大数据、人工智能技术，通对大量智慧建筑行业知识和经验进行机器学习和算法模型设计，促进人工智能'+
                 '与智慧建筑的深度融合，实现设计环节、施工管理、运营维护等智慧建筑全生命周期的数字化、智能化',
        banner: [
           { title: '—— ⚙ 新技术·新起点·新高度 ⚙ ——', txt: '智能制造整体解决方案供应商',
             english:'INTELLIGENT MANUFACTURING OVERALL SOLUTLONS PROVIDER',
             technology:'互联网、大数据、人工智能、物联网等新一代信息技术'},
           { title: '互联网、大数据、人工智能、物联网等新一代信息技术', txt: '新一代信息技术助力航油安全服务',
             technology:'新技术·新起点·新高度',
            english:'A NEW GENERATION OF INFORMATION TECHNOLOGY BOOST THE SAFE OF JET FUEL SERVICE'},
          { title: '》 人工智能 + 智慧建筑产业深度融合 《', txt: '人工智能 + 智慧建筑',
            technology:'',
            english:'ARTIFICIAL INTELLIGENCE AND SMART BUILDING'},


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
  /* 动画 */
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

  /* banner */
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
    background: url("../../static/bil/imgamge/20180704104829.jpg");
    background-size: cover;
    background-position: 50% 50%;
  }

  #slider > div:nth-of-type(2) {
    background: url("../../static/bil/imgamge/20180704140017.jpg");
    background-size: cover;
    background-position: 50% 50%;
  }
  #slider > div:nth-of-type(3) {
    background: url("../../static/bil/imgamge/20180704143304.jpg");
    background-size: cover;
    background-position: 50% 50%;
  }
  #slider > div:nth-of-type(3)>div {
    display: none;
  }
  /* 轮播动画*/
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
  .bg{
    text-align: center;
    color: #fff;
  }
  .bg h3{
    width: 100%;
    font-size:.4rem;
    text-align: center;
    margin-top:1.45rem;
  }
  .bg h2 {
    width: 100%;
    font-size:.8rem;
    margin-top:.35rem;
    letter-spacing: 10px;
    font-weight: bold;
    text-shadow: 5px 5px 5px #0f111e;
  }
  #slider > div:nth-of-type(2) h3 {
    margin-top: 1.55rem;
    font-size: .25rem;
  }
  #slider > div:nth-of-type(2) h2 {
    font-size:.75rem;
  }
  #slider > div:nth-of-type(2) h4 {
    display: inline-block;
    padding: 2px;
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
    letter-spacing: 10px;
  }
  .bg h4 {
    font-size:.35rem;
    margin-top:.2rem;
    font-weight: 500;
    text-shadow: 5px 5px 5px #2e3352;
  }
  .bg h5 {
    width: 100%;
    font-size:.18rem;
    margin-top:.12rem;
    font-weight: 500;

  }
  /* banner结束 */

  /* 产品 */
  .product, .solution,.about {
    width: 100%;
    background: white;
    padding: .7rem 0;
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

  .product a {
    transition: .3s;
  }

  .product a:hover {
    background: white;
    color: #158fed !important;
    border: 1px solid white;
  }

  .product > .row, .about > .row {
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
    background: #f9f9f9;
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
    background: url("../../static/bil/imgamge/20180701181620.jpg") no-repeat;
    height: 3rem;
    background-size: cover;
    transition: .3s;
    background-position: 50% 50%;
  }

  .solution > .row > div:hover {
    transform: scale(1.05);
  }

  .imgbox1 {
    background: url("../../static/bil/imgamge/20180701181703.jpg") no-repeat;
    height: 3rem;
    background-size: cover;
    background-position: 50% 50%;
  }

  .imgbox2 {
    background: url("../../static/bil/imgamge/20180701181754.jpg") no-repeat;
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

  .imgtxt p,.about p {
    font-size: .15rem;
    text-align: justify;
    line-height: .25rem;
    color: #666666;
  }
  /* 解决方案结束 */

  /*关于我们*/
  .about {
    text-align: right;
  }

  .about h4 {
    position: relative;
    text-align: center;
  }

  .about p {
    letter-spacing: 1px;
    margin-top: 20px;
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
    .bg > div {
      margin-left: -3.5rem;
      width: 7rem;
      height: 7rem;
    }
    .bg h3 {
      font-size: .58rem;
      margin-top: 2rem;
    }
    .bg h4{
      font-size: .4rem;
      margin-top: .2rem;
    }
    .bg h2 {
      font-size: 1rem;
      margin-top: .35rem;
    }
    .bg h5 {
      font-size: .22rem;
      margin-top: .12rem;
    }
    #slider > div:nth-of-type(2) h3 {
      margin-top: 2rem;
      font-size: .4rem;
    }
    #slider > div:nth-of-type(2) h2 {
      font-size: .8rem;
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
    .imgtxt {
      padding: 30px 25px 0;
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
    .bg {
      padding: 0 15px;
    }
    .bg > div {
      margin-left: -6rem;
      width: 12rem;
      height:12rem;
    }
    .bg h2 {
      font-size: 1.5rem;
    }
    .bg h3 {
      font-size: .8rem;
      margin-top: 3rem;
    }
    .bg h4 {
      font-size: .6rem;
    }
    .bg h4 {
      font-size: .6rem;
    }
    #slider > div:nth-of-type(2) h3 {
      margin-top: 4rem;
      font-size: .58rem;
    }
    #slider > div:nth-of-type(2) h2 {
      font-size: 1.2rem;
    }
    .solution h3, .product h3, .about h4 {
      font-size: .38rem;
    }
    .solution h3, .product h3 {
      font-size: .8rem;
      margin-bottom: 1rem;
    }
    .bottom-round {
       display: none;
    }
    #slider-btn {
      bottom: 15px;
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
