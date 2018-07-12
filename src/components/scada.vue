<template>
  <div>
    <div class="scada-banner">
      <h2>仪器设备数据智能采集系统</h2>
      <div class="bottom-round"></div>
    </div>
    <!-- 难点 -->
    <div class="container-fluid difficult">
      <h3 class="animated slideInDown">{{difficultTitle}}</h3>
      <div class="row">
        <div class="col-md-6 col-lg-4" v-for="item in certificate" :key="item.certificate"
             v-bind:style="{ 'background-image': 'url(' + item.imgArray + ')','background-repeat':'no-repeat','background-size':'cover','background-position':'50% 50%' }">
          <h4>{{item.title}}</h4>
          <p>{{item.txt}}</p>
        </div>
      </div>
    </div>
    <!--目标-->
    <div class="goal container-fluid" id="threeD">
      <h3>实施仪器设备智能采集的目标</h3>
      <p>{{goalTxt}}</p>
      <div class="row">
        <div class="col-md-4 col-sm-12" v-for="item in disadvantage" :key="item.disadvantage">
          <img :src="item.imgArray" alt="" width="135" height="135">
          <p>{{item.txt}}</p>
        </div>
      </div>
    </div>
    <!--仪器分类-->
    <div class="container-fluid instrument" id="solution">
      <h3>仪器分类</h3>
      <div class="row">
        <div class="col-md-3 col-sm-6 production" v-for="item in production" :key="item.production">
          <div style="background: white">
            <div class="bg"
                 v-bind:style="{ 'background-image': 'url(' + item.imgArray + ')','background-repeat':'no-repeat','background-size':'cover','background-position':'50% 50%' }"></div>
            <h4>{{item.title}}</h4>
          </div>
          <div class="txt">
            <p>{{item.txt}}</p>
          </div>
        </div>
      </div>
    </div>
    <!--分类一-->
    <div class="pro-one container-fluid">
      <h3>有接口有协议的设备</h3>
      <div class="row">
        <p>{{proOneTxt}}</p>
      </div>
      <img src="../../static/bil/imgamge/20180701175757.jpg" alt="">
    </div>
    <!--分类二-->
    <div class="main container-fluid">
      <h3>有接口无协议的设备</h3>
      <div class="row">
        <p>{{proTwoTxt}}</p>
        <div class="col-md-5 main_bg"></div>
        <div class=" col-sm-12 col-md-7 maintxt">
          <div v-for="item in characteristic" :key="item.characteristic">
            <p><img :src="item.imgArray" alt="" width="40" height="40">{{item.title}}</p>
            <p class="del">{{item.txt}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="none container-fluid">
      <h3>无接口无协议的设备</h3>
      <div class="row">
        <p>{{proThreeTxt}}</p>
        <div class=" col-sm-12 col-md-7 maintxt">
          <div v-for="item in none" :key="item.none">
            <p><img :src="item.imgArray" alt="" width="40" height="40">{{item.title}}</p>
            <p class="del">{{item.txt}}</p>
          </div>
        </div>
        <div class="col-md-5 none_bg"></div>
      </div>
    </div>
    <div class="advance container-fluid main">
      <h3>技术特点与优势</h3>
      <div class="row">
        <p>{{proFourTxt}}</p>
        <h4>{{introduction}}</h4>
        <div class="col-md-5 advance_bg"></div>
        <div class=" col-sm-12 col-md-7 maintxt">
          <div v-for="item in things" :key="item.things">
            <p><img :src="item.imgArray" alt="" width="40" height="40">{{item.txt}}</p>
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
    name: "scada",
    data() {
      return {
        difficultTitle: '仪器设备数据采集的现状与难点',
        certificate: [
          {
            imgArray: '../../static/bil/imgamge/20180701194553.jpg', title: '数据采集难',
            txt: '目前市面的仪器设备类型众多，主要分类为有数据接口及无数据接口两类。而有接口的仪器设备数据采集只能依靠厂家配套的软件才能采集，且很难达到数据集成的目的'
          },
          {imgArray: '../../static/bil/imgamge/20180701183134.jpg', title: '现状与难点', txt: ''},
          {
            imgArray: '../../static/bil/imgamge/20180627174719.jpg', title: '人工记录',
            txt: '针对现在的仪器设备的数据，大多数都是采用人工记录的方式。这种方式不仅效率低而且容易出现错误'
          },
          {
            imgArray: '../../static/bil/imgamge/20180701181509.jpg', title: '效率低',
            txt: '仪器设备在没有智能化前它如同一把手动镙丝刀，它并不能像自动工具那样能快速有效地工作'
          },
          {
            imgArray: '../../static/bil/imgamge/20180701183207.jpg', title: '数据差异',
            txt: '有些仪器设备在工作过程中数据随时在更新变化，在操作人员主观判断上存在数据的差异性，无法精准地抓取有效有数据'
          },
          {
            imgArray: '../../static/bil/imgamge/20180627174947.jpg', title: '重复工作',
            txt: '传统的仪器设备数据依靠主观判断、人工记录，纸制报告。而对于有数字化系统的企业而言在没有实现智能采集前还需要将这些数据人工录入至系统中，这就造成了典型的时间人力的浪费'
          },
        ],
        goalTxt: '通过实时、自动监控与获取企业设备当前的状态信息瞬间把这些数据保存到数据库中，立即与标准值或规则做对比，' +
        '然后把设备的状态、异常、测量值等信息通过软件，报表、EXCEL等方式展示给相关人员，从而实现了自动采集、即时监控、随' +
        '时预警、自动汇总的管理效果。数据采集是实现自动化设备、信息化系统与管理层之间的信息纽带，建立和完善自动数据采集机' +
        '制已成为企业信息化建设的重点。',
        disadvantage: [
          {
            imgArray: '../../static/bil/imgamge/20180627180035.png',
            txt: '实施仪器设备数据采集它能替代传统的人为操作，通过无线、有线等方式将数据实时传输至服务器，从中节省了人工记录和录入的环节，从而提高了工作效率。'
          },
          {
            imgArray: '../../static/bil/imgamge/20180627180115.png',
            txt: '仪器设备实时监控可以实现数据监测、工作状态监测、仪器关键数据监测和报警信息监测等。以自动的形式完成采集、记录、处理等工作。'
          },
          {
            imgArray: '../../static/bil/imgamge/20180627180130.png',
            txt: '在实时数据监测的同时，服务以自动的形式完成数据处理、对比、分析、计算等工作，在整个过程中减少了大量的人为主观工作环节，在数据的准确性上以及及时性上有很大的提升。'
          },
        ],
        production: [
          {
            imgArray: '../../static/bil/imgamge/20180701185459.jpg', title: '有接口有协议',
            txt: '在设备中有接口有协议的仪器设备基本上没有。针对有接口有协议的仪器设备进行设备数据采集相对其它类型的要容易很多。'
          },
          {
            imgArray: '../../static/bil/imgamge/20180701185523.jpg', title: '有接口无协议',
            txt: '70%的仪器设备是有接口无协议的，要实现自动采集和分析还需要向厂商单独购买软件才能实现。其次还无法完成自动信息化集成效果。'
          },
          {
            imgArray: '../../static/bil/imgamge/20180701185616.jpg', title: '无接口无协议',
            txt: '此类仪器设备属于较老的仪器，而针对这类仪器仪表在实施数据自动化采集相对比第二种简单很多。'
          },
          {
            imgArray: '../../static/bil/imgamge/20180701185554.jpg', title: '非电子仪器',
            txt: '非电子仪器仪表基本上依靠人工操作主观判读为主。在可行范围内对这类仪器可采用加装高精密传感设备来实现。'
          },
        ],
        proOneTxt: '此类仪器设备相对比较容易实现，根据不同的协议标准进行数据解析转换，再通过局域网有线或WIFI等方式调整传输到数据中心。',
        proTwoTxt: '此类仪器设备相对实现比较难，大多数情况下可以通过厂家配备的成套软件进行数据截获破解，然后再通过迅发数据转换设备来达到数据自动采集集成的目的。',
        proThreeTxt: '此类设备实施相对也是比较复杂的。该类设备从设备显示上区分又分为三种类型，其中分为数码管显示，液晶屏显示和机械表、刻度管显示三类。具体的实施方法各有不同。',
        proFourTxt: '迅发设备数据采集设备采用进口电子元器件所设计研发，使用浇灌设计它具备防高温，防低温，防火，防水，更具备国家GB3836.9 防爆标准EX mⅡCT4等级。',
        characteristic: [
          {
            imgArray: '../../static/bil/imgamge/point.png', title: '遥测型数据',
            txt: '遥测型数据，它是根据仪器仪表研发工程师自己设定的数据格式进行遥测控制。数据格式分为16进制，ASCII码，AT指' +
            '令等等，而协议的标准大部分是以Modbus、TCP、UDP、Profibus总线、Can总线、USB、IEEE1394、PLC总线等等。无论哪种' +
            '标准，在遥测型数据中它们一定是以控制端发出请求指令后，设备才回复数据指令，回复的数据指令中就包含了许多设备的数据。'
          },
          {
            imgArray: '../../static/bil/imgamge/point.png', title: '主动型数据',
            txt: '主动型数据，它就类似于传感器一样，仪器设备它主动发出数据，无论主控端是否发出请求指令它都会不断地发出数' +
            '据指令。对这样类型的设备，主控端只需要实时接收即可。'
          },
        ],
        none: [
          {
            imgArray: '../../static/bil/imgamge/point.png', title: '数码管显示型设备',
            txt: '在早期计算机技术并不发达时代的仪器设备基本采集这种方式进行显示，自然它没有任何通讯接口，更谈不上数据协议。' +
            '从电子电路方面可以实现数据采集。数码管的显示方式是通过低压高速电平信号进去刷新显示的，而这个信号正是一个开关量。' +
            '我们可以在控制器与数控管之间进行截获这个电平信号来取得数码管上显示的数据，再通过迅发数据采集设备传输至数据中心。'
          },
          {
            imgArray: '../../static/bil/imgamge/point.png', title: '液晶屏显示类设备',
            txt: '在近期液晶显示屏广范应用于数码、仪器仪表等设备上，而要实施数据采集就更是无从下手。液晶显示屏的显示方式' +
            '是以图像图片的形式显示于屏幕上的，它的速率大多数是60HZ。实施数据采集的方法也只能像数码管一样在控制器与液晶民' +
            '间之间截获图像数据，然后反序列化还原图像本身，再通过图像识别算法识别出所需要的数据来达到数据采集的目的。这也' +
            '是目前常规的技术实现方法之一。'
          },
          {
            imgArray: '../../static/bil/imgamge/point.png', title: '机械表、刻度管显示类',
            txt: '对于机械表、刻度管显示类的仪器仪表，只能通过加装传感器来实现。'
          },
        ],
        introduction: '迅发设备数据采集终端',
        things: [
          {imgArray: '../../static/bil/imgamge/point.png', txt: '输入电压：9-36V DC'},
          {imgArray: '../../static/bil/imgamge/point.png', txt: '功率：3.65W'},
          {imgArray: '../../static/bil/imgamge/point.png', txt: '采集范围：12-36路数字量，8路传感器模拟量，1路USB，1路RS232'},
          {imgArray: '../../static/bil/imgamge/point.png', txt: '工作温度：+125度至-58度'},
          {imgArray: '../../static/bil/imgamge/point.png', txt: '防水等级：IP67'},
          {imgArray: '../../static/bil/imgamge/point.png', txt: '防爆等级：EX mⅡCT4'},
          {imgArray: '../../static/bil/imgamge/point.png', txt: '无线通信距离：<1500M'},
        ]
      }
    }
  }
</script>

<style scoped>
  /* banner */
  .scada-banner {
    background: url("../../static/bil/imgamge/20180705103038.jpg") no-repeat;
    height: 5rem;
    width: 100%;
    background-size: cover;
    background-position: 50% 50%;
    position: relative;
    margin-top: 70px;
    display: flex;
    align-items: center;
  }

  .scada-banner h2 {
    width: 100%;
    color: #fff;
    font-size: .6rem;
    margin-left: 13%;
    letter-spacing: 1px;
    font-weight: bold;
    text-shadow: 5px 5px 5px #0e2734;
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

  /* 难点 */
  .difficult, .goal, .instrument, .pro-one, .main, .none, .advance {
    text-align: center;
    position: relative;
    padding: .7rem 0;
  }

  .difficult h3, .goal h3, .instrument h3, .pro-one h3, .main h3, .none h3, .advance h3 {
    display: block;
    width: 100%;
    font-size: .28rem;
    margin-bottom: .6rem;
    color: #151515;
    position: relative;
  }

  .difficult h3:after, .goal h3:after, .instrument h3:after, .pro-one h3:after, .main h3:after, .none h3:after, .advance h3:after {
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: .5rem;
    border-bottom: 2px solid #008fd7;
    content: "";
  }

  .difficult > .row > div {
    padding: .378348rem .46242rem 0;
    transition: .8s;
    z-index: 1;
  }

  .difficult > .row > div:hover {
    transform: scale(1.05);
    z-index: 999;
  }

  .difficult > .row {
    margin: 0 7%;
  }

  .difficult > .row > div h4 {
    font-size: .25rem;
    color: white;
    text-shadow: 5px 5px 5px #151515;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .difficult > .row > div:nth-of-type(2) h4 {
    margin-top: .82rem;
  }

  .difficult > .row > div p {
    font-size: .15rem;
    color: white;
    line-height: .32rem;
    text-align: justify;
    text-shadow: 5px 5px 5px #151515;
  }

  .difficult > .row > div {
    width: 100%;
    height: 2.8rem;
  }

  /* 目标 */
  .goal p {
    font-size: .15rem;
    text-align: justify;
    line-height: .25rem;
    letter-spacing: 1px;
    color: #666666;
    margin: 0 15%;
  }

  .goal .row {
    margin: 0 15%;
  }

  .goal .row > div {
    margin-top: .2rem;
  }

  .goal .row > div p {
    margin-top: 20px;
  }

  .goal .row > div img {
    transition: .6s;
  }

  .goal .row > div img:hover {
    transform: rotateY(180deg);
  }

  /* 仪器分类 */
  .instrument, .main, .advance {
    background: #f9f9f9;
  }

  .instrument .bg {
    height: 3rem;
  }

  .instrument h4 {
    font-size: .18rem;
    text-align: center;
    font-weight: 600;
    padding: 15px 0;
    color: #333333;
  }

  .instrument .txt {
    padding: 40px 35px 0;
  }

  .instrument p, .pro-one p, .advance p, .main .del, .none .del, .main > .row > p, .none > .row > p {
    font-size: .15rem;
    text-align: justify;
    line-height: .25rem;
    color: #666666;
  }

  /* 分类详情 */
  .pro-one {
    text-align: center;
  }

  .pro-one p {
    margin: auto;
  }

  .pro-one img {
    margin-top: .3rem;
    width: 800px;
  }

  .maintxt img {
    width: 40px;
  }

  .main > .row {
    margin: 0 10% 0 15%;
  }

  .main .row, .none .row {
    margin-top: 60px;
  }

  .main > .row > p, .none > .row > p {
    margin-bottom: .2rem;
    text-align: justify;
  }

  .main .maintxt {
    text-align: justify;
    padding-left: 50px;
  }

  .none .maintxt {
    text-align: justify;
    padding-right: 50px;
  }

  .main p, .none p {
    font-weight: 100;
    font-size: .18rem;
    color: #333333;
  }

  .main .del, .none .del {
    padding-left: 40px;
    color: #666666;
  }

  .solution p {
    margin: auto;
  }

  .main_bg {
    background: url("../../static/bil/imgamge/20180627183212.png") no-repeat;
    width: 100%;
    height: inherit;
    background-size: contain;
    background-position: 50% 50%;
  }

  .none_bg {
    background: url("../../static/bil/imgamge/20180701185616.jpg") no-repeat;
    width: 100%;
    height: 4.5rem;
    background-size: cover;
    background-position: 50% 50%;
  }

  .advance_bg {
    background: url("../../static/bil/imgamge/20180701192701.jpg") no-repeat;
    width: 100%;
    height: inherit;
    background-size: contain;
    background-position: 50% 50%;
  }

  .advance h4 {
    width: 100%;
    text-align: left;
    font-size: .18rem;
    margin-bottom: 20px;
    color: #333333;
    padding-left: 15px;
    border-left: 4px solid #008fd7;
  }

  @media (max-width: 1199.98px) {
    .scada-banner {
      height: 8rem;
    }
    .scada-banner h2 {
      font-size: .8rem;
    }
    .difficult h3, .goal h3, .instrument h3, .pro-one h3, .main h3, .none h3, .advance h3 {
      font-size: .38rem;
    }
    .difficult h3:after, .goal h3:after, .instrument h3:after, .pro-one h3:after, .main h3:after, .none h3:after, .advance h3:after {
      top: .6rem;
    }
    .difficult > .row > div h4 {
      font-size: .3rem;
    }
    .difficult > .row > div:nth-of-type(2) h4 {
      margin-top:1.3rem;
    }
    .difficult > .row > div p,.goal p,.instrument p, .pro-one p, .advance p,
    .main .del, .none .del, .main > .row > p, .none > .row > p{
      font-size: .25rem;
      line-height: .35rem;
    }
    .main p, .none p {
      font-weight: 500;
      font-size: .28rem;
    }
    .difficult > .row > div {
      height: 4rem;
    }
    .goal .row > div img {
      width: 100px;
      height: 100px;
    }
    .instrument h4,.advance h4 {
      font-size: .25rem;
    }
    .instrument .bg {
      height: 3.5rem;
    }
    .pro-one img {
      width: 738px;
    }
    .instrument .txt {
      padding: 20px 15px 0;
    }
  }
  @media (max-width: 797.98px) {
    .scada-banner {
      height: 9rem;
    }
    .scada-banner h2 {
      font-size: 1rem;
    }
    .difficult h3, .goal h3, .instrument h3, .pro-one h3, .main h3, .none h3, .advance h3 {
      font-size: .56rem;
    }
    .difficult h3:after, .goal h3:after, .instrument h3:after, .pro-one h3:after, .main h3:after, .none h3:after, .advance h3:after {
      top:1rem;
    }
    .difficult > .row > div {
      height: 6rem;
      padding: .8rem 1rem 0;
    }
    .difficult > .row > div h4,.instrument h4,.advance h4,.main p, .none p  {
      font-size: .4rem;
    }
    .difficult > .row > div p, .goal p, .instrument p, .pro-one p, .advance p, .main .del, .none .del, .main > .row > p, .none > .row > p {
      font-size: .35rem;
      line-height: .6rem;
    }
    .goal .row > div img {
      margin-top: 30px;
    }
    .instrument .bg, .advance_bg  {
      height: 7.5rem;
    }
    .instrument .txt {
      padding: 20px 15px;
    }
    .pro-one img {
      width: 90%;
    }
    .main_bg {
      height: 6rem;
    }
    .main .maintxt {
      padding-left:0;
    }
    .none_bg {
       height: 12rem;
     }
  }
  @media (max-width: 575.98px) {
    .scada-banner {
      height: 15rem;
    }
    .scada-banner h2 {
      font-size: 1.2rem;
      margin: 0;
      text-align: center;
    }
    .bottom-round {
     display: none;
    }
    .difficult h3, .goal h3, .instrument h3, .pro-one h3, .main h3, .none h3, .advance h3 {
      font-size: .8rem;
      margin-bottom: 1rem;
    }
    .difficult h3:after, .goal h3:after, .instrument h3:after, .pro-one h3:after, .main h3:after, .none h3:after, .advance h3:after {
      top: 1.5rem;
    }
    .difficult > .row > div h4, .instrument h4, .advance h4, .main p, .none p {
      font-size: .6rem;
    }
    .difficult > .row > div p, .goal p, .instrument p, .pro-one p, .advance p, .main .del, .none .del, .main > .row > p, .none > .row > p {
      font-size: .58rem;
      line-height: .8rem;
    }
    .difficult > .row > div {
      height: 8rem;
    }
    .difficult > .row > div:nth-of-type(2)  {
     display: none;
    }
    .instrument .bg, .advance_bg {
      height: 11rem;
    }
  }

</style>
