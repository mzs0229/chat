<template>
  <div class="chatcontent">
    <P>{{ content }}</P>
    <ul>
      <li v-for="(item, index) in contentList" :key="index">
        <span class="content">
          <span class="desc">{{ "<" + item.desc + ">" }} : </span>
          <span class="detail">{{ item.detail }}</span>
        </span>
        
        <span>
          <button
            class="btn"
            @click="copy"
            :data-clipboard-text="item.detail"
            id="express"
          >
            Copy
          </button>
        </span>
      </li>
    </ul>
  </div>
</template>


<script>
import Msg from "./msg.js";

export default {
  name: "chatcontent",
  data() {
    return {
      content: "pending for select category",
      contentList: [],
      copiedContent: [],
    };
  },

  mounted: function () {
    var _this = this;
    Msg.$on("val", function (res) {
      _this.content = "";
      let url = "";
      if (res == "Account") {
        url = "./data/account.json";
      } else if (res == "Trading") {
        url = "./data/trading.json";
      } else if (res == "Common Phrase") {
        url = "./data/common.json";
      } else if (res == "Deposit") {
        url = "./data/deposit.json";
      } else if (res == "ByFi") {
        url = "./data/byfi.json";
      }else if (res == "App") {
        url = "./data/app.json";
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
    copy() {
      let clipboard = new this.clipboard("#express");
      console.log('clipboard is',clipboard)
      let that = this;
      clipboard.on("success", function () {
        that.$message({
          message: clipboard+"Copy Done",
          duration: 1500,
          center: true,
        });
        clipboard.destroy();
      });
      clipboard.on("error", function () {
        that.$message({
          message: "Copy Failed",
          duration: 2000,
          center: true,
        });
      });
    },
  },
};
</script>

<style scoped>
.chatcontent li {
  list-style: none;
  text-align: left;
  margin-bottom: 3px;
  background-color: white;
  /* white-space: pre-wrap; */
  word-wrap: break-word;
  font-size: 10px;
  padding: 10px;
  width: 900px;
}
.content{
  text-align: left;
  }
.desc {
  font: bold;
  color: blue;
  font-size: 16px;
}

button {
  width: 80px;
  height: 25px;
  float: right;
  margin-bottom: 3px;
}
</style>