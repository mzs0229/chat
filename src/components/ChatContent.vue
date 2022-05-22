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
      if (res == "Withdraw") {
        url = "./data/withdraw.json";
      } else if (res == "Trading") {
        url = "./data/trading.json";
      } else if (res == "Account") {
        url = "./data/account.json";
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
      }else if (res == "Other") {
        url = "./data/other.json";
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
          message: "Copy Done!!",
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



th {
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #9ed929;
  text-shadow: 1px 1px 1px #568f23;
  background-color: #9dd929;
  border-radius: 5px 5px 0px 0px;
  font-size: 16px;
}
#table1 thead th:empty {
  background-color: transparent;
  border: none;
}

#table1 tbody td {
  padding: 5px 5px;
  background-color: #def3ca;
  border-radius: 3px;
}

td.desc {
  font: bold;
  width: 150px;
  font-size: 14px;
  text-align: center;
}
td.detail {
  font-size: 12px;
  text-align: left;
}

button {
  width: 60px;
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