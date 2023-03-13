<template>
  <div class="main-suggestions">
    <div class="suggestions-content">
      <img src="../assets/public-banner.png" style="width: 100%;height: 300px">
      <div class="content">
        <div class="content-title">投诉与建议</div>
        <div class="content-des">{{des1}}</div>
        <div class="content-des">{{des2}}</div>
        <div class="content-des">{{des3}}</div>
        <div class="content-des">{{des4}}</div>
        <div class="content-input">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="订单编号" prop="number">
              <el-input v-model.number="ruleForm.number" clearable οnkeyup="value=value.replace(/[^\d]/g,'')"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="tell">
              <el-input v-model="ruleForm.tell" clearable></el-input>
            </el-form-item>
            <el-form-item label="实物图片">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
             </el-form-item>
            <el-form-item label="原因描述">
              <el-input type="textarea" v-model="ruleForm.desc" :autosize="{ minRows: 3, maxRows: 5}"></el-input>
            </el-form-item>
            <el-form-item class="content-button">
              <el-button type="primary" @click="submitForm()">提 交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import BottomInfo from "./bottom-info";

export default {
  name: "complaintsSuggestions",
  components: {BottomInfo},
  data(){
    return {
      des1: '对本次产品存在的质量问题,向您致以最诚挚的歉意,保证以后提供的产品绝不再有类似的情况发生',
      des2: '(1)鲜花不新鲜、包装不完整等问题,请在收到后的第一时间拍摄（当天收到的图片)并上传片,我们及时调查落实,尽快回复',
      des3: '(2)自收到商品3日后未投诉,不予处理请谅解',
      des4: '(3)非节假日期间,我们售后人员在48小的内联系您跟进处理;如重大节日(情人节,七夕节)我们将在72小时内联系您处理',
      ruleForm: {
        number: '',
        tell: '',
      },
      rules: {
        number: [
          { required: true, message: '请输入订单编号', trigger: 'blur' },
        ],
        tell: [
          {
            pattern:
              /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
            message: "手机号格式错误，请输入正确的手机号",
            required: true,
          },
        ],
      },
      dialogImageUrl: '',
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$message.success('提交成功');
          this.$refs.ruleForm.resetFields();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
};
</script>

<style scoped lang="scss">
.main-suggestions{
  width: 100%;
  height: 100%
}
.suggestions-content{
  width: 75%;
  margin: auto;
}
.content{
  width: 75%;
  margin: auto;
  padding: 20px 0;
}
.content-title{
  font-size: 26px;
  text-align: center;
  padding-bottom: 20px;
}
.content-des{
  line-height: 30px;
}
.content-input{
  margin-top: 30px;
  ::v-deep .el-input{
    width: 70%;
  }
  ::v-deep .el-textarea__inner{
    width: 70%;
    resize: none;
  }
}
.content-button{
  display: flex;
  justify-content: center;
  ::v-deep .el-button{
    padding: 10px 50px;
  }
  ::v-deep .el-button--primary{
    background-color: #7fbd7e;
    border-color: #7fbd7e;
  }
}
</style>
