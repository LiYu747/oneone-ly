<template>
 <div>
     <el-container>
  <el-header class="flex ju-center pos-fd zdx">
    <div class="box flex pos-rel">
      <div class=" bai fz-14 flex">欢迎 <div class="color fz-16">{{user}}</div> 来到Six xin后台管理系统</div>
      <div class="bai move pos-abs fz-12 flex">
        <div>{{nbx}}，亲爱的{{user}}</div>
        登录时间:{{time}}</div>
    </div>
  </el-header>
  <el-container>
    <el-aside width="200px">

<div class="row">
<el-col :span="12" >
    <el-menu
            router
            :default-active="$route.path" 
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
     
          <div v-for="(item,index) in arr" :key="index">
             <el-menu-item :index="item.path" @click="add(item,index)">
        <i :class="item.log"></i>
                {{item.name}}
      </el-menu-item>
          </div>
          <br>
          <br>
    </el-menu>
  </el-col>
</div>
  

 
    </el-aside>
<router-view></router-view>
  </el-container>
</el-container>


 </div>
</template>

<script>
import dayjs from 'dayjs'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       arr:[
         {
           name:'首页',
           log:'el-icon-location',
           path:'/'
         },
           {
           name:'已发布',
           log:'el-icon-menu',
           path:'/Published'
         },
           {
           name: '统计',
           log:'el-icon-menu',
           path:'/Statistical'     
         },
         {
              name: '发表文章',
           log:'el-icon-check',
         },
           {
              name: '标签页',
           log:'el-icon-setting',
            path:'/Label'   
         },
             {
              name: '导出excel',
           log:'el-icon-setting',
            path:'/Excel' 
         },
             {
              name: '图片上传',
           log:'el-icon-setting',
            path:'/Picture'
         },
             {
              name: '分页表格',
           log:'el-icon-setting',
           path:'/Paging'
         },
              {
              name: '退出系统',
           log:'el-icon-delete',
           path:'/Exit'
         },
         
       ],
       user:'',
        nbx:'',
        time:'',
        
     }
   },
   methods: {
    
      add(item,index){
        if(this.$route.path !== item.path){
           this.$router.push(item.path)
        }
       
      }
   },
   mounted() {
     
        this.user = localStorage.getItem('user')
         this.time = localStorage.getItem('time')
         let nbx = dayjs().format('HH')
        if(5<=nbx&&nbx<12){
         this.nbx = '早上好'
        }
        else if(12<=nbx&&nbx<14){
           this.nbx = '中午好'
        }
          else if(14<=nbx&&nbx<18){
           this.nbx = '下午好'
        }
          else if(18<=nbx&&nbx<22){
           this.nbx = '晚上好'
        }
        else{
          this.nbx = '睡觉觉了'
        }

         
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

  .el-header, .el-footer {
    background-color: rgb(46,94,133);
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .box{
    width: 1500px;
    padding: 0 20px;
    
  }
  .move{
    right: 45px;
  }
  .el-col-12 {
    width: 160%;
    text-align: left;
  }
  .el-menu-item{
    font-size: 12px;
  }
  .color{
    color: yellowgreen;
    margin: 0 10px;
  }
  .zdx{
    z-index: 999999999999;
  }
 .row{
   position: fixed;
   top: 60px;
 }
</style>