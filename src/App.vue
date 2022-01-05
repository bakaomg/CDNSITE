<template>
  <div id="CDNSITE">
    <viewMain></viewMain>
  </div>
</template>

<script>
import viewMain from "@/views/viewMain";

export default {
  components: {
    viewMain,
  },
};
</script>

<style>
* {
  text-decoration: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

:not(body) {
  transition: all 0.5s cubic-bezier(0.22, 0.58, 0.12, 0.98);
}

body {
  margin: 0;
  padding: 0;
  background-color: rgba(227, 242, 253, 0.6);
}

::selection {
  color: #fff;
  background: rgba(30, 136, 229, 0.45);
}
</style>
