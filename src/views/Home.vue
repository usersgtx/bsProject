<template>
  <div class="main-home">
      <div class="home-content">
        <!--滚动-->
        <el-carousel height="300px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.img" alt="" width="1140px" height="300px">
          </el-carousel-item>
        </el-carousel>
        <!--热卖-->
        <div class="home-part2">
          <p>热卖</p>
          <div class="part2-row2">
            <div class="part2-row2-line"></div>
            <div class="part2-row2-text">Selling like hotcakes</div>
            <div class="part2-row2-line"></div>
          </div>
        </div>

        <div class="home-part3">
          <div>
            <img src="../assets/home/home-part3-img1.jpg">
            <div>
              <p class="home-part3-title">厄瓜多尔</p>
              <p class="home-part3-des">爱的权杖、爱的证明、唯一真爱</p>
            </div>
          </div>
          <div>
            <img src="../assets/home/home-part3-img2.jpg">
            <div>
              <p class="home-part3-title">费罗伊德</p>
              <p class="home-part3-des">一生一爱，一爱一生</p>
            </div>
          </div>
          <div>
            <img src="../assets/home/home-part3-img3.jpg">
            <div>
              <p class="home-part3-title">浪漫爱人</p>
              <p class="home-part3-des">我的眼中只有你</p>
            </div>
          </div>
          <div>
            <img src="../assets/home/home-part3-img4.jpg">
            <div>
              <p class="home-part3-title">卡布奇诺</p>
              <p class="home-part3-des">与你不期而遇，注定美好</p>
            </div>
          </div>
        </div>
        <!--新品首发-->
        <div class="home-part4">
          <div style="display: flex">
            <img src="../assets/home/home-part4-img1.png" style="width: 530px;height: 240px">
            <img src="../assets/home/home-part4-img2.png">
          </div>
          <div style="display: flex">
            <img src="../assets/home/home-part4-img3.png">
            <img src="../assets/home/home-part4-img4.png">
          </div>
        </div>
      </div>

    <!--底部-->
    <bottom-info></bottom-info>

    </div>
</template>

<script>

// import TopTab from '../components/topTab';
import BottomInfo from '../components/bottom-info';

export default {
  name: 'Home',
  components: { BottomInfo },
  // components: { TopTab, BottomInfo },
  data () {
    return {
      bannerList: [
        {
          id: 0,
          img: require('../assets/home/home-banner1.png')
        },
        {
          id: 1,
          img: require('../assets/home/home-banner2.jpg')
        },
        {
          id: 2,
          img: require('../assets/home/home-banner3.jpg')
        },
      ],
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
.tab-style{
  background: rgba(252, 233, 234, 0.3);
  width: 100%;
}
.home-content{
  width: 75%;
  margin: auto;
}
.home-part2{
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.home-part2 p{
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
.home-part3{
  margin-top: 30px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(250, 228, 228, 0.3);
}
.home-part3-title{
  font-size: 18px;
  margin-left: 20px;
  margin-top: 10px;
}
.home-part3-des{
  font-size: 12px;
  margin-left: 20px;
  margin-top: 10px;
  color: #dad7d1;
}
.home-part3 div{
  position: relative;
  width: 200px;
  height: 350px;
  text-align: center;
}
.home-part3 div img{
  width: 200px;
  height: 350px;
}
.home-part3 div div{
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
.home-part3 div:hover div{
  color: transparent;
  background: transparent;
  border: 1px solid red;
}
.home-part3 div:hover img{
  cursor: pointer;
  width: 220px;
  height: 370px;
  position: relative;
  margin-top:-20px;
  margin-left: -13px;
  border:10px solid black;
  z-index: 99999;
}
.home-part4{
  padding: 30px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.home-part4 div img {
  border-radius: 20px;
  width: 530px;
  height: 230px;
  margin: 20px;
  cursor: pointer;
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
