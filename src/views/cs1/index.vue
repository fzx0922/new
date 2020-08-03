<template>
  <div>
    <div class="box">
      <div class="son">
        <div class="title">标题</div>
        <div class="content">
          <img src="@/assets/01.png" alt="" />
        </div>
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
  height: 600px;
  border: 1px solid #000;
}
.son {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  border: 1px solid blue;
}
.title {
  width: 200px;
  height: 60px;
  border: 1px solid #000;
  margin: 0 auto;
  text-align: center;
}
.content {
  height: calc(100% - 60px);
  background: red;
}
.content img{
    width: 100%;
    height: 100%;
}
</style>
