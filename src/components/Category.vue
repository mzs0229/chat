<template>
  <div class="category">
      <ul>
        <li v-for="(item, index) in categoryList" :key="index" class="active" 
        @click="sendMessage(item)" 
        :id="index+1"
        >
         {{ item.name }}
        </li>
      </ul>
  </div>
</template>

<script>

import Msg from './msg.js'
export default {
  name: "category",
  data() {
    var _this = this;
    this.$http.get("./data/category.json").then((res) => {
      _this.categoryList = res.data.category;
    });
    return {
      categoryList: [],
    };
  },
  methods:{
      sendMessage:function(item){
         let categoryName = item.name
         Msg.$emit("val",categoryName)
         console.log("index shi",item.ID)
      }

  }
};
</script>
<style>
.category li{
    height: 50px;
    line-height: 50px;
    background-color: white;
    margin-bottom: 2px;
    list-style: none;
}

li:hover{
  background-color: #9ed929;
}


</style>