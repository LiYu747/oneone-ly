<template>
  <div>
    <dir class="img flex ju-center al-center">
      <el-card class="box-card pos-abs">
        <div slot="header" class="clearfix flex ju-center">
          <div class="text">欢迎来到Sex Xin登录系统</div>
        </div>

        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="请输入用户名" prop="username">
            <el-input v-model="ruleForm.username" class="input"></el-input>
          </el-form-item>
        </el-form>

        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="请输入密码" prop="password">
            <el-input v-model="ruleForm.password" class="input" show-password></el-input>
          </el-form-item>
        </el-form>

        <div class="flex al-center">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="请输验证码" prop="validation">
              <el-input v-model="ruleForm.validation" class="vatd"></el-input>
            </el-form-item>
          </el-form>
          <div v-html="code" @click="valid" class="top pos-rel"></div>
        </div>

        <div class="pos pos-rel">
          <el-button type="primary"  @click="login"  class="m-l2">立即登录</el-button>
           <el-button type="primary" @click="regd">立即注册</el-button>
        </div>
      </el-card>
    </dir>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from 'dayjs'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        validation: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 10, message: "请至少输入两位字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "密码长度在 6 到 15 位之间",
            trigger: "blur"
          }
        ],
        validation: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 5, message: "请正确输入验证码", trigger: "blur" }
        ]
      },
      code: "",
      time:''
    };
  },
  methods: {
    login() {
  
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios
            .post("/api/user/login", {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              code: this.ruleForm.validation
            })
            .then(res => {
             
              if(res.data.code===200){
                this.$message.success('登录成功')
               localStorage.setItem('user',this.ruleForm.username)
             
                 this.$router.push('/')
                  this.time=dayjs().format('YYYY年MM月DD日HH时mm分ss秒')
                  
                        localStorage.setItem('time',this.time)
                 
            
               
               
              }
              else{
                  this.$message.error(res.data.message);
              }
            })
            .catch(ree => {
              console.log(ree.data);
            });
        }
      });
    },

    //  获取验证码
    valid() {
      axios
        .get("/api/captcha")
        .then(res => {
          this.code = res.data;
        })
        .catch(ree => {});
    },

    regd(){
      this.$router.push('/Registered')
    }
  },

  mounted() {
    this.valid();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 100%;
  height: 100vh;
  background: url("../../img/bg1920.jpg") no-repeat;
}
.box-card {
  width: 500px;

  background: rgba(255, 255, 255, 0.5);
  top: 150px;
}
.input {
  width: 300px;
}
.vatd {
  width: 100px;
}
.pos {
  left: 130px;
}
.text {
  color: rgb(71, 181, 128);
}
.top {
  top: -16px;
  left: 10px;
}
</style>