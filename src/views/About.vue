<template>
  <div class="main-about">
    <div class="about-content">
      <img src="../assets/about/about-banner.jpg" style="width: 100%;height: 300px">
      <!--关于我们-->
      <div class="about-part2">
        <p>NEWS 关于我们</p>
        <div class="part2-row2">
          <div class="part2-row2-line"></div>
          <div class="part2-row2-text">Company news center</div>
          <div class="part2-row2-line"></div>
        </div>
      </div>
      <div class="about-part3">
        <div class="about-part3-left">
          <img :src="imgArr[index]"><br>
        </div>
        <div class="about-part3-right">
          <div class="part3-right-small-title">企业介绍</div>
          <div class="part3-right-big-title">Introduce_</div>
          <div class="part3-right-activities">从传奇花店成长为艺术生活品牌，并荣登2012年微博十大人气用榜单。2013年-2014年，我们陆续在上海连卡佛、北京国贸三期店、上海环贸广场、上海新天地、北京银泰、北京三里屯太古里、成都远洋太古里开设风格各异、美而有趣的实体店铺</div>
          <div class="part3-right-read">→ READ MORE</div>
          <div class="part3-right-button">
            <el-button type="primary" icon="el-icon-arrow-left" @click = "prev" ></el-button>
            <el-button type="primary" icon="el-icon-arrow-right" @click = "next"></el-button>
          </div>
        </div>
      </div>
      <div class="about-part4">
        <div class="about-part4-left">
          <div class="about-part4-left-top">
            <div>
              <p class="part4-left-top-title">定制个性化设计解决方案</p>
              <p class="part4-left-top-des">专业插画师为您提供免费咨询</p>
            </div>
            <img src="../assets/about/part4-img.png" style="">
          </div>
          <div class="about-part4-left-bottom">
            朝花夕拾产品多为自家设计制作，以全球搜罗气质相同单品，涵盖花艺，家居，艺术品和个性配饰，关注人的感情以及当今潮流的发展方向，赋予一花一物自由自尊的灵魂
          </div>
        </div>
        <div class="about-part4-right">
          <img src="../assets/about/part-img4.png" style="">
        </div>
      </div>
      <!--核心理念-->
      <div class="about-part2">
        <p>NEWS 核心理念</p>
        <div class="part2-row2">
          <div class="part2-row2-line"></div>
          <div class="part2-row2-text">Company news center</div>
          <div class="part2-row2-line"></div>
        </div>
      </div>
      <div class="about-part6">
        <div class="about-part6-content">
          <div class="about-part6-item">
            <img src="../assets/about/part6-img1.png" alt="">
            <div style="margin-left: 30px">
              <p class="about-part6-item-title">互联网营销，商战是核战</p>
              <p class="about-part6-item-des">互联网时代，战场瞬息万变，商场从枪战抓变为核战，争夺加剧，惨厉升级，每一个市场动作都将影响战局，稍有不慎，灰飞烟灭，聪明的你应该意识到了，朝花夕拾给您保障</p>
            </div>
          </div>
          <div class="about-part6-item">
            <img src="../assets/about/part6-img2.png" alt="">
            <div style="margin-left: 30px">
              <p class="about-part6-item-title">商家信任，为此而生</p>
              <p class="about-part6-item-des">成为商家信得过的伙伴，我们为此而生，广告行业日新月异，强者才能生存，如你所见，18年来我们活的很体面</p>
            </div>
          </div>
        </div>
        <div class="about-part6-content" style="margin-top: 30px">
          <div class="about-part6-item">
            <img src="../assets/about/part6-img3.png" alt="">
            <div style="margin-left: 30px">
              <p class="about-part6-item-title">创意决定生意，野心源于自信心</p>
              <p class="about-part6-item-des">创意决定生意，所以我们积极吸收各种创意专才，野心源于自信心，所以我们把商品遍布全国各地</p>
            </div>
          </div>
          <div class="about-part6-item">
            <img src="../assets/about/part6-img4 .png" alt="">
            <div style="margin-left: 30px">
              <p class="about-part6-item-title">一站式品牌管理服务商</p>
              <p class="about-part6-item-des">用能力与技能让客户信服，他们才能将我们的实力口口相传，我们是互联网时代一站式品牌管理服务商</p>
            </div>
          </div>
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
  name: "About",
  components: {BottomInfo},
  data() {
    return {
      imgArr: [
        require("../assets/about/part2-img1.png"),
        require("../assets/about/part2-img2.jpg"),
        require("../assets/about/part2-img3.jpg"),
      ],
      index: 0, // 索引是从第一张图片开始计算
    };
  },
  methods: {
    // prev 切换到上一张图片
    prev() {
      this.index--;
      if (this.index < 0){
        this.index = 0;
      }
    },
    // next 切换到下一张图片
    next() {
      this.index++;
      if (this.index > 2){
        this.index = 2;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.main-about{
  width: 100%;
  height: 100%
}
.about-content{
  width: 75%;
  margin: auto;
}
.about-part2{
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.about-part2 p{
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
.about-part3{
  display: flex;
  padding-bottom: 30px;
}
.about-part3-left{
  img{
    width: 500px;
    height: 350px;
  }
}
.about-part3-right{
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
  margin-bottom: 20px;
  font-weight: 800;
  color: #475669;
}
.part3-right-activities{
  font-size: 16px;
  margin-bottom: 10px;
  color: #adadad;
  line-height: 25px;
}
.part3-right-read{
  font-size: 12px;
  font-weight: 600;
  margin-top: 10px;
}
.part3-right-button{
  display: flex;
  margin-top: 15px;
  ::v-deep .el-button--primary{
    background-color: #7fbd7e;
    border-color: #7fbd7e;
  }
}

.about-part4{
  display: flex;
}
.about-part4-right{
  img{
    width: 400px;
    height: 250px;
    margin-left: 50px;
  }

}
.about-part4-left{
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 250px;
}
.about-part4-left-top{
  display: flex;
  align-items: center;
  margin-top: 60px;
  img{
    width: 200px;
    height: 40px;
    margin-left: 40px;
  }
}
.part4-left-top-title{
  font-weight: 600;
  font-size: 22px;
  padding-bottom: 15px;
  color: #475669;
}
.part4-left-top-des{
  font-size: 16px;
}
.about-part4-left-bottom{
  margin-top: 30px;
  color: #adadad;
  font-size: 14px;
  line-height: 25px;
}
.about-part6{
  display: flex;
  flex-direction: column;
  padding: 0 60px;
}
.about-part6-content{
  display: flex;
  justify-content: space-between;
}
.about-part6-item{
  display: flex;
  width: 460px;
  img{
    width: 60px;
    height: 60px;
  }
}
.about-part6-item-title{
  margin-bottom: 20px;
  font-size: 16px;
}
.about-part6-item-des{
  font-size: 14px;
  color: #adadad;
  line-height: 25px;
}

</style>
