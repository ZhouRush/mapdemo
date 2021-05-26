<template>
    <div class="map">
        <div class="container" id='map'></div>
    </div>
</template>
<script>
import * as echarts from 'echarts'
// import common from '../api/common'
import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  mounted () {
      this.getJSMap()
  },
  methods: {
    getJSMap () {
        var tempdata = [
            {name: '淮安市', value: 26},
            {name: '苏州市', value: 20},
            {name: '盐城市', value: 5},
            {name: '南通市', value: 35},
            {name: '连云港市', value: 18},
            {name: '镇江市', value: 5},
            {name: '宿迁市', value: 45},
            {name: '无锡市', value: 8},
        ]
        let mcharts = echarts.init(document.getElementById('map'))
        axios.get('static/jiangsu.json').then((data) => {
           console.log(data.data)
           echarts.registerMap('jiangsu', data.data)
           var options = {
                geo: {
                    type: 'map',
                    map: 'jiangsu',
                    zoom: 1,
                    label: {
                        show: true
                    },
                    roam: true,
                    // center: [119.021265, 33.597506]
                },
                series: [
                    {
                        data: tempdata,
                        geoIndex: 0,  // 将数据和第1个geo关联在一起
                        type: 'map'
                    }
                ],
                visualMap: {
                    min: 0,
                    max: 50,
                    inRange: {
                        color: ['white', 'red'] // 控制颜色渐变范围
                    },
                    calculable: true // 出现滑块效果
                }
            }
            mcharts.setOption(options)
        })
        
    }
  }
}
</script>
<style scoped>
.map {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;

}
.container {
    box-sizing: border-box;
    width: 600px;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
}
</style>
