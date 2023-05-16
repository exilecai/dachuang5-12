(function(){
    var myChart=echarts.init(document.querySelector(".line1 .chart"));
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
        top:'8%',
        itemWidth:15,
        itemHeight:10,
        barBorderRadius:5,
        textStyle:{
          color:"rgba(0,0,0)"
        }
      },
      grid:{
        top:"19%",
        left:"7.3%",
        right:"8%",
        bottom:"8%",
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
              color:"rgba(0,0,0)"
            }
          },
          
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            color:"rgba(0,0,0)"
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
            color:"rgba(0,0,0)"
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
        top:'8%',
        itemWidth:15,
        itemHeight:10,
        barBorderRadius:5,
        textStyle:{
          color:"rgba(0,0,0)"
        }
      },
      grid:{
        top:"19%",
        left:"7.3%",
        right:"8%",
        bottom:"8%",
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
              color:"rgba(0,0,0)"
            }
          },
          
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            color:"rgba(0,0,0)"
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
            color:"rgba(0,0,0)"
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

  (function(){
    var myChart=echarts.init(document.querySelector(".bar1 .chart"));
    var option = {
        grid:{
            top:'5%',
            bottom:'8%',
            left:'6%',
            right:'8%',
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
            color:"rgba(0,0,0)",
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