(function(){
    var myChart=echarts.init(document.querySelector(".line1 .chart"));
    var option = {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '8%',
        top:'8%',
        right: '8%',
        bottom: '8%'
      },
      xAxis: [
        {
          type: 'category',
           axisLine:{
             lineStyle:{
              color:"rgba(0, 0, 0)",
              width:"0.5"
             }
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
            show:false
          },
          axisLine:{
            lineStyle:{
              color:"rgba(0, 0, 0)",
              width:"0.8"
            }
          },
          splitLine:{
            show:false
          }
        }
      ],
      series: [
        {
          type: 'line',
          smooth:true,
          symbol: "circle",
          symbolSize: 3,
          showSymbol: false,
          //单独修改当前线条的样式
          connectNulls:true,
          lineStyle:{
            color:"rgba(1, 132, 213, 0.2)",
            width:"2"
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
                  color: "rgba(1, 132, 213, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          },
          itemStyle: {
              color: "#0184d5",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12
          },
        emphasis: {
          focus: 'series'
        },  
        data: [120, 557, 332, 687,360,232,211]
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();
    })
  })();

  (function(){
    //1.实例化对象
    var myChart=echarts.init(document.
        querySelector(" .bar1 .chart"));
    //2.指定配置项和数据
    var option = {
        color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    //修改图表大小
    grid: {
      left: "5%",
      top: "15%",
      right: "8%",
      bottom: "5%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"
        ],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color:"rgba(0, 0, 0)"
        }
      }
    ],
    yAxis: 
      {
        type: "value",
        splitLine:{
          show:false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color:"rgba(0, 0, 0)",
          margin: 16
        }
      },
    series: [
      {
        color:"#2225db4b",
        name: "直接访问",
        type: "bar",
        barWidth: "90%",
        data: [41,123,27,110,115,38,63,148,63,38,15,10,57,113,21],
        itemStyle: {
          barBorderRadius: 1
        }
      }
    ]
  };
      //把配置项给实例对象
      myChart.setOption(option);
      //4.让图表跟随屏幕自动适应
      window.addEventListener('resize',function(){
        myChart.resize();
      })
})();

(function(){
    var myChart=echarts.init(document.querySelector(".bar2 .chart"));
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
        bottom:'3%',
        itemWidth:20,
        itemHeight:10,
        barBorderRadius:5,
        textStyle:{
          color:"rgba(255, 255, 255)"
        }
      },
      grid:{
        top:"20%",
        left:"5%",
        right:"5%",
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
              color:"rgba(255, 255, 255)"
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '数量',
        //   min: 0,
        //   max: 210,
        //   interval: 30,
          axisLabel: {
            color:"rgba(255, 255, 255)"
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
          color:"rgba(255, 255, 255)",
          fontSize:10
        }
        },
        {
          type: 'value',
          name: '占比',
        //   min: 0,
        //   max: 1,
        //   interval: .2,
          axisLabel: {
            color:"rgba(255, 255, 255)"
          },
          axisTick:{
            show:false
          },
          axisLine:{
            show:false
          },
          nameTextStyle:{
            color:"rgba(255, 255, 255)",
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