<template>
  <div class="bottom-bg">
    <div class="bottom">
      <div class="about-us">
        <div class="bottom-tittle">关于我们</div>
        <div class="about-us-text1">拥有超过15年的经验，我们可以自豪地说，我们是一个最好的商业，一个值得信赖的供应商超过1000家公司</div>
      </div>
      <div class="info">
        <div class="bottom-tittle">信息</div>
        <div class="info-content-text">送货</div>
        <div class="info-content-text">法律通知</div>
        <div class="info-content-text">条款与条件</div>
      </div>
      <div class="info">
        <div class="bottom-tittle" style="color: transparent">信息</div>
        <div class="info-content-text">关于我们</div>
        <div class="info-content-text">安全支付</div>
        <div class="info-content-text">我们的商店</div>
        <div class="img-list">
          <img src="../assets/bottom-img/bottom1.jpg" alt="" class="bottom-img">
          <img src="../assets/bottom-img/bottom2.jpg" alt="" class="bottom-img">
          <img src="../assets/bottom-img/bottom3.jpg" alt="" class="bottom-img">
          <img src="../assets/bottom-img/bottom4.jpg" alt="" class="bottom-img">
        </div>
      </div>
      <div class="info">
        <div class="bottom-tittle">获取新闻稿</div>
        <div class="info-content-text" style="width: 200px">用心做企业，打造好品牌</div>
        <div class="input-style">
          <el-input type="textarea" :autosize="{ minRows: 1, maxRows: 3}" placeholder="输入您的电子邮箱" v-model="textarea"></el-input>
          <el-button type="primary" style="margin-top: 10px">订阅</el-button>
        </div>
      </div>
    </div>
    <div style="width: 100%;line-height: 30px;height: 30px;border-top: 1px solid #e8e6e6; ">
      <div style="display: flex;justify-content: space-between;padding: 0 60px">
        <div>版权所有@2023朝花夕拾-保留所有权益</div>
        <div>联系我们使用条款隐私政策网站地图</div>
        <div>语言：中文</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'bottom-info',
  data() {
    return {
      textarea: '',
      imgList: [
        {img: require('../assets/bottom-img/bottom1.jpg')},
        {img: require('../assets/bottom-img/bottom2.jpg')},
        {img: require('../assets/bottom-img/bottom3.jpg')},
        {img: require('../assets/bottom-img/bottom4.jpg')},
      ]
    };
  },
};
</script>

<style scoped lang="scss">
.bottom-bg{
  background-image: url("../assets/bottom-img/bottom-bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;
  z-index: 9999;
}
.bottom{
  height: 160px;
  padding: 90px 60px 15px 60px;
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.about-us{
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 40px;
}
.bottom-tittle{
  font-size: 18px;
  color: #6cb462;
  padding-bottom: 20px;
}
.about-us-text1{
  font-size: 16px;
  width: 300px;
}
.info{
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}
.info-content-text{
  width: 150px;
  padding-bottom: 10px;
}
.img-list{
  display: flex;
}
.bottom-img{
  width: 50px;
  height: 30px;
}
.input-style{
  width: 260px;
  margin-top: 25px;
  ::v-deep .el-button{
    padding: 7px 30px;
  }
  ::v-deep .el-textarea__inner {
    resize: none;
  }
  ::v-deep .el-button--primary{
    background-color: #7fbd7e;
    border-color: #7fbd7e;
  }
}

</style>
