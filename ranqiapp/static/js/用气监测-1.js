(function(){
    var myChart=echarts.init(document.querySelector(".pie1 .chart"));
    var option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      color:['#CCCCFF', '#FFF8DC'],
      legend: {
        textStyle:{
          color: "rgba(0,0,0)",
        },
        left: 'center',
        top: '8%',
        data: [
          '居民',
          '非居民'
        ]
      },
      title:[
      {
        text: "非正常计量用户组成",
        top: "80%",
        left:'center',
        textStyle: {
          color: "rgba(0, 0, 0)",
          fontSize: 18,
          fontWeight: "lighter"
        },
      }
    ],
      series: [
        {
          name: 'Radius Mode',
          type: 'pie',
          radius: [20, 40],
          center: ['50%', '50%'],
          roseType: 'radius',
          itemStyle: {
            borderRadius: 5
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
    var myChart=echarts.init(document.querySelector(".pie2 .chart"));
    var option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      color:['#FFA07A','#ADD8E6','#F0FFF0'],
      legend: {
        textStyle:{
          color: "rgba(0,0,0)",
        },
        left: 'center',
        top: '8%',
        data: [
          '0.10',
          '>50',
          '10.50'
        ]
      },
      title:[
        {
        text: "平均单耗",
        left: "center",
        top: "80%",
        textStyle: {
          color: "rgba(0, 0, 0)",
          fontSize: 18,
          fontWeight:"lighter"
        }
      },
    ],
      series: [
        {
          name: 'Area Mode',
          type: 'pie',
          radius: [20, 40],
          center: ['50%', '46%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 5
          },
          data: [
            { value: 13, name: '0.10' },
            { value: 52, name: '>50' },
            { value: 33, name: '10.50' }
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
      bottom: "15%",
      top: "35%",
      left: '7%',
      right: '14.5%',
    },
     legend: {
       data: ['第一营业所', '第二营业所', '第三营业所','浦江营业所'],
       textStyle: {
        fontSize: 10.5
      },
      top: "8%",
      itemWidth: 15,
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
          color:"rgba(0,0,0)"
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
          color:"rgba(0,0,0)",
          margin: 8
        },
        position: "right",
        name:"补收量",
        nameTextStyle: {
            color: "rgba(0, 0, 0)",
            fontSize: 10
          }
       },
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
           2.6, 5.9, 9.0, 21.2, 22.7
         ]
       },
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
    //   legend: {
    //     data: ['第一营业所', '第二营业所', '第三营业所', '浦东营业所'],
    //     textStyle: {
    //       color: "rgba(255, 255, 255)",
    //       fontSize:12
    //     },
    //     top: '5%'
    //   },
    //   toolbox: {
    //     show: true,
    //     feature: {
    //       magicType: { show: true, type: ['stack', 'tiled'] },
    //     },
    //     orient: "vertical",
    //     itemSize: 13,
    //     showTitle: false,
    //     top: '-3%',
    //     iconStyle: {
    //       color: "rgba(255,255,255,.5)",
    //       borderColor: "rgba(255,255,255,.5)"
    //     }
    //   },
      grid: {
        top:'19%',
        left: '5%',
        right: '10%',
        bottom: '30%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2017', '2018', '2019', '2020', '2021'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color:"rgba(255, 255, 255)"
        }
      },
      yAxis: {
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
          margin: 20
        },
        name:"损失率",
        nameTextStyle: {
            color: "rgba(255, 255, 255)",
            fontSize: 10
          }
      },
      series: [
        {
          color: "#CCCCFF",
          name: '第一营业所',
          type: 'line',
          stack: '1',
          data: [3, 12, 23, 12, 19],
          smooth: true
        },
        {
          color: "#FFF8DC",
          name: '第二营业所',
          type: 'line',
          stack: '2',
          data: [13, 25, 20, 14, 23],
          smooth: true
        },
        {
          color: "#FFA07A",
          name: '第三营业所',
          type: 'line',
          stack: '3',
          data: [6, 22, 15, 13, 2],
          smooth: true
        },
        {
          color: "#ADD8E6",
          name: '浦东营业所',
          type: 'line',
          stack: '4',
          data: [14, 5, 16, 25, 14],
          smooth: true
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();
    })
  })();

  (function(){
    var myChart=echarts.init(document.querySelector(".bar2 .chart"));
    var option = {
      grid: {
        bottom: "18%",
        top: "12%",
        left:'15%',
        right:'8%'
      },
     legend: {
      textStyle: {
        color: "rgba(0, 0, 0)"
      },
      top: "0%",
      left:"30%"
     },
 tooltip: {},
 dataset: {
   source: [
     ['product', '非居民', '居民'],
     ['2017', 43.3, 85.8],
     ['2018', 83.1, 73.4],
     ['2019', 86.4, 65.2],
     ['2020', 72.4, 53.9],
     ['2021', 86.4, 65.2],
     ['2022', 86.4, 65.2],
   ]
 },
 xAxis: {
    type: 'category',
    axisLine: {
     show: false
   },
   axisTick: {
     show: false
   },
   axisLabel: {
    color:"rgba(0,0,0)"
  }
    },
 yAxis: {
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
  color:"rgba(0,0,0)"
}
},
 // Declare several bar series, each will be mapped
 // to a column of dataset.source by default.
 series: [
   { color:'#CCCCFF',
      type: 'bar' }, 
 { color:'#FFF8DC',
   type: 'bar' }]
};
    myChart.setOption(option);
    window.addEventListener('resize',function(){
     myChart.resize();
    })
  })();
