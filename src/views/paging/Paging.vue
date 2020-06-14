<template>
 <div class="gps pos-rel">
     <el-input
  placeholder="请输入内容"
  v-model="value"
  class="ipt"
  clearable>
</el-input>
 <el-table
    :data="msg.slice((currentPage-1)*pagsize,currentPage*pagsize)"
    style="width: 100%">
    <el-table-column
      label="名称"
      width="250"
      align="center">
      <template slot-scope="scope">
        <div class="fz-12">{{ scope.row.NAME }}</div>
      </template>
    </el-table-column>
    <el-table-column
      label="商品编号"
      width="220"
      align="center">
      <template slot-scope="scope">
          <div class="fz-12">{{ scope.row.GOODS_SERIAL_NUMBER }}</div>
      </template>
    </el-table-column>
     <el-table-column
      label="原价"
      width="220"
       align="center">
      <template slot-scope="scope">
        <div class="fz-12">{{ scope.row.ORI_PRICE}}</div>
      </template>
    </el-table-column>
     <el-table-column
      label="现价"
      width="180"
       align="center">
      <template slot-scope="scope">
        <div class="fz-12">{{ scope.row.PRESENT_PRICE}}</div>
      </template>
    </el-table-column>
    <el-table-column label="操作"
    width="280"
     align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="dia(scope.row)"><i class="el-icon-edit"></i>修改</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i>删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="msg.length">
    </el-pagination>
  </div>
  <el-dialog
  title=""
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <el-form ref="form"  label-width="80px">
   <el-form-item label="名称:">
    <el-input v-model="obj.NAME"></el-input>
  </el-form-item>
   <el-form-item label="原价:">
    <el-input v-model="obj.ORI_PRICE"></el-input>
  </el-form-item>
   <el-form-item label="现价:">
    <el-input v-model="obj.PRESENT_PRICE"></el-input>
  </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="ser">确 定</el-button>
  </span>
</el-dialog>
 </div>
</template>

<script>
import axios from 'axios';

 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
      msg:[],
      currentPage: 1,
      pagsize:10,
       dialogVisible: false,
       obj:{},
       value:'',
     
     }
   },
   methods: {
    gteData(){
        axios
        .get(`/api/tableData`)
        .then(res=>{
            this.msg = res.data.data
            console.log(this.msg)
        })
        .catch(ree=>{
            console.log(ree)
        })
    },
 
 handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },

      handleDelete(index, row) {
         this.msg.splice(index,1)
      },
      dia( row){
        this.dialogVisible = true
        this.obj = row
      },
      ser(){
          this.dialogVisible = false 
      },

        handleSizeChange(val) {
            this.pagsize = val
     
      },
      handleCurrentChange(val) {
          this.currentPage = val
      },
   inpt(){
      
   }
   },
 
   mounted() {
 this.gteData()

   },
   watch: {
  value(val){
        axios
        .get(`/api/tableData`)
        .then(res=>{
           this.msg = res.data.data.filter((item)=>{
           return JSON.stringify(item).includes(val) === true
         })
        })
        .catch(ree=>{
            console.log(ree)
        })  
  }  
   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.gps{
    top: 100px;
    left: 20px;
}
.ipt{
    width: 300px;
    margin-left: 50px;
    margin-bottom: 20px;
}
</style>