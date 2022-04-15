<template>
  <div>
    <span
      v-clipboard:copy="message"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
      @click="creatCopy"
    >
      Copy
    </span>
  </div>
</template>

<script>
import Msg from './msg.js'
export default {
    data(){
        return{
            message:""
        }
    },
    mounted(){
        let res = this.onload()
        console.log("copy可能",res)
    },
    methods:{
        onload(){
            this.message = "hhhhhhh"
        },
        onCopy:function(e){
            console.log(e)
            console.log("复制成功")
        },
        onError:function(e){
            console.log(e)
            console.log("复制失败")
        },
        creatCopy(index, row){
            console.log('mzs',row)

        }

    }
}
</script>