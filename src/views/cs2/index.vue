<template>
  <div class="box">
    <div class="son">
      <div class="title">标题</div>
      <div class="content">
        <img src="@/assets/01.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  box-sizing: border-box;
}
.son {
  width: 600px;
  height: 100%;
  margin: 0 auto;
}
.title {
  height: 30px;
  text-align: center;
}
.content {
  height: calc(100% - 30px);
  background: chocolate;
}
.content img {
  width: 100%;
  height: 100%;
}
</style>
