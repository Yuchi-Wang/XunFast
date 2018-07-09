<template>
  <div class="about">
    <div class="about_bg">
      <h2>不断为客户创造更多价值</h2>
      <div class="bottom-round"></div>
    </div>
    <div>
      <h3 class="animated fadeInDownBig">关于我们</h3>
      <div class="container-fluid select">
        <div class="row">
          <ul class="service_title row" id="service_title">
            <li class="col-3" v-for="(item,index) in lists" :key="item.index" @click="tabs(index)"
                v-bind:style="{background:index===checkIndex?'#008fd7':'',color:index===checkIndex?'white':''}">{{ item }}
            </li>
          </ul>
          <ul id="service_content" class="row col-12 clearfix">
            <li v-for="(item,index) in imgArray" :key="item.index" v-show="index===checkIndex" class="col-sm-12">
              <div v-show="index===0" class="container-fluid m-p-0" style="margin-bottom: 60px;padding-bottom: .7rem">
                <div class="row m-p-0">
                  <div class="col-md-6 m-p-0" style="padding-right: 50px">
                    <p>{{content}}</p>
                  </div>
                  <div class="col-md-6 about-bg"></div>
                </div>
              </div>
              <div v-show="index===1" class="development container-fluid">
                <ul class="list row">
                    <li v-for="item in certificate" :key="item.certificate" class="col-md-3">
                      <img :src="item.imgArray" alt="">
                        <p>{{item.txt}}</p>
                    </li>
                  </ul>
              </div>
              <div v-show="index===2" id="content_us">
                <div v-for="item in newsdata" class="container-fluid news" :key="item.newsdata">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="news-img">
                        <img :src="imgurl + item.PATH">
                      </div>
                    </div>
                    <div class="col-md-8 news-content">
                      <h4><router-link :to="{ path: `/article/${item.Id}` }"> {{item.Title}}</router-link></h4>
                      <time>发布日期：{{item.CreateDateStr}}</time>
                      <p v-html="item.InfoContent">{{item.InfoContent}}</p>
                    </div>
                  </div>
                </div>
                <div class="container-fluid news" v-for="item in news" :key="item.news">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="news-img">
                        <img :src="item.imgArray">
                      </div>
                    </div>
                    <div class="col-md-8 news-content">
                      <h4>
                        <a v-bind:href="item.urlArray">{{item.urlArrayTitle}}</a>
                      </h4>
                      <time>{{item.time}}</time>
                      <p>{{item.txt}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <ol class="jobs" v-show="index===3">
                <li v-for="(item,index) in listdata" :key="item.index" @click="select(index)" v-bind:style="{color:index===tabsIndex?'#008fd7':''}">{{item.PostName}}</li>
              </ol>
              <ol v-show="index===3" style="margin-bottom: 60px">
                <li v-for="(item,index) in listdata" :key="item.index" v-show="index===tabsIndex" class="jobName">
                  {{item.PostName}}
                  <span v-for="(item,index) in listdata" :key="item.index" v-show="index===tabsIndex" class="salary">{{item.Salary}}</span>
                </li>
                <li class="count">招聘人数:<span v-for="(item,index) in listdata" :key="item.index" v-show="index===tabsIndex">{{item.Count}}</span>人</li>
                <li class="count">岗位职责:</li>
                <li v-for="(item,index) in listdata" :key="item.index" v-show="index===tabsIndex" v-html="item.PostDuties" class="qualification">{{item.PostDuties }}</li>
                <li class="count">任职要求:</li>
                <li v-for="(item,index) in listdata" :key="item.index" v-show="index===tabsIndex" v-html="item.Qualification" class="qualification">{{item.Qualification}}</li>
              </ol>
            </li>
          </ul>
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
    name: 'about',
    data: function () {
      return {
        lists: [
          '公司介绍',
          '资质荣誉',
          '新闻资讯',
          '加入我们'
        ],
        imgArray: [
          '',
          '',
          '',
          ''
        ],
        listdata: [],
        newsdata: [],
        certificate: [
          {  imgArray: '../../static/bil/imgamge/iso9001.jpg', txt: 'ISO9001认证'},
          {  imgArray: '../../static/bil/imgamge/xyzd.jpg', txt: '学业诊断与分析云平台'},
          {  imgArray: '../../static/bil/imgamge/zhxy.jpg', txt: '智慧校园云平台'},
          {  imgArray: '../../static/bil/imgamge/zhzj.jpg', txt: '智慧职教云平台'},
          {  imgArray: '../../static/bil/imgamge/zb.jpg', txt: '高清直播录播平台'},
          {  imgArray: '../../static/bil/imgamge/20180704151150.jpg', txt: '设备全生命周期智慧管理系统'},
          {  imgArray: '../../static/bil/imgamge/20180704151339.jpg', txt: '大数据建模与可视化'},
          {  imgArray: '../../static/bil/imgamge/20180704151413.jpg', txt: '数字三维实景可视化平台'},
          {  imgArray: '../../static/bil/imgamge/20180704151500.jpg', txt: '设备数据智能采集系统'},
          {  imgArray: '../../static/bil/imgamge/20180703171931.jpg', txt: '客户信息管理系统'},
          {  imgArray: '../../static/bil/imgamge/20180703172009.jpg', txt: '实验室资产管理系统'},
          {  imgArray: '../../static/bil/imgamge/20180703172042.jpg', txt: '系统日志管理系统'}
        ],
         news: [
           { imgArray: '../../static/bil/imgamge/20180701181754.jpg',
             urlArray: 'http://www.shanghai.gov.cn/nw2/nw2314/nw2315/nw31406/u21aw1279368.html',time:'发布日期：2017年12月29日',
             urlArrayTitle: ' 为确保我国航空油品安全，大数据、光纤传感等技术显威力',
             txt: ' 航空油品的质量监控非常严格，新一代信息技术、光纤光栅传感技术等高新技术正在使航油质量监控体系变得更精'+
            '准、高效。近日，中国航空油料有限责任公司华东公司、上海交通大学先进产业技术研究院、上海迅发信息技术有限公司'+
            '三方签署战略合作框架协议，将开展“互联网航油安全服务”协同创新。据悉，在自主开发了中国航空成品油质量检测与'+
            '计量检定信息智慧管理平台的基础上，三方将于明年重点协同研究航油全生命周期质量监控平台、浦东国际机场与虹桥机'+
            '场间输油管道的智慧巡检、喷气燃料检验实验室能力验证服务平台'},
           { imgArray: '../../static/bil/imgamge/20180703134822.jpg',
             urlArray: 'http://digitalpaper.stdaily.com/http_www.kjrb.com/kjrb/html/2017-12/28/content_384969.htm?div=-1',time:'发布日期：2017年12月28日',
             urlArrayTitle: '新一代信息技术助力航油安全服务',
             txt: '12月26日，中国航空油料有限责任公司华东公司、上海交通大学先进产业技术研究院、上海迅发信息技术有限公司三'+
             '方签署战略合作框架协议，将共同致力互联网与航油安全服务的深度融合，为航油安全保驾护航。据了解，此次三方合作'+
             '将运用互联网、大数据、人工智能、物联网等新一代信息技术，构建互联网+航油安全服务智慧平台，实现华东公司安全智'+
             '能化、管理智能化、物流智能化、渠道智能化以及服务智能化的信息化建设目标。'},
        ],
        content: '上海迅发信息技术有限公司是拥有一支技术实力雄厚的硕士博士生团队的高科技企业，充分利用互联网、物联网、大数据、'+
        '人工智能等新一代信息技术，专注于互联网+、大数据+行业应用的研发和产品化。公司在信息系统整体架构、大数据建模分'+
        '析与可视化、机器视觉、人工智能等方面，有着独立自主、业内领先的算法和模型，公司拥有数十个软件著作权，并通过了'+
        'ISO9001质量管理体系认证。公司与上海交通大学、复旦大学、同济大学、华东师范大学等国内知名高校建立了深入的 合作'+
        '研究关系，整合了一支高水平的专家团队和高效率的技术开发团队，致力于通过持续的技术创新和优质的服务，不断为客户'+
        '创造价值。'
        ,
        checkIndex: 0,
        tabsIndex: 0,
      }
    },
    beforeCreate() {
      this.$axios
        .get(`/Api/Areas/SysNewsInfo/GetNewsInfoAll?type=0`, {
          headers: {
            'signature': 'xunfast@123!'
          }
        })
        .then(response => {
       // console.log(response.data.Data)
          this.newsdata = response.data.Data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    methods: {
      tabs: function (index) {
        this.checkIndex = index
        this.$axios
          .get(`/Api/Areas/SysRecruit/GetRecruitAll`, {
            headers: {
              'signature': 'xunfast@123!'
            }
          })
          .then(response => {
           // console.log(response.data.Data)
            this.listdata = response.data.Data
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      select: function (index) {
        this.tabsIndex = index
      },
    }
  }
</script>

<style scoped>
  .about {
    border-top: 1px solid transparent;
  }

  .about_bg {
    width: 100%;
    height: 5rem;
    background: url("../../static/bil/imgamge/20180706120556.jpg") no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    margin-top: 69px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .about_bg h2 {
    font-size: .5rem;
    color: #FFF;
    text-shadow: 5px 5px 5px #0f111e;
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

  .about h3 {
    font-size: .28rem;
    color: #151515;
    position: relative;
    margin: .7rem 0;
    text-align: center;
  }

  .about h3:after {
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: .6rem;
    border-bottom: 2px solid #008fd7;
    content: "";
  }

  .service_title {
    width: 100%;
    margin: .1rem 20% 40px;
    border: 1px solid #9f9f9f;
    padding: 0;
    border-radius: 40px;
  }

  .service_title > li {
    font-size: .18rem;
    text-align: center;
    height: .5rem;
    line-height: .5rem;
    color: #333333;
    cursor: pointer;
    transition: .3s;
  }

  .service_title > li:hover {
    background: #008fd7;
    color: white;
  }

  .service_title li:nth-of-type(1) {
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }

  .service_title li:nth-of-type(4) {
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  .service_title > li:nth-of-type(1), .service_title > li:nth-of-type(2), .service_title > li:nth-of-type(3) {
    border-right: 1px solid #666666;
  }

  #service_content p {
    font-size: .15rem;
    text-align: justify;
    color: #666666;
    line-height: .32rem;
  }

  .development {
    margin-bottom: .7rem;
  }

  .development>.row {
    margin: 0 12%;
  }

  #service_content .development  .list li {
    text-align: center;
    transition: .6s;
    margin-bottom: 20px;
    padding: 0 15px;
  }

  #service_content .development  .list li img {
    width: 100%;
    max-width: 344px;
  }


  #service_content .development  .list li:hover {
    transform: scale(1.08);
  }

  #service_content .development  .list li p {
    text-align: center;
    font-size: .15rem;
    letter-spacing: 1px;
    color: #666666;
  }

  .jobs {
    font-size: .19rem;
    color: #999999;
    position: relative;
  }

  .jobs > li {
    margin-top: .3rem;
    display: inline-block;
    padding: 0 .4rem;
    cursor: pointer;
    border-right: 1px solid #666666;
  }

  .jobs > li:hover {
    color: #008fd7;
  }

  .jobName {
    color: #151515;
    font-size: .21rem;
    margin-top: 30px;
  }

  .about div .salary {
    color: orangered;
    font-size: .18rem;
    margin-left: .2rem;
  }

  .count, .count > span {
    font-size: .17rem !important;
    color: #333333 !important;
    margin-top: .1rem;
  }

  .qualification {
    font-size: .15rem;
    font-weight: 300;
    line-height: .32rem;
    color: #666666;
  }

  .jobs > li:nth-of-type(1) {
    padding-left: 0;
  }

  #content_us {
    padding: 0;
    margin: 0 7%;
  }

  .news {
    margin-bottom: 60px;
  }

  .news-img {
    overflow: hidden;
    height: 2rem;
  }

  #content_us img {
    width: 100%;
  }

  .news-content {
    margin-top: .1rem;
    height: 1.8rem;
    overflow: hidden;
    padding-left: 60px;
    padding-right: 30px;
    position: relative;
  }

  .news-content p:after {
    content: "...";
    position: absolute;
    right: 13px;
    bottom: -5px;
  }

  #content_us h4 {
    font-size: .18rem;
    color: #333333;
    font-weight: bolder;
  }

  #content_us time {
    display: block;
    font-size: .14rem;
    color: #666666;
    margin-bottom: 10px;
  }

  .about-bg {
    background: url("../../static/bil/imgamge/20180701184612.jpg") no-repeat;
    width: 100%;
    background-size: cover;
    padding: 0 !important;
  }

  @media (max-width: 1024px) {
    .service_title {
      margin: .1rem 15% 40px;
    }

    #content_us {
      margin: 20px 15% 0;
    }

    .about_bg {
      height: 6rem;
    }

    .about h3 {
      font-size: .38rem;
      margin: 30px 0;
    }

    .about h3:after {
      top: .7rem;
    }

    .service_title > li {
      height: .86rem;
      line-height: .86rem;
      font-size: .25rem;
    }

    #service_content p, #service_content .time-line p, .qualification, #content_us ul li {
      font-size: .25rem;
      line-height: .35rem;
    }

    .jobs {
      font-size: .22rem;
      letter-spacing: 1.2px;
    }

    .jobs > li {
      margin-top: .2rem;
    }

    .jobName, .about div .salary, .count, .count > span {
      font-size: .25rem !important;
    }
  }

  @media (max-width: 767.98px) {
    .service_title {
      margin: .1rem 10% 0;
    }

    #content_us {
      margin: 0 10% 0;
    }

    .m-p-0 {
      padding: 0 !important;
    }

    .about_bg {
      height: 8rem;
    }

    .about h3 {
      font-size: .56rem;
    }

    .about h3:after {
      top: 1rem;
    }

    .about-bg {
      height: 4rem;
      margin-top: 30px;
    }

    .service_title > li {
      height: 1rem;
      line-height: 1rem;
      font-size: .45rem;
    }

    #service_content p, #service_content .time-line p, .qualification, #content_us ul li {
      font-size: .34rem;
      line-height: .66rem;
    }

    .jobs {
      font-size: .34rem;
    }

    .jobName, .about div .salary, .count, .count > span {
      font-size: .34rem !important;
    }

    .mob-sub {
      padding: 0;
    }

    #service_content .mob-sub p, #service_content .mob-sub {
      text-align: left;
    }
  }

  @media (max-width: 575.98px) {
    .col-3 {
      padding: 0;
    }

    .about_bg {
      height: 11rem;
    }

    .about h3 {
      font-size: .8rem;
    }

    .about h3:after {
      top: 1.5rem;
    }

    .about-bg {
      height: 7rem;
    }

    .service_title > li {
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: .5rem;
    }

    #service_content p, #service_content .time-line p, .qualification {
      font-size: .58rem;
      line-height: .8rem;
    }

    .jobs {
      font-size: .34rem;
    }

    .jobName, .about div .salary, .count, .count > span {
      font-size: .34rem !important;
    }
  }
</style>
