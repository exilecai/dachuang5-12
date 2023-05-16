(function(){
    var app=echarts.init(document.querySelector(".line1 .chart"));
    const posList = [
    'left',
    'right',
    'top',
    'bottom',
    'inside',
    'insideTop',
    'insideLeft',
    'insideRight',
    'insideBottom',
    'insideTopLeft',
    'insideTopRight',
    'insideBottomLeft',
    'insideBottomRight'
  ];
  app.configParameters = {
    rotate: {
      min: -90,
      max: 90
    },
    align: {
      options: {
        left: 'left',
        center: 'center',
        right: 'right'
      }
    },
    verticalAlign: {
      options: {
        top: 'top',
        middle: 'middle',
        bottom: 'bottom'
      }
    },
    position: {
      options: posList.reduce(function (map, pos) {
        map[pos] = pos;
        return map;
      }, {})
    },
    distance: {
      min: 0,
      max: 100
    }
  };
  app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
      const labelOption = {
        rotate: app.config.rotate,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        position: app.config.position,
        distance: app.config.distance
      };
      myChart.setOption({
        series: [
          {
            label: labelOption
          },
          {
            label: labelOption
          },
          {
            label: labelOption
          },
          {
            label: labelOption
          }
        ]
      });
    }
  };
  
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid:{
       top:"15%",
       left:"8%",
       right:"10%",
       bottom:"8%",
       containLabel:true
      },
      legend: {
        //data: ['第一营业所', '第二营业所', '第三营业所', '第四营业所'],
        icon:"circle",
        itemWidth:25,
        textStyle:{
          color:"rgba(0, 0, 0)"
        }
      },
      toolbox: {
        show:true,
        orient: 'vertical',
        showTitle: false,
        right: '7%',
        top: '12%',
        feature: {
          mark: { show: true },
          magicType: { show: true, type: ['line', 'bar', 'stack'] },
          restore: { show: true },
        },
        iconStyle: {
          color: "rgba(200,200,200)",
          borderColor: "rgba(200,200,200)"
        }
      },
      xAxis: 
        {
          type: 'category',
          axisTick: { show: false },
          axisLabel:{
            textStyle:{
              color:"rgba(0, 0, 0)"
            }
          },
          axisLine:{
            show:false
          },
          data: ['1', '2', '3', '4', '5','6','7','8','9','10','11','12','13','14','15']
        },
      yAxis: [
        {
          type: 'value',
          axisTick:{
            show:false
          },
          axisLabel:{
            textStyle:{
              color:"rgba(0, 0, 0)"
            }
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
          color: "#CCCCFF",
          name: '第一营业所',
          type: 'bar',
          barCategoryGap:'5',
          emphasis: {
            focus: 'series'
          },
          data: [1, 3, 5, 10, 24,37,60,130,60,37,24,10,5,3,1]
        },
        {
          color: "#FFF8DC",
          name: '第二营业所',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [1, 3, 5, 10, 24,37,60,130,60,37,24,10,5,3,1]
        },
        {
          color: "#FFA07A",
          name: '第三营业所',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [1, 3, 5, 10, 24,37,60,130,60,37,24,10,5,3,1]
        },
        {
          color: "#ADD8E6",
          name: '第四营业所',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [1, 3, 5, 10, 24,37,60,130,60,37,24,10,5,3,1]
        }
      ]
    };
    app.setOption(option);
    window.addEventListener('resize',function(){
      app.resize();
    })
  })();

  (function(){
    var myChart=echarts.init(document.querySelector(".line2 .chart"));
    var option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        itemWidth:15,
        top:"5%",
        textStyle:{
          color:"rgba(0, 0, 0)",
          fontSize:"12"
        },
        left:"7%"
      },
      grid: {
        left: '7%',
        top:'22%',
        right: ' 5%',
        bottom: '8%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['2017','2018','2019','2020','2021','2022'],
          axisLabel:{
            textStyle:{
              color:"rgba(0, 0, 0)",
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
            color:"rgba(0, 0, 0)",
            margin: -2
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
        data: [200, 300, 200, 100, 210,340]
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
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: .5,
                  color: "rgba(0, 216, 135, 0.1)"
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
          data: [300, 100, 190, 200, 150, 190]
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
          data: [300, 190, 270, 210, 250, 300]
        },
        {
          name: '第四营业所',
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
          data: [360,200,300,330,450,300]
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();
    })
  })();