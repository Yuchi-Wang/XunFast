<template>
  <div>
    <div class="system_banner">
      <h3>航空油品计量检定系统</h3>
    </div>
    <div class="solve container-fluid">
      <div class="row">
        <h4>解决方案</h4>
        <p>{{introduction}}</p>
      </div>
    </div>
    <div class="six"></div>
    <div class="solve container-fluid">
      <div class="row">
        <h4>系统基础应用功能</h4>
        <div class="function col-md-2 col-sm-4 col-6" v-for="item in functions" :key="item.functions">
          <div>
            <img :src="item.imgArray" alt=""><br>
            <img :src="item.imgArrayHover" alt="" class="hover">
            <span>{{item.txt}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="base"></div>
    <div class="advance container-fluid">
      <div class="row">
        <h4>系统优势</h4>
        <div class="col-md-2 col-sm-4 col-6 list" v-for="item in advantage" :key="item.advantage">
            <div><img :src="item.imgArray" alt=""></div>
            <span>{{item.txt}}</span>
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
    name: 'system',
    data: function () {
      return {
        introduction: ' 运用云计算、大数据、移动互联等新一代信息技术，采用SOA的服务架构体系，基于物联网的数据智能采集，在实验大数据的深度\n' +
        '        挖掘分析的基础下，结合可视化图形报表的形式直观展现。依托IS09001的标准管理体系来管理油品质量过程，强化数据管理，规\n' +
        '        范管理流程，从而达到夯实研发基础，降低工作成本，增强工作效率，提高工作质量，提升工作水平的作用。实现工作流程化、\n' +
        '        运营体系化、管理信息化、服务主动化的目标。',
        functions: [
          {
            imgArray: '../../static/bil/imgamge/person.png', imgArrayHover: '../../static/bil/imgamge/person_white.png',
            txt: '工作人员管理'
          },
          {
            imgArray: '../../static/bil/imgamge/metering.png',
            imgArrayHover: '../../static/bil/imgamge/metering_white.png',
            txt: '计量管理工具'
          },
          {
            imgArray: '../../static/bil/imgamge/business.png',
            imgArrayHover: '../../static/bil/imgamge/business_white.png',
            txt: '分公司管理'
          },
          {
            imgArray: '../../static/bil/imgamge/file.png', imgArrayHover: '../../static/bil/imgamge/file_white.png',
            txt: '文件管理'
          },
          {
            imgArray: '../../static/bil/imgamge/people.png', imgArrayHover: '../../static/bil/imgamge/people_white.png',
            txt: '工作量及绩效管理'
          },
          {
            imgArray: '../../static/bil/imgamge/shareholder.png',
            imgArrayHover: '../../static/bil/imgamge/shareholder_white.png',
            txt: '辅助管理'
          },
        ],
        advantage: [
          {imgArray: '../../static/bil/imgamge/juge.png', txt: '系统自动判定'},
          {imgArray: '../../static/bil/imgamge/control.png', txt: '系统控制'},
          {imgArray: '../../static/bil/imgamge/auto.png', txt: '系统自动对比'},
          {imgArray: '../../static/bil/imgamge/math.png', txt: '系统自动计算'},
          {imgArray: '../../static/bil/imgamge/system.png', txt: '系统自动出具'},
          {imgArray: '../../static/bil/imgamge/tongji.png', txt: '系统自动统计'}
        ]
      }
    }
  }
</script>

<style scoped>
  .system_banner {
    text-align: center;
    padding-top: .8rem;
    width: 100%;
    height: 9rem;
    background: url("../../static/bil/imgamge/20180701184711.jpg") no-repeat;
    background-size: cover;
    margin-top: 70px;
  }

  .system_banner h3 {
    font-size: .28rem;
  }

  .solve {
    padding: .7rem 0;
    background: rgb(245, 251, 254);
    text-align: justify;
  }

  .solve h4, .advance h4 {
    width: 100%;
    display: block;
    font-size: .2rem;
    padding-left: 10px;
    border-left: 4px solid #008fd7;
    margin-bottom: 20px;
  }

  .solve p {
    font-size: .17rem;
    font-weight: 200;
    line-height: .33rem;
  }

  .six {
    width: 100%;
    height: 5rem;
    background: url("../../static/bil/imgamge/six.png") no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  .solve .function {
    position: relative;
    padding: 0 15px;
    text-align: center;
    transition: .3s;
  }

  .solve .function > div {
    padding: .2rem 0;
    border: 1px solid rgb(0, 160, 233);
    transition: .3s;
  }

  .solve img {
    width: 60px;
    height: 60px;
    margin-bottom: .2rem;
  }

  .solve .function span {
    font-size: .2rem;
  }

  .hover {
    display: none;
    position: absolute;
    top: .2rem;
    left: 50%;
    margin-left: -30px;
  }

  .function>div:hover .img {
    display: none;
  }

  .function > div:hover .hover {
    display: block;
  }

  .function > div:hover {
    background: rgb(0, 160, 233);
    color: white;
  }

  .base {
    background: url("../../static/bil/imgamge/20180508100838.jpg") center;
    background-size: cover;
    width: 100%;
    height: 7rem;
  }

  .advance {
    background: rgb(245, 251, 254);
    padding: .5rem 0;
  }

  .list{
    border-right: 1px solid #9f9f9f;
    text-align: center;
  }

  .list span{
    display: block;
    font-size: .2rem;
    margin-top: .1rem;
  }

  .list:nth-of-type(6){
    border: none!important;
  }

  .list div img{
    width: .8rem;
  }

  @media (max-width: 1199.98px) {
    .system_banner {
      height: 10rem;
    }
    .system_banner h3 {
      font-size: .38rem;
    }
    .solve h4, .advance h4 {
      font-size: .3rem;
      font-weight: bolder;
    }
    .solve p {
      font-size: .25rem;
      font-weight: 300;
      line-height: .43rem;
    }
    .solve .function > div {
      padding: .3rem 0;
    }
    .hover {
      top: .3rem;
    }
    .solve .function span,.list span{
      font-size: .22rem;
    }
    .six {
      height: 8rem;
    }
    .base{
      height: 8rem;
    }
    .advance {
       padding: .6rem 0;
     }
    .list div img{
      width: 1rem;
    }
  }

  @media (max-width: 767.98px) {
    .system_banner {
      height: 11rem;
      background-position: 50% 50%;
    }
    .system_banner h3 {
      font-size: .56rem;
    }
    .solve h4, .advance h4 {
      font-size: .4rem;
    }
    .solve p {
      text-indent: 2em;
      font-size: .34rem;
      line-height: .66rem;
      text-align: justify;
    }
    .six,.base {
      height: 9rem;
    }
    .solve .function > div {
      padding: .4rem 0;
      margin-bottom: 30px;
    }
    .hover {
      top: .4rem;
    }
    .solve .function span,.list span{
      font-size: .3rem;
    }
    .list{
      margin-bottom: 30px;
    }
    .list div img{
      width: 1.2rem;
    }
    .list:nth-of-type(3){
      border: none;
    }
  }
  @media (max-width: 575.98px) {
    .system_banner {
      height: 12rem;
    }
    .system_banner h3 {
      font-size: .8rem;
    }
    .solve h4, .advance h4 {
      font-size: .6rem;
    }
    .solve p {
      font-size: .58rem;
      line-height: .8rem;
    }
    .six,.base {
      height: 10rem;
    }
    .solve .function > div {
      padding: .5rem 0;
    }
    .hover {
      top: .5rem;
    }
    .solve .function span,.list span{
      font-size: .5rem;
    }
    .list div img{
      width: 2rem;
    }
    .list:nth-of-type(2), .list:nth-of-type(4){
      border: none;
    }
    .list:nth-of-type(3){
      border-right: 1px solid #9f9f9f;
    }
  }

</style>
