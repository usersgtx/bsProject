<template>
  <div class="main-address">
    <div class="address-content">
<!--      <img src="../assets/address/address-banner.jpg" style="width: 100%;height: 300px">-->
      <!--我的地址-->
<!--      <div class="address-part2">-->
<!--        <div class="part2-title">-->
<!--          <div class="part2-title-line"></div>-->
<!--          <div class="part2-title-text">我的地址</div>-->
<!--          <div class="part2-title-line"></div>-->
<!--        </div>-->
<!--      </div>-->
      <!-- card-->
      <div class="card-bg">
        <div v-for="item in infoList" :key="item.id" class="card-item">
          <div>
            <span>{{item.username}}</span>
            <span>{{item.tell}}</span>
          </div>
          <div class="card-item-address">{{item.address}}</div>
          <div style="display: flex;align-items: center;justify-content: space-between;height: 16px;line-height: 16px;margin-top: 10px">
            <div class="card-item-default" @click="handleChange(item.id)">
              <i class="el-icon-success" v-if="item.checked"></i>
              <span class="card-item-border" v-else></span>
              <span style="margin-left: 5px">{{item.radio}}</span>
            </div>
            <div style="display:flex;padding-right: 10px">
              <div>删除</div>
              <div>删除</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "address",
  data () {
    return {
      infoList: [
        {
          id: 1,
          username: '木子李', // 昵称
          tell: '13823456789', // 电话
          radio: '已设为默认',
          address: '吉林省长春市净月街道1488号', // 地址
          checked: true,
        }, {
          id: 2,
          username: '小艺', // 昵称
          tell: '13823456789', // 电话
          radio: '设为默认',
          address: '吉林省长春市南关区威海三区', // 地址
          checked: false,
        }, {
          id: 3,
          username: '小爱', // 昵称
          tell: '13823456789', // 电话
          radio: '设为默认',
          address: '吉林省长春市朝阳区经开三区', // 地址
          checked: false,
        }, {
          id: 4,
          username: 'Siri', // 昵称
          tell: '13823456789', // 电话
          radio: '设为默认',
          address: '吉林省长春市绿园区凌水街道', // 地址
          checked: false,
        }],
    };
  },
  created() {},
  methods: {
    handleChange(val){
      let target = this.infoList.find( it => it.id === val);
      target.radio = '已设为默认';
      target.checked = true;
      this.infoList.forEach( it => {
        if ( it.id !== val){
          it.checked = false;
          it.radio = '设为默认';
        }
      });
    },
  }
};
</script>

<style scope lang="scss">
.main-address{
  width: 100%;
  height: 100%
}
.address-content{
  width: 65%;
  margin: auto;
  border: 1px solid blue;
}
.address-part2{
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
}
.part2-title{
  display: flex;
  align-items: center;
  width: 100%;
}
.part2-title-line{
  height: 3px;
  width: 43%;
  background: #04c904;
}
.part2-title-text{
  width: 14%;
  text-align: center;
  color: #04c904;
  font-size: 24px;
  font-weight: 500;
}
.card-bg{
  width: 100%;
  border: 1px solid red;
  display: flex; //把盒子在一行显示
  overflow-x: hidden; //超出隐藏
  flex-wrap: wrap;  //超出自动换行
  padding-top: 20px;
}
.card-item{
  width: 450px;
  height: 80px;
  padding: 20px 10px;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.card-item-address{
  font-size: 14px;
  color: #adadad;
  margin-top: 10px;
}
.card-item-default{
  display: flex;
  align-items: center;
  cursor: pointer;
  i{
    color: #5fae5f;
    font-size: 20px;
  }
}
.card-item-border{
  width: 16px;
  height: 16px;
  border-radius: 40px;
  border: 1px solid #5fae5f;
}



</style>
