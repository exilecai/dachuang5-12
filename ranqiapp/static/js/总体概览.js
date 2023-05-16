
//柱形图2
(function(){
    var myColor=["#40E0D0","#6495ED","#1E90FF","#7FFFD4","#00FF7F"];
    //1/实例化对象 2.指定配置和数据 3.把配置给实例对象
    var myChart=echarts.init(document.
        querySelector(" .bar2 .chart"));
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
          color: "rgba(0,0,0, 0.6)",
          fontSize:12
        },
        left:'17%',
        top:'2%',
        width:'80%%'
      },
      grid: {
        left: '0%',
        right: '4%',
        bottom: '3%',
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
          color:"rgba(0,0,0, 0.6)"
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
          color:"rgba(0,0,0, 0.6)",
          margin: 20
        }
      },
      series: [
        {
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

//折线图2
(function(){
  var myChart=echarts.init(document.querySelector(".line2 .chart"));
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top:"2%",
      data: ['系列一', '系列二'],
      textStyle: {
        color: "rgba(0,0,0, 0.6)",
        fontSize:12
      },
    },
    grid: {
      left: '0',
      top:'30',
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
            color:"rgba(0,0,0, 0.6)",
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
          color:"rgba(0,0,0, 0.6)",
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
        name: '系列一',
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
                color: "rgba(255,182,193,.3)"
              },
              {
                offset: 0.8,
                color: "rgba(255,182,193,.3)"
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
          color:'rgba(255,215,0,.3)',
          width:'3'
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
                color: "rgba(255,215,0,.3)"
              },
              {
                offset: 0.8,
                color: "rgba(255,215,0,.3)"
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        itemStyle: {
            color: "#FFFF99",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
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
    legend: {
      data: ['购量', '销量', '购销差率'],
      top:'4%',
      textStyle: {
        color: "rgba(0,0,0, 0.6)",
        fontSize:12
      }
    },
    grid: {
      height: "56%"
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
          color:"rgba(0,0,0, 0.6)",
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
          color:"rgba(156, 152, 152, 0.6)",
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

 //饼状图2
 (function(){
     var myChart=echarts.init(document.querySelector(".pie2 .chart2 .tab"));
     var option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      color:["#CCCCFF","#FFF8DC","#FFA07A","#ADD8E6","#F0FFF0"],
      series: [
        {
          name: 'Area Mode',
          type: 'pie',
          legend:{
            bottom:"0%",
            itemWidth:10,
            itemHeight:10,
            textStyle:{
              color:"rgba(0,0,0,0.6)",
              fontSize:"12"
            }
          },
          grid:{
            left:'0%'
          },
          radius: [10, 60],
          center: ['50%', '50%'],
          roseType:"radius",
         // roseType: 'area',
          itemStyle: {
            borderRadius: 5
          },
          label:{
            fontSize:10
          },
          labelLine:{
            //length:链接图形的线条 length2链接文字
            length:7,
            length2:8
          },
          data: [
            { value: 16, name: '温压补偿' ,color:"#CCCCFF"},
            { value: 18, name: '超龄表损失',color:"#FFF8DC" },
            { value: 25, name: '非正常计量',color: "#FFA07A"},
            { value: 31, name: '泄露损失' ,color:"#ADD8E6"},
            { value: 8, name: '管容变化' ,color:"#F0FFF0"}
          ]
        }
      ]
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