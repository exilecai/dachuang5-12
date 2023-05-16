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
        bottom:'6%',
        itemWidth:28,
        itemHeight:12,
        barBorderRadius:5,
        textStyle:{
          color:"rgba(0, 0, 0)"
        }
      },
      grid:{
        top:"13%",
        left:"5%",
        right:"6%",
        bottom:"17%",
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
    var myChart=echarts.init(document.querySelector(".bar2 .chart"));
    var option = {
      grid: {
        bottom: "18%",
        top: "12%",
        left:'13%',
        right:'8%'
      },
     legend: {
      textStyle: {
        color: "rgba(0, 0, 0)"
      },
      top: "-2%",
      left:"32%"
     },
 tooltip: {},
 dataset: {
   source: [
     ['product', '放散损失', '置换损失'],
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

  (function(){
    var myChart=echarts.init(document.querySelector(".bar3 .chart"));
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
        top:'-2s%',
        itemWidth:28,
        itemHeight:12,
        barBorderRadius:5,
        textStyle:{
          color:"rgba(0, 0, 0)"
        }
      },
      grid:{
        top:"29%",
        left:"5%",
        right:"6%",
        bottom:"8%",
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
