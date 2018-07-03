<template>
  <div>
    <div class="container news">
      <div class="row">
        <h3>{{listdata.Title}}</h3>
        <p class="author">
          <time>{{listdata.CreateDateStr}}</time>
          <span>|</span>
          <span>{{listdata.CreateName}}</span>
        </p>
       <p class="origin">来源：上海迅发 &nbsp; &nbsp; 浏览：286876次 </p>
        <p v-html="listdata.InfoContent" class="InfoContent">{{listdata.InfoContent}}</p>
      </div>
      <div class="next">
        <a href="http://digitalpaper.stdaily.com/http_www.kjrb.com/kjrb/html/2017-12/28/content_384969.htm?div=-1">上一篇</a>
        <a href="http://www.shanghai.gov.cn/nw2/nw2314/nw2315/nw31406/u21aw1279368.html" class="next">下一篇</a>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
  import bottom from '../components/bottom'

  export default {
    components: {bottom},
    name: 'article',
    data() {
      return {
        listdata: {
          Title: ''
        },
        id: this.$route.params.id,
        fileId: this.File_Id
      }
    },
    created() {
      this.$axios
        .get(`/Api/Areas/SysNewsInfo/GetNewsInfoById?id=${this.id}`, {
          headers: {
            'signature': 'xunfast@123!'
          }
        })
        .then(response => {
          //   console.log(response.data.Data)
          this.listdata = response.data.Data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  }
</script>

<style scoped>
  .news {
    text-align: center;
    margin: 60px auto;
  }

  .news h3 {
    display: inline-block;
    color: #151515;
    width: 100%;
    font-size: .28rem;
    margin: .8rem auto 0;
  }

  .news .author {
    width: 100%;
    margin: .13rem auto .22rem;
    color: #333333;
    font-size: .18rem;
  }

  .news .origin {
    font-size: .15rem;
    text-align: justify;
    line-height: .25rem;
    color: #666666;
    margin-bottom: 10px;
  }

  .InfoContent {
    border-top:1px solid #ebebeb;
    padding-top: 10px;
    font-size: .15rem;
    text-align: justify;
    line-height: .25rem;
    color: #666666;
  }

  button {
    width: 1rem;
    height: .3rem;
    margin-left: .5rem;
    cursor: pointer;
    margin-top: .4rem;
  }

  .news .next {
    text-align: left;
    font-size: .14rem;
    margin-left: 20px;
    color: #666666;
  }
</style>
