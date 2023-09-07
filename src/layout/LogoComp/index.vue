<template>
  <div class="logo">
    <div class="logo-img"></div>
    <p>KIDO</p>
  </div>
</template>

<script setup lang="ts"></script>
<script lang="ts">
export default {
  name: 'LogoComp',
}
</script>

<style scoped lang="scss">
.logo {
  color: rgb(54, 54, 54);
  display: flex;
  align-items: center;
  padding: 10px;

  .logo-img {
    background-color: #0026ff;
    width: 30px;
    height: 30px;
    border-radius: 6px;
  }
}
</style>
