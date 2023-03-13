<template>
  <div class="ContactMe-index">
    <div class="ContactMe-content">
      <div class="ContactMe-content-title">加盟入驻</div>
      <div class="ContactMe-part2">
        <p>五大核心竞争力</p>
        <div class="part2-row2">
          <div class="part2-row2-line"></div>
          <div class="part2-row2-text">The Five Core Competitiveness</div>
          <div class="part2-row2-line"></div>
        </div>
      </div>
      <div class="ContactMe-part3">
        <div style="margin-top: 260px">{{des}}</div>
      </div>
      <div class="ContactMe-part2" style="padding: 40px 0">
        <p>六大加盟保障体系</p>
        <div class="part2-row2">
          <div class="part2-row2-line"></div>
          <div class="part2-row2-text">The Six Major Franchise</div>
          <div class="part2-row2-line"></div>
        </div>
      </div>
      <div class="six-system">
        <img src="../assets/contact-me/six-system.png" alt="">
      </div>

    </div>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import BottomInfo from "../components/bottom-info";

export default {
  name: "ProductDetails",
  components: {BottomInfo},
  data(){
    return {
        des: '结合社区新零售的合作模式将获得更多代理商的青睐，同时也为代理商创造更多盈利点。020店商即线下加盟店，企业既可以继续线下的运营模式，占领实体市场的优势。实现到店看样、买前试货、网购退还中心，到点提货，免运费柜台，最近门店调货，电商即开启线上电商平台，获取线上客户，同时与线下业务对接，实现线下体验，线上交易的新型020购物体验，形成020闭环营销模式。',

    };
  },
};
</script>

<style scoped lang="scss">
.ContactMe-index{
  width: 100%;
  height: 1500px;
  background-image: url("../assets/ProductDetails/bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.ContactMe-content{
  width: 75%;
  margin: auto;
}
.ContactMe-content-title{
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  padding: 20px;
}
.ContactMe-part2{
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.ContactMe-part2 p{
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
.ContactMe-part3{
  background-image: url("../assets/contact-me/part3-img.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 900px;
  height: 400px;
  border: 1px solid transparent;
  margin: auto;
  line-height: 35px;
  padding: 10px;
}
.six-system{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  img{
    width: 929px;
    height: 547px;
  }
}
</style>

