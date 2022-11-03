<template lang="">
  <div class="loginPage" >
    <div class=" login_box">
   <h1>蟠桃会人员管理系统</h1>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
  <el-form-item label="用户名" prop="username">
    <el-input type="username" v-model="ruleForm.username" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item :label="'密\xa0\xa0\xa0码'" prop="password">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="验证码" prop="captchacode">
   <div class="captchacode-box">
    <el-input v-model.number="ruleForm.captchacode"></el-input>
    <img :src="pictureUrl" alt="" height="40" @click="UserDataAPI">
   </div>
  </el-form-item>
  <el-checkbox v-model="checked">记住密码</el-checkbox>
  <el-form-item class="submit">
    <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%">提交</el-button>
  </el-form-item>
</el-form>
  </div>
</div>
</template>
<script>
import { validateUsername, validatepassword } from '@/utils/validata.js'
import { getUserData, getLoginAPI } from "@/request/API"
export default {
  data() {
    return {
      checked: true,
      // 图片的路径
      pictureUrl: "",
      ruleForm: {
        username: "qdtest1",
        password: "123456",
        captchacode: "888888",

      },
      rules: {
        username: [
          {
            required: true, //必填项 
            message: "用户名不能为空", //提示信息
            trigger: "blur"
          },
          // 自定义校验写法
          {
            validator: validateUsername, trigger: "blur"
          }
        ],
        password: [
          {
            required: true, //必填项
            message: "密码不能为空", //提示信息
            trigger: "blur"
          },
          { validator: validatepassword, trigger: "blur" }
        ],
        captchacode: [
          {
            required: true, //必填项
            message: "验证码不能为空", //提示信息
            trigger: "blur"
          }
        ]
      }
    }
  },
  methods: {
    // 提交按钮
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // 登录
          let res = await getLoginAPI({
            username: this.ruleForm.username,
            password: this.ruleForm.password,
            code: this.ruleForm.captchacode,
            uuid: localStorage.getItem("AKA-uuid")
          })
          if (res.code == 200) {
            console.log(res);
            this.$message({
              message: "登录成功",
              type: "success"
            })
          } else {
            this.$message({
              message: "登录失败",
              type: "error"
            })
          }
        } else {
          this.$message({
            message: "请输入正确信息再提交",
            type: "error"
          })
          return false;
        }
      });
    },
    async UserDataAPI() {
      let res = await getUserData()
      if (res.code == 200) {
        // console.log(res);
        // 获取验证码图片
        this.pictureUrl = "data:image/gif;base64," + res.img
        // 保存uuid,登陆时返回参数给后端
        localStorage.setItem("AKA-uuid", res.uuid)
      } else {
        this.$message({
          message: res.msg,
          type: "error"
        })
      }

    }

  },
  created() {
    this.UserDataAPI()
  }
}
</script>
<style lang="less" scoped>
.loginPage {
  width: 100%;
  height: 100%;
  background: url(../../assets/images/loginBg.jpg) no-repeat center top;

  .login_box {
    width: 400px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 20px;
    padding-right: 40px;
    border-radius: 15px;

    h1 {
      text-align: center;
      margin: 20px 0;
      padding-left: 40px;
      font-size: 20px;

    }

    .submit {
      text-align: center;
      width: 100%;
      // margin-left: 40px;

      ::v-deep .el-form-item__content {
        margin-left: 40px !important;
      }
    }

    .captchacode-box {
      display: flex;

      img {
        margin-left: 10px;
      }
    }
  }
}
</style>