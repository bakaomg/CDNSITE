<template>
  <div class="link-box">
    <div class="link-icon">
      <i class="csicon" :class="'icon-' + (isHTTPS === true ? 'lock' : 'lock-open')"></i>
    </div>
    <div class="link-url">{{ isPATH }}</div>
    <div class="link-go" @click.stop="goToHome">
      <i class="csicon icon-angle-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isHTTPS: "https:" == document.location.protocol ? true : false,
    isPATH: location.pathname,
  }),

  methods: {
    goToHome() {
      const link =
        this.isPATH == "/"
          ? "https://ohmyga.cn"
          : document.location.protocol + "//" + location.host;
      window.location.href = link;
    },
  },
};
</script>

<style scoped>
.link-box {
  width: 100%;
  display: flex;
  user-select: none;
}

.link-box .link-icon,
.link-box .link-go {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.link-box .link-icon .icon-lock-open {
  color: rgba(244, 67, 54, 0.8);
}

.link-box .link-url {
  display: flex;
  align-items: center;
  justify-content: center;
}

.link-box .link-url {
  font-size: 16px;
  font-weight: bold;
  color: #424242;
  font-family: "Varela Round";
}

.link-box .link-go {
  cursor: pointer;
  margin-left: auto;
}

.link-box .link-go i {
  font-size: 24px !important;
}

.link-box .link-go:hover {
  background-color: rgba(0, 0, 0, 0.15);
}
</style>
