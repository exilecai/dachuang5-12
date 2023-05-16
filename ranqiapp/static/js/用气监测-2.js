(function(){
    var myChart=echarts.init(document.querySelector(".line1 .chart"));
    var option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        top:"3%",
        right:'6%',
        textStyle:{
          color:"rgba(0,0,0)",
          fontSize:"13"
        },
        itemWidth: 35,
      },
      grid: {
        left: '5%' ,
        top:'10%',
        right: ' -1%',
        bottom: '20%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['2017','2018','2019','2020','2021','2022'],
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
          },
          boundaryGap:true
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
            margin: -40
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
          name: '第一营业所',
          type: 'line',
          smooth:true,
          symbol: "circle",
          symbolSize: 4,
          showSymbol: false,
          //单独修改当前线条的样式
          lineStyle:{
            color:"rgba(1,132,213,.4)",
            width:"1"
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
        data: [100,200, 300, 200, 100, 210]
        
        },
        {
          name: '第二营业所',
          type: 'line',
          smooth:true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          lineStyle:{
            color:"rgba(0,216,135,.3)",
            width:"1",
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
                  color: "rgba(0, 216, 135, 0.1)"
                },
                {
                  offset: .5,
                  color: "rgba(0, 216, 135, 0)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          },
          itemStyle: {
              color: "#00d887",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12
          },
          emphasis: {
            focus: 'series'
          },
          data: [120,300, 100, 190, 200, 150]
        },
        {
          name: '第三营业所',
          type: 'line',
          smooth:true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          lineStyle:{
            color:"rgba(255,182,193,.3)",
            width:"1"
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
                  color: "rgba(255,182,193, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(255, 182,193, 0.1)"
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
          data: [150,300, 190, 270, 210, 250]
        },
        {
          name: '浦江营业所',
          type: 'line',
          smooth:true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          lineStyle:{
            color:"rgba(255,215,0,.3)",
            width:"1"
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
                  color: "rgba(255, 215, 0, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(255, 215, 0, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          },
          itemStyle: {
              color: "#FFD700",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12
          },
          emphasis: {
            focus: 'series'
          },
          data: [200,360,200,300,330,450]
        }
    ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();
    })
  })();

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
     grid: {
      bottom: "13%",
      top: "23%",
      left: '13%',
      right: '10%',
    },
     legend: {
       data: ['第一营业所', '第二营业所', '第三营业所','浦江营业所'],
       textStyle: {
        color: "rgba(255, 255, 255)",
        fontSize:10.5
      },
      top: "5%",
      itemWidth:15
     },
     xAxis: [
       {
         type: 'category',
         data: ['2017', '2018', '2019', '2020', '2021'],
         axisPointer: {
           type: 'shadow'
         },
         axisLine: {
           show: false
         },
         axisTick: {
           show: false
         },
         axisLabel: {
          color:"rgba(255, 255, 255)"
        }
       }
     ],
     yAxis: [
       {
         type: 'value',
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
          color:"rgba(255, 255, 255)",
          margin: 15
        }
       },
       {
         type: 'value',
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
          color:"rgba(255, 255, 255)"
        }
       }
     ],
     series: [
       {
         color:'#CCCCFF',
         name: '第一营业所',
         type: 'bar',
         tooltip: {
           valueFormatter: function (value) {
             return value + ' ml';
           }
         },
         data: [
           2.0, 4.9, 7.0, 23.2, 25.6
         ]
       },
       {
         color:'#FFF8DC',
         name: '第二营业所',
         type: 'bar',
         tooltip: {
           valueFormatter: function (value) {
             return value + ' ml';
           }
         },
         data: [
           2.6, 5.9, 9.0, 26.4, 28.7
         ]
       },
       {
         color:'#FFA07A',
         name: '第三营业所',
         type: 'bar',
         tooltip: {
           valueFormatter: function (value) {
             return value + ' ml';
           }
         },
         data: [
           2.0, 4.9, 7.0, 23.2, 25.6
         ]
       },
       {
         color:'#ADD8E6',
         name: '浦江营业所',
         type: 'bar',
         tooltip: {
           valueFormatter: function (value) {
             return value + ' ml';
           }
         },
         data: [
           2.6, 5.9, 9.0, 26.4, 28.7
         ]
       },
       {
         color:'#CCCCFF',
         name: '第一营业所',
         type: 'line',
         yAxisIndex: 1,
         tooltip: {
           valueFormatter: function (value) {
             return value + ' %';
           }
         },
         data: [2.0, 2.2, 3.3, 4.5, 6.3]
       },
       {
         color:'#FFF8DC',
         name: '第二营业所',
         type: 'line',
         yAxisIndex: 1,
         tooltip: {
           valueFormatter: function (value) {
             return value + ' %';
           }
         },
         data: [2.5, 2.7, 3.8, 4.9, 6.8]
       },
       {
         color:'#FFA07A',
         name: '第三营业所',
         type: 'line',
         yAxisIndex: 1,
         tooltip: {
           valueFormatter: function (value) {
             return value + ' %';
           }
         },
         data: [2.9, 3.1, 4.2, 5.3, 7.1]
       },
       {
         color:'#ADD8E6',
         name: '浦江营业所',
         type: 'line',
         yAxisIndex: 1,
         tooltip: {
           valueFormatter: function (value) {
             return value + ' %';
           }
         },
         data: [3.2, 3.8, 4.7, 5.8, 7.7]
       }
     ]
   };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    })
  })();

  (function(){
    var myChart=echarts.init(document.querySelector(".pie1 .chart"));
    var option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '1%',
          left: 'center',
          textStyle:{
            color:'#ffffff',
            fontSize:10.8,
          },
          itemWidth:15
        },
        color:["#CCCCFF","#FFF8DC","#FFA07A","#ADD8E6"],
        series: [
          {
            name: '降低购销差量m²',
            type: 'pie',
            radius: ['35%', '45%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 30,
              borderWidth:1,
              borderColor:'#ffffff',
            },
            label: {
              show: true,
              position: 'outside'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 18,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true
            },
            data: [
              { value: 18, name: '第一营业所' },
              { value: 12, name: '第二营业所' },
              { value: 28, name: '第三营业所' },
              { value: 30, name: '第四营业所' }
            ]
          }
        ]
      };
      myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  })
  })();