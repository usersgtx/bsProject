<template>
  <div class="main-home">
    <div style="width: 100%;">
      <!--顶部切换栏-->
      <top-tab></top-tab>
<!--      <div style="width: 70%;margin: auto">-->
        <!--滚动-->
        <el-carousel height="300px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h4>{{ item }}</h4>
          </el-carousel-item>
        </el-carousel>
        <!--热卖-->
        <div class="home-part3">
          <p>热卖</p>
          <div class="part3-row2">
            <div class="part3-row2-line"></div>
            <div class="part3-row2-text">Selling like hotcakes</div>
            <div class="part3-row2-line"></div>
          </div>
        </div>

        <div class="home-part4">
          <div>
            <img src="../assets/home-part4/img1.jpeg">
            <div>
              <p style="margin-left: 20px;">测试</p>
              <p style="margin-left: 20px;">测试</p>
            </div>
          </div>
          <div>
            <img src="../assets/home-part4/img2.jpeg">
            <div>
              <p style="margin-left: 20px;">测试</p>
              <p style="margin-left: 20px;">测试</p>
            </div>
          </div>
          <div>
            <img src="../assets/home-part4/img3.jpeg">
            <div>
              <p style="margin-left: 20px;">测试</p>
              <p style="margin-left: 20px;">测试</p>
            </div>
          </div>
          <div>
            <img src="../assets/home-part4/img4.jpeg">
            <div>
              <p style="margin-left: 20px;">测试</p>
              <p style="margin-left: 20px;">测试</p>
            </div>
          </div>
        </div>
        <!--新品首发-->
        <div class="home-part5">
          <div style="display: flex">
            <img src="../assets/home-part5/part4img1.jpg">
            <img src="../assets/home-part5/part4img2.jpg">
          </div>
          <div style="display: flex">
            <img src="../assets/home-part5/part4img3.jpg">
            <img src="../assets/home-part5/part4img4.jpg">
          </div>
        </div>
<!--      </div>-->

    <!--底部-->
      <div class="bottom-info">
        <bottom-info></bottom-info>
      </div>

    </div>
  </div>
</template>

<script>

import TopTab from '../components/topTab';
import BottomInfo from '../components/bottom-info';

export default {
  name: 'Home',
  // components: { BottomInfo },
  components: { TopTab, BottomInfo },
  data () {
    return {
    };
  },
  methods: {
  }
};
</script>
<style scoped lang="scss">
.main-home {
  width: 100%;
  height: 100%
}
.home-part3{
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.home-part3 p{
  font-size: 20px;
}
.part3-row2{
  display: flex;
  align-items: center;
  padding: 10px 0;
}
.part3-row2-line{
  height: 1px;
  width: 180px;
  background: #adadad;
}
.part3-row2-text{
  width: 180px;
  text-align: center;
  color: #adadad;
}
.home-part4{
  margin-top: 30px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e2e2e2;
}
.home-part4 div{
  position: relative;
  width: 200px;
  height: 350px;
  text-align: center;
}
.home-part4 div img{
  width: 200px;
  height: 350px;
}
.home-part4 div div{
  text-align: left;
  font-size: 18px;
  color: #ffffff;
  background: rgba(50, 50, 50, 0.5);
  z-index: 9999;
  width: 200px ;
  height: 80px;
  position: absolute;
  bottom: 0;
}
.home-part4 div:hover div{
  color: transparent;
  background: transparent;
}
.home-part4 div:hover img{
  cursor: pointer;
  width: 220px;
  height: 370px;
  position: relative;
  margin-top:-20px;
  margin-left: -13px;
  border:8px solid black;
  z-index: 999;
}
.home-part5{
  padding: 30px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.home-part5 div img {
  border-radius: 10px;
  width: 580px;
  height: 260px;
  margin: 20px 20px;
}
.bottom-info{
  width: 100%;
  margin-top: 30px;
  background: #f3f3f3;
}
</style>
<style lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
