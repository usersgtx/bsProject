<template>
  <div class="main-vip">
    <!--顶部切换栏-->
    <top-tab></top-tab>
    <div class="vip-content">
      <img src="../assets/vip/banner.png" style="width: 100%;height: 300px">
      <!--会员活动-->
      <div class="vip-part2">
        <p>会员活动</p>
        <div class="part2-row2">
          <div class="part2-row2-line"></div>
          <div class="part2-row2-text">Membership Activities</div>
          <div class="part2-row2-line"></div>
        </div>
      </div>
      <div class="vip-part3">
        <div class="vip-part3-left">
            <img :src="imgArr[index]"><br>
        </div>
        <div class="vip-part3-right">
          <div class="part3-right-small-title">花香四溢</div>
          <div class="part3-right-big-title">HUAXIANGSIYI_</div>
          <div class="part3-right-activities">活动时间：2023.02.16-2023.02.18</div>
          <div class="part3-right-activities">活动地点：北京市XXXXXXXXXX</div>
          <div class="part3-right-activities">活动内容请查看详情</div>
          <div class="part3-right-read">→ READ MORE</div>
          <div class="part3-right-button">
            <el-button type="primary" icon="el-icon-arrow-left" @click = "prev"></el-button>
            <el-button type="primary" icon="el-icon-arrow-right" @click = "next" ></el-button>
          </div>
        </div>
      </div>
    </div>
    <!--底部-->
    <div class="bottom-info">
      <bottom-info></bottom-info>
    </div>
  </div>
</template>

<script>
import TopTab from "../components/topTab";
import BottomInfo from "../components/bottom-info";

export default {
  name: "Vip",
  components: {BottomInfo, TopTab},
  data(){
    return {
      imgArr: [
        require("../assets/vip/part2-img1.png",),
        require("../assets/vip/part2-img2.jpg",),
        require("../assets/vip/part2-img3.jpg",),
      ],
      index: 0, // 索引是从第一张图片开始计算
      isShow: false,
    };
  },
  methods: {
    // prev 切换到上一张图片
    prev() {
      this.index--;
      if (this.index < 0){
        this.isShow = true;
        this.index = 0;
      }
    },
    // next 切换到下一张图片
    next() {
      this.index++;
      if (this.index > 2){
        this.isShow = true;
        this.index = 2;
      }
    },
  }
};
</script>

<style scoped lang="scss">
.main-vip {
  width: 100%;
  height: 100%
}
.vip-content{
  width: 70%;
  margin: auto;
}
.vip-part2{
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.vip-part2 p{
  font-size: 20px;
}
.part2-row2{
  display: flex;
  align-items: center;
  padding: 10px 0;
}
.part2-row2-line{
  height: 1px;
  width: 180px;
  background: #adadad;
}
.part2-row2-text{
  width: 180px;
  text-align: center;
  color: #adadad;
}
.vip-part3{
  display: flex;
  padding-bottom: 30px;
}
.vip-part3-left{
  img{
    width: 500px;
    height: 350px;
  }
}
.vip-part3-right{
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 350px;
  margin-left: 50px;
}
.part3-right-small-title{
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 40px;
}
.part3-right-big-title{
  font-size: 30px;
  margin-bottom: 30px;
  font-weight: 800;
  color: #475669;
}
.part3-right-activities{
  font-size: 16px;
  margin-bottom: 10px;
  color: #adadad;
}
.part3-right-read{
  font-size: 12px;
  margin-top: 40px;
  font-weight: 600;
}
.part3-right-button{
  display: flex;
  margin-top: 15px;
  ::v-deep .el-button--primary{
    background-color: #7fbd7e;
    border-color: #7fbd7e;
  }
}
.bottom-info{
  width: 100%;
  margin-top: 30px;
  background: #f3f3f3;
}
</style>
