<template>
  <div class="productDetails-index">
    <div class="productDetails-index-content">
      <div style="display: flex">
        <div class="content-left">
          <img src="../assets/ProductDetails/pro-del-left.jpg" alt="">
        </div>
        <div class="content-right">
          <div class="content-right-title">爱的二重奏’(红色&玫红色探索者)33支玫瑰花筒 Silver Collection</div>
          <div class="content-right-des">{{des}}</div>
          <div class="content-right-price">{{price}}</div>
          <div class="content-right-button">立即购买</div>
          <div class="content-right-button">加入购物车</div>
        </div>
      </div>

    </div>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import BottomInfo from "./bottom-info";

export default {
  name: "ProductDetails",
  components: { BottomInfo},
  data(){
    return {
      des: '花材:33支自然色玫瑰花筒尺寸: 直径15.5cm; 底座直径16cm; 高16cm[特别说明1: 鲜花是季节性商品，可能由于天气等原因产生色差，纯属正常现象。[特别说明2: 鲜花是季节性商品，花材可能由于天气，运输等突发状况而出现缺货。此时，客服人员将尽快与您联系更换其他品种花材。]',
      price: '￥220.00'
    };
  },
};
</script>

<style scoped lang="scss">
.productDetails-index{
  width: 100%;
  height: 100%;
  background-image: url("../assets/ProductDetails/bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.productDetails-index-content{
  width: 75%;
  height: 530px;
  margin: auto;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 100px;
}
.content-left{
  img{
    width: 400px;
    height: 500px;
    margin-right: 120px;
  }
}
.content-right{
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;

}
.content-right-title{
  font-size: 20px;
}
.content-right-des{
  height: 200px;
  border-radius: 10px;
  border: 2px solid #5fae5f;
  color: #5fae5f;
  margin-top: 30px;
  line-height: 33px;
  padding: 10px;
}
.content-right-price{
  font-size: 22px;
  margin-top: 25px;
  text-align: right;
}
.content-right-button{
  cursor: pointer;
  width: 100%;
  height: 55px;
  background: #5fae5f;
  color: #ffffff;
  border-radius: 4px;
  text-align: center;
  line-height: 55px;
  margin: 10px 0;
}
</style>
