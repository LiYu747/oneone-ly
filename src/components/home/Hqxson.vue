<template>
 <div class="el-box-padding">
     <el-card class="box-card m-t3">
 <ve-line :data="chartData" ></ve-line>
</el-card>
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
        }
     }
   },
   methods: {
    getData(){
     axios.get(`/api/homeChat`).then(res=>{
       this.chartData.rows = res.data.data
       this.chartData.columns = Object.keys(res.data.data[0])
     }).catch(err=>{
       console.log(err);
     })
   }
   },
   mounted() {
       this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>