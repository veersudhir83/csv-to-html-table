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
                y: 196,
                drilldown: 'ENERGYPLM'
            }, {
                name: 'POWERPLM',
                y: 13,
                drilldown: 'POWERPLM'
            }, {
                name: 'WINDPLM',
                y: 279,
                drilldown: 'WINDPLM'
            }, {
                name: 'NuclearPLM',
                y: 1,
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
                        86
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
                        9
                    ],
                    [
                        'DEV2',
                        4
                    ]
                ]
            }, {
                name: 'WINDPLM',
                id: 'WINDPLM',
                data: [
                    [
                        'DEV',
                        44
                    ],
                    [
                        'NEWDEV2',
                        0
                    ],
                    [
                        'DEV3',
                        77
                    ],
                    [
                        'DEV4',
                        67
                    ],
                    [
                        'QA',
                        31
                    ],
                    [
                        'QA2',
                        34
                    ],
                    [
                        'QA3',
                        26
                    ]
                ]
            }, {
                name: 'NuclearPLM',
                id: 'NuclearPLM',
                data: [
                    [
                        'DEV16',
                        1
                    ]
                ]
            }]
        }
    });
});