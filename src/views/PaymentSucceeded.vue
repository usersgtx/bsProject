<template>
  <div class="main-paySuccess">
    <div class="paySuccess-content">
      <div class="paySuccess-part1-title">
        <div class="paySuccess-part1-text">基于热爱</div>
        <div class="paySuccess-part1-text">向往浪漫</div>
        <div class="paySuccess-part1-text">花是期待的最好见证者</div>
      </div>
      <div class="paySuccess-part2">
        <div class="paySuccess-part2-text1">订单已完成</div>
        <div class="paySuccess-part2-text2">支付成功，订单已完成</div>
      </div>
      <div class="paySuccess-part3">
        <div class="part3-bg">
          <div class="part3-item" v-for="item in flowPathList" :key="item.id" >
            <div class="part3-item-content">
              <div class="part3-item-number">{{item.id}}</div>
              <div style="margin: 15px 0">{{item.name}}</div>
              <div class="part3-item-line"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="paySuccess-part4">
        <img src="../assets/pay-succeeded/part4-img.png" alt="" width="220" height="240">
        <div class="paySuccess-part4-text">感谢您与我们一起购物,您的订单已完成!</div>
        <div style="display: flex">
          <div class="button-home">主页</div>
          <div class="button-shopping">继续购物</div>
        </div>
      </div>
    </div>
    <!--底部-->
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import BottomInfo from "../components/bottom-info";

export default {
  name: "PaymentSucceeded",
  components: {BottomInfo},
  data(){
    return {
      flowPathList: [
        {
          id: '01',
          name: '购物车'
        },
        {
          id: '02',
          name: '发货'
        },
        {
          id: '03',
          name: '订单已完成'
        },
      ],
    };
  }
};
</script>

<style scoped lang="scss">
.main-paySuccess {
  width: 100%;
  height: 100%
}
.tab-style{
  background: rgba(252, 233, 234, 0.3);
  width: 100%;
}
.paySuccess-content{
  width: 75%;
  margin: auto;
}
.paySuccess-part1-title{
  display: flex;
  width: 35%;
  margin: auto;
  justify-content: space-between
}
.paySuccess-part1-text{
  font-size: 18px;
  text-align: center;
  padding: 20px 0;
}
.paySuccess-part2{
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}
.paySuccess-part2-text1{
  font-size: 24px;
  color: #ffffff;
}
.paySuccess-part2-text2{
  font-size: 16px;
  color: #ffffff;
  margin-top: 10px;
}
.paySuccess-part3{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.part3-bg{
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
}
.part3-item{
  width: 200px;
  height: 200px;
  border: 1px solid #ececec;
  display: flex;
  align-items: center;
  justify-content: center;
}
.part3-item-content{
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.part3-item-number{
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: #5fae5f;
  line-height: 50px;
  color: #ffffff;
}
.part3-item-line{
  width: 40px;
  height: 1px;
  background: #88b940;
  text-align: center;
}
.paySuccess-part4{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  ::v-deep .el-button--primary{
    background-color: #7fbd7e;
    border-color: #d8f6d6;
  }
  ::v-deep .el-button:focus, .el-button:hover{
    background-color: #f0f9eb;
    border-color: #c2e7b0;
    color: #7fbd7e;
  }
  ::v-deep .el-button{
    border-color: #d8f6d6;
    color: #7fbd7e;
  }
}
.button-home{
  padding: 10px 30px;
  border:1px solid #d8f6d6;
  color: #7fbd7e;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  margin-right: 20px;
}
.button-shopping{
  padding: 10px 20px;
  background-color: #7fbd7e;
  border-color: #d8f6d6;
  color: #ffffff;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}
.paySuccess-part4-text{
  font-size: 18px;
  margin: 20px 0;
}
</style>
