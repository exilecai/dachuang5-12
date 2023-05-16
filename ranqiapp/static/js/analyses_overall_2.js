(function(){
    var myColor=["#40E0D0","#6495ED","#1E90FF","#7FFFD4","#00FF7F"];
    //1/实例化对象 2.指定配置和数据 3.把配置给实例对象
    var myChart=echarts.init(document.
        querySelector(" .bar1 .chart"));
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {
        textStyle: {
          color: "rgba(0,0,0)",
          fontSize:11
        },
        left:'3%',
        top:'8%',
        itemWidth: 4,
        itemHeight: 4
      },
      grid: {
        left: '6%',
        right: '12%',
        bottom: '8%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color:"rgba(0,0,0)"
        },
        splitLine:{
          show:false
        },
      },
      yAxis: {
        type: 'category',
        data: ['第一营业所', '第二营业所', '第三营业所', '浦江营业所'],
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
          margin: 10
        }
      },
      series: [
        {
            barWidth: "50%",
          color:"#CCCCFF",
          name: '泄露损失',
          type: 'bar',
          stack: 'total',
          // label: {
          //   show: true
          // },
          emphasis: {
            focus: 'series'
          },
          data: [320, 302, 301, 334]
        },
        {
          color:"#FFF8DC",
          name: '管容变化',
          type: 'bar',
          stack: 'total',
          // label: {
          //   show: true
          // },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134]
        },
        {
          color:"#FFA07A",
          name: '非正常计量',
          type: 'bar',
          stack: 'total',
          // label: {
          //   show: true
          // },
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234]
        },
        {
          color:"#ADD8E6",
          name: '超龄表损失',
          type: 'bar',
          stack: 'total',
          // label: {
          //   show: true
          // },
          emphasis: {
            focus: 'series'
          },
          data: [150, 212, 201, 154]
        },
        {
          color:"#F0FFF0",
          name: '温压补偿',
          type: 'bar',
          stack: 'total',
          // label: {
          //   show: true
          // },
          emphasis: {
            focus: 'series'
          },
          data: [820, 832, 901, 934]
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
     tooltip: {
       trigger: 'axis',
       axisPointer: {
         type: 'cross',
         crossStyle: {
           color: '#999'
         }
       }
     },
     legend: {
       data: ['购量', '销量', '购销差率'],
       top:'-1%',
       textStyle: {
         color: "rgba(0,0,0)",
         fontSize:12
       }
     },
     grid: {
        left: '17%',
        right: '17%',
        bottom: '17%',
        top:'18%'
     },
     xAxis: [
       {
         type: 'category',
         data: ['2017', '2018', '2019', '2020', '2021', '2022'],
         axisPointer: {
           type: 'shadow'
         },
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
         splitLine: {
           show: false
         }
       }
     ],
     yAxis: [
       {
         type: 'value',
         min: 0,
         max: 80,
         interval: 20,
         splitLine: {
           show: false
         },
         axisTick:{
           show:false
         },
         axisLabel:{
           color:"rgba(0,0,0)",
           // margin: -8,
           formatter: '{value} ml',
           left:'0%'
         },
         axisLine:{
           show:false
         }
       },
       {
         type: 'value',
         min: 0,
         max: 25,
         interval: 5,
         splitLine: {
           show: false
         },
         axisTick:{
           show:false
         },
         axisLabel:{
           color:"rgba(0,0,0)",
           // margin: -8,
           formatter: '{value} ml'
         },
         axisLine:{
           show:false
         }
       }
     ],
     series: [
       {
         color:"#CCCCFF",
         name: '购量',
         type: 'bar',
         tooltip: {
           valueFormatter: function (value) {
             return value + ' ml';
           }
         },
         data: [
           2.0, 4.9, 7.0, 23.2, 25.6, 76.7
         ]
       },
       {
         color:"#FFF8DC",
         name: '销量',
         type: 'bar',
         tooltip: {
           valueFormatter: function (value) {
             return value + ' ml';
           }
         },
         data: [
           2.6, 5.9, 9.0, 26.4, 28.7, 70.7
         ]
       },
       {
         color:"#FFA07A",
         name: '购销差率',
         type: 'line',
         yAxisIndex: 1,
         tooltip: {
           valueFormatter: function (value) {
             return value + ' %';
           }
         },
         data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2]
       }
     ]
   };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    })
  })();