<template>
  <div class="main-myInfo">
    <div class="myInfo-content">
      <img src="../assets/public-banner.png" style="width: 100%;height: 300px">
      <div class="users-name-bg">
        <img src="../assets/about/part2-img3.jpg" alt="">
        <div class="users-name-text-bg">
          <p class="users-name-text">昵称昵称昵称昵称</p>
          <p class="users-name-personal-signature">个性签名</p>
        </div>
      </div>
      <div style="width: 100%;height: 10px;background: #f5f5f5"></div>
      <div class="myInfo-part3">
        <div class="myInfo-part3-top">
          <div class="myInfo-part3-top-left">我的订单</div>
          <div class="myInfo-part3-top-right">查看全部订单>></div>
        </div>
        <div class="myInfo-part3-content" >
          <div class="myInfo-part3-item" v-for="item in imgList" :key="item.id">
            <img :src="item.img" alt="">
            <div>{{item.name}}</div>
          </div>
        </div>
      </div>
      <div style="width: 100%;height: 10px;background: #f5f5f5"></div>
      <div class="myInfo-part4">
        <div style="width: 100%;text-align: left;margin-left: 20px">我的服务</div>
        <div class="myInfo-part3-content" style="padding: 40px">
          <div class="myInfo-part3-item" v-for="item in imgArr" :key="item.id">
            <img :src="item.img" alt="">
            <div>{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import BottomInfo from "../components/bottom-info";

export default {
  name: "MyInfo",
  components: {BottomInfo},
  data(){
    return {
      imgList: [
        {
          id: 1,
          name: '全部',
          img: require("../assets/my-info/icon-all.png"),
        },
        {
          id: 2,
          name: '待发货',
          img: require("../assets/my-info/wait.png"),
        },
        {
          id: 3,
          name: '待收货',
          img: require("../assets/my-info/received.png"),
        },
        {
          id: 3,
          name: '待收货',
          img: require("../assets/my-info/wait-pay.png"),
        },
      ],
      imgArr: [
        {
          id: 1,
          name: '加盟入驻',
          img: require("../assets/my-info/jia-meng.png"),
        },
        {
          id: 2,
          name: '发布商品',
          img: require("../assets/my-info/fa-bu.png"),
        },
        {
          id: 3,
          name: '我的发布',
          img: require("../assets/my-info/my-fa-bu.png"),
        },
        {
          id: 3,
          name: '打印发货',
          img: require("../assets/my-info/fa-yin.png"),
        },
        {
          id: 4,
          name: '我的售后',
          img: require("../assets/my-info/shou-hou.png"),
        },
        {
          id: 5,
          name: '我的收藏',
          img: require("../assets/my-info/shou-cang.png"),
        },
        {
          id: 6,
          name: '我的地址',
          img: require("../assets/my-info/address.png"),
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.main-myInfo{
  width: 100%;
  height: 100%
}
.myInfo-content{
  width: 75%;
  margin: auto;
}
.users-name-bg{
  background: #ffffff;
  padding: 40px;
  display: flex;
  align-items: center;
  //box-shadow: -2px -2px 12px -2px rgba(63, 63, 63, 0.1);
  img{
    width: 60px;
    height: 60px;
    border-radius: 40px;
  }
}
.users-name-text-bg{
  margin-left: 20px;

}
.users-name-text{
  font-size: 16px;
  font-weight: 550;
  margin-bottom: 10px;
}
.users-name-personal-signature{
  font-size: 12px;
  color: gray;
  font-weight: 400;
}
.myInfo-part3{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.myInfo-part3-top{
  padding: 0 10px;
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
}
.myInfo-part3-top-left{
  font-size: 16px;
}
.myInfo-part3-top-right{
  font-size: 14px;
  color: #adadad;
}
.myInfo-part3-content{
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 80px;
  flex-direction: row;
  width: 100%;
}
.myInfo-part3-item{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 60px;
  img{
    width: 40px;
    height: 40px;
  }
}
.myInfo-part3-item div{
margin-top: 10px;
}
.myInfo-part4{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>
