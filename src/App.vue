<template>
  <div>
    <nav id="nav" class="container-fluid">
      <div class="row" style="padding-right:30px!important; ">
        <div class="navList" id="production_list">
          <ul>
            <li v-for="item in navlist" :key="item.navlist">
            <router-link :to="item.urlArray">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
        <div id="navLists">
          <ul>
            <li v-for="item in navlists" :key="item.navlists">
              <router-link :to="item.urlArray">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3 logo">
          <img src="../static/bil/imgamge/20180612142300.png" alt="logo">
        </div>
        <ul :class="'col-md-9 row nav ' + (isclick ? 'clicknav':'')" style="margin-left:15px" >
          <li class="col-md-2 offset-md-3"><router-link to="/" class="sel">首页</router-link></li>
          <li :class="'col-md-2 navlist ' + (isaction ? 'actionnav':'')" @click="isaction = !isaction" id="production"><a :class="$route.path === '/lab'
                                               || $route.path === '/bigData'
                                               || $route.path === '/three-dimensional'
                                               || $route.path === '/health'
            ? 'router-link-exact-active' :'' " href="javascript:;" class="sel sels">公司产品</a>
            <ul class="navlists">
              <li v-for="item in navlist" :key="item.navlist">
                <router-link :to="item.urlArray">{{item.title}}</router-link>
              </li>
            </ul>
          </li>
          <li :class="'col-md-2 navlist ' + (isactive ? 'activenav':'')" @click="isactive = !isactive" id="solve"><a :class=" $route.path == '/fuelDetailed'
                                                || $route.path === '/fuel'
                                                || $route.path === '/system'
                                                || $route.path === '/fibre'
                                                || $route.path === '/wisdom'
            ? 'router-link-exact-active' :'' " href="javascript:;" class="sel sels">解决方案
          </a>
            <ul class="navlists">
              <li v-for="item in navlists" :key="item.navlists">
                <router-link :to="item.urlArray">{{item.title}}</router-link>
              </li>
            </ul>
          </li>
          <li class="col-md-2">
            <router-link :class="$route.path.substr(0,8) == '/article'? 'router-link-exact-active' :'' " to="/News"
                         class="sel">新闻资讯
            </router-link>
          </li>
          <li class="col-md-2"><router-link to="/about" class="sel"> 关于我们</router-link></li>
        </ul>
        <ul>
          <li class="mob-button" @click="isclick = !isclick">
            <span></span>
            <span></span>
            <span></span>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data: function () {
      return {
        isaction:false,
        isactive:false,
        isclick:false,
        navlist: [
          {urlArray: '/lab', title: '实验室云平台'},
          {urlArray: '/health', title: '设备动态监测与智能预警'},
          {urlArray: '/bigData', title: '大数据建模与可视化'},
          {urlArray: '/three-dimensional', title: '三维全景数字化平台'}
        ],
        navlists: [
          {urlArray: '/fibre', title: '新一代光纤传感'},
          {urlArray: '/wisdom', title: '智能制造'},
          {urlArray: '/fuel', title: '互联网+航油安全'},
        ]
      }
    },
    mounted: function () {
      let production = document.getElementById("production");
      let productionList = document.getElementById("production_list");
      let navLists = document.getElementById("navLists");
      let solve = document.getElementById("solve");
      productionList.style.visibility="hidden";
      navLists.style.visibility="hidden";
      productionList.style.opacity="0";
      navLists.style.opacity="0";
      production.onmouseover=function () {
        productionList.style.visibility="visible";
        productionList.style.opacity="1";
      };
      productionList.onmouseover=function () {
       this.style.visibility="visible";
        this.style.opacity="1";
      };
      production.onmouseout=function () {
        productionList.style.opacity="0";
        productionList.style.visibility="hidden";
      };
      productionList.onmouseout=function () {
        this.style.opacity="0";
        this.style.visibility="hidden";
      };

      solve.onmouseover=function () {
        navLists.style.visibility="visible";
        navLists.style.opacity="1";
      };
      navLists.onmouseover=function () {
        this.style.visibility="visible";
        this.style.opacity="1";
      };
      solve.onmouseout=function () {
        navLists.style.opacity="0";
        navLists.style.visibility="hidden";
      };
      navLists.onmouseout=function () {
        this.style.opacity="0";
        this.style.visibility="hidden";
      }
    }
  }
</script>
<style>
  /*导航栏*/
  nav {
    width: 100%;
    height: 70px;
    line-height: 70px;
    background: white;
    position: fixed;
    top: 0;
    z-index: 9999999;
    box-shadow: 0 0 11px rgba(0, 0, 0, 0.22);
    padding: 0!important;
  }
  nav > div {
    padding: 0 !important;
    height: inherit;
  }
  .navList,#navLists{
    width: 100%;
    position: absolute;
    top:70px;
    left: 0;
    background: rgba(245, 245, 245, 0.95);
    height: 70px;
    text-align: center;
    transition: opacity .5s linear;
  }

  .navList ul,#navLists ul{
    height: 70px;
    line-height: 70px;
    display: inline-block;
  }
  .navList ul li,#navLists ul li{
    color: black;
    float: left;
    margin-left: 60px;
  }
  .navList ul li .router-link-active,#navLists ul li .router-link-active{
    background: none;
    color: #008fd7;
  }

  .navList ul li a:hover,#navLists ul li a:hover{
    color: #008fd7;
  }
  nav .row {
    height: inherit;
  }
  #nav>.row{
    margin: 0 15%;
  }
  .clicknav{
    height:250px!important;
  }
  .logo {
    position: relative;
  }
  nav .logo img {
    width: 200px;
    max-width: 100%;
    position: absolute;
    top: 16px;
    left: 15px;
  }
  nav ul li {
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    line-height: 70px;
    color: black;
  }
  .router-link-exact-active {
    background: #008fd7;
    color: white;
  }
  nav ul li a:hover {
    color:  white;
  }
  nav ul li .sel:hover {
    background: #008fd7;
  }

  .nav>li{
    max-width: 14.666667%;
    padding: 0;
  }

  nav ul li .sel {
    display: inline-block;
    width: 80%;
    min-width: 82px;
  }

  .navlist {
    cursor: pointer;
    position: relative;
    transition:all .5s;
  }
  .navlists {
    display: none;
  }
  .navlists li {
    text-align: left;
    font-weight: 500;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    color: black;
  }
  .navlists li a {
    display: inline-block;
    width: 100%;
    padding-left: 10px;
  }
  .navlists li:hover a {
    background: #008fd7;
    color: white;
  }
  .mob-button{
    position: absolute;
    right: 15px;
    top:50%;
    margin-top: -16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding:6px 8px;
    cursor: pointer;
    transition: .3s;
    display: none;
    background: #ddd;
  }
  .mob-button:hover{
    background: whitesmoke;
  }
  .mob-button > span {
    display: block;
    width: 22px;
    height: 2px;
    background: #202020;
    margin-bottom: 6px;
  }
  .mob-button>span:nth-of-type(3){
    margin-bottom: 0;
  }
  /*移动端*/
  @media (max-width: 1024px) {
    nav ul .mob-button{
      display: block;
    }
    nav ul li{
      background: none;
      color: #777;
      margin: 0;
    }
    .navList{
      display: none;
    }
    nav .nav{
      width: 100%;
      max-width: 100%;
      background: white;
      box-shadow: 0 0 11px rgba(0, 0, 0, 0.22);
      position: absolute;
      top: 70px;
      left: -15px;
      height: 0;
      overflow: auto;
      transition:all .5s;
    }
    nav .nav li{
      margin: 0!important;
      width: 100%;
      max-width: 100%;
      flex: 0 0 100%;
      text-align: left;
      padding-left: 30px;
    }
    .nav>li{
      height: 50px;
      line-height: 50px;
    }
    .router-link-exact-active {
      background: none;
      color: #777;
    }
    nav ul li .sel:hover {
      background:none;
      color: #777;
    }
    nav ul li .sels:hover {
      background:none;
      color: #008fd7;
    }
    nav .nav .navlist{
      overflow: hidden;
      height: 50px;
      line-height: 50px;
    }
    .navlists {
      display: block;
      width:100%;
      border: none;
      background: #fff;
      position: static;
      border-radius: 4px;
      box-shadow: none;
    }
    .navlists>li{
      padding: 0!important;
    }
    .navlists li:hover a {
      background:none;
      color: black;
    }
    .actionnav{
      height:170px!important;
      color: #008fd7;
    }
    .activenav{
      height:140px!important;
      color: #008fd7;
    }
  }
  @media (max-width: 767.98px) {
    nav .logo img {
      width:180px;
      top: 18px;
    }
  }
  @media (max-width: 575.98px) {
    nav .logo img {
      width:160px;
      top: 20px;
      left: 0;
    }
  }
</style>
