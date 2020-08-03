<template>
  <div class="hello">
    <h3 id="h">{{ testMsg }}</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      testMsg: "原始值",
    };
  },
  mounted() {
    this.changeTxt();
  },
  methods: {
    changeTxt: function() {
      let that = this;
      that.testMsg = "修改后的文本值"; //vue数据改变，改变dom结构
      that.$nextTick(() => {
        let domTxt = document.getElementById("h").innerText; //后续js对dom的操作
        console.log(domTxt); //输出可以看到vue数据修改后DOM并没有立即更新，后续的dom都不是最新的
        if (domTxt === "原始值") {
          console.log("文本data被修改后dom内容没立即更新");
        } else {
          console.log("文本data被修改后dom内容被马上更新了");
        }
      });
    },
  },
};
</script>
