<template>
  <div class="main-container">
    <Header />
    <Todolist />
  </div>
</template>

<script>
export default {}
</script>
<style>
body{
  margin: 0;
}
.main-container{
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: $gray10;
  align-items: center;
}
</style>