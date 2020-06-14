<template>
  <div>
<el-card class="box-card gps pos-rel">
      <div>
  <el-upload
  class="upload-demo"
  drag
  action="/api/upload"
  :auto-upload="true"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
      </div>
    

    <div id="app" class=" m-t1">
     <el-button type="success" plain @click="toggleShow">上传图片</el-button>
     <my-upload  
      @crop-success="cropSuccess" 
    @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
     v-model="show" 
      :width="200" 
     :height="200" 
     img-format="png" 
     :size="size"
     langType='zh'
     :noRotate='false'
     field="file"
     url="/api/upload"></my-upload>
     <img :src="imgDataUrl">
   </div>
   </el-card>
  </div>
</template>

<script>

  import myUpload from 'vue-image-crop-upload'
 export default {
   name: '',
   props: {
   },
   components: {
"my-upload": myUpload
   },
   data () {
     return {
    imgDataUrl: "",
        show: false,
        size:2.1
     }
   },
   methods: {
   toggleShow() {
            this.show = !this.show;
        },
        cropSuccess(imgDataUrl, field) {
        
            this.imgDataUrl = imgDataUrl
        },
        //上传成功回调
        cropUploadSuccess(jsonData, field){
            console.log('-------- upload success --------');
            this.imgDataUrl = jsonData.files;
        },
        //上传失败回调
        cropUploadFail(status, field){
            console.log('-------- upload fail --------');
            console.log('上传失败状态'+ status);
            console.log('field: ' + field);
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
.gps{
   top: 150px;
   left: 50px;
}
</style>