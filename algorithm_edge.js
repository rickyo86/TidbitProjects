/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'federant, sans-serif': '<script src=\"http://use.edgefonts.net/federant:n4:all.js\"></script>',
            'gruppo, sans-serif': '<script src=\"http://use.edgefonts.net/gruppo:n4:all.js\"></script>',
            'carter-one, sans-serif': '<script src=\"http://use.edgefonts.net/carter-one:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "vertical",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'grid',
                            type: 'image',
                            rect: ['0', '0', '1366px', '1122px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"grid.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['79px', '342px', '285px', '29px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.6392)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '130px', '883px', '82px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.64)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'algorithm',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1366px', '1122px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px']
                        },
                        {
                            id: 'algorithmBottom',
                            type: 'image',
                            rect: ['0', '0', '1366px', '1122px', 'auto', 'auto'],
                            clip: 'rect(757.627197265625px 1010.0673828125px 1122px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px']
                        },
                        {
                            id: 'gif',
                            type: 'image',
                            rect: ['249px', '112px', '72px', '101px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"algorithm.gif",'0px','0px']
                        },
                        {
                            id: 'algorithmLeft',
                            type: 'image',
                            rect: ['0', '0px', '1366px', '1122px', 'auto', 'auto'],
                            clip: 'rect(124.3994140625px 611.76220703125px 762.677978515625px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px']
                        },
                        {
                            id: 'parts',
                            type: 'image',
                            rect: ['0', '0', '1366px', '1122px', 'auto', 'auto'],
                            clip: 'rect(161.0390625px 1366px 1122px 1012.5px)',
                            fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px']
                        },
                        {
                            id: 'ArmGroupL',
                            type: 'group',
                            rect: ['661px', '-277px', '1366', '1143', 'auto', 'auto'],
                            clip: 'rect(699.413330078125px 99.1435546875px 858.249267578125px 54.25146484375px)',
                            transform: [[],[],[],[],['4.9488%','61.5365%']],
                            c: [
                            {
                                id: 'LowerArmL',
                                type: 'image',
                                rect: ['-1228px', '0px', '1366px', '1122px', 'auto', 'auto'],
                                clip: 'rect(773.087158203125px 1310.578125px 855.73486328125px 1270.33154296875px)',
                                fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px'],
                                transform: [[],['-18'],[],['-1'],['94.9674%','70.1963%']]
                            },
                            {
                                id: 'ArmL',
                                type: 'image',
                                rect: ['-1214px', '21px', '1366px', '1122px', 'auto', 'auto'],
                                clip: 'rect(680.316162109375px 1310.578125px 768.98779296875px 1270.33154296875px)',
                                fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px'],
                                transform: [[],[],[],['-1'],['94.4596%','64.5836%']]
                            }]
                        },
                        {
                            id: 'ArmGroupR',
                            type: 'group',
                            rect: ['661px', '-277px', '1366', '1143', 'auto', 'auto'],
                            clip: 'rect(699.413330078125px 99.1435546875px 858.249267578125px 54.25146484375px)',
                            transform: [[],['-44'],[],[],['4.9488%','61.5365%']],
                            c: [
                            {
                                id: 'LowerArmR',
                                type: 'image',
                                rect: ['-1228px', '0px', '1366px', '1122px', 'auto', 'auto'],
                                clip: 'rect(773.087158203125px 1310.578125px 855.73486328125px 1270.33154296875px)',
                                fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px'],
                                transform: [[],['-18'],[],['-1'],['94.9674%','70.1963%']]
                            },
                            {
                                id: 'ArmR',
                                type: 'image',
                                rect: ['-1214px', '21px', '1366px', '1122px', 'auto', 'auto'],
                                clip: 'rect(680.316162109375px 1310.578125px 768.98779296875px 1270.33154296875px)',
                                fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px'],
                                transform: [[],[],[],['-1'],['94.4596%','64.5836%']]
                            }]
                        },
                        {
                            id: 'LegGroupL',
                            type: 'group',
                            rect: ['-456', '-376', '1473', '1150', 'auto', 'auto'],
                            clip: 'rect(892.1875px 1237.0625px 1150px 1066.6700439453125px)',
                            transform: [[],['-41'],[],[],['80.4692%','78.701%']],
                            c: [
                            {
                                id: 'LowerLegGroupL',
                                type: 'group',
                                rect: ['19', '0', '1829', '1835', 'auto', 'auto'],
                                clip: 'rect(994.1254272460938px 1222.774658203125px 1151.2935791015625px 1139.8807373046875px)',
                                transform: [[],['40'],[],[],['63.9428%','55.1931%']],
                                c: [
                                {
                                    id: 'footL',
                                    type: 'image',
                                    rect: ['-19px', '29px', '1366px', '1122px', 'auto', 'auto'],
                                    clip: 'rect(1062.73388671875px 1237.18603515625px 1113.525390625px 1161.65283203125px)',
                                    fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px'],
                                    transform: [[],[],[],[],['86.5593%','95.0527%']]
                                },
                                {
                                    id: 'legL',
                                    type: 'image',
                                    rect: ['88px', '0px', '1366px', '1122px', 'auto', 'auto'],
                                    clip: 'rect(996.63232421875px 1098.203125px 1101.6611328125px 1061.65234375px)',
                                    fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px'],
                                    transform: [[],[],[],[],['79.0538%','80.5258%']]
                                }]
                            },
                            {
                                id: 'thighL',
                                type: 'image',
                                rect: ['107px', '22px', '1366px', '1122px', 'auto', 'auto'],
                                clip: 'rect(872.90380859375px 1120.23681640625px 998.27099609375px 1054.8720703125px)',
                                fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px'],
                                transform: [[],[],[],[],['78.8595%','78.3498%']]
                            }]
                        },
                        {
                            id: 'LegGroupR',
                            type: 'group',
                            rect: ['-456', '-376', '1473', '1150', 'auto', 'auto'],
                            clip: 'rect(892.1875px 1237.0625px 1150px 1009.296875px)',
                            transform: [[],['48'],[],[],['80.4692%','78.701%']],
                            c: [
                            {
                                id: 'LowerLegGroupR',
                                type: 'group',
                                rect: ['0', '7', '1540', '1225', 'auto', 'auto'],
                                clip: 'rect(988.7124633789063px 1245.1976318359375px 1143.200439453125px 1161.2843017578125px)',
                                transform: [[],[],[],[],['77.1304%','81.9887%']],
                                c: [
                                {
                                    id: 'footR',
                                    type: 'image',
                                    rect: ['0px', '21px', '1366px', '1122px', 'auto', 'auto'],
                                    clip: 'rect(1062.73388671875px 1237.18603515625px 1113.525390625px 1161.65283203125px)',
                                    fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px'],
                                    transform: [[],[],[],[],['86.5897%','95.1331%']]
                                },
                                {
                                    id: 'legR',
                                    type: 'image',
                                    rect: ['107px', '-7px', '1366px', '1122px', 'auto', 'auto'],
                                    clip: 'rect(996.63232421875px 1098.203125px 1101.6611328125px 1061.65234375px)',
                                    fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px'],
                                    transform: [[],[],[],[],['79.0538%','80.5258%']]
                                }]
                            },
                            {
                                id: 'thighR',
                                type: 'image',
                                rect: ['107px', '22px', '1366px', '1122px', 'auto', 'auto'],
                                clip: 'rect(872.90380859375px 1120.23681640625px 998.27099609375px 1054.8720703125px)',
                                fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px'],
                                transform: [[],[],[],[],['78.8595%','78.3498%']]
                            }]
                        },
                        {
                            id: 'neckscrew',
                            type: 'image',
                            rect: ['-554px', '-215px', '1366px', '1122px', 'auto', 'auto'],
                            clip: 'rect(589.8525390625px 1298.20361328125px 635.559326171875px 1265.04248046875px)',
                            fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px']
                        },
                        {
                            id: 'backfin',
                            type: 'image',
                            rect: ['-622px', '-87px', '1366px', '1122px', 'auto', 'auto'],
                            clip: 'rect(505.10693359375px 1357.52587890625px 586.40673828125px 1190.4658203125px)',
                            fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px'],
                            transform: [[],['-90'],[],[],['93.252%','48.5893%']]
                        },
                        {
                            id: 'core',
                            type: 'image',
                            rect: ['auto', 'auto', '1366px', '1122px', '436px', '-67px'],
                            clip: 'rect(328.3466796875px 1206.384765625px 485.4609375px 1095.19140625px)',
                            fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px'],
                            transform: [[],[],[],['-1'],['85.2517%','30.0356%']]
                        },
                        {
                            id: 'head',
                            type: 'image',
                            rect: ['auto', 'auto', '1366px', '1122px', '499px', '-81px'],
                            clip: 'rect(175.9130859375px 1335.427734375px 307.41650390625px 1176.4052734375px)',
                            borderRadius: ["0px", "0px", "0px", "0px"],
                            fill: ["rgba(0,0,0,0)",im+"algorithm.png",'0px','0px'],
                            transform: [[],[],[],['-0.99891'],['91.9891%','29.0807%']]
                        },
                        {
                            id: 'Echo',
                            type: 'text',
                            rect: ['779px', '216px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Echo",
                            font: ['carter-one, sans-serif', [2.5, "em"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1366px', '1122px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(46,224,218,1)",[50,50,true,'farthest-corner',[['rgba(72,243,255,1.00)',0],['rgba(123,222,212,1.00)',50],['rgba(255,255,255,1.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid371",
                            "top",
                            127,
                            123,
                            "linear",
                            "${backfin}",
                            '-87px',
                            '-97px'
                        ],
                        [
                            "eid372",
                            "top",
                            250,
                            126,
                            "linear",
                            "${backfin}",
                            '-97px',
                            '-87px'
                        ],
                        [
                            "eid422",
                            "top",
                            627,
                            123,
                            "linear",
                            "${backfin}",
                            '-87px',
                            '-97px'
                        ],
                        [
                            "eid423",
                            "top",
                            750,
                            126,
                            "linear",
                            "${backfin}",
                            '-97px',
                            '-87px'
                        ],
                        [
                            "eid299",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${ArmGroupL}",
                            '0deg',
                            '-44deg'
                        ],
                        [
                            "eid300",
                            "rotateZ",
                            500,
                            500,
                            "linear",
                            "${ArmGroupL}",
                            '-44deg',
                            '0deg'
                        ],
                        [
                            "eid54",
                            "right",
                            0,
                            0,
                            "linear",
                            "${head}",
                            '499px',
                            '499px'
                        ],
                        [
                            "eid301",
                            "right",
                            127,
                            0,
                            "linear",
                            "${head}",
                            '499px',
                            '499px'
                        ],
                        [
                            "eid317",
                            "right",
                            250,
                            0,
                            "linear",
                            "${head}",
                            '499px',
                            '499px'
                        ],
                        [
                            "eid373",
                            "right",
                            325,
                            0,
                            "linear",
                            "${head}",
                            '499px',
                            '499px'
                        ],
                        [
                            "eid311",
                            "right",
                            376,
                            0,
                            "linear",
                            "${head}",
                            '499px',
                            '499px'
                        ],
                        [
                            "eid398",
                            "right",
                            628,
                            0,
                            "linear",
                            "${head}",
                            '499px',
                            '499px'
                        ],
                        [
                            "eid399",
                            "right",
                            751,
                            0,
                            "linear",
                            "${head}",
                            '499px',
                            '499px'
                        ],
                        [
                            "eid400",
                            "right",
                            826,
                            0,
                            "linear",
                            "${head}",
                            '499px',
                            '499px'
                        ],
                        [
                            "eid401",
                            "right",
                            877,
                            0,
                            "linear",
                            "${head}",
                            '499px',
                            '499px'
                        ],
                        [
                            "eid37",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${head}",
                            '-0.99891',
                            '-0.99891'
                        ],
                        [
                            "eid47",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${core}",
                            '-1',
                            '-1'
                        ],
                        [
                            "eid55",
                            "bottom",
                            0,
                            0,
                            "linear",
                            "${head}",
                            '-81px',
                            '-81px'
                        ],
                        [
                            "eid369",
                            "bottom",
                            127,
                            123,
                            "linear",
                            "${head}",
                            '-81px',
                            '-71px'
                        ],
                        [
                            "eid370",
                            "bottom",
                            250,
                            75,
                            "linear",
                            "${head}",
                            '-71px',
                            '-74px'
                        ],
                        [
                            "eid374",
                            "bottom",
                            325,
                            51,
                            "linear",
                            "${head}",
                            '-74px',
                            '-81px'
                        ],
                        [
                            "eid395",
                            "bottom",
                            628,
                            123,
                            "linear",
                            "${head}",
                            '-81px',
                            '-71px'
                        ],
                        [
                            "eid396",
                            "bottom",
                            751,
                            75,
                            "linear",
                            "${head}",
                            '-71px',
                            '-74px'
                        ],
                        [
                            "eid397",
                            "bottom",
                            826,
                            51,
                            "linear",
                            "${head}",
                            '-74px',
                            '-81px'
                        ],
                        [
                            "eid275",
                            "originY",
                            750,
                            0,
                            "linear",
                            "${footR}",
                            '95.1331%',
                            '95.1331%'
                        ],
                        [
                            "eid286",
                            "rotateZ",
                            0,
                            250,
                            "linear",
                            "${footL}",
                            '0deg',
                            '-23deg'
                        ],
                        [
                            "eid287",
                            "rotateZ",
                            250,
                            250,
                            "linear",
                            "${footL}",
                            '-23deg',
                            '0deg'
                        ],
                        [
                            "eid305",
                            "left",
                            127,
                            0,
                            "linear",
                            "${backfin}",
                            '-622px',
                            '-622px'
                        ],
                        [
                            "eid313",
                            "left",
                            250,
                            0,
                            "linear",
                            "${backfin}",
                            '-622px',
                            '-622px'
                        ],
                        [
                            "eid307",
                            "left",
                            376,
                            0,
                            "linear",
                            "${backfin}",
                            '-622px',
                            '-622px'
                        ],
                        [
                            "eid424",
                            "left",
                            627,
                            0,
                            "linear",
                            "${backfin}",
                            '-622px',
                            '-622px'
                        ],
                        [
                            "eid425",
                            "left",
                            750,
                            0,
                            "linear",
                            "${backfin}",
                            '-622px',
                            '-622px'
                        ],
                        [
                            "eid426",
                            "left",
                            876,
                            0,
                            "linear",
                            "${backfin}",
                            '-622px',
                            '-622px'
                        ],
                        [
                            "eid144",
                            "display",
                            0,
                            0,
                            "linear",
                            "${algorithm}",
                            'none',
                            'none'
                        ],
                        [
                            "eid143",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${algorithm}",
                            'none',
                            'none'
                        ],
                        [
                            "eid52",
                            "left",
                            0,
                            0,
                            "linear",
                            "${head}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid223",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${LegGroupR}",
                            '48deg',
                            '-41deg'
                        ],
                        [
                            "eid224",
                            "rotateZ",
                            500,
                            500,
                            "linear",
                            "${LegGroupR}",
                            '-41deg',
                            '48deg'
                        ],
                        [
                            "eid70",
                            "right",
                            0,
                            0,
                            "easeInOutQuad",
                            "${core}",
                            '436px',
                            '436px'
                        ],
                        [
                            "eid303",
                            "right",
                            127,
                            0,
                            "linear",
                            "${core}",
                            '436px',
                            '436px'
                        ],
                        [
                            "eid315",
                            "right",
                            250,
                            0,
                            "linear",
                            "${core}",
                            '436px',
                            '436px'
                        ],
                        [
                            "eid309",
                            "right",
                            376,
                            0,
                            "linear",
                            "${core}",
                            '436px',
                            '436px'
                        ],
                        [
                            "eid402",
                            "right",
                            628,
                            0,
                            "linear",
                            "${core}",
                            '436px',
                            '436px'
                        ],
                        [
                            "eid403",
                            "right",
                            751,
                            0,
                            "linear",
                            "${core}",
                            '436px',
                            '436px'
                        ],
                        [
                            "eid404",
                            "right",
                            877,
                            0,
                            "linear",
                            "${core}",
                            '436px',
                            '436px'
                        ],
                        [
                            "eid274",
                            "originX",
                            750,
                            0,
                            "linear",
                            "${footR}",
                            '86.5897%',
                            '86.5897%'
                        ],
                        [
                            "eid429",
                            "left",
                            126,
                            0,
                            "linear",
                            "${neckscrew}",
                            '-554px',
                            '-554px'
                        ],
                        [
                            "eid431",
                            "left",
                            250,
                            0,
                            "linear",
                            "${neckscrew}",
                            '-554px',
                            '-554px'
                        ],
                        [
                            "eid433",
                            "left",
                            374,
                            0,
                            "linear",
                            "${neckscrew}",
                            '-554px',
                            '-554px'
                        ],
                        [
                            "eid439",
                            "left",
                            628,
                            0,
                            "linear",
                            "${neckscrew}",
                            '-554px',
                            '-554px'
                        ],
                        [
                            "eid440",
                            "left",
                            752,
                            0,
                            "linear",
                            "${neckscrew}",
                            '-554px',
                            '-554px'
                        ],
                        [
                            "eid441",
                            "left",
                            876,
                            0,
                            "linear",
                            "${neckscrew}",
                            '-554px',
                            '-554px'
                        ],
                        [
                            "eid243",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${LowerLegGroupL}",
                            '40deg',
                            '0deg'
                        ],
                        [
                            "eid244",
                            "rotateZ",
                            500,
                            250,
                            "linear",
                            "${LowerLegGroupL}",
                            '0deg',
                            '68deg'
                        ],
                        [
                            "eid265",
                            "rotateZ",
                            750,
                            250,
                            "linear",
                            "${LowerLegGroupL}",
                            '68deg',
                            '40deg'
                        ],
                        [
                            "eid284",
                            "originX",
                            250,
                            0,
                            "linear",
                            "${footL}",
                            '86.5593%',
                            '86.5593%'
                        ],
                        [
                            "eid69",
                            "bottom",
                            0,
                            0,
                            "easeInOutQuad",
                            "${core}",
                            '-67px',
                            '-67px'
                        ],
                        [
                            "eid367",
                            "bottom",
                            127,
                            123,
                            "linear",
                            "${core}",
                            '-67px',
                            '-57px'
                        ],
                        [
                            "eid368",
                            "bottom",
                            250,
                            126,
                            "linear",
                            "${core}",
                            '-57px',
                            '-67px'
                        ],
                        [
                            "eid405",
                            "bottom",
                            628,
                            123,
                            "linear",
                            "${core}",
                            '-67px',
                            '-57px'
                        ],
                        [
                            "eid406",
                            "bottom",
                            751,
                            126,
                            "linear",
                            "${core}",
                            '-57px',
                            '-67px'
                        ],
                        [
                            "eid220",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${LegGroupL}",
                            '-41deg',
                            '48deg'
                        ],
                        [
                            "eid221",
                            "rotateZ",
                            500,
                            500,
                            "linear",
                            "${LegGroupL}",
                            '48deg',
                            '-41deg'
                        ],
                        [
                            "eid296",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${ArmGroupR}",
                            '-44deg',
                            '0deg'
                        ],
                        [
                            "eid298",
                            "rotateZ",
                            500,
                            500,
                            "linear",
                            "${ArmGroupR}",
                            '0deg',
                            '-44deg'
                        ],
                        [
                            "eid276",
                            "rotateZ",
                            500,
                            250,
                            "linear",
                            "${footR}",
                            '0deg',
                            '-24deg'
                        ],
                        [
                            "eid277",
                            "rotateZ",
                            750,
                            250,
                            "linear",
                            "${footR}",
                            '-24deg',
                            '0deg'
                        ],
                        [
                            "eid44",
                            "left",
                            0,
                            0,
                            "linear",
                            "${core}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid435",
                            "top",
                            126,
                            124,
                            "linear",
                            "${neckscrew}",
                            '-215px',
                            '-223px'
                        ],
                        [
                            "eid436",
                            "top",
                            250,
                            124,
                            "linear",
                            "${neckscrew}",
                            '-223px',
                            '-215px'
                        ],
                        [
                            "eid437",
                            "top",
                            628,
                            124,
                            "linear",
                            "${neckscrew}",
                            '-215px',
                            '-223px'
                        ],
                        [
                            "eid438",
                            "top",
                            752,
                            124,
                            "linear",
                            "${neckscrew}",
                            '-223px',
                            '-215px'
                        ],
                        [
                            "eid231",
                            "rotateZ",
                            0,
                            250,
                            "linear",
                            "${LowerLegGroupR}",
                            '0deg',
                            '71deg'
                        ],
                        [
                            "eid232",
                            "rotateZ",
                            250,
                            250,
                            "linear",
                            "${LowerLegGroupR}",
                            '71deg',
                            '42deg'
                        ],
                        [
                            "eid259",
                            "rotateZ",
                            500,
                            500,
                            "linear",
                            "${LowerLegGroupR}",
                            '42deg',
                            '0deg'
                        ],
                        [
                            "eid285",
                            "originY",
                            250,
                            0,
                            "linear",
                            "${footL}",
                            '95.0527%',
                            '95.0527%'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("algorithm_edgeActions.js");
})("EDGE-106018823");
