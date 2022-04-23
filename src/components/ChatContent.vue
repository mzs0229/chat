<template>
  <div class="content">
    <table id="table1">
      <thead>
        <tr>
          <th class="desc">Desc</th>
          <th class="detail">Detail</th>
          <th class="operation">Operation</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in contentList" :key="index">
          <td class="desc">{{ item.desc }}</td>
          <td class="detail">{{ item.detail }}</td>
          <td>
            <button
              class="btn"
              @click="copy"
              :data-clipboard-text="item.detail"
              id="express"
            >
              Copy
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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
      } else if (res == "App") {
        url = "./data/app.json";
      } else if (res == "Mail Template") {
        url = "./data/mail.json";
      }else if (res == "Lark Inquiry") {
        url = "./data/larkinquiry.json";
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
      console.log("clipboard is", clipboard);
      let that = this;
      clipboard.on("success", function () {
        that.$message({
          message: clipboard + "Copy Done",
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
/* .chatcontent li {
  list-style: none;
  text-align: left;
  margin-bottom: 3px;
  background-color: white;

  word-wrap: break-word;
  font-size: 10px;
  padding: 10px;
  width: 900px;
} */

#content {
  width: 750px;
  padding: 40px;
  margin: 0 auto;
  background-color: #fff;
  border-left: 30px solid #1d81b6;
  border-right: 1px solid #ddd;
  box-shadow: 0px 0px 16px #aaa;
}
#table1 {
  font: bold;
  text-align: left;
  border: 1px;
}
#table1 thead th {
  text-align: center;
  padding: 10px;
  border-bottom: 3px solid #9ed929;
  text-shadow: 1px 1px 1px #568f23;
  /* color: #fff; */
  background-color: #9dd929;
  border-radius: 5px 5px 0px 0px;
}
#table1 thead th:empty {
  background-color: transparent;
  border: none;
}

#table1 tbody td {
  padding: 10px;
  border: 2px solid #e7efe0;
  text-shadow: 1px 1px 1px #fff;
  background-color: #def3ca;
  border-radius: 5px;
}

td.desc {
  font: bold;
  width: 100px;
  text-align: center;
}
td.detail {
  width: 700px;
  font-size: 15px;
}

button {
  width: 80px;
  height: 25px;
}

/* #table1 tbody span.check::before {
  content: url(images/check0.png);
} */
/* #table1 tfoot td {
  padding: 10px 0px;
  font-size: 32px;
  color: #9cd009;
  text-align: center;
  text-shadow: 1px 1px 1px #444;
} */
</style>