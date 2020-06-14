<template>
  <div class="flex m-t3">
    <!-- 左边 -->
    <el-table :data="tableData" style="width: 50%; ">
      <el-table-column prop="num" label="Order_No" width="300" align="center"></el-table-column>

      <el-table-column prop="price" label="price" width="120" align="center"></el-table-column>
      <el-table-column prop="status" label="status" align="center" width="180">
        <template slot-scope="scope">
          <el-tag type="danger" v-if="scope.row.status===0">pending</el-tag>
          <el-tag type="success" v-else>success</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <!-- 中间 -->

    <el-card class="card el-centet-one">
      <div slot="header" class="clearfix flex">
        <div  @click="add" type='buttom'>add</div>Todo List
      </div>
      <div v-for="(item,index) in todolist" :key="index">
        <div class="m-t2">
          <el-checkbox v-model="checked[index]"  :checked="index===1">{{item}}</el-checkbox>
        </div>
      </div>
           {{todolist.length}}
    </el-card>

    <!-- 右边 -->
    <el-card class="box-card">
      <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt />
      <div class="m-t3 fz-14">
        <div v-for="item in arr" :key="item.id" class="m-t1">
          <div>{{item.name}}</div>
          <div v-if="item.progress!==1">
            <el-progress :percentage="(item.progress)*100"></el-progress>
          </div>
          <div v-else>
            <el-progress :percentage="(item.progress)*100" status="success"></el-progress>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      tableData: [],
      arr: [],
      todolist: [
        "star this repository",
        "fork this repository",
        "follow author",
        "vue-admin",
        "vue",
        "element-ui",
        "axios",
        "webpack"
      ],
      checked:{}
    
    
     
    };
  },
  methods: {
    getData() {
      axios
        .get(`/api/orderData`)
        .then(res => {
          this.tableData = res.data.data;
        })
        .catch(err => {});
    },
    getData1() {
      axios
        .get(`/api/progress`)
        .then(res => {
          console.log(res.data.data);
          this.arr = res.data.data;
        })
        .catch(err => {});
    },
   add(){
     
      this.che = 'index'
     console.log(this.che)
   }
   
  },
  mounted() {
    this.getData();
    this.getData1();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.pend {
  width: 60px;
  height: 30px;
  background: rgb(254, 240, 240);
  margin-left: 50px;
  font-size: 12px;
  color: rgb(247, 122, 136);
}
.suc {
  width: 60px;
  height: 30px;
  background: rgb(240, 249, 235);
  margin-left: 50px;
  font-size: 12px;
  color: rgb(184, 231, 222);
}
.card {
  width: 300px;
}
</style>