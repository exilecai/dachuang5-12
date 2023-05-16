//柱形图2
(function(){
  var myChart=echarts.init(document.querySelector(".bar2 .chart"));
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top:"3%",
      right:'3%',
      textStyle:{
        color:"rgba(0,0,0, 0.6)",
        fontSize:"12"
      }
    },
    grid: {
      left: '0' ,
      top:'20',
      right: ' -2%',
      bottom: '0',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['2017','2018','2019','2020','2021','2022'],
        axisLabel:{
          textStyle:{
            color:"rgba(0,0,0, 0.6)",
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
          color:"rgba(0,0,0, 0.6)",
          margin: -8
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

//折线图1
(function(){
  var myChart=echarts.init(document.querySelector(".line .chart"));
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    color:['#CCCCFF', '#FFF8DC', '#FFA07A','#ADD8E6','#F0FFF0'],
    legend: {
      textStyle:{
        color: "rgba(0,0,0, 0.6)",
      },
      left: 'center',
      top: '5%',
      data: [
        '居民',
        '非居民',
        '0.10',
        '>50',
        '10.50'
      ]
    },
    title:[
      {
      text: "平均单耗",
      left: "67%",
      top: "85%",
      textStyle: {
        color: "rgba(156, 152, 152, 0.95)",
        fontSize: 12
      }
    },
    {
      text: "用户组成",
      left: "16%",
      top: "85%",
      textStyle: {
        color: "rgba(156, 152, 152, 0.95)",
        fontSize: 12
      }
    }
  ],
    series: [
      {
        name: 'Radius Mode',
        type: 'pie',
        radius: [10, 30],
        center: ['25%', '50%'],
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
      },
      {
        name: 'Area Mode',
        type: 'pie',
        radius: [10, 36],
        center: ['75%', '50%'],
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


//折线图2
(function(){
  var myChart=echarts.init(document.querySelector(".line2 .chart"));
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['第一营业所', '第二营业所', '第三营业所', '浦东营业所'],
      textStyle: {
        color: "rgba(0,0,0, 0.6)",
        fontSize:12
      },
      top: '5%'
    },
    toolbox: {
      show: true,
      feature: {
        magicType: { show: true, type: ['stack', 'tiled'] },
      },
      orient: "vertical",
      itemSize: 13,
      showTitle: false,
      top: '-3%',
      iconStyle: {
        color: "rgba(255,255,255,.5)",
        borderColor: "rgba(255,255,255,.5)"
      }
    },
    grid: {
      left: '0%',
      right: '5%',
      bottom: '0%',
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
        color:"rgba(0,0,0, 0.6)"
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
        color:"rgba(0,0,0, 0.6)",
        margin: 20
      }
    },
    series: [
      {
        color: "#CCCCFF",
        name: '第一营业所',
        type: 'line',
        stack: 'Total',
        data: [57, 89, 58, 48, 67]
      },
      {
        color: "#FFF8DC",
        name: '第二营业所',
        type: 'line',
        stack: 'Total',
        data: [45, 67, 87, 36, 68]
      },
      {
        color: "#FFA07A",
        name: '第三营业所',
        type: 'line',
        stack: 'Total',
        data: [87, 76, 46, 38, 49]
      },
      {
        color: "#ADD8E6",
        name: '浦东营业所',
        type: 'line',
        stack: 'Total',
        data: [37, 87, 78, 45, 65]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  })
})();

//饼状图1
(function(){
  var myChart=echarts.init(document.querySelector(".pie .chart"));
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
    bottom: "10%",
    top: "22%",
    left: '7%',
    right: '6%',
  },
   legend: {
     data: ['第一营业所', '第二营业所', '第三营业所','浦江营业所'],
     textStyle: {
      color: "rgba(0,0,0, 0.6)"
    },
    top: "1.5%"
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
        color:"rgba(0,0,0, 0.6)"
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
        color:"rgba(0,0,0, 0.6)",
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
        color:"rgba(0,0,0,0.6)"
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
       name: '1',
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
       name: '2',
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
       name: '3',
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
       name: '4',
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

//饼状图2
(function(){
    var myChart=echarts.init(document.querySelector(".pie2 .chart2 .tab"));
    var option = {
      grid: {
        bottom: "10%",
        top: "14%",
        left:'12%'
      },
     legend: {
      textStyle: {
        color: "rgba(0, 0, 0, 0.6)"
      },
      top: "5%"
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
    color:"rgba(0,0,0, 0.6)"
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
  color:"rgba(0,0,0, 0.6)"
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
  
//地图
(function(){
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var option = {
    tooltip : {  
        trigger: 'none',
        backgroundColor:'rgba(255,255,255,0)',
        formatter:function(params){
            var result = params;
            result  = `<div style='width: 120px;
                                   font-size:12px;
                                   box-shadow:0 4px 12px rgba(0,0,0,.2);
                                   color:#000;
                                   background: #fff;
                                   border-radius: 4px;
                                   z-index: 9;'>
                <div style='padding:8px 10px;
                border-bottom:1px solid #eee;'>${result.name}
                </div>
                <div style='padding:8px 10px;
                color:#808492;'>
                <i style='display:inline-block;
                width:6px;
                height:6px;
                background:#396fff;
                border-radius:50%; 
                    margin-right:5px; '></i>${result.seriesName}  ${result.value}</div>
            </div>`;
            if(params.value>0){
                return result
            }else{
                return
            }
            
        }
    },  
    visualMap: {  
        min: 1,
        max: 800,
        itemWidth:10,
        itemHeight:60,
        borderColor:'#fff',
        hoverLink:false,
        show:false,
        orient: 'horizontal',
        inverse:true,
        calculable: false,
        realtime: false,
        inRange: {
            color: ['#eaefff','#4979fe']
        }
    },
    //配置属性
    series: [{  
        name: '数据',  
        type: 'map',  
        mapType: 'china',   
        roam: false,  
        zoom: 1.2,
        itemStyle:{
            normal:{
                label:{show:false},
                borderColor:'#fff',
                borderWidth:1,
                borderType:'solid',
            },
            emphasis:{label:{show:false},
            areaColor:'#396fff'}
        },
        data:[  
            {name: '北京',value: 100 },{name: '天津',value: 352 },  
            {name: '上海',value: 521 },{name: '重庆',value: 252 },  
            {name: '河北',value: 12 },{name: '河南',value: 152 },  
            {name: '云南',value: 452 },{name: '辽宁',value: 252 },  
            {name: '黑龙江',value: 0 },{name: '湖南',value: 222 },  
            {name: '安徽',value: 52 },{name: '山东',value: 32 },  
            {name: '新疆',value: 0 },{name: '江苏',value: 60 },  
            {name: '浙江',value: 600 },{name: '江西',value: 599 },  
            {name: '湖北',value: 400 },{name: '广西',value: 335 },  
            {name: '甘肃',value: 400 },{name: '山西',value: 542 },  
            {name: '内蒙古',value: 0 },{name: '陕西',value: 235 },  
            {name: '吉林',value: 351 },{name: '福建',value: 111 },  
            {name: '贵州',value: 420 },{name: '广东',value: 120 },  
            {name: '青海',value: 456 },{name: '西藏',value: 130 },  
            {name: '四川',value: 123 },{name: '宁夏',value: 140 },  
            {name: '海南',value: 452 },{name: '台湾',value: 150 },  
            {name: '香港',value: 543 },{name: '澳门',value: 200 }  
        ]
    }]  
};
myChart.setOption(option);
})();