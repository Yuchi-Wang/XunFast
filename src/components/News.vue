<template>
  <div class="news">
    <div class="news-bg"></div>
    <div>
      <h3 class="animated slideInDown">新闻资讯 <br>
      </h3>
    </div>
    <div class="container-fluid" style="margin-bottom: 1rem">
      <div class="row">
        <ul class="news_title row" id="service_title" >
          <li  @click="tabs(0)" v-bind:style="{background:checkIndex===0?'#008fd7':'',color:checkIndex===0?'white':''}">全部资讯</li>
          <li @click="tabs(1)" v-bind:style="{background:checkIndex===1?'#008fd7':'',color:checkIndex===1?'white':''}">公司资讯</li>
          <li @click="tabs(2)" v-bind:style="{background:checkIndex===2?'#008fd7':'',color:checkIndex===2?'white':''}">行业资讯</li>
        </ul>
        <ul id="news_content"  class="row col-md-12 m-p-0">
          <li v-for="item in lstdata" class="listdata col-md-4" :key="item.lstdata">
            <div class="list-img"> <img :src="imgurl + item.PATH"></div>
            <div class="list-txt">
              <h4 ><router-link :to="{ path: `/article/${item.Id}` }"> {{item.Title}} </router-link></h4>
              <time >发布日期：{{item.CreateDateStr}}</time>
              <p v-html="item.InfoContent">{{item.InfoContent}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import bottom from '../components/bottom'
export default {
  components: {bottom},
  name: 'News',
  data: function () {
    return {
      lists: [
        '全部资讯',
        '公司资讯',
        '行业资讯'
      ],
      lstdata: [],
      checkIndex: 0,
    }
  },
 beforeCreate () {
    this.$axios
      .get(`/Api/Areas/SysNewsInfo/GetNewsInfoAll?type=0`, {
        headers: {
          'signature': 'xunfast@123!'
        }
      })
      .then(response => {
      //  console.log(response.data.Data)
        this.lstdata = response.data.Data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    tabs (index) {
      this.checkIndex = index
      this.$axios
        .get(`/Api/Areas/SysNewsInfo/GetNewsInfoAll?type=${index}`, {
          headers: {
            'signature': 'xunfast@123!'
          }
        })
        .then(response => {
          this.lstdata = response.data.Data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
 .news-bg{
   width: 100%;
   height: 5rem;
   background:url("../../static/bil/imgamge/20180614163552.jpg") no-repeat;
   background-size: cover;
   background-position: 50% 50%;
   margin-top: 70px;
 }
  .news h3{
    font-family: "Source Han Serif SC";
    font-size: .28rem;
    color: #333333;
    position: relative;
    margin: .7rem 0;
    text-align: center;
  }
  .news h3:after{
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -36px;
    top: .6rem;
    border-bottom: 2px solid #008fd7;
    content: "";
  }
 .news_title {
    margin: 0 20%;
    height: .5rem;
    width: 100%;
  }
  .news_title li {
    font-size: .18rem;
    text-align: center;
    height: inherit;
    width: 33.33%;
    line-height: .5rem;
    color: #666666;
    cursor: pointer;
    border: 1px solid #9f9f9f;
    transition: .3s;
  }
 .news_title li:hover{
   background: #008fd7;
   color: white;
 }
 .news_title li:nth-of-type(1) {
   border-top-left-radius:40px;
   border-bottom-left-radius:40px;
 }
 .news_title li:nth-of-type(3) {
   border-top-right-radius:40px;
   border-bottom-right-radius:40px;
 }
  .news_title li:nth-of-type(2){
   border-right: none;
    border-left: none;
  }
  #news_content{
    padding: 0!important;
  }
  .listdata{
    padding: 0 15px;
    margin-top: 40px;
    transition: .8s;
  }
 .listdata:hover{
   transform: scale(1.05);
 }
  .list-img img{
    width: 100%;
  }
  .list-txt {
    border: 1px solid #c9c9c9;
    height: 2rem;
    padding:0 15px;
  }
  .list-txt h4{
    font-size: .15rem;
    font-weight: 600;
    margin: 38px 0 17px;
  }
 #news_content time {
   display: block;
   width: 100%;
   color: #acacac;
   font-size: .15rem;
   margin-bottom: 4px;
 }
 #news_content p {
   font-size: .15rem;
   font-weight: 200;
   text-align: justify;
   line-height: .28rem;
   height: .49rem;
   overflow: hidden;
   padding-right: 20px;
   position: relative;
 }
 #news_content p:after {
   content: "...";
   position: absolute;
   right: 0;
   bottom: -7px;
 }
 @media (max-width:1199.98px) {
   .news-bg{
     height: 7rem;
   }
   .news h3{
     font-size: .38rem;
     margin: 30px 0;
   }
   .news h3:after{
     top: .7rem;
   }
   .news_title {
     height: .86rem;
   }
   .news_title li{
     line-height: .86rem;
     font-size: .25rem;
   }
   .list-txt {
     height: 3rem;
   }
   .list-txt h4 {
     font-size: .25rem;
     margin: 10px 0;
   }
   #news_content time {
     font-size: .2rem;
   }
   #news_content p {
     font-size: .25rem;
     line-height: .35rem;
     font-weight: 300;
     height: .7rem;
   }
   #news_content p:after {
     right: 2px;
     bottom:0;
   }
 }
 @media (max-width:767.98px) {
   .news-bg{
     height: 8rem;
   }
   .news h3{
     font-size: .56rem;
   }

   .news h3:after{
     top:1rem;
   }
   .news_title {
     height: 1rem;
   }

   .news_title li{
     line-height: 1rem;
     font-size: .4rem;
   }

   .list-txt h4 {
     font-size: .4rem;
   }
   #news_content time {
     font-size: .35rem;
   }
   #news_content p {
     font-size: .35rem;
     line-height: .6rem;
     font-weight: 400;
     height: 1.2rem;
   }

   .m-p-0{
     padding: 0;
   }

 }
 @media (max-width:575.98px) {
   .news-bg{
     height: 11rem;
     background-position: 44% 50%;
   }
   .news h3{
     font-size: .8rem;
   }

   .news h3:after{
     top:1.5rem;
   }
   .news_title {
     height: 1.5rem;
     margin: 0 10%;
   }
   .list-txt {
     height: 5.8rem;
   }

   .news_title li{
     line-height: 1.5rem;
     font-size: .5rem;
   }

   #news_content li h4{
     font-size: .6rem;
   }
   #news_content time  {
     font-size: .5rem;
   }
   #news_content p {
     font-size: .58rem;
     line-height: .8rem;
     font-weight: 500;
     height: 1.5rem;
   }

 }
</style>
