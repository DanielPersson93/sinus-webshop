<template>
    <div class="login-wrap">
<section class="inputs">
    <p>Email:</p>
    <input type="text">
        <p>Password:</p>
    <input type="text">
</section>
    </div>
</template>

<script>
export default {
    

}
</script>

<style lang="scss" scoped>
.login-wrap{
    display: flex;
    justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 25vw;
  z-index: 9999;
  background-color: hotpink;
  height: 100vh
}
</style>