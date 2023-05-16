//折线图加柱形图2
(function(){
    var myChart=echarts.init(document.querySelector(".line .chart"));
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
        top:'0',
        itemWidth:15,
        itemHeight:10,
        barBorderRadius:5,
        textStyle:{
          color:"rgba(0,0,0, 0.6)"
        }
      },
      grid:{
        top:"19%",
        left:"0%",
        right:"10",
        bottom:"0",
        containLabel:true
      },
      xAxis: [
        {
          type: 'category',
          data: ['2016','2017','2018','2019','2020','2021','2022'],
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
              color:"rgba(0,0,0, 0.6)"
            }
          },
          
        }
      ],
      yAxis: [
        {
          type: 'value',
          max:30,
          axisLabel: {
            color:"rgba(0,0,0, 0.6)"
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
        },
        {
          type: 'value',
          axisLabel: {
            color:"rgba(0,0,0, 0.6)"
          },
          axisLine:{
            show:false
          },
          axisTick:{
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
          data: ['5','7','10','12','14','16','18']
        },
        {
          color: "#FFF8DC",
          name: '第二营业所',
          type: 'bar',
          data: ['3','10','8','14','9','20','15']
        },
        {
          color: "#FFA07A",
          name:'第三营业所',
          type:'bar',
          data: ['7','5','10','11','17','12','20']
        },
        {
          color: "#ADD8E6",
          name:'第四营业所',
          type:'bar',
          data: ['5','5','10','8','16','9','26']
        },
        {
          color: "#FFA07A",
          name: '总体',
          type: 'line',
          yAxisIndex: 1,
          data: ['20','25','35','40','45','60','80']
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();
    })
  })();
  
  //柱状图3
    (function(){
        //1.实例化对象
        var myChart=echarts.init(document.
            querySelector(" .pie .chart2 .tab"));
        //2.指定配置项和数据
        var option = {
            // tooltip: {
            //   trigger: 'item',
            //   formatter: '{a} <br/>{b} : {c} ({d}%)'
            // },
            color:['#2225db4b', '#FFF8DC', '#FFA07A','#ADD8E6'],
            grid:{
                left:'0%',
                right:'20',
                top:'10',
                bottom:'10'
            },
            series: [
              {
                name: 'Area Mode',
                type: 'pie',
                radius: [0, 35],
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
  
  //柱状图4
  (function(){
    var myChart=echarts.init(document.querySelector(".bar2 .chart"));
    var option = {
        grid:{
            top:'20',
            bottom:'20',
            left:'10',
            right:'10',
            containLabel:'true'
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
        },
        xAxis: {
          type: 'value',
        axisLabel:{
            show:false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        splitLine:{
            show:false
        },
    },
        yAxis: {
          type: 'category',
          data: ['工程数量','放散气量'],
        axisTick: {
            show: false,
            inverse:true
        },
        axisLine: {
            show: false,
        },
        axisLabel:{
            color:"rgba(0,0,0, 0.6)",
            fontSize:14
        },
        },
        series: [
          {
            data: [100,50],
            type: 'bar',
            color:"#ADD8E6",
            barWidth:25,
          },
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();
    })
  })();
  
  //柱状图加折线图5
  (function(){
    var myChart=echarts.init(document.querySelector(".line2 .chart"));
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
        top:'0',
        itemWidth:15,
        itemHeight:10,
        barBorderRadius:5,
        textStyle:{
          color:"rgba(0,0,0, 0.6)"
        }
      },
      grid:{
        top:"20%",
        left:"0%",
        right:"10",
        bottom:"0",
        containLabel:true
      },
      xAxis: [
        {
          type: 'category',
          data: ['2016','2017','2018','2019','2020','2021','2022'],
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
              color:"rgba(0,0,0, 0.6)"
            }
          },
          
        }
      ],
      yAxis: [
        {
          type: 'value',
          max:30,
          axisLabel: {
            color:"rgba(0,0,0, 0.6)"
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
        },
        {
          type: 'value',
          axisLabel: {
            color:"rgba(0,0,0, 0.6)"
          },
          axisTick:{
            show:false
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
          color:'#CCCCFF',
          name: '第一营业所',
          type: 'bar',
          data: ['5','7','10','12','14','16','18']
        },
        {
          color:'#FFF8DC',
          name: '第二营业所',
          type: 'bar',
          data: ['3','10','8','14','9','20','15']
        },
        {
          color:'#FFA07A',
          name:'第三营业所',
          type:'bar',
          data: ['7','5','10','11','17','12','20']
        },
        {
          color:'#ADD8E6',
          name:'第四营业所',
          type:'bar',
          data: ['5','5','10','8','16','9','26']
        },
        {
          color:'#FFA07A',
          name: '总体',
          type: 'line',
          yAxisIndex: 1,
          data: ['20','25','35','40','45','60','80']
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();
    })
  })();
  
  
   //折线图6
   (function(){
    var myChart=echarts.init(document.querySelector(".pie2 .chart"));
    var option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        top:"0%",
        left:'12%',
        textStyle:{
          color:"rgba(0,0,0, 0.6)",
          fontSize:"12"
        }
      },
      grid: {
        left: '0%',
        top:'20',
        right: ' 0%',
        bottom: '0',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['2016','2017','2018','2019','2020','2021','2022'],
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
            margin:5
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