<template>
  <div>
    <div class="bg">
      <div class="bottom-round"></div>
    </div>
    <div class="content container-fluid">
      <div class="introduction row">
        <h4>建设背景</h4>
        <p>{{bg}}</p>
      </div>
    </div>
    <div class="content container-fluid nowadays">
      <div class="introduction row">
        <h4 style="width: 100%" id="fibre_title">当前现状与痛点</h4>
        <div class="col-md-4 col-sm-6" v-for="item in disadvantage" :key="item.disadvantage">
          <h5>{{item.title}}</h5>
          <p>{{item.txt}}</p>
        </div>
      </div>
    </div>
    <div class="container-fluid sou">
      <div class="row">
        <h4>解决方案</h4>
        <p width="100%">{{ project}}</p>
      </div>
    </div>
    <div class="container-fluid content advance">
      <h4 id="advance_title">{{advanceTitle}}</h4>
      <div class="row">
        <div class="col-md-5 advance-img">
          <img src="../../static/bil/imgamge/20180621164758.png" alt="" width="100%" height="auto">
        </div>
        <div class="col-md-6">
          <p v-for="item in advance" :key="item.advance">{{item}}</p>
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
    name: 'fibre',
    data() {
      return {
        advance: [
          '1、光纤传感器中光信号在光纤中传输，不易受到气候条件的影响，监测距离最长可达到百公里',
          '2、能够同时精确测量光纤任意位置处的多种物理参量，信息极为丰富，显著提升了对环境状态判断的准确度',
          '3、尺寸小、重量轻、不怕电磁干扰、抗化学腐蚀、本征安全，能够实现永久性连续在线监测',
          '4、分布式光纤预警系统最大的优势还在于分布式的监测能力，光纤上的任意位置都具有感知能力，能够以低廉的成本代替多余一万个传统的单点式传感器',
          ' 5、部署安装简单'
        ],
        disadvantage: [
          {
            title: "人工巡检",
            txt: " 油气管线路输送距离长，跨过多种复杂的地形地貌，人工巡检作业效率较低；部分管线经过地区为地质灾害的高发区，沿途环境\n" +
            "复杂，冰盖地区和山区人工巡检难以开展；不能实现实时全天候的巡检"
          },
          {
            title: "红外线对射技术",
            txt: " 红外线对射技术的方案防护等级较低，对于蓄意侵入者而言，很容易跨越活规避；受地形条件的高低、曲折、转弯等环境的限制；" +
            "红外线对射技术不适应恶劣气候，容易受高温、低温、强光、灰尘、雨、雪、雾等自然气候影响，误报率高"
          },
          {
            title: "电缆传感技术",
            txt: "泄露电缆和震动电缆报警是属于电缆传感，传感部分都是有源的，系统消耗功能大；电子围栏、电网等方案有一定的危险性"
          },
          {
            title: "视频监控成本高",
            txt: "视频监控技术成本高，安装部署难度较大，本身很容易破坏"
          },
          {
            title: "电子传感器干扰",
            txt: "基于电子传感器陈列普遍存在各类干扰，如雷电干扰等电磁干扰、信号传输时干扰、信号串扰等，使得预警系统的灵敏度下降，\n" +
            "        误报率、漏报率上升"
          },
          {
            title: "对于大范围无法监控",
            txt: "传感安防系统本身没有定位功能，遇上入侵行为，无法准确定位。这意味着无法及时、准确的确定危险地点，导致及时发现了\n" +
            "        航油管的破坏、入侵事件。仍然难以及时采取制止措施侵入行为"
          }
        ],
        bg: "近年来公路交通基础建设迅速发展，隧道和桥梁工程的建设规模大，环境条件复杂，建设速度快，所以对其长期运行的安全性\n" +
        "        必须进行在线监测，才能有效预防安全事故的发生，避免造成生命和财产的重大损失。公路隧道和桥梁的地质灾害不仅影响公路\n" +
        "        交通的安全，造成生命和财产的损失，而且影响经济的快速稳定发展。公路隧道和桥梁发生的灾害主要包括隧道局部的坍塌、渗\n" +
        "        漏以及火灾，桥梁局部裂缝、崩塌等。传感技术是这些工程安全监测的基础和支柱。而随着工程难度和环境条件日趋复杂，传统\n" +
        "        的传感技术已愈来愈显示出它的局限性，如抗干扰能力和抗恶劣环境能力差，长期稳定性差，难以实现现场非电、大容量、\n" +
        "        、数字化监测等。光纤传感技术正是在这种背景下，自20世纪70年代初诞生以来，就受到了世界范围内的广泛重视，并取得了持\n" +
        "        续和快速的发展，成为这些大型工程安全监测的首选传感器。因此，近年来光纤传感器逐渐的代替了电阻应变片传感器，在大型\n" +
        "        土木工程中获得了广泛的应用。",
        project: "运用基于OFDR的新一代光纤传感技术，通过在航油管线的沿线铺设传感光纤，外界环境的变化如温度、应变、振动等，将会引\n" +
        "          起光纤传输特性的变化，进而引起在光线中传输的光的在强度、相位、频率、偏振态等参数变化，并被解调仪检测出来，通过\n" +
        "          检测该后向散射信号，能够获得光纤在任意位置处的温度、形变和振动等多种参量信息。运用大数据建模、深度分析、机器学\n" +
        "          习智能识别入侵破坏行为，构建长距离、高分辨率、快响应时间、高可靠性的实时监测系统，对入侵信号进行实时识别、预警\n" +
        "          与定位，并结合北斗定位技术、三维全景可视化技术，及时应急处理安全隐患，实现中国航油输油管道全天候、实时、无盲区、\n" +
        "          高可靠性的可视化智慧安防。",
        advanceTitle:'光纤传感技术应用于管线安防的优势'
      }
    }
  }
</script>

<style scoped>
  .bg {
    width: 100%;
    height: 5rem;
    background: url("../../static/bil/imgamge/20180701145706.jpg") no-repeat;
    background-size: cover;
    margin-bottom: .7rem;
    position: relative;
    margin-top: 70px;
    background-position: 50% 50%;
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

  .content h4, .sou h4 {
    width: 100%;
    display: block;
    color: #151515;
    font-size: .28rem;
    text-align: center;
    position: relative;
    margin-bottom: .6rem;
  }
  .content h4:after, .sou h4:after {
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: .5rem;
    border-bottom: 2px solid #008fd7;
    content: "";
  }

  .content p, .sou p {
    display: block;
    width: 100%;
    font-size: .15rem;
    font-weight: 200;
    line-height: .32rem;
    color: #666666;
    margin-bottom: .2rem;
    text-align: justify;
  }

  .nowadays {
    margin-top: .7rem;
    padding:.7rem 0;
    width: 100%;
    background: url("../../static/bil/imgamge/500629994.png") center no-repeat;
    background-size: cover;
  }

  .introduction > div {
    padding: .35rem .2rem 0;
    height: 3rem;
  }

  .introduction > div:nth-of-type(1) {
    background: url("../../static/bil/imgamge/500648799.png") center no-repeat;
    width: 100%;
    background-size: cover;
  }

  .introduction > div:nth-of-type(3) {
    background: url("../../static/bil/imgamge/500448297_wx.png") center no-repeat;
    width: 100%;
    background-size: cover;
  }

  .introduction > div:nth-of-type(2), .introduction > div:nth-of-type(4) {
    background: url("../../static/bil/imgamge/video.png") center no-repeat;
    width: 100%;
    background-size: cover;
  }

  .introduction > div:nth-of-type(5) {
    background: url("../../static/bil/imgamge/ele.png") center no-repeat;
    width: 100%;
    background-size: cover;
  }

  .introduction > div:nth-of-type(6) {
    background: url("../../static/bil/imgamge/big.png") center no-repeat;
    width: 100%;
    background-size: cover;
  }

  .nowadays h5 {
    color: #FFF;
    font-size: .19rem;
    margin-bottom: .15rem;
  }

  .nowadays p {
    color: #FFF;
  }

  .content img {
    width: 100%;
    transition: .8s;
  }

  .content img:hover {
    transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
  }

  .advance {
    color: black;
    padding: .7rem 0;
    margin-bottom: 30px;
  }

  .sou {
    background: rgb(245, 251, 254);
    padding: .5rem 0;
  }

  @media (max-width: 1199.98px) {
    .bg {
      height: 8rem;
    }

    .content h4, .sou h4 {
      font-size: .38rem;
      margin-bottom: .8rem;
    }
    .content h4:after, .sou h4:after {
      top: .7rem;
    }
    .content p, .sou p {
      font-size: .25rem;
      font-weight: 100;
      line-height: .35rem;
    }
    .introduction > div {
      height: 4rem;
    }
    .nowadays h5 {
      font-size: .3rem;
    }
  }

  @media (max-width: 767.98px) {
    .bg {
      height: 9rem;
    }
    .content h4, .sou h4 {
      font-size: .56rem;
      margin-bottom: .5rem;
    }
    .content h4:after, .sou h4:after {
      top: .9rem;
    }
    .content p, .sou p {
      font-size: .35rem;
      line-height: .6rem;
    }
    .introduction > div {
      height: 5rem;
    }
    .nowadays h5 {
      font-size: .4rem;
    }
  }

  @media (max-width: 575.98px) {
    .bg {
      height: 15rem;
    }
    .content h4, .sou h4 {
      font-size: .8rem;
      margin-bottom: 1rem;
    }
    .content h4:after, .sou h4:after {
      top: 1.5rem;
    }
    .content p, .sou p {
      font-size: .58rem;
      line-height: .8rem;
    }

    .introduction > div {
      height: 5.5rem;
    }
    .advance-img {
      margin-bottom: 20px;
    }
    .nowadays h5 {
      font-size: .65rem;
    }
  }
</style>
