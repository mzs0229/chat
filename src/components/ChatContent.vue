<template>
  <div class="chatcontent">
    <P>{{ content }}</P>
    <ul>
      <li v-for="(item, index) in contentList" :key="index"  >
        {{ item.detail }}
        <button class="btn" @click="copy" :data-clipboard-text="item.detail" id="express" >Copy</button>
      </li>
    </ul>
  </div>
</template>


<script>
import Msg from "./msg.js";


export default {
  name: "chatcontent",
  data() {
    return{
      content: "pending for select category",
      contentList: [],
      copiedContent:[]
    }
    
  },


  mounted: function () {
    var _this = this;
    Msg.$on("val", function (res) {
      _this.content = "";
      let url = ""
      if (res == "Account") {
        url = "./data/account.json";
      } else if (res == "Trading") {
        url = "./data/trading.json";
      }

      this.$http.get(url).then((res) => {

        _this.contentList = res.data.content;
      });
      return {
        contentList: [],
      };
    });
  },
  methods: {

    copy(){
      let clipboard = new this.clipboard('#express')
      let that = this
      clipboard.on('success',function(){
        that.$message({
          message:"Copy Done",
          duration:1000,
          center: true,
          
          })
        clipboard.destroy()
      })
      clipboard.on('error',function(){
        that.$message({
          message:"Copy Failed",
          duration:2000,
          center:true
        })
      
      })
    }
   
  },
};
</script>

<style scoped>
.chatcontent li{
  list-style: none;
  text-align:left;
  margin-bottom: 3px;
  background-color: white;
  white-space: pre-wrap;
  word-wrap:break-word
}
button{
  width: 80px;
  float: right;
}
</style>