<template>
    <div class="tab-bg">
      <div class="tab-left">
        <i class="el-icon-phone-outline"></i>
        <span class="tab-text-green">电话 070-5552-9166</span>
        <span class="tab-left-logo">朝花夕拾</span>
      </div>
      <div>
        <span class="tab-center-text">首页</span>
        <span class="tab-center-text">关于</span>
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
  name: 'topTab'
};
</script>

<style scoped lang="scss">
.tab-bg{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background:rgba(254,234,235,0.4);
  z-index: 9999;
}
.tab-left{
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.tab-text-green{
  color: #04c904;
  margin-left: 10px;
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
  margin-right: 40px;
}
.tab-right span{
  margin-left: 8px;
}
.tab-right i{
  margin-left: 8px;
}
.tab-center-text{
  padding: 0 15px;
}

</style>
