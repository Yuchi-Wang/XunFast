<template>
  <div class="about">
    <div class="about_bg"></div>
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
            <li v-for="(img,index) in imgArray" :key="img.index" v-show="index===checkIndex" class="col-sm-12">
              <div v-show="index===0" class="development">
                <div class="about-us">
                  <div class="wrap">
                    <div class="info">
                      <div class="honorary-certificate">
                        <div class="certificate-list">
                          <span class="left-arrow"></span>
                          <div class="list">
                            <ul>
                              <li class="first">
                                <div>
                                  <img src="../../static/bil/imgamge/iso9001.jpg" alt="">
                                </div>
                                <p>ISO9001认证</p>
                              </li>
                              <li class="second">
                                <div>
                                  <img src="../../static/bil/imgamge/xyzd.jpg" alt="">
                                </div>
                                <p>学业诊断与分析云平台</p>
                              </li>
                              <li class="third" >
                                <div>
                                  <img src="../../static/bil/imgamge/zhxy.jpg" alt="">
                                </div>
                                <p>智慧校园云平台</p>
                              </li>
                              <li class="fourth">
                                <div>
                                  <img src="../../static/bil/imgamge/zhzj.jpg" alt="">
                                </div>
                                <p>智慧职教云平台</p>
                              </li>
                              <li class="fifth">
                                <div>
                                  <img src="../../static/bil/imgamge/zb.jpg" alt="">
                                </div>
                                <p>高清直播录播平台</p>
                              </li>
                            </ul>
                          </div>
                          <span class="right-arrow"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="index===1" class="container-fluid m-p-0" style="margin-bottom: 60px;padding-bottom: .7rem">
                <div class="row m-p-0">
                  <div class="col-md-6 m-p-0" style="padding-right: 50px">
                    <p v-for="(item,index) in content" :key="item.index" v-show="index===checkIndex">{{ item }}</p>
                  </div>
                  <div class="col-md-6 about-bg"></div>
                </div>
              </div>
              <ol class="jobs" v-show="index===2">
                <li v-for="(item,index) in listdata" :key="item.index" @click="select(index)" v-bind:style="{color:index===tabsIndex?'#008fd7':''}">{{item.PostName}}</li>
              </ol>
              <ol v-show="index===2" style="margin-bottom: 60px">
                <li v-for="(item,index) in listdata" :key="item.index" v-show="index===tabsIndex" class="jobName">{{item.PostName}}
                  <span v-for="(item,index) in listdata" :key="item.index" v-show="index===tabsIndex" class="salary">{{item.Salary}}</span>
                </li>
                <li class="count">招聘人数:<span v-for="(item,index) in listdata" :key="item.index" v-show="index===tabsIndex">{{item.Count}}</span>人</li>
                <li class="count">岗位职责:</li>
                <li v-for="(item,index) in listdata" :key="item.index" v-show="index===tabsIndex" v-html="item.PostDuties" class="qualification">{{item.PostDuties }}</li>
                <li class="count">任职要求:</li>
                <li v-for="(item,index) in listdata" :key="item.index" v-show="index===tabsIndex" v-html="item.Qualification" class="qualification">{{item.Qualification}}</li>
              </ol>
              <div v-show="index===3" id="content_us">
                <div class="row m-p-0">
                  <div class="col-md-5 m-p-0">
                    <ul>
                      <li v-for="item in contact" :key="item.contact">
                        <span class="bold" v-html="item.message">{{item.message}}</span>
                        {{item.connection}}
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-7 mob-sub">
                    <p style="margin-top: 0"><span class="info">姓名：</span><input type="text" v-model="formData.Name" maxlength="6" placeholder="姓名"></p>
                    <p><span class="info">邮箱：</span><input type="text" v-model="formData.Email" placeholder="邮箱"></p>
                    <p><span class="info">电话：</span><input type="text" v-model="formData.Phone" placeholder="电话"></p>
                    <div class="textarea">
                      <span class="info">内容：</span><textarea v-model="formData.FeedContent" placeholder="请输入留言内容....."></textarea>
                    </div>
                    <a href="javascript:;" class="submit" @click="sub()">提交留言</a>
                  </div>
                </div>
              </div>
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
          '资质荣誉',
          '公司介绍',
          '加入我们',
          '联系我们',
        ],
        imgArray: [
          '',
          '../static/bil/imgamge/gs.jpg',
          '',
          ''
        ],
        listdata: [],
        content: [
          '',
          '上海迅发信息技术有限公司是拥有一支技术实力雄厚的硕士博士生团队的高科 技企业，充分利用互联网、物联网、大数据、' +
          '人工智能等新一代信息技术，专注于 互联网+、大数据+行业应用的研发和产品化。公司在信息系统整体架构、大数据建 模分' +
          '析与可视化、机器视觉、人工智能等方面，有着独立自主、业内领先的算法和 模型，公司拥有数十个软件著作权，并通过了' +
          'ISO9001质量管理体系认证。公司与 上海交通大学、复旦大学、同济大学、华东师范大学等国内知名高校建立了深入的 合作' +
          '研究关系，整合了一支高水平的专家团队和高效率的技术开发团队，致力于通 过持续的技术创新和优质的服务，不断为客户' +
          '创造价值。',
        ],
        contact: [
          {message:"联系方式" ,connection:""},
          {message:"联系电话:" ,connection:"021-6816 0161"},
          {message:"传 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;真:" ,connection:"021-6816 0161"},
          {message:"联系邮箱:" ,connection:"xunfast@xunfast.com"},
          {message:"联系地址:" ,connection:"上海浦东新区康桥路666号三幢四楼"}
        ],
        checkIndex: 0,
        tabsIndex: 0,
        formData: {
          Name: '',
          FeedContent: '',
          Email: '',
          Phone: ''
        }
      }
    },
    mounted: function () {
      var classArr = ['first','second','third','fourth','fifth'];
      $('.left-arrow').click(function(){
        classArr.unshift(classArr.pop());
        changeClass();
      });
      $('.right-arrow').click(function(){
        classArr.push(classArr.shift());
        changeClass();
      });
      $('.certificate-list li').click(function(e){
        var index = $(this).index();
        if(classArr[index] == 'first')return;
        classArr = chooseClass(index);
        changeClass();
      });
      function changeClass(){
        classArr.forEach(function(item,i){
          $('.certificate-list li').eq(i).get(0).className = item;
        })
      }
      function chooseClass(n){
        var classList = ['first','second','third','fourth','fifth'],arr=[];
        for(var i=0;i<5;i++){
          arr[(n+i)%5] = classList[i];
        }
        return arr;
      }
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
            this.listdata = response.data.Data
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      select: function (index) {
        this.tabsIndex = index
      },
      sub: function () {
        this.$axios
          .post('/Api/Areas/XfFeedBack/PostFeedBack', this.formData, {
            headers: {
              'signature': 'xunfast@123!'
            }
          })
          .then(response => {
            console.log(response)
            this.$message({
              type: 'success',
              message: '操作成功!'
            })
            this.getdataall()
          })
          .catch(function (error) {
            console.log(error)
          })
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
    background: url("../../static/bil/imgamge/20180620175712.png") no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    margin-top: 70px;
  }

  .about h3 {
    font-family: "Source Han Serif SC";
    font-size: .28rem;
    color: #333333;
    position: relative;
    margin:.7rem 0;
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
    color: #666666;
    cursor: pointer;
    transition: .3s;
  }
  .service_title > li:hover{
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
    font-size: .1777rem;
    text-align: justify;
    line-height: .3631376121rem;
  }
  .about-us .certificate-list{
    width: 800px;
    position: relative;
    margin: auto;
  }
  .about-us {
    margin-top: .6rem;
  }
  .about-us .certificate-list>span{
    position: absolute;
    width: 14px;
    height: 32px;
    opacity:0.25;
    top: 50%;
    margin-top: -16px;
    left: 0;
    transition: all 0.4s;
    cursor: pointer;
    z-index: 2;
    background:#000000 url("../../static/bil/imgamge/left.png") no-repeat center;
    background-size:50% 30%;
  }
  .about-us .certificate-list>span:hover{
    opacity:0.68;
    background-color:#2a97f3;
  }
  .about-us .certificate-list .right-arrow{
    left:auto;
    right: 0;
    background:#000000 url("../../static/bil/imgamge/right.png") no-repeat center;
    background-size:50% 30%;
  }
  .about-us .certificate-list .list{
    width: 595px;
    height: 525px;
    margin:0 auto .7rem;
    position: relative;
  }
  .about-us .certificate-list .list li{
    cursor: pointer;
    width: 344px;
    position: absolute;
    transition: all 0.5s;
  }
  .about-us .certificate-list .list li.first{
    left: 150px;
    top: 0;
    transform:scale(1);
    z-index: 5;
  }
  .about-us .certificate-list .list li.second{
    left: 300px;
    top: 0;
    transform: scale(0.8);
    z-index: 4;
  }
  .about-us .certificate-list .list li.third{
    left: 218px;
    top: -40px;
    transform: scale(0.7);
    z-index: 3;
  }
  .about-us .certificate-list .list li.fourth{
    left: 82px;
    top: -40px;
    transform: scale(0.7);
    z-index: 3;
  }
  .about-us .certificate-list .list li.fifth{
    left: 0;
    top: 0;
    transform: scale(0.8);
    z-index: 4;
  }
  #service_content .about-us .certificate-list .list li p{
    text-align: center;
    font-size:.16rem;
    color:#000000;
    letter-spacing:3.36px;
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
    border-right: 1px solid #999999;
  }

  .jobs > li:hover {
    color: #008fd7;
  }

  .jobName {
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
    color: #000 !important;
    margin-top: .1rem;
  }

  .qualification {
    font-size: .16rem;
    font-weight: 300;
    line-height: .35rem;
  }

  .jobs > li:nth-of-type(1) {
    padding-left: 0;
  }

  #content_us {
    padding: 0;
    margin: 20px 20% 0;
  }

  #content_us input {
    width: 80%;
    border: 1px solid #747474;
    height: 40px;
    padding-left: 10px;
    line-height: 40px;
    border-radius: 6px;
    font-size: .15rem;
  }

  #content_us .info {
    font-size: 18px;
  }

  textarea {
    width: 80%;
    height: 1rem;
    resize: none;
    border: 1px solid #747474;
    padding: 10px;
    border-radius: 4px;
  }

  .textarea {
    margin-top: .1700712589rem;
  }

  #content_us ul li {
    font-size: .16rem;
    margin-bottom: 15px;
  }

  .bold {
    font-weight: bold;
  }
  #service_content  .mob-sub p, #service_content  .mob-sub{
    text-align: right;
  }

  .submit {
    display: inline-block;
    color: #008fd7;
    border: 1px solid #008fd7;
    border-radius: 40px;
    width: 1.8rem;
    height: .4rem;
    line-height: .4rem;
    background: white;
    text-align: center;
    margin-top: .25rem;
    margin-bottom: 30px;
    margin-left: .5625rem;
    transition: .3s;
  }

  .submit:hover {
    color: white;
    background: #008fd7
  }

  #content_us p {
    margin-top: 10px;
  }

  .about-bg {
    background: url("../../static/bil/imgamge/gs.jpg") no-repeat;
    width: 100%;
    background-size: cover;
    padding: 0 !important;
  }
  @media (max-width:1024px) {
    .service_title {
      margin: .1rem 15% 40px;
    }
    #content_us {
      margin: 20px 15% 0;
    }
    .about_bg{
      height: 6rem;
    }
    .about h3 {
      font-size: .38rem;
      margin: 30px 0;
    }
    .about h3:after {
      top: .7rem;
    }
    .service_title > li{
      height: .86rem;
      line-height: .86rem;
      font-size: .25rem;
    }

    #service_content p,#service_content .time-line p,.qualification,#content_us ul li{
      font-size: .25rem;
      line-height: .35rem;
    }
     .jobs{
      font-size: .22rem;
      letter-spacing: 1.2px;
    }
    .jobs > li{
      margin-top: .2rem;
    }
    .jobName,.about div .salary,.count, .count > span{
      font-size: .25rem!important;
    }
    #content_us input {
      width: 75%;
      height: 35px;
      line-height: 35px;
      font-size: 16px;
    }
    textarea {
      width: 75%;
      height: 1.5rem;
    }
    .submit{
      width:2.2rem;
      height: .5rem;
      line-height: .5rem;
      margin-left: .8rem;
    }

  }
  @media (max-width:767.98px) {
    .service_title {
      margin: .1rem 10% 0;
    }
    #content_us {
      margin: 0 10% 0;
    }
    .m-p-0{
      padding: 0!important;
    }
    .about_bg{
      height: 8rem;
    }
    .about h3 {
      font-size: .56rem;
    }
    .about h3:after {
      top: 1rem;
    }
    .about-bg{
      height: 4rem;
      margin-top: 30px;
    }
    .service_title > li{
      height:1rem;
      line-height: 1rem;
      font-size: .45rem;
    }

    #service_content p,#service_content .time-line p,.qualification,#content_us ul li{
      font-size: .34rem;
      line-height: .66rem;
    }

    .jobs{
      font-size: .34rem;
    }

    .jobName,.about div .salary,.count, .count > span{
      font-size: .34rem!important;
    }
    .mob-sub{
      padding: 0;
    }
    #service_content .mob-sub p, #service_content .mob-sub {
      text-align: left;
    }
    .submit {
      width: 2.5rem;
      height: .7rem;
      line-height: .7rem;
      margin-left: 1.1rem;
    }
  }
  @media (max-width:575.98px) {
    .col-3{
      padding: 0;
    }
    .about_bg{
      height: 11rem;
    }
    .about h3 {
      font-size: .8rem;
    }
    .about h3:after {
      top: 1.5rem;
    }
    .about-bg{
      height: 7rem;
    }
    .service_title > li{
      height:1.5rem;
      line-height: 1.5rem;
      font-size: .5rem;
    }
    #content_us ul li:nth-of-type(1) {
      display: none;
    }
    #content_us input {
      width: 65%;
    }
    textarea {
      width: 65%;
      height:4rem;
      margin-top: 10px;
      border-radius: 6px;
    }

    .submit {
      width: 3.5rem;
      height: 1.2rem;
      line-height: 1.2rem;
      margin-left: 2rem;
    }

    #service_content p,#service_content .time-line p,.qualification,#content_us ul li{
      font-size: .58rem;
      line-height: .8rem;
    }
    .jobs{
      font-size: .34rem;
    }
    .jobName,.about div .salary,.count, .count > span{
      font-size: .34rem!important;
    }
  }
</style>
