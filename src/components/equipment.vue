<template>
    <div>
      <div class="banner">
        <div class="bottom-round"></div>
      </div>
      <!-- 难点 -->
      <div class="container-fluid difficult">
        <h3 class="animated slideInDown">{{difficultTitle}}</h3>
        <div class="row">
          <div class="col-md-4" v-for="item in certificate" :key="item.certificate"
               v-bind:style="{ 'background-image': 'url(' + item.imgArray + ')','background-repeat':'no-repeat','background-size':'cover','background-position':'50% 50%' }">
            <h4>{{item.title}}</h4>
            <p>{{item.txt}}</p>
          </div>
        </div>
      </div>
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
    </div>
</template>

<script>
  import * as $ from 'jquery'
  // console.log($)
    export default {
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
              {imgArray: '../../static/bil/imgamge/20180628160109.jpg', title: '现状与难点', txt: ''},
              {
                imgArray: '../../static/bil/imgamge/20180627174719.jpg', title: '缺少科学手段对制度执行情况进行有效的监管、评估',
                txt: '设备管理工作的改进由于缺少历史数据的支持，更多的依靠个人经验判断，无法进行科学的评估和建议'
              },
              {
                imgArray: '../../static/bil/imgamge/20180627174922.jpg', title: '设备维修保养计划管理难度较大',
                txt: '每个分公司均管理着大量的设备，每个设备的不同部件均有定期的检修和保养工作，由于信息量较大，计划的整' +
                '理和安排消耗了相关人员大量时间，并且可能存在计划执行延误。同时，如何达到最优的设备使用效率，合理安排维修' +
                '保养人员的工作量也是传统管理模式中经常不能处理的问题。'
              },
              {
                imgArray: '../../static/bil/imgamge/20180627174649.jpg', title: '信息缺乏综合分析，利用率低',
                txt: '设备的历史变更记录，历史维修记录，历史文档等各种动态信息缺乏有效的管理手段，在日常管理中，尽管对这' +
                '些信息进行了登记，但是由于缺乏管理平台，这类动态信息的后期利用率低，未能充分发挥信息对设备管理工作改进的' +
                '指导作用。'
              },
              {
                imgArray: '../../static/bil/imgamge/20180627174947.jpg', title: '设备实时健康数据难以收集',
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
    background: url("../../static/bil/imgamge/20180628175058.jpg") no-repeat;
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
  .difficult {
    text-align: center;
    position: relative;
    padding: .7rem 0;
  }

  .difficult h3,.content h3 {
    display: block;
    width: 100%;
    font-size: .28rem;
    margin-bottom: .6rem;
    color: #151515;
    position: relative;
  }

  .difficult h3:after,.content h3:after {
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

  .content {
    text-align: center;
    padding-bottom: .4rem;
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


</style>
