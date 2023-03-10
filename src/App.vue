<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #ffffff;
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
*{
  margin: 0;
  padding: 0;
}
.el-carousel__indicator--horizontal .el-carousel__button {
  width: 10px;
  height: 10px;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 50%;
  opacity: 0.5;
}
.el-carousel__indicator--horizontal.is-active .el-carousel__button{
  width: 10px;
  height: 10px;
  background: #ffffff;
  border-radius: 50%;
  opacity: 1;
}
</style>
