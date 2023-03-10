<template>
  <div class="main-paySuccess">
    <!--顶部切换栏-->
    <div class="tab-style">
      <top-tab></top-tab>
    </div>
    <div class="paySuccess-content">
      <div class="paySuccess-part1">基于热爱，向往浪漫，花是期待的最好见证者</div>
      <div class="paySuccess-part2">
        <div class="paySuccess-part2-text1">订单已完成</div>
        <div class="paySuccess-part2-text2">支付成功，订单已完成</div>
      </div>
      <div class="paySuccess-part3">
        <div class="part3-bg">
          <div class="part3-item" v-for="item in flowPathList" :key="item.id" >
            <div class="part3-item-content">
              <div class="part3-item-number">{{item.id}}</div>
              <div style="margin-top: 10px">{{item.name}}</div>
              <div class="part3-item-line"></div>
            </div>
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
  name: "PaymentSucceeded",
  components: {BottomInfo, TopTab},
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
.paySuccess-part1{
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
.bottom-info{
  width: 100%;
  margin-top: 30px;
  background: #f3f3f3;
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
  margin-top: 10px;
}
</style>
