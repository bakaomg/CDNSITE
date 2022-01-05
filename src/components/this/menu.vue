<template>
  <div class="menu-box">
    <div class="menu-left">
      <i class="csicon icon-link"></i>
      <span>{{ HOST }}</span>
    </div>

    <div class="menu-right">
      Copyright &copy; {{ getYear() }} <a href="https://ohmyga.cn">ohmyga</a> All Rights
      Reserved.
    </div>
  </div>
</template>

<script>
export default {
  props: {
    HOST: [String],
  },

  data: () => ({
    year: 2017,
  }),

  methods: {
    getYear() {
      const now_year = this.$dayjs().year();

      return now_year === this.year ? now_year : this.year + " - " + now_year;
    },
  },
};
</script>

<style scoped>
.menu-box {
  color: rgba(42, 42, 42, 0.13);
  font-size: 12px;
  font-weight: bold;
  font-family: "Varela Round";
  user-select: none;
}

.menu-box {
  top: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  padding: 8px 10px;
}

.menu-box a {
  color: rgba(42, 42, 42, 0.2);
}

.menu-box,
.menu-box .menu-left {
  display: flex;
}

.menu-box {
  flex-direction: column;
}

.menu-box .menu-left {
  align-items: center;
}

.menu-box .menu-left i {
  font-size: 10px !important;
}

.menu-box .menu-left span {
  display: block;
  margin-left: 5px;
}

.menu-box .menu-right {
  margin-top: auto;
}
</style>
