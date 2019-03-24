<template>
  <div>
    <template>
      <ve-line :data="chartData" :settings="chartSettings"></ve-line>
    </template>
    <br>
    <template style="margin:20px">
      <ve-map :data="chartData2" :settings="chartSettings2"></ve-map>
    </template>
<template>
  <ve-histogram :data="chartData3" :settings="chartSettings3"></ve-histogram>
</template>
    </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: {},
      chartSettings: {},
      chartData2: {},
      chartSettings2: {},
      chartData3: {},
      chartSettings3: {}
    };
  },
  computed: {
      role() {
        return this.name === "admin" ? "超级管理员" : "普通用户";
      },
      user(){
          //因为在main.js中已经全局注册了store，所以这里直接用this.$直接使用。
          return this.$store.state.user
      }
  },
  created() {
    //   折线图
    this.chartData = {
      columns: ["日期", "成本", "利润", "占比", "其他"],
      rows: [
        { 日期: "1月1日", 成本: 1523, 利润: 1523, 占比: 0.12, 其他: 100 },
        { 日期: "1月2日", 成本: 1223, 利润: 1523, 占比: 0.345, 其他: 100 },
        { 日期: "1月3日", 成本: 2123, 利润: 1523, 占比: 0.7, 其他: 100 },
        { 日期: "1月4日", 成本: 4123, 利润: 1523, 占比: 0.31, 其他: 100 },
        { 日期: "1月5日", 成本: 3123, 利润: 1523, 占比: 0.12, 其他: 100 },
        { 日期: "1月6日", 成本: 7123, 利润: 1523, 占比: 0.65, 其他: 100 }
      ]
    };
    this.chartSettings = {
      axisSite: { right: ["占比"] },
      yAxisType: ["KMB", "percent"],
      yAxisName: ["数值", "比率"]
    };

    // 地图
    this.chartData2 = {
      columns: ["位置", "GDP"],
      rows: [
        { 位置: "吉林", 税收: 123, 人口: 123, 面积: 92134 },
        { 位置: "北京", 税收: 1223, 人口: 2123, 面积: 29234 },
        { 位置: "上海", 税收: 2123, 人口: 1243, 面积: 94234 },
        { 位置: "浙江", 税收: 4123, 人口: 5123, 面积: 29234 }
      ]
    };
    this.chartSettings2 = {
      position: "china",
      dimension: "位置",
      metrics: ["人口", "面积"],
      dataType: {
        面积: "KMB"
      }
    };
    //  柱状图
    this.chartData3 = {
      columns: ["日期", "成本", "利润", "占比", "其他"],
      rows: [
        { 成本: 1523, 日期: "1月1日", 利润: 1523, 占比: 0.12, 其他: 100 },
        { 成本: 1223, 日期: "1月2日", 利润: 1523, 占比: 0.345, 其他: 100 },
        { 成本: 2123, 日期: "1月3日", 利润: 1523, 占比: 0.7, 其他: 100 },
        { 成本: 4123, 日期: "1月4日", 利润: 1523, 占比: 0.31, 其他: 100 }
      ]
    };
    this.chartSettings3 = {
      metrics: ["成本", "利润"],
      dimension: ["日期"]
    };
  }
};
</script>


<style scoped>
</style>
