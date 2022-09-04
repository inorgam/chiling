<template>
    <el-card class="home_container">
        <div class="card" >
            <el-card class="card_item"  v-for="(item, index) in cardList" :key="index" >
                <div class="item"><span class="item_txt">{{item.txt}}</span></div>
                <div class="item"><span class="item_txt">{{item.number}}</span></div>
            </el-card>
        </div>
        <div class="chart_container">
        <div ref="chart"  class="chart"></div>
        </div>
    </el-card>
</template>
  
<script setup>

import * as echarts from 'echarts';
import { ref, onMounted } from 'vue'

const cardList = [
    {
        "txt":"今日收入",
        "number":"$1123213"
    },
    {
        "txt":"今日订单",
        "number":"1123213111"
    },
    {
        "txt":"今日新增会员",
        "number":"1123213"
    }

]
const chart = ref()
// 绘制图表
onMounted(() => {
    init()
})
function init() {
    var myChart = echarts.init(chart.value);
    myChart.setOption({
        title: {
            text: 'xx平台周数据展示'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['订单', '下单数', '注册用户', '新增会员', '日营业额']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '订单',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '下单数',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '注册用户',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '新增会员',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '日营业额',
                type: 'line',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    })
}

</script>
  
  <style  scoped>
  .home_container {
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
      padding-top: 20px;
  
  }
  .chart_container{
    justify-content: center;
      align-items: center;
      display: flex;
  }
  .chart{
    width:800px;
    height:400px;
    
  }
  .card{
    display: flex;
    flex-direction: row;
    margin-top:0;
    margin-bottom:27px;
  }
  .card_item{
    width:300px;
    height:150px;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .item{
    justify-content: center;
    align-items: center;
    display: flex;
   height:50%;
   margin-bottom:10px;
  }
  .item_txt{
    font-size: x-large;
  }


  </style>
  