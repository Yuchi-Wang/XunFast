<template>
<div>
  <div class="building-banner">
    <div class="bottom-round"></div>
  </div>
</div>
</template>

<script>
    export default {
        name: "building"
    }
</script>

<style scoped>
  .building-banner {
    background: url("../../static/bil/imgamge/20180704143304.jpg") no-repeat;
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
</style>
