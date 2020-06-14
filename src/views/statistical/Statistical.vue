<template>
 <div class="box">
   <div class="nav flex fz-12 al-center ju-center">
       <div class="text1 flex-d al-center ju-center">今日发布
           <div>{{1}}</div>
       </div>
       <div class="text1 colr1 flex-d al-center ju-center">原创文章</div>
       <div class="text1 colr2 flex-d al-center ju-center">新留言</div>
       <div class="text1 colr3 flex-d al-center ju-center">新消息</div>
       
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
.box{
    background: rgb(240,242,245);
    margin-top: 60px;
    height: 90vh;
}
.nav{
    width: 100%;
    color: white;
}
.text1{
    height: 50px;
    display: flex;
    flex: 1;
    background: rgb(124,202,191);
    margin-top: 30px;
}
.colr1{
    background: rgb(232,138,135);
}
.colr2{
    background: rgb(131,117,163);
}
.colr3{
    background: rgb(159,206,193);
}

</style>