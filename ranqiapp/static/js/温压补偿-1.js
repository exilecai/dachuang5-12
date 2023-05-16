(function(){
    var myChart=echarts.init(document.querySelector(".bar1 .chart"));
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      legend:{
        bottom:'2%',
        itemWidth:28,
        itemHeight:12,
        barBorderRadius:5,
        textStyle:{
          color:"rgba(0, 0, 0)"
        }
      },
      grid:{
        top:"18%",
        left:"5%",
        right:"6%",
        bottom:"15%",
        containLabel:true
      },
      xAxis: [
        {
          type: 'category',
          data: ['2017','2018','2019','2020','2021'],
          axisPointer: {
            type: 'shadow'
          },
          axisTick:
          {
            show:false
          },
          axisLine:{
            show:false
          },
          axisLabel:{
            textStyle:{
              color:"rgba(0, 0, 0)"
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '损失量',
          axisLabel: {
            color:"rgba(0, 0, 0)"
          },
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
        splitLine:{
          show:false
        },
        nameTextStyle:{
          color:"rgba(0, 0, 0)",
          fontSize:10
        }
        },
        {
          type: 'value',
          name: '占比',
          axisLabel: {
            color:"rgba(0, 0, 0)"
          },
          axisTick:{
            show:false
          },
          axisLine:{
            show:false
          },
          nameTextStyle:{
            color:"rgba(0, 0, 0)",
            fontSize:10
          },
          splitLine:{
            show:false
          }
        }
      ],
      series: [
        {
          color: "#CCCCFF",
          name: '第一营业所',
          type: 'bar',
          data: ['2','4','10','26','30']
        },
        {
          color: "#FFF8DC",
          name: '第二营业所',
          type: 'bar',
          data: ['2','4','10','26','30']
        },
        {
          color: "#FFA07A",
          name:'第三营业所',
          type:'bar',
          data: ['2','4','10','26','30']
        },
        {
          color: "#ADD8E6",
          name:'第四营业所',
          type:'bar',
          data: ['2','4','10','26','30']
        },
        {
          color: "#CCCCFF",
          name: '第一营业所',
          type: 'line',
          yAxisIndex: 1,
          smooth:true,
          data: ['0.2','0.4','0.6','0.2','0.1']
        },
        {
          color: "#FFF8DC",
          name: '第二营业所',
          type: 'line',
          yAxisIndex: 1,
          smooth:true,
          data: ['0.5','0.2','0.3','0.2','0.1']
        },
        {
          color: "#FFA07A",
          name: '第三营业所',
          type: 'line',
          yAxisIndex: 1,
          smooth:true,
          data: ['0.1','0.5','0.6','0.2','0.5']
        },
        {
          color: "#ADD8E6",
          name: '第四营业所',
          type: 'line',
          yAxisIndex: 1,
          smooth:true,
          data: ['0.9','0.75','0.3','0.2','0.1']
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();
    })
  })();

  (function(){
    var myChart=echarts.init(document.querySelector(".line1 .chart"));
    var option = {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '6%',
        top:'12%',
        right: '9%',
        bottom: '6%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23'],
          axisLabel:{
            textStyle:{
              color:"rgba(0,0,0)",
              fontSize:12
            }
          },
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisTick:{
            show:false
          },
          axisLabel:{
            color:"rgba(0,0,0)",
            margin: 20
          },
          axisLine:{
            show:false
          },
          splitLine:{
            show:false
          }
        }
      ],
      series: [
        {
          name: '日温压补偿损失曲线',
          type: 'line',
          //stack: 'Total',
          smooth:true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          //单独修改当前线条的样式
          lineStyle:{
            color:"rgba(255,182,193,.3)",
            width:"3"
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(255,182,193,.5)"
                },
                {
                  offset: 0.8,
                  color: "rgba(255,182,193,.2)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          },
          itemStyle: {
              color: "#FFB6C1",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12
          },
        emphasis: {
          focus: 'series'
        },  
        data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230]
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();
    })
  })();