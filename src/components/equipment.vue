<template>
    <div>
      <div class="banner">
        <div class="bottom-round"></div>
      </div>
      <!-- 难点 -->
      <div class="container-fluid difficult">
      <!--  <h3 class="animated slideInDown">{{difficultTitle}}</h3>-->
        <div class="row">
          <div class="col-md-4" v-for="item in certificate" :key="item.certificate"
               v-bind:style="{ 'background-image': 'url(' + item.imgArray + ')','background-repeat':'no-repeat','background-size':'cover','background-position':'50% 50%' }">
            <h4>{{item.title}}</h4>
            <p>{{item.txt}}</p>
          </div>
        </div>
      </div>
      <!--目标-->
      <div class="container-fluid content" id="content">
        <div class="row">
          <h3 class="animated  fadeInDown">实施设备管理系统的目标</h3>
          <p>{{goal}}</p>
          <div class="mod-wrap new">
            <div class="mod-inner">
              <div class="mod-content qc-grids with-slot">
                <div data-index="0" class="product qc-unit-5-24 qc-unit-active b_l  b_b" style="height:400px;">
                  <img src="../../static/bil/imgamge/20180622164918.png" alt="" width="" height="">
                  <h4>促进企业信息化管理改革</h4>
                  <p>{{challengeTitle}}</p>
                </div>
                <div v-for="item in challenge" :key="item.challenge" class="product qc-unit-5-24 b_b" v-bind:data-index="item.index">
                  <img :src="item.imgArray" alt="">
                  <h4>{{item.title}}</h4>
                  <p>{{item.txt}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--优势-->
      <div class="main container-fluid" id="main">
        <h3>智慧管理优势</h3>
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
      <!--架构图-->
      <div class="technology">
        <h3>技术架构图</h3>
        <img src="../../static/bil/imgamge/20180629154645.png" alt="">
      </div>
      <!--实施阶段-->
      <div class="container-fluid instrument" id="solution">
        <h3>实施阶段</h3>
        <div class="row">
          <div class="col-md-3 col-sm-6 production" v-for="item in production" :key="item.production">
            <div style="background:#f9f9f9">
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
      <!--系统关键点-->
      <div class="point container-fluid">
        <h3>系统关键点</h3>
        <div class="row">
            <div class="col-md-4" v-for="item in point" :key="item.point">
              <img :src="item.imgArray" alt="">
              <h4>{{item.title}}</h4>
              <p>{{item.txt}}</p>
            </div>
        </div>
      </div>
      <bottom></bottom>
    </div>
</template>

<script>
  import * as $ from 'jquery'
  import bottom from '../components/bottom'
  // console.log($)
    export default {
      components: {bottom},
        name: "equipment",
      data() {
          return {
            difficultTitle:'传统设备管理模式存在的问题',
            certificate: [
              {
                imgArray: '../../static/bil/imgamge/20180627174459.jpg', title: '设备管理信息零散，缺乏长期，完整的信息管理',
                txt: '传统的管理模式信息记录在纸质介质和分散在不同的Excel，Word文档中，各个分公司的信息提交后，对信息进行' +
                '整理和分析工作量大，信息的准确性，一致性无法保证'
              },
              {imgArray: '', title: '传统设备管理模式存在的问题', txt: ''},
              {
                imgArray: '../../static/bil/imgamge/20180629112349.png', title: '缺少科学手段对制度执行情况进行有效的监管、评估',
                txt: '设备管理工作的改进由于缺少历史数据的支持，更多的依靠个人经验判断，无法进行科学的评估和建议'
              },
              {
                imgArray: '../../static/bil/imgamge/20180629112443.png', title: '设备维修保养计划管理难度较大',
                txt: '每个分公司均管理着大量的设备，每个设备的不同部件均有定期的检修和保养工作，由于信息量较大，计划的整' +
                '理和安排消耗了相关人员大量时间，并且可能存在计划执行延误。同时，如何达到最优的设备使用效率，合理安排维修' +
                '保养人员的工作量也是传统管理模式中经常不能处理的问题。'
              },
              {
                imgArray: '../../static/bil/imgamge/20180629112600.png', title: '信息缺乏综合分析，利用率低',
                txt: '设备的历史变更记录，历史维修记录，历史文档等各种动态信息缺乏有效的管理手段，在日常管理中，尽管对这' +
                '些信息进行了登记，但是由于缺乏管理平台，这类动态信息的后期利用率低，未能充分发挥信息对设备管理工作改进的' +
                '指导作用。'
              },
              {
                imgArray: '../../static/bil/imgamge/20180629112515.png', title: '设备实时健康数据难以收集',
                txt: '传统的管理方式缺乏科学的、有预见性的、有数据可分析的预警。而是以设备即坏即修原则，在日常使用率较高' +
                '的设备可能存在替代难度大的情况。在此情况下正常生产就难以保障。'
              },
            ],
            challenge: [
              {
                index: '1', title: '维保计划科学化', imgArray: '../../static/bil/imgamge/20180622164945.png',
                txt: '设备管理系统实施将为企业进行信息化管理改革、提升企业竞争力提供强有力的技术保障，同时直接带来了巨大' +
                '的经济效益和管理效率的提升。'
              },
              {
                index: '2', title: '设备质量保障', imgArray: '../../static/bil/imgamge/20180622165047.png',
                txt: '实现设备集中计划管理，引入设备维修保养技术标准，实施维修保养计划管理。从而保证设备质量，降低设备故' +
                '障率和事故率，避免人为原因造成的损失。'
              },
              {
                index: '3', title: '节能降耗，减少成本开支', imgArray: '../../static/bil/imgamge/20180622165109.png',
                txt: '通过管理软件系统的实施，合理降低维修保养成本、能耗和其它各种损耗，从而降低整体运营成本，提高经济效益。'
              },
              {
                index: '4', title: '提供管理决策支持', imgArray: '../../static/bil/imgamge/20180622165142.png',
                txt: '管理者可随时随地掌握设备使用状况，将一系列客观的数据，通过计算机系统进行科学汇总分析，有利于领导进行企业经营决策。 '
              },
            ],
            challengeTitle:'设备管理系统实施将为企业进行信息化管理改革、提升企业竞争力提供强有力的技术保障，同时直接带来' +
            '了巨大的经济效益和管理效率的提升。',
            goal: '结合设备管理制度，通过信息化的方式提高信息的一致性和准确性，通过帮助各个管理者在设备管理的各环节中协同处理，信息共享。',
            characteristic: [
              {
                imgArray: '../../static/bil/imgamge/point.png', title: '智能调度',
                txt: '根据设备台帐与智能算法模型，系统给出合理性地调度建议。'
              },
              {
                imgArray: '../../static/bil/imgamge/point.png', title: '故障精准定位',
                txt: '具备人工智能AI经验库，长期学习设备故障原因，系统逐渐成长，长期积累实现设备故障精准定位。'
              },
              {
                imgArray: '../../static/bil/imgamge/point.png', title: '维修周期管理',
                txt: '根据系统自身的设备台帐系统结合AI经验库实现智能维修周期管理。'
              },
              {
                imgArray: '../../static/bil/imgamge/point.png', title: '分布式架构数据共享',
                txt: '授权系统允许多方数据共享，打破台帐零散难以管理的局面。'
              },
              {
                imgArray: '../../static/bil/imgamge/point.png', title: '智能预警与维修建议',
                txt: '根据设备数字台帐库、AI经验库以及积累的历史维修记录，系统合理地给出生命周期预警提示与维修建议。'
              },
              {
                imgArray: '../../static/bil/imgamge/point.png', title: '互联网+大数据云平台',
                txt: '具备人工智能AI经验库，长期学习设备故障原因，系统逐渐成长，长期积累实现设备故障精准定位。'
              },
              {
                imgArray: '../../static/bil/imgamge/point.png', title: '物联网技术实时监测',
                txt: '基于物联网最新技术实现对设备进行精准、真实有效地数据采集，实现设备生命周期预警。'
              },
              {
                imgArray: '../../static/bil/imgamge/point.png', title: '智慧分析',
                txt: '通过大数据和AI系统实现对设备智能分析，以达到成本最小化、性价比最高化以及利用率最优化的目的。'
              },
              {
                imgArray: '../../static/bil/imgamge/point.png', title: '三维设备维修教学',
                txt: '通过设备三维模型进行拆解，让工作人员进一步了解设备组成原理，提高工作人员维修技能。'
              },
            ],
            production: [
              {
                imgArray: '../../static/bil/imgamge/20180628161830.png', title: '设备数字化台帐',
                txt: '在本系统建立初期应当实现设备数字化强台帐，供应商提供的设备规格参数、设备铭牌、维修保养资料、特殊设' +
                     '备维保计划等资料录入管理系统形成设备数字化台帐。'
              },
              {
                imgArray: '../../static/bil/imgamge/20180628161937.png', title: '运行数据监控',
                txt: '在形成数字化台帐后，利用先进的物联网技术实现对设备实时运行数据、设备健康状况、突发状况进行监控以及' +
                '记录数据，并根据数字化台帐进行分析比对作出相应的预警动作。'
              },
              {
                imgArray: '../../static/bil/imgamge/20180628162751.png', title: '维保经验库',
                txt: '根据设备运行数据、健康状况数据、设备规格参数、以往维保记录等数据形成智慧维保经验库。系统会利用人工' +
                '智能神经网络工具有争对性地对每一个设备故障、维保、运行等方面进行自主学习形成维保经验库。当设备的健康情况' +
                '不达标时，系统自动给用户提出维修、保养以及关键性的建议。'
              },
              {
                imgArray: '../../static/bil/imgamge/20180628162811.png', title: '大数据分析',
                txt: '系统最终会形成设备管理的大数据，用户可根据自主需要利用大数据和AI系统实现对设备进行智慧分析，系统给' +
                '出关键的管理决策建议，以达到企业设备管理成本最小化、性价比最高化以及利用率最优化的目的。'
              },
            ],
            point: [
              {
                title: '智能维保计划', imgArray: '../../static/bil/imgamge/20180622164945.png',
                txt: '结合互联网+物联网技术进行实时采集设备数据形成维保经验大数据。再通过神经网络和算法模块给用户提出综合性的维保建议。'
              },
              {
                title: '智能预警', imgArray: '../../static/bil/imgamge/20180622165047.png',
                txt: '本系统通过物联网技术进行对设备实时采集数据，实现设备维保预警提示功能'
              },
              {
               title: '设备管理最优化', imgArray: '../../static/bil/imgamge/20180622165109.png',
                txt: '通过神经网络算法给用户最合理，最优化的调试和使用建议'
              },
              {
                title: '智慧查询分析', imgArray: '../../static/bil/imgamge/20180622165142.png',
                txt: '系统分析汇总功能从维保大数据库中提取数据进行智能、综合性地分析。 '
              },
              {
                title: '数据共享', imgArray: '../../static/bil/imgamge/20180622165142.png',
                txt: '基于互联网技术实现多网点间的数据共享以及方便集团公司统一管理设备、维保以及达到节能减排目的。 '
              },
              {
                title: '设备三维全景', imgArray: '../../static/bil/imgamge/20180622165142.png',
                txt: '通过设备三维全景进行拆解，让工作人员进一步了解设备组成原理，提高工作人员维修技能。'
              }
            ],
          }
      },
      mounted: function () {
        $('.mod-content .product').hover(function () {
          $(this).addClass('qc-unit-active').siblings().removeClass('qc-unit-active')
          $(this).css('height', '400px').siblings().css('height', '320px')
        })
      }
    }
</script>

<style scoped>
  .banner {
    background: url("../../static/bil/imgamge/20180629141236.jpg") no-repeat;
    height: 5rem;
    width: 100%;
    background-size: cover;
    background-position: 50% 50%;
    position: relative;
    margin-top: 70px;
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
  .difficult,.content,.technology, .instrument,.point {
    text-align: center;
    position: relative;
    padding: .7rem 0;
  }

  .difficult h3,.content h3,.main h3,.technology h3,.instrument h3,.point h3{
    display: block;
    width: 100%;
    font-size: .28rem;
    margin-bottom: .6rem;
    color: #151515;
    position: relative;
  }

  .difficult h3:after,.content h3:after,.main h3:after ,.technology h3:after,.instrument h3:after,.point h3:after{
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: .5rem;
    border-bottom: 2px solid #008fd7;
    content: "";
  }

  .difficult > .row > div {
    padding: .6rem .46242rem 0;
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
    text-align: left;
    font-size: .25rem;
    color: white;
    text-shadow: 5px 5px 5px #151515;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .difficult > .row > div:nth-of-type(2) {
    background: #262626;
  }
  .difficult > .row > div:nth-of-type(2) h4 {
    margin-top: .82rem;
  }

  .difficult > .row > div p {
    font-size: .15rem;
    color: white;
    line-height: .25rem;
    text-align: justify;
    text-shadow: 5px 5px 5px #151515;
  }

  .difficult > .row > div {
    width: 100%;
    height: 3rem;
  }
  /* 目标 */

  .content,.technology,.point {
    text-align: center;
    background: #f9f9f9;
  }
  .content h3 {
    margin-bottom: .3rem;
  }
  .content > .row >p {
    font-size: .15rem;
    line-height: .32rem;
    color: #666666;
    margin-bottom: .4rem;
  }


  .content p {
    width: 100%;
    font-size: .15rem;
    margin: .2rem auto;
    font-weight: 300;
  }

  .content .mod-wrap {
    margin-top: .2rem;
    width: 100%;;
    height: 400px;
  }

  .qc-grids {
    font-size: 0
  }

  .mod-inner img {
    width: .6rem !important;
    margin-top: .4rem;
  }

  .mod-inner h4 {
    width: 100%;
    font-size: .18rem;
    margin-top: .1rem;
    color: #1790d4;
  }

  .mod-inner h4:after {
    width: 12%;
    position: absolute;
    top: 2rem;
    left: 50%;
    margin-left: -6%;
    border-bottom: 2px solid #cdcdcd;
    content: '';
  }

  .qc-grids [class*=qc-unit] {
    display: inline-block;
    zoom: 1;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
  }

  .qc-unit-5-24 {
    width: 16.75%
  }

  .b_l {
    border-left: 1px solid #d9d9d9;
  }

  .b_b {
    border-bottom: 1px solid #d9d9d9;
  }

  /*改变宽度*/
  .qc-unit-active {
    width: 20%
  }

  .new .product {
    background-color: #fff;
    border-top: 4px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
    padding: 0 38px;
    position: relative;
    height: 320px;
    transition: all .3s cubic-bezier(.4, 0, .2, 1), z-index 0s .12s;
    min-height: 0;
    overflow: hidden
  }

  .product.qc-unit-active {
    border-top: 4px solid #008fd7;
    margin-top: -30px;
    border-left: 1px solid #008fd7;
    border-right: 1px solid #008fd7;
    border-bottom: 1px solid #008fd7;
    padding-bottom: 20px;
    box-shadow: 0 3px 20px rgba(0, 0, 0, .1);
    transform: translate3d(0, -2px, 0)
  }

  .mod-inner p {
    opacity: 0;
    margin-top: .4rem;
    text-align: justify;
    transition: all .3s;
    color: #666666;
  }

  .product.qc-unit-active p {
    opacity: 1
  }

  .product.qc-unit-active h4:after {
    left: 50%;
    margin-left: -40%;
    width: 80%;
    border-bottom: 1px solid #7ECEF4;
    top: 1.5rem;
  }
  /*优势*/
  .main{
    width: 100%;
    padding: .7rem 0;
    text-align: center;
    position: relative;
  }
  .maintxt {
    padding-left: 30px;
  }
  .maintxt>div {
    margin-bottom: 10px;
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
    font-weight: 100;
    font-size: .18rem;
    color: #333333;
  }
  .main .del{
    padding-left: 40px;
    font-size: .15rem;
    color: #666666;
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
  /* 架构图 */
  .technology img {
    width: 1000px;
  }

  /* 实施阶段 */
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

  .instrument p, .pro-one p, .advance p,.point p {
    font-size: .15rem;
    text-align: justify;
    line-height: .25rem;
    color: #666666;
  }
  /*系统架构点*/
.point .row {
  margin: 0 15%;
}
  .point .row>div {
    margin-bottom: 30px;
    padding: 0 30px;
  }
  .point .row>div h4 {
    font-size: .25rem;
    color: #333333;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .point img {
    width: 80px;
    margin-bottom: 10px;
  }
</style>
