(function(){
    var myChart=echarts.init(document.querySelector(".line1 .chart"));
    var option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        top:"0%",
        left:'17%',
        textStyle:{
          color:"rgba(0,0,0)",
          fontSize:"13"
        },
      },
      grid: {
        left: '7%',
        top:'12%',
        right: ' 5%',
        bottom: '8%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['2016','2017','2018','2019','2020','2021','2022'],
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
            color:"rgba(0,0,0",
            margin:0
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
        data: [100,200, 300, 200, 100, 210,340]
        
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
          data: [120,300, 100, 190, 200, 150, 190]
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
          data: [150,300, 190, 270, 210, 250, 300]
        },
        {
          name: '总量',
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
          data: [200,360,200,300,330,450,300]
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
        querySelector(" .pie1 .chart"));
    //2.指定配置项和数据
    var option = {
        // tooltip: {
        //   trigger: 'item',
        //   formatter: '{a} <br/>{b} : {c} ({d}%)'
        // },
        color:['#eed5ff', '#FFF8DC', '#FFA07A','#ADD8E6'],
        series: [
          {
            name: 'Area Mode',
            type: 'pie',
            radius: [0, 38],
            center: ['50%', '50%'],
            roseType: 'area',
            label:{
                    formatter: "{d}.%\n {b} ",
            },
            labelLine:{
                length:5,
                length2:3
            },
            itemStyle: {
              borderRadius: 3
            },
            data: [
              { value: 48, name: '第一营业所' },
              { value: 74, name: '第二营业所' },
              { value: 54, name: '第三营业所' },
              { value: 20, name: '浦江营业所' }
            ]
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