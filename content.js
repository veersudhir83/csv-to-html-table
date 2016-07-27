$(function () {
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'PLM Build Metrics'
        },
        subtitle: {
            text: 'Click the columns to view count of builds for each environment'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'No:of Builds'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                }
            }
        },

        tooltip: {
            enabled: false
        },

        series: [{
            name: 'Builds',
            colorByPoint: true,
            data: [{
                name: 'AEROPLM',
                y: 22,
                drilldown: 'AEROPLM'
            }, {
                name: 'ENERGYPLM',
                y: 194,
                drilldown: 'ENERGYPLM'
            }, {
                name: 'POWERPLM',
                y: 6,
                drilldown: 'POWERPLM'
            }, {
                name: 'WINDPLM',
                y: 263,
                drilldown: 'WINDPLM'
            }]
        }],
        drilldown: {
            series: [{
                name: 'AEROPLM',
                id: 'AEROPLM',
                data: [
                    [
                        'DEV',
                        12
                    ],
                    [
                        'DEV2',
                        4
                    ],
                    [
                        'QA',
                        6
                    ],
                    [
                        'QA2',
                        0
                    ]
                ]
            }, {
                name: 'ENERGYPLM',
                id: 'ENERGYPLM',
                data: [
                    [
                        'DEV1',
                        10
                    ],
                    [
                        'DEV2',
                        18
                    ],
                    [
                        'QA1',
                        84
                    ],
                    [
                        'QA2',
                        82
                    ]
                ]
            }, {
                name: 'POWERPLM',
                id: 'POWERPLM',
                data: [
                    [
                        'DEV1',
                        6
                    ]
                ]
            }, {
                name: 'WINDPLM',
                id: 'WINDPLM',
                data: [
                    [
                        'DEV',
                        41
                    ],
                    [
                        'NEWDEV2',
                        0
                    ],
                    [
                        'DEV3',
                        75
                    ],
                    [
                        'DEV4',
                        61
                    ],
                    [
                        'QA',
                        30
                    ],
                    [
                        'QA2',
                        33
                    ],
                    [
                        'QA3',
                        23
                    ],
                    [
                        'QA4',
                        0
                    ]
                ]
            }]
        }
    });
});