<template>
    <div class="tab-bg">
      <div class="tab-left">
        <img src="../assets/home/home-top-tell.png" width="44px" height="44px">
        <span class="tab-text-green">电话 070-5552-9166</span>
        <span class="tab-left-logo">朝花夕拾</span>
      </div>
      <div>
        <span class="tab-center-text" @click="handleHome">首页</span>
        <span class="tab-center-text" @click="handleAbout">关于</span>
        <span class="tab-center-text">商店</span>
        <span class="tab-center-text">会员</span>
        <span class="tab-center-text">微博 </span>
        <span class="tab-center-text">联系我 </span>
      </div>
      <div class="tab-right">
        <i class="el-icon-user"></i>
        <span>我的账户</span>
        <i class="el-icon-search"></i>
        <i class="el-icon-goods"></i>
      </div>
    </div>
</template>

<script>
export default {
  name: 'topTab',
  data () {
    return {
      clicked: false,
    };
  },
  methods: {
    handleHome(){
      console.log("!!!!!!!!!!!");
      this.$router.push({
        name: 'Home',
    });
    },
    handleAbout(){
      this.$router.push({
        name: 'About',
        query: {}
      });
      // this.$router.push('/About');
    },

  }
};
</script>

<style scoped lang="scss">
.tab-bg{
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 9999;
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
.tab-right{
  //margin-right: 40px;
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

</style>
