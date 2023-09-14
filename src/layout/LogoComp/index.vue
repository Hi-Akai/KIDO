<template>
  <div class="logo">
    <div class="logo-img"></div>
    <div class="logo-content">
      <span class="english">KIDO</span>
      <span class="chinese">开洞导航</span>
    </div>
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
    width: 36px;
    height: 36px;
    border-radius: 8px;
    margin-right: 6px;
  }
  .logo-content {
    display: flex;
    flex-direction: column;
    .english {
      font-family:Arial, Helvetica, sans-serif;
      font-size: 20px;
      font-weight:bold;
    }
    .chinese {
      font-size: 13px;
      font-weight: 600;
    }
  }
}
</style>
