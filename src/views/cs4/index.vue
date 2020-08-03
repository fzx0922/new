<template>
  <div>
    <!-- <div v-for="items in arr" :key="items.id">
      <div v-for="item in items" :key="item.id">
        {{ item.name }}
      </div>
    </div> -->
    <div v-for="item in arr3" :key="item.id">
      <span>{{ item }}</span>
    </div>
    <button @click="dianwo">点我</button>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
let { mapState, mapMutations } = createNamespacedHelpers("ceshi");
export default {
  data() {
    return {
      num: 2,
      arr: [[{ name: "张三" }], [{ name: "李四" }], [{ name: "王老二" }]],
      arr1: [{ name: "张三" }, { name: "李四" }, { name: "王老二" }],
      arr3: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    ...mapMutations(["change"]),
    dianwo() {
      //   let arr2 = [{ name: "张三" }, { name: "李四" }, { name: "王老二" }];
      //   let arr3 = [1, 2, 3, 4, 5];
      //   for (let i = 0; i < arr3.length; i++) {
      //   this.arr3[5] = 2;
      //   }
      //   this.$set(this.arr1, 0, "老王");
      // console.log(this.arr3.length);
      // console.log(this.arr3);
      // this.$set(this.arr3, 5, 2);
      // var target = { name: "guxin", age: 18 };
      // var source = { state: "single" };
      // //   var result = Object.assign(target, source);
      // var result = Object.assign({}, target, source);
      // console.log(result, target == result);
      this.change(5);
    },
  },
  computed: {
    ...mapState(["msg"]),
  },
};
</script>

<style lang="less" scoped></style>
