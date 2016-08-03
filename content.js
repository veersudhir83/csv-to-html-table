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
            enabled: true
        },

        series: [{
            name: 'Builds',
            colorByPoint: true,
            data: [{
                name: 'AEROPLM',
                y: 23,
                drilldown: 'AEROPLM'
            }, {
                name: 'ENERGYPLM',
                y: 201,
                drilldown: 'ENERGYPLM'
            }, {
                name: 'POWERPLM',
                y: 21,
                drilldown: 'POWERPLM'
            }, {
                name: 'WINDPLM',
                y: 312,
                drilldown: 'WINDPLM'
            }, {
                name: 'NuclearPLM',
                y: 4,
                drilldown: 'NuclearPLM'
            }]
        }],
        drilldown: {
            series: [{
                name: 'AEROPLM',
                id: 'AEROPLM',
                data: [
                    [
                        'DEV',
                        13
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
                        86
                    ],
                    [
                        'QA2',
                        87
                    ]
                ]
            }, {
                name: 'POWERPLM',
                id: 'POWERPLM',
                data: [
                    [
                        'DEV1',
                        13
                    ],
                    [
                        'DEV2',
                        8
                    ]
                ]
            }, {
                name: 'WINDPLM',
                id: 'WINDPLM',
                data: [
                    [
                        'DEV',
                        49
                    ],
                    [
                        'NEWDEV2',
                        0
                    ],
                    [
                        'DEV3',
                        84
                    ],
                    [
                        'DEV4',
                        78
                    ],
                    [
                        'QA',
                        35
                    ],
                    [
                        'QA2',
                        38
                    ],
                    [
                        'QA3',
                        28
                    ]
                ]
            }, {
                name: 'NuclearPLM',
                id: 'NuclearPLM',
                data: [
                    [
                        'DEV16',
                        4
                    ]
                ]
            }]
        }
    });
});