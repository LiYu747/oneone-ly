<template>
 <div>
  
     <div class=" flex al-center ju-center">
        <img src="../../img/bg1920.jpg" alt="" class="img">
        <el-card class="box-card pos-abs flex ju-center">
           <div class="text fz-cu">期待您的下次光临</div> 
            <el-button type="primary" class="move pos-rel" @click="exit">确认退出</el-button>
        </el-card>
    
     </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
       exit(){
            localStorage.clear()
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
    height: 650px;
}
.box-card{
    width: 500px;
    height: 300px;
     background: rgba(255, 255, 255, 0.5);
}
.text{
    font-size: 22px;
    margin-top: 20px;
}
.move{
top: 45px;
left: 35px;
}
</style>