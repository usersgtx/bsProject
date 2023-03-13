<template>
  <div class="main-allOrders">
    <div class="allOrders-content">
      <img src="../assets/public-banner.png" style="width: 100%;height: 300px">
      <div class="tabs-bg">
        <div class="tabs-top" v-for="item in imgList" :key="item.id" @click="handleTabs(item.id)" :class="{changeStyle:clicked == item.id}">
         <div class="tabs-top-text">{{ item.name }}</div>
        </div>
      </div>
      <div v-if="clicked == 1">
        <div v-for="item in infoList" :key="item.id" class="order-info">
          <div class="order-info-top">
            <div class="order-info-top-left">
              <img src="../assets/all-orders/shop.png">
              <div class="left-num-text">订单编号：{{item.number}}</div>
              <div class="left-status-text">{{item.status}}</div>
            </div>
            <div class="order-info-top-right">
              <img src="../assets/all-orders/username.png">
              <div class="right-text">收件人：{{item.username}}</div>
              <div class="right-text">电话：{{item.tell}}</div>
            </div>
          </div>
          <div class="order-info-center">
            <div class="order-info-center-left">
              <img :src="item.img" alt="">
              <div>{{item.flowerName}}</div>
            </div>
            <div class="order-info-center-right">
              <div class="center-right-detail">点击查看订单详情</div>
              <div class="center-right-price">{{ item.price }}</div>
              <div style="margin-top: 10px">x1</div>
              <div class="center-right-total">
                <span>共1件商品</span>
                <span style="margin-left: 10px">总计{{item.price}}</span>
              </div>
            </div>
          </div>
          <div class="order-info-bottom">
            <img src="../assets/all-orders/username.png" alt="">
            <div>快递公司：{{ item.company }}</div>
            <div style="margin-left: 10px">快递单号：{{ item.courierNumber }}</div>
          </div>
        </div>
      </div>
      <div v-if="clicked == 2">
        <div class="order-info">
          <div class="order-info-top">
            <div class="order-info-top-left">
              <img src="../assets/all-orders/shop.png">
              <div class="left-num-text">订单编号：{{infoList[2].number}}</div>
              <div class="left-status-text">{{infoList[2].status}}</div>
            </div>
            <div class="order-info-top-right">
              <img src="../assets/all-orders/username.png">
              <div class="right-text">收件人：{{infoList[2].username}}</div>
              <div class="right-text">电话：{{infoList[2].tell}}</div>
            </div>
          </div>
          <div class="order-info-center">
            <div class="order-info-center-left">
              <img :src="infoList[2].img" alt="">
              <div>{{infoList[2].flowerName}}</div>
            </div>
            <div class="order-info-center-right">
              <div class="center-right-detail">点击查看订单详情</div>
              <div class="center-right-price">{{ infoList[2].price }}</div>
              <div style="margin-top: 10px">x1</div>
              <div class="center-right-total">
                <span>共1件商品</span>
                <span style="margin-left: 10px">总计{{infoList[2].price}}</span>
              </div>
            </div>
          </div>
          <div class="order-info-bottom">
            <img src="../assets/all-orders/username.png" alt="">
            <div>快递公司：{{ infoList[2].company }}</div>
            <div style="margin-left: 10px">快递单号：{{ infoList[2].courierNumber }}</div>
          </div>
        </div>
      </div>
      <div v-if="clicked == 3">
        <div class="order-info">
          <div class="order-info-top">
            <div class="order-info-top-left">
              <img src="../assets/all-orders/shop.png">
              <div class="left-num-text">订单编号：{{infoList[0].number}}</div>
              <div class="left-status-text">{{infoList[0].status}}</div>
            </div>
            <div class="order-info-top-right">
              <img src="../assets/all-orders/username.png">
              <div class="right-text">收件人：{{infoList[0].username}}</div>
              <div class="right-text">电话：{{infoList[0].tell}}</div>
            </div>
          </div>
          <div class="order-info-center">
            <div class="order-info-center-left">
              <img :src="infoList[0].img" alt="">
              <div>{{infoList[0].flowerName}}</div>
            </div>
            <div class="order-info-center-right">
              <div class="center-right-detail">点击查看订单详情</div>
              <div class="center-right-price">{{ infoList[0].price }}</div>
              <div style="margin-top: 10px">x1</div>
              <div class="center-right-total">
                <span>共1件商品</span>
                <span style="margin-left: 10px">总计{{infoList[0].price}}</span>
              </div>
            </div>
          </div>
          <div class="order-info-bottom">
            <img src="../assets/all-orders/username.png" alt="">
            <div>快递公司：{{ infoList[0].company }}</div>
            <div style="margin-left: 10px">快递单号：{{ infoList[0].courierNumber }}</div>
          </div>
        </div>
      </div>
      <div v-if="clicked == 4">
        <div class="order-info">
          <div class="order-info-top">
            <div class="order-info-top-left">
              <img src="../assets/all-orders/shop.png">
              <div class="left-num-text">订单编号：{{infoList[1].number}}</div>
              <div class="left-status-text">{{infoList[1].status}}</div>
            </div>
            <div class="order-info-top-right">
              <img src="../assets/all-orders/username.png">
              <div class="right-text">收件人：{{infoList[1].username}}</div>
              <div class="right-text">电话：{{infoList[1].tell}}</div>
            </div>
          </div>
          <div class="order-info-center">
            <div class="order-info-center-left">
              <img :src="infoList[1].img" alt="">
              <div>{{infoList[1].flowerName}}</div>
            </div>
            <div class="order-info-center-right">
              <div class="center-right-detail">点击查看订单详情</div>
              <div class="center-right-price">{{ infoList[1].price }}</div>
              <div style="margin-top: 10px">x1</div>
              <div class="center-right-total">
                <span>共1件商品</span>
                <span style="margin-left: 10px">总计{{infoList[1].price}}</span>
              </div>
            </div>
          </div>
          <div class="order-info-bottom">
            <img src="../assets/all-orders/username.png" alt="">
            <div>快递公司：{{ infoList[1].company }}</div>
            <div style="margin-left: 10px">快递单号：{{ infoList[1].courierNumber }}</div>
          </div>
        </div>
      </div>
    </div>
    <bottom-info></bottom-info>
  </div>
</template>


<script>
import BottomInfo from "./bottom-info";

export default {
  name: "AllOrders",
  components: {BottomInfo},
  data () {
    return {
      imgList: [
        {
          id: 1,
          name: '全部订单',
        },
        {
          id: 2,
          name: '待付款',
        },
        {
          id: 3,
          name: '待发货',
        },
        {
          id: 4,
          name: '待收货',
        },
      ],
      clicked: '1',
      number: '订单编号：565698567868990',
      infoList: [
        {
          id: 1,
          number: '565698567868990', // 订单编号
          status: '待发货', // 收货状态
          username: '陈虹', // 昵称
          tell: '13823456789', // 电话
          img: require('../assets/all-orders/flower.jpg'), // 商品图片
          flowerName: '戴安娜玫瑰', // 花名字
          price: '￥188.00', // 价格
          total: '￥188.00', // 总价
          company: '圆通', // 公司
          courierNumber: '45847385758', // 快递单号
        }, {
          id: 2,
          number: '365698567868990', // 订单编号
          status: '待收货', // 收货状态
          username: '小汪', // 昵称
          tell: '13823456789', // 电话
          img: require('../assets/all-orders/flower2.jpg'), // 商品图片
          flowerName: '碎冰蓝玫瑰', // 花名字
          price: '￥256.00', // 价格
          total: '￥256.00', // 总价
          company: '申通', // 公司
          courierNumber: '25847385758', // 快递单号
        }, {
          id: 3,
          number: '765698567868990', // 订单编号
          status: '待付款', // 收货状态
          username: '陈庆国', // 昵称
          tell: '13823456789', // 电话
          img: require('../assets/all-orders/flower3.jpg'), // 商品图片
          flowerName: '彩玫瑰', // 花名字
          price: '￥520.00', // 价格
          total: '￥520.00', // 总价
          company: '申通', // 公司
          courierNumber: '453847385758', // 快递单号
        }],
    };
  },
  created() {
    this.clicked = this.$store.getters.getTabId;
  },
  methods: {
    handleTabs(val){
      this.clicked = val;
    },
  }
};
</script>

<style scoped lang="scss">
.main-allOrders{
  width: 100%;
  height: 100%
}
.allOrders-content{
  width: 75%;
  margin: auto;
}
.tabs-bg{
  display: flex;
  flex-direction: row;
  background: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}
.tabs-top{
  padding: 0 10px;
  height: 40px;
  color: #04c904;
}
.tabs-top-text{
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
.gray-bg{
  width: 100%;
  height: 20px;
  background: #f5f5f5;
}
.changeStyle{
  background: #5fae5f;
  color: white;
}
.order-info{
  padding: 10px 20px;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.order-info-top{
  display: flex;
  justify-content: space-between;
}
.order-info-top-left{
  display: flex;
  align-items: center;
  img{
    width: 25px;
    height: 25px;
  }
}
.left-num-text{
  margin-left: 10px;
}
.left-status-text{
  margin-left: 40px;
  color: #04c904;
}
.order-info-top-right{
  display: flex;
  align-items: center;
  img{
    width: 25px;
    height: 25px;
  }
}
.right-text{
  margin-right: 15px;
}
.order-info-center{
  justify-content: space-between;
  display: flex;
}
.order-info-center-left{
  padding: 30px 0;
  display: flex;
  align-items: center;
  img{
    width: 140px;
    height: 140px;
    border-radius: 6px;
    margin-right: 20px;
  }
}
.order-info-center-right{
  text-align: right;
}
.center-right-detail{
  color: #adadad;
  margin-top: 20px;
}
.center-right-price{
  color: #04c904;
  margin-top: 10px;
}
.center-right-total{
  display: flex;
  align-items: center;
  margin-top: 50px;
}
.order-info-bottom{
  display: flex;
  align-items: center;
  text-align: right;
  justify-content: flex-end;
  img{
  width: 25px;
  height: 25px;
}
}
</style>
