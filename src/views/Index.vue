<template>
  <div class="index">
    <div class="left">    
        <Category></Category>
    </div>
    <div class="right">
        <ChatContent></ChatContent>   
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Category from "@/components/Category.vue";
import ChatContent from "@/components/ChatContent.vue";

export default {
  name: "index",
  components: {
    // HelloWorld,
    Category,
    ChatContent,
  },
};
</script>

<style>

.index{
    width: 1300px;
}
.left{
    margin-top: 100px;
    width: 10%;
    background-color: grey;
    float: left;
    cursor: pointer;
    margin-right: 20px;
}
.right{
    width: 75%;
    float: left;
}
</style>