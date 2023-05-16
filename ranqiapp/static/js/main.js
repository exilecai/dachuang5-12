(function(){
    var myChart=echarts.init(document.querySelector(".bar .chart"));
    var option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      color:['#CCCCFF', '#FFF8DC'],
      legend: {
        orient: 'horizontal',
        textStyle:{
          color: "rgba(0,0,0)",
          fontSize:'10px',
        },
        itemGap: 5,
        left:'10%',
        top: '12%',
        data: [
          '居民',
          '非居民',
        ],
        itemWidth: 18,
        itemHeight: 12
      },
      title:[
      {
        text: "用户组成",
        left: "27.5%",
        top: "77%",
        textStyle: {
          color: "rgba(0,0,0)",
          fontSize: 13,
        }
      }
    ],
      series: [
        {
          name: 'Radius Mode',
          type: 'pie',
          radius: [10, 30],
          center: ['50%', '50%'],
          roseType: 'radius',
          itemStyle: {
            borderRadius: 5
          },
          label: {
            show: false
          },
          emphasis: {
            label: {
              show: true
            }
          },
          data: [
            { value: 28, name: '居民' },
            { value: 72, name: '非居民' }
          ]
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
      legend: {
        top:"6%",
        data: ['系列一', '系列二'],
        textStyle: {
          color: "rgba(0,0,0)",
          fontSize:12
        },
      },
      grid: {
        left: '0',
        top:'45',
        right: '20',
        bottom: '0',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['1月', '3月', '5月', '7月', '9月', '11月'],
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
            show:true,
            lineStyle:{
                color:'rgba(120, 140, 226, 0.2)'
            }
          }
        }
      ],
      series: [
        {
          name: '系列一',
          type: 'line',
          //stack: 'Total',
          smooth:true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          //单独修改当前线条的样式
          lineStyle:{
            color:"rgba(239, 73, 67, 0.3)",
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
                  color: "rgba(239, 73, 67, 0.539)"
                },
                {
                  offset: 0.8,
                  color: "rgba(239, 73, 67, 0.3)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          },
          itemStyle: {
              color: "rgba(239, 73, 67, 0.539)",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12
          },
        emphasis: {
          focus: 'series'
        },  
        data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '系列二',
          type: 'line',
          //stack: 'Total',
          smooth:true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          lineStyle:{
            color:'rgba(239, 133, 67, 0.3)',
            width:'1'
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
                  color: "rgba(239, 133, 67, 0.539)"
                },
                {
                  offset: 0.8,
                  color: "rgba(239, 133, 67, 0.3)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          },
          itemStyle: {
              color: "rgba(239, 133, 67, 0.539)",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12
          },
          emphasis: {
            focus: 'series'
          },
          data: [150, 182, 191, 234, 213, 148, 130]
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();
    })
  })();