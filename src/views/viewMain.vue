<template>
  <main class="CDNSITE-main">
    <Box></Box>
  </main>
</template>

<script>
import Box from "./pages/box";

export default {
  components: {
    Box,
  },
};
</script>

<style scoped>
.CDNSITE-main {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
