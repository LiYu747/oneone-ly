<template>
 <div>
     <dir class="img flex ju-center al-center">
  <el-card class="box-card pos-abs">  
  <div slot="header" class="clearfix flex ju-center">
    <div class="text">欢迎来到Sex Xin后台管理系统</div>
  </div>
 
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <el-form-item label="请输入用户名" prop="username">
    <el-input v-model="ruleForm.username" class="input" ></el-input>
  </el-form-item>
</el-form>

<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <el-form-item label="请输入密码" prop="password">
    <el-input v-model="ruleForm.password" class="input" show-password></el-input>
  </el-form-item>
</el-form>
<div class="pos pos-rel">
 <el-button type="primary" @click="reged">立即注册</el-button>
  <el-button type="primary" @click="login" class=" m-l2">立即登录</el-button>
</div>

</el-card>
    


     </dir>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       ruleForm: {
          username: '',
          password:''
        },
         rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 10, message: '请至少输入两位字符', trigger: 'blur' }
          ],
            password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 15, message: '密码长度在 6 到 15 位之间', trigger: 'blur' }
          ],
        }
     }
   },
   methods: {
     reged(){
        this.$refs.ruleForm.validate((valid) => {
          if(valid){
                axios
       .post("/api/user/register", {
          username: this.ruleForm.username,
          password: this.ruleForm.password
        })
        .then(res=>{
          if(res.data.code===200){
            this.$message.success('注册成功')
            this.$router.push("/Login")
          }
          else if(this.ruleForm.username===''){
                  this.$message.error('用户名不能空');
          }
          
          else{
              this.$message.error(res.data.message);
          }
        })
        .catch(ree=>{
          console.log(ree.data)
        })
          }
           
        });
        
      },
      login(){
       this.$router.push('/Login')
   }
   },
  
   mounted() {
     
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.img{
   width: 100%;
   height: 100vh;
  background: url('../../img/bg1920.jpg') no-repeat;

}
.box-card{
   width: 500px;
   height: 300px;
  background: rgba(255,255,255,0.5);
   top: 150px;
}
.input{
  width: 300px;
}
.pos{
left: 130px;
}
.text{
    color: rgb(71,181,128);
}
</style>