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
                y: 187,
                drilldown: 'ENERGYPLM'
            }, {
                name: 'POWERPLM',
                y: 1,
                drilldown: 'POWERPLM'
            }, {
                name: 'WINDPLM',
                y: 230,
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
                        78
                    ],
                    [
                        'QA2',
                        81
                    ]
                ]
            }, {
                name: 'POWERPLM',
                id: 'POWERPLM',
                data: [
                    [
                        'DEV1',
                        1
                    ]
                ]
            }, {
                name: 'WINDPLM',
                id: 'WINDPLM',
                data: [
                    [
                        'DEV',
                        39
                    ],
                    [
                        'NEWDEV2',
                        0
                    ],
                    [
                        'DEV3',
                        64
                    ],
                    [
                        'DEV4',
                        52
                    ],
                    [
                        'QA',
                        30
                    ],
                    [
                        'QA2',
                        30
                    ],
                    [
                        'QA3',
                        15
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