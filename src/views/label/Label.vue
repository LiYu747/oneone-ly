<template>
 <div class="center">
     <div class="box"> 
         <el-tabs  @tab-click="handleClick">
    <el-tab-pane label="未读消息" >
         <el-table
      :data="arr"
      style="width: 100%"
      :show-header='false'>
      <el-table-column
        width=""
        >
          <template slot-scope="scope">
        <div class="fz-12">{{ scope.row.date }}</div>
      </template>
      </el-table-column>
       <el-table-column
        width="">
          <template slot-scope="scope">
        <div class="fz-12">{{ scope.row.time }}</div>
      </template>
      </el-table-column>
        <el-table-column>
               <template slot-scope="scope">
       <el-button type="info" plain @click="ar(scope.$index, scope.row)">标为已读</el-button>
      </template>
      </el-table-column>
    </el-table>
    <div><el-button type="primary" @click="arAll">全部标记已读</el-button></div>
    </el-tab-pane>
    <el-tab-pane label="已读消息" >
        <el-table
      :data="aee"
      style="width: 100%"
      :show-header='false'>
      <el-table-column
        width="">
         <template slot-scope="scope">
        <div class="fz-12">{{ scope.row.date }}</div>
      </template>
      </el-table-column>
       <el-table-column
        width="">
          <template slot-scope="scope">
        <div class="fz-12">{{ scope.row.time }}</div>
      </template>
      </el-table-column>
        <el-table-column>
           <template slot-scope="scope">
          <el-button type="info" plain @click="ae(scope.$index, scope.row)">删除</el-button>
           </template>
      </el-table-column>
    </el-table>
    <div><el-button type="danger" @click="aeAll">删除全部</el-button></div>
    </el-tab-pane>
    <el-tab-pane label="回收站" >
        <el-table
      :data="aww"
      style="width: 100%"
      :show-header='false'>
      <el-table-column
      prop="date"
        width="">
      </el-table-column>
       <el-table-column
        width="">
          <template slot-scope="scope">
        <div class="fz-12">{{ scope.row.time }}</div>
      </template>
      </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
          <el-button type="info" plain @click="aw(scope.$index, scope.row)">还原</el-button>
            </template>
      </el-table-column>
    </el-table>
    <div><el-button type="danger" @click="awAll">清空回收站</el-button></div>
    </el-tab-pane>
  
  </el-tabs>
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
        arr:[
            {date:'【系统通知】 该系统将于凌晨12点开始维护',
            time:'2018-04-19 20:00:00'},
            {date:'今晚十二点开始发大红包，先到先得',
            time:'2018-04-19 21:00:00'}
        ],
       aee:[
         {date:'【系统通知】 该系统将于凌晨8点开QI',
            time:'2018-04-19 20:00:00'},
       ],
       aww:[
              {date:'【系统通知】 你的优惠卷已过期',
            time:'2018-04-19 20:00:00'},
       ]
     }
   },
   methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      ar(index, row){
        this.arr.splice(index,1)
        this.aee.push(row)
      },
       arAll(){
           this.aee = this.arr.concat(this.aee)
          this.arr = []
      },
        ae(index, row){
        this.aee.splice(index,1)
        this.aww.push(row)
      },
      aeAll(){
           this.aww = this.aee.concat(this.aww)
          this.aee = []
      },
       aw(index, row){
        this.aww.splice(index,1)
        this.aee.push(row)
      },
      awAll(){
        this.aww=[]
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
.box{
    margin-top: 60px;
}
.center{
    width: 100%;
    height: 100vh;
    background: rgb(240,242,245);
}
</style>