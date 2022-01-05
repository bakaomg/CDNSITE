<template>
  <div class="box-container">
    <div class="top">
      <Status class="top-div" :isJson="isJson"></Status>

      <MenuBox class="top-div" :HOST="HOST"></MenuBox>

      <div class="cat-png" ref="CatPNG">
        <img :src="nowImg" />
      </div>
      <div class="overlay-box"></div>
    </div>
    <div class="bottom">
      <LinkBox></LinkBox>
    </div>
  </div>
</template>

<script>
import Status from "@/components/this/status";
import LinkBox from "@/components/this/link";
import MenuBox from "@/components/this/menu";

export default {
  data: () => ({
    isJson: {},
    HOST: location.host,
    png: {
      sad: require("@/assets/images/cat-png/sad.png"),
      sad2: require("@/assets/images/cat-png/sad-2.png"),
      rand: [
        require("@/assets/images/cat-png/1.png"),
        require("@/assets/images/cat-png/2.png"),
        require("@/assets/images/cat-png/3.png"),
        require("@/assets/images/cat-png/4.png"),
        require("@/assets/images/cat-png/5.png"),
        require("@/assets/images/cat-png/6.png"),
        require("@/assets/images/cat-png/7.png"),
        require("@/assets/images/cat-png/8.png"),
        require("@/assets/images/cat-png/9.png"),
        require("@/assets/images/cat-png/10.png"),
        require("@/assets/images/cat-png/11.png"),
        require("@/assets/images/cat-png/12.gif"),
        require("@/assets/images/cat-png/13.gif"),
        require("@/assets/images/cat-png/14.gif"),
        require("@/assets/images/cat-png/15.gif"),
        require("@/assets/images/cat-png/16.gif"),
        require("@/assets/images/cat-png/17.gif"),
        require("@/assets/images/cat-png/18.gif"),
        require("@/assets/images/cat-png/19.gif"),
        require("@/assets/images/cat-png/20.gif"),
        require("@/assets/images/cat-png/21.gif"),
        require("@/assets/images/cat-png/22.gif"),
        require("@/assets/images/cat-png/23.gif"),
        require("@/assets/images/cat-png/24.gif"),
        require("@/assets/images/cat-png/25.gif"),
        require("@/assets/images/cat-png/26.gif"),
        require("@/assets/images/cat-png/27.png"),
        require("@/assets/images/cat-png/28.png"),
      ],
    },
    nowImg: "",
  }),

  mounted() {
    this.init();
  },

  methods: {
    init() {
      const isDoc = document.querySelector("#CSDATA"),
        errJson = { code: 500, info: "该页面异常" };

      if (!isDoc) this.isJson = errJson;
      else if (isDoc.getAttribute("o-json") == null) this.isJson = errJson;
      else {
        try {
          this.isJson = JSON.parse(isDoc.getAttribute("o-json"));
        } catch (e) {
          this.isJson = errJson;
        }

        if (this.isJson.siteName) {
          document.title =
            this.isJson.code + " - " + this.isJson.info + " | " + this.isJson.siteName;
        } else {
          document.title = this.isJson.code + " - " + this.isJson.info;
        }
      }

      this.initIMG();
    },

    initIMG() {
      var _nowIMG = "";

      if (this.isJson.code === 404) _nowIMG = this.png.sad;
      else if (this.isJson.code === 500) _nowIMG = this.png.sad2;
      else {
        const allCount = this.png.rand.length;
        var randCount = Math.floor(Math.random() * (allCount - 0 + 1) + 0);

        if (randCount != 0) randCount = randCount - 1;

        _nowIMG = this.png.rand[randCount];
      }

      this.nowImg = _nowIMG;

      var _this = this;

      var catImage = new Image();
      catImage.src = _nowIMG;
      catImage.onload = () => {
        if (_this.$refs.CatPNG != undefined) _this.$refs.CatPNG.classList.add("display");
      };
    },
  },

  components: {
    Status,
    LinkBox,
    MenuBox,
  },
};
</script>

<style scoped>
.box-container {
  width: 800px;
  overflow: hidden;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
}

.box-container .top {
  height: 240px;
  display: flex;
  align-items: center;
  position: relative;
}

.box-container .top .top-div {
  z-index: 30;
}

.box-container .top .cat-png {
  right: 0;
  bottom: 0;
  width: 130px;
  z-index: 20;
  opacity: 0;
  position: absolute;
}

.box-container .top .cat-png.display {
  opacity: 1;
}

.box-container .top .cat-png {
  margin-right: 20px;
}

.cat-png img {
  width: 100%;
  height: 100%;
}

.box-container .top .overlay-box {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 25;
  position: absolute;
  background-color: rgba(66, 66, 66, 0);
}

.box-container .bottom {
  display: flex;
  align-items: center;
  background-color: rgba(30, 136, 229, 0.3);
}

@media (max-width: 810px) {
  .box-container {
    width: 95%;
  }
}

@media (max-width: 500px) {
  .box-container .top .cat-png,
  .box-container .top .cat-png.display {
    opacity: 0;
  }

  .box-container .top {
    height: 260px;
  }
}
</style>
