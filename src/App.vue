<template>
  <div id="app">
    <div class="top-tab">
      <div class="tab-bg">
        <div class="tab-left">
          <img src="./assets/home/home-top-tell.png" width="44" height="44">
          <span class="tab-text-green">电话 070-5552-9166</span>
          <span class="tab-left-logo">朝花夕拾</span>
        </div>

        <div class="router-link-style">
          <router-link to="/Home">首页</router-link>
          <router-link to="/About">关于</router-link>
          <router-link to="/Shop">商店</router-link>
          <router-link to="/Vip">会员</router-link>
          <router-link to="/MyInfo">我的</router-link>
          <router-link to="/ContactMe">联系我</router-link>
        </div>
        <div class="tab-right">
          <i class="el-icon-user"></i>
          <span>我的账户</span>
          <i class="el-icon-search"></i>
          <i class="el-icon-goods"></i>
        </div>
      </div>
    </div>

    <router-view/>
  </div>
</template>
<script>


export default {
  name: 'App',
  data () {
    return {
      clicked: false,
    };
  },
  methods: {

  }
};
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #ffffff;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  overflow-x: hidden ;
}
a {
  text-decoration:none ;
    padding: 10px;
    color: #333333;
}
.router-link-active {
  text-decoraction: none ;
  color: #5fae5f;
}
.top-tab{
  height: 60px;
  z-index: 999999;
  justify-content: center;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #ececec;
  box-shadow: 0 0 12px 0 rgba(63, 63, 63, 0.1)
}
.tab-bg{
  width: 75%;
  height: 60px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.router-link-style{
  width: 48%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tab-left{
  display: flex;
  align-items: center;
}
.tab-text-green{
  cursor: pointer;
  color: #04c904;
  font-size: 16px;
}
.tab-left-logo{
  color: #04c904;
  margin-left: 10px;
  font-size: 18px;
}
.tab-center{
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.tab-right span{
  margin-left: 8px;
}
.tab-right i{
  margin-left: 8px;
}
.tab-center-text{
  padding: 0 15px;
  cursor: pointer;
}

.el-carousel__indicator--horizontal .el-carousel__button {
  width: 10px;
  height: 10px;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 50%;
  opacity: 0.5;
}
.el-carousel__indicator--horizontal.is-active .el-carousel__button{
  width: 10px;
  height: 10px;
  background: #ffffff;
  border-radius: 50%;
  opacity: 1;
}
</style>

