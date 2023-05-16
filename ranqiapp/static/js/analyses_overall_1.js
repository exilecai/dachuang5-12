(function () {
    var myChart = echarts.init(document.querySelector(".pie1 .chart"));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: ["#CCCCFF", "#ffd447", "#FFA07A", "#ADD8E6", "#48a255"],
        series: [
            {
                name: 'Area Mode',
                type: 'pie',
                legend: {
                    bottom: "0%",
                    itemWidth: 10,
                    itemHeight: 10,
                    textStyle: {
                        color: "rgba(0,0,0)",
                        fontSize: "12"
                    }
                },
                radius: [10, 70],
                center: ['50%', '50%'],
                roseType: "radius",
                roseType: 'area',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    fontSize: 12
                },
                labelLine: {
                    //length:链接图形的线条 length2链接文字
                    length: 7,
                    length2: 8
                },
                data: [
                    {value: 16, name: '温压补偿', color: "#CCCCFF"},
                    {value: 18, name: '超龄表损失', color: "#ffd447"},
                    {value: 25, name: '非正常计量', color: "#FFA07A"},
                    {value: 31, name: '泄露损失', color: "#ADD8E6"},
                    {value: 8, name: '管容变化', color: "#48a255"}
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

(function () {
    var myChart = echarts.init(document.querySelector(".line1 .chart"));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '6%',
            top: '10%',
            right: '9%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['1月', '3月', '5月', '7月', '9月', '11月'],
                axisLabel: {
                    textStyle: {
                        color: "rgba(0,0,0)",
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "rgba(0,0,0)",
                    margin: 20
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '短期',
                type: 'line',
                //stack: 'Total',
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                //单独修改当前线条的样式
                lineStyle: {
                    color: "rgba(255,182,193,.3)",
                    width: "3"
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
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

(function () {
    var myChart = echarts.init(document.querySelector(".line2 .chart"));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '6%',
            top: '12%',
            right: '9%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['1月', '3月', '5月', '7月', '9月', '11月'],
                axisLabel: {
                    textStyle: {
                        color: "rgba(0,0,0)",
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "rgba(0,0,0)",
                    margin: 20
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '长期',
                type: 'line',
                //stack: 'Total',
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    color: 'rgba(255,215,0,.3)',
                    width: '3'
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
                data: [130, 182, 120, 234, 180, 150]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();