<template>
  <div class="status-box" :class="isJson.code != 200 ? 'notfound' : ''">
    <div class="code">
      {{ isJson.code }}
    </div>
    <div class="text">{{ isJson.info }}</div>
  </div>
</template>

<script>
export default {
  props: {
    isJson: [Object, String],
  },
};
</script>

<style scoped>
.status-box {
  color: #42a5f5;
  padding-left: 30px;
  padding-right: 20px;
  font-family: "Varela Round";
}

.status-box .code {
  font-size: 56px;
}

.status-box.notfound .code,
.status-box.notfound .text {
  color: #ef5350;
}

.status-box .text {
  font-size: 36px;
  font-family: "ZCOOL KuaiLe";
}
</style>
