var jddBase = {
    "new": '//apic-sport-new.jdddata.com/',
    //--新
    old: '//data2c.jdddata.com/',
    //--旧
    divide: 14701269 //--分隔值

}; //--奖多多新老接口映射关系
var defParams = {
    dataType: 'json',
    data: {
        platform: "koudai_app",
       prt: "http",
        ver: "20230615144557" //--内部版本号

    },
    notoken: false,
    //--不带token，走get模式
    formatResult: true,
    //--是否对接口结果进行预处理，如果code != 0， 弹窗提示，默认true
    autocache: false,
    //--是否将数据缓存到本页面——页面级缓存
    sessionCache: false,
    //--是否将数据缓存到本页面——session级缓存:true(只读缓存不写缓存), false（及不读也不写）, reload（重新加载并且写缓存）
    fullUrl: false,
    //--是否是完整的接口url，默认为否，需要连接api服务器域名
    noToast: false,
    //--是否展示toast弹窗
    showErr: false,
    //--超时后是否跳转到超时页面
    noQuery: false,
    //--没有地址栏参数,会清空data参数
    specialErr: null,
    //--特殊错误号处理，类型：json；用于在页面逻辑中对特殊错误进行处理;{'-301': function(rlt){页面内部逻辑}}
    rnd: true,
    //--是否追加随机数
    rlt: null,
    //--线下内部测试用参数，如果值存在的话，直接取代接口返回结果result；或者搭配itou.defRlt使用，进行线下即时注入测试
    jdd: false,
    //--是否从奖多多接口获取数据 false，否； true，奖多多接口； "itou"：奖多多给itou的定制接口
    upload: false,
    //--是否使用上传专有域名
    'repeat-abort': null,
    //--重复请求中止策略：null，不中止；url，仅url相同时中止；url-params：必须url和params都相同时中止
    noLoading: false,
    //--是否展示loader层
    postMode: 'token-only' //--POST时的数据发送模式。只有post时生效

    /**
     * token-only: 只有token以post方式发送，其他数据为url参数
     * token&data: token和data的数据以post发送
     */

}; //--获取token的值
var requestEnc = function requestEnc(config) {
    var params = {
        header: {},
        body: config.data.params
    };
    params.header = {
       // uuid: itou.random(36),
        // 36位的uuid 187c6fc9405b4322872019948a66a5e3
        platformCode: 'h5mobile',
        appVersion: '4.0.2',
        platformVersion: '4.0.2',
        userID: '',
        userType: 1,
        cmdName: 'h5_itou',
        cmdId: 0,
        token: '',
        action: config.data.action
    }; // params.header = {"appVersion":"4.0.2","cmdId":0,"platformVersion":"4.0.2","action":200101,"cmdName":"h5_zz","userType":1,"uuid":"e158248dff3043e4821393df576f38e9","userID":"","platformCode":"h5mobile","token":""};

    config.data = 'request=' + enc(params);
    return config.data;
};




function enc(pm) {
    var AES = CryptoJS.AES,
        modeEBC = CryptoJS.mode.CBC,
        encUtf8 = CryptoJS.enc.Utf8,
        encBase64 = CryptoJS.enc.Base64,
        padPkcs7 = CryptoJS.pad.Pkcs7;
    var key = encUtf8.parse('d3YmI1BUOSE2S2YmalBVZUQ='),
        iv = encUtf8.parse('0000000000000000');
    var params = JSON.stringify(pm);
    var srcs = encUtf8.parse(params);
    var encrypted = AES.encrypt(srcs, key, {
        iv: iv,
        mode: modeEBC,
        padding: padPkcs7
    });
    var res = encodeURI(encBase64.stringify(encrypted.ciphertext)).replace(/\+/g, '%2B');
    return res;
};
var jddMaps = {
    'basket/match/detail/player/1': 'itou/basket/match/detail/player/1 ',
    'basket/match/detail/ranking/1': 'itou/basket/match/detail/ranking/1',
    'basket/match/detail/history': 'itou/basket/match/detail/history ',
    'basket/match/head/bs/2': 'itou/basket/match/head/bs/2',
    'basket/match/detail/event/1': 'itou/basket/match/detail/event/1',
    'basket/match/list/4': 'itou/basket/match/list/4',
    'soccer/match/list/4': 'itou/soccer/match/list/4',
    'soccer/event/tournament/match/3': 'itou/soccer/event/tournament/match/3',
    'basket/match/detail/event': 'itou/basket/match/detail/event',
    'soccer/match/detail/team': 'itou/soccer/match/detail/team',
    'soccer/match/list/6': 'itou/soccer/match/list/6',
    'odds/betfair/trade/detail': 'qkdata/odds/betfair/trade/detail',
    'odds/betfair/trade/info': 'qkdata/odds/betfair/trade/info',
    'odds/betfair/trade/total': 'qkdata/odds/betfair/trade/total',
    'odds/detail/1': 'qkdata/odds/detail/1',
    'odds/detail/2': 'itou/odds/detail/2',
    'odds/detail/4': 'qkdata/odds/detail/4',
    'odds/detail/5': 'qkdata/odds/detail/5',
    'odds/detail/sameodds/match': 'qkdata/odds/detail/sameodds/match',
    'odds/detail/stats/asia': 'qkdata/odds/detail/stats/asia',
    'odds/detail/stats/europe': 'qkdata/odds/detail/stats/europe',
    'odds/forecast': 'qkdata/odds/forecast',
    'odds/list': 'qkdata/odds/list',
    'odds/list/3': 'itou/odds/list/3',
    'odds/list/4': 'qkdata/odds/list/4',
    'odds/list/5': 'qkdata/odds/list/5',
    'odds/list/6': 'qkdata/odds/list/6',
    'soccer/match/base/2': 'qkdata/soccer/match/base/2',
    'soccer/match/detail/history/3': 'qkdata/soccer/match/detail/history/3',
    'soccer/match/detail/history/4': 'itou/soccer/match/detail/history',
    'soccer/match/detail/history/match': 'qkdata/soccer/match/detail/history/match',
    'soccer/match/detail/lineup/3': 'qkdata/soccer/match/detail/lineup/3',
    'soccer/match/detail/lineup/4': 'qkdata/soccer/match/detail/lineup/4',
    'soccer/match/detail/lineup2': 'qkdata/soccer/match/detail/lineup2',
    'soccer/match/detail/live': 'qkdata/soccer/match/detail/live',
    'soccer/match/detail/live/2': 'qkdata/soccer/match/detail/live/2',
    'soccer/match/detail/match': 'qkdata/soccer/match/detail/match',
    'soccer/match/detail/rules': 'qkdata/soccer/match/detail/rules',
    'soccer/match/detail/stats': 'qkdata/soccer/match/detail/stats',
    'soccer/match/detail/stats/score': 'qkdata/soccer/match/detail/stats/score ',
    'soccer/match/detail/table/1': 'qkdata/soccer/match/detail/table/1',
    'soccer/match/detail/technique/stats': 'qkdata/soccer/match/detail/technique/stats',
    'itou/games/live/animation/url': 'itou/games/live/animation/url',
    'intelligence/gameIntelligence': 'qkdata/intelligence/gameIntelligence'
};

formatJddParams = function (params) {
    //--奖多多接口参数处理
    var data = requestEnc({
        data: {
            params: params.data
        }
    });
    function extend() {
        var extended = {};
        var deep = false;
        var i = 0;
        var length = arguments.length;

        if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
            deep = arguments[0];
            i++;
        }

        var merge = function (obj) {
            for (var prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                        extended[prop] = extend(true, extended[prop], obj[prop]);
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };

        for (; i < length; i++) {
            var obj = arguments[i];
            merge(obj);
        }

        return extended;
    };

    var matchId = params.data.matchId || '';
    var mapApi = jddMaps[params.url] || '';
    var params = extend(true, {}, defParams, params); //--参数合并

    params.type = 'POST'; // params.dataType = "text";

    params.data = data;

    if (matchId < jddBase.divide && mapApi) {
        params.url = jddBase["new"] + mapApi;
    } else {
        if (params.jdd == 'itou') {
            params.url = config.api_jdd_itou + params.url;
        } else {
            params.url = config.api_jdd + params.url;
        }

        params.url = jddBase.old + params.url;
    }



    return params;
};





