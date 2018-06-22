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
    <p v-html="listdata.InfoContent" class="InfoContent">{{listdata.InfoContent}}</p>
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
  data () {
    return {
      listdata: {
        Title: ''
      },
      id: this.$route.params.id,
      fileId: this.File_Id
    }
  },
  created () {
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
  }
}
</script>

<style scoped>
.news{
  text-align: center;
  margin: 60px auto;
}
  .news h3{
    display: inline-block;
    width: 100%;
    font-size: .28rem;
    margin:.8rem auto 0;
  }
    .news .author{
        margin:.22rem auto;
      color: #747474;
      font-size: .22rem;
    }
  .InfoContent{
    text-align: justify;
    font-size: .2rem;
    font-weight: 200;
  }
button{
  width: 1rem;
  height: .3rem;
  margin-left: .5rem;
  cursor: pointer;
  margin-top: .4rem;
}
</style>
