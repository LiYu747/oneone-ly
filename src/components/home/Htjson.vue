<template>
 <div class="flex ju-between m-t3">
     <div class="box">
         <el-card class="box-card">
            <ve-radar :data="chartData"></ve-radar>
</el-card>
     </div>
  <div class="box">
 <el-card class="box-card">
          <ve-pie :data="chartData1"></ve-pie>
</el-card>
  </div>
  <div class="box">
<el-card class="box-card">
         <ve-histogram :data="chartData2"></ve-histogram>
</el-card>
  </div>
   
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
           chartData: {
          columns: [],
          rows: []
        },

        chartData1: {
          columns: [],
          rows: []
        },

         chartData2: {
          columns: [],
          rows: []
        }
     }
   },
   methods: {
         getData(){
     axios.get(`/api/radarChat`).then(res=>{
       this.chartData.rows = res.data.data
       this.chartData.columns = Object.keys(res.data.data[0])
     }).catch(err=>{
       console.log(err);
     })
   },

          getData1(){
     axios.get(`/api/ringChat`).then(res=>{
       this.chartData1.rows = res.data.data
       this.chartData1.columns = Object.keys(res.data.data[0])
     }).catch(err=>{
       console.log(err);
     })
   },

          getData2(){
     axios.get(`/api/homeChat`).then(res=>{
       this.chartData2.rows = res.data.data
       this.chartData2.columns = Object.keys(res.data.data[0])
     }).catch(err=>{
       console.log(err);
     })
   },
   },
   mounted() {
   this.getData()
   this.getData1()
   this.getData2()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
  width: 420px;
}


</style>