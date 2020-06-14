<template>
<div class="box">
   <Hson></Hson>
   <Hqxson></Hqxson>
   <Htjson></Htjson>
   <Hsonfoot></Hsonfoot>
</div>
</template>

<script>

import Hson from '../components/home/Hson'
import Hqxson from '../components/home/Hqxson'
import Htjson from '../components/home/Htjson'
import Hsonfoot from '../components/home/Hsonfoot'
 export default {
   name: '',
   props: {
   },
   components: {
        Hson,
        Hqxson,
        Htjson,
        Hsonfoot
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
  width: 100%;
  background: rgb(240,242,245);
  margin-top: 30px;
}

</style>
