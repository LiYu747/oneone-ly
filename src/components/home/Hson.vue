<template>

<div class="box flex ju-between">
       <el-card class="box-card pos-rel">
        <div class="flex al-center">
          <i class="img1 iconfont icon-icon-p_lianxirenguanli m-l1" ></i>
            <div class="mov pos-abs"> 
             <div class="color fz-14">New Visits</div>
            <countTo :startVal='startVal' :endVal='endVal.visits' :duration='3000'></countTo>
           </div>
        </div>   
         
</el-card>
     <el-card class="box-card pos-rel">
        <div class="flex al-center">
          <i class="img2 iconfont icon-xiaoxi m-l1" ></i>
            <div class="mov pos-abs"> 
             <div class="color fz-14">Messages</div>
            <countTo :startVal='startVal' :endVal='endVal.messages' :duration='3000'></countTo>
           </div>
        </div>   
</el-card>
     <el-card class="box-card pos-rel">
<div class="flex al-center">
          <i class="img3 iconfont icon-qian m-l1" ></i>
            <div class="mov pos-abs"> 
             <div class="color fz-14">Purchases</div>
            <countTo :startVal='startVal' :endVal='endVal.purchases' :duration='3000'></countTo>
           </div>
        </div>   
</el-card>
     <el-card class="box-card pos-rel">
<div class="flex al-center">
          <i class="img4 iconfont icon-icon- m-l1" ></i>
            <div class="mov pos-abs"> 
             <div class="color fz-14">Shoppings</div>
            <countTo :startVal='startVal' :endVal='endVal.shopping' :duration='3000'></countTo>
           </div>
        </div>  
</el-card>
 </div>

</template>

<script>
import axios from 'axios'
import countTo from 'vue-count-to'

 export default {
   name: '',
   props: {
   },
   components: {
        countTo,
      
   },
   data () {
     return {
      
       startVal: 0,
        endVal: {}
     }
   },
   methods: {
      gtData(){
        axios
        .get(`/api/homeData`)
        .then(res=>{
           this.endVal = res.data.data
 
        })
        .catch(err=>{

        })
      }
   },
   mounted() {
    this.gtData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
  width: 100%;
  background: rgb(240,242,245);
}
.box-card{
  height: 100px;
  display: flex;
  margin-top: 50px;
  flex: 1;
  margin-left: 10px;
}
.img1{
  font-size: 50px;
  color: rgb(68,200,197);
}
.img2{
    font-size: 50px;
  color: rgb(59,162,244);
}
.img3{
    font-size: 50px;
  color: rgb(244,111,133);
}
.img4{
    font-size: 50px;
  color: rgb(254,188,136);
}
.mov{
  right: 30px;
}
.color{
  color: rgb(147,149,151);
  margin-bottom: 5px;
}
</style>
