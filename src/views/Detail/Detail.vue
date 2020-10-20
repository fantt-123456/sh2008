<template>
  <div>
    <div class="detail">
      <div class="img">
        <img v-lazy="film.poster" />
      </div>

      <div>
        <div>{{ film.name }}</div>
        <div>{{ film.category }}</div>
        <div>{{ film.premiereAt | parsePremiereAt }}</div>
        <div>{{ film.nation }} | {{ film.runtime }}</div>
        <div>{{ film.grade }}</div>
        <div>
          {{ film.synopsis }}
        </div>
      </div>

      <div>
        <Swiper :key="'actors_' + film.actors.length">
          <!-- 循环输出图片信息 -->
          <div
            v-for="(item, index) in film.actors"
            :key="index"
            class="swiper-slide"
          >
            <div><img v-lazy="item.avatarAddress" alt="" /></div>
          </div>
        </Swiper>
      </div>

      <div class="photos_z">
        <span class="photos_z1">剧照</span>
        <span class="photos_z2">全部 (5)</span>
      </div>

      <div>
        <Swiper :key="'photos_' + film.photos.length">
          <!-- 循环输出图片信息 -->
          <div
            v-for="(item, index) in film.photos"
            :key="index"
            class="swiper-slide"
          >
            <div><img v-lazy="item" alt="" /></div>
          </div>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { moveDetailData } from "@/api/api";
// 引入moment
import moment from "moment";
import Swiper from "@/components/Swiper";
export default {
  data() {
    return {
      film: { actors: [] ,photos:[]},

    };
  },
  async mounted() {
    let ret = await moveDetailData(this.$route.params.filmId);
    this.film = ret.data.data.film;
  },
  filters: {
    parsePremiereAt: function (value) {
      // 时间戳的单位是秒，需要乘以1000转化成毫秒进行处理
      return moment(value * 1000).format("YYYY-MM-DD");
    },
  },
  components: {
    Swiper,
  },
  created() {
    //   发起通知，通知app.vue组件移出底部菜单
    this.eventBus.$emit("footernav", false);
  },
  beforeDestroy() {
    //   发起通知，通知app.vue组件恢复底部菜单
    this.eventBus.$emit("footernav", true);
  },
};
</script>


<style lang="scss" scoped>
.detail {
  .swiper-slide {
    img {
      width: 80px;
    }
  }
  .img {
    width: 100%;
    height: 260px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  div.photos_z {
    width: 100%;
    height: 80px;
    padding: 15px;
    line-height: 60px;
  }

  div .photos_z1 {
    height: 60px;
    font-size: 17px;
    text-align: left;
    color: #191a1b;
  }

  div .photos_z2 {
    font-size: 14px;
    color: #797d82;
    float: right;
    margin-right: 40px;
  }
  div .photos_z span {
    display: inline-block;
  }
 
}


</style>