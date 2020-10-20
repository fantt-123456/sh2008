<template>
  <div>
    <h4 @click="city()">城市^</h4>
    <div class="cinema_c">
      <label class="cinema_c1">全城^</label>
      <label class="cinema_c2">APP订票^</label>
      <label class="cinema_c3">最近去过^</label>
    </div>

    <div class="bt">
      <li v-for="(item, index) in cinemas" :key="index">
        <div class="left">
          <div>{{ item.name }}</div>
          <div class="ff">{{ item.address }}</div>
        </div>
       
        <div class="right">
          <div class="right_l">￥{{ item.lowPrice / 100 }}起</div>
          <strong class="right_l1">距离未知</strong>
        </div>
      </li>
    </div>


  </div>
</template>


<script>
import { cinemaListData } from "@/api/api";

export default {
  data() {
    return {
      cinemas: [],
    };
  },
  async mounted() {
    let ret = await cinemaListData();
    // console.log(ret.data.data.cinemas);
    this.cinemas = ret.data.data.cinemas;
  },
  methods: {
    city: function () {
      this.$router.push({ path: "/city" });
    },
  },
};
</script>


<style lang="scss" scoped>
.bt{
  margin-left: 15px;
  text-align:80px ;
  
}
.cinema_c {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
}

.cinema_c1 {
  float: left;
  width: 33.3%;
  font-size: 14px;
  color: #191a1b;
  letter-spacing: -0.2px;
}
.cinema_c2 {
  float: left;
  width: 33.3%;
  font-size: 14px;
  color: #191a1b;
  letter-spacing: -0.2px;
}
.cinema_c3 {
  float: left;
  width: 33.3%;
  font-size: 14px;
  color: #191a1b;
  letter-spacing: -0.2px;
}

li {
  margin-left: 15px;
  padding:15px;
  box-sizing: border-box;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  width:100%;
  height: 75px;

}
.left{
  float: left;
}

.ff {
  width: 200px;
  font-size: 13px;
  color: #797d82;
 
  white-space: nowrap;
  overflow:hidden;
  text-overflow: ellipsis;


}

.right{
  float: right;
  margin-right: 20px;
}
.right_l{
   font-size: 13px;
  color: red;
  margin-bottom: 5px;
}
.right_l1{
  font-size: 12px;
  color: grey;
}
</style>






