globalThis.getHeaders= function(){
        let headers = {
            'Host': 'alkoz.bilimnur.cn',
            'Content-Length': 112,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6309071d) XWEB/9129 Flue',
            'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIhQCMkJSomIiwiaWF0IjoxNzE3MjMzOTg3LCJuYmYiOjE3MTcyMzM5ODcsImV4cCI6MTcxNzI0MTE4NywiZGF0YSI6eyJ1aWQiOiJBcmR1aW5vX29YQU5fNTVtcXE0b29YdVFFWE00N0FOdktHMGMifX0.h_EreLoTSVgJIzlRDD4OhL6syidSErRTahLOVa2cOnk',
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Origin': 'https://alkoz.bilimnur.cn',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cookie': 'PHPSESSID=f3c29b4e66de110b1ed655c869e337f0'
        };
	return headers
}
	
var rule = {
    title: 'bilimnur',
    host: 'https://alkoz.bilimnur.cn',
    //homeUrl: '/apis/get_category_mov?page=1&region=&year=&type=&lan=',
    detailUrl: 'fyid',
    searchUrl: '/apis/search?keyword=**&page=fypage',
    url: '/apis/get_category_mov?page=fypage&fyfilter',
    filterable: 1,
    filter_url: 'region={{fl.地区}}&year={{fl.年代}}&type={{fl.类型}}&lan=fyclass',
    filter: {
        'كىنو': [{ 'key': '类型', 'name': '类型', 'value': [{ 'n': '全部', 'v': '' }, { 'n': 'مۇھەببەتلىك', 'v': 'مۇھەببەتلىك' }, { 'n': 'كومىدىيەلىك', 'v': 'كومىدىيەلىك' }, { 'n': 'قورقۇنۇچلۇق', 'v': 'قورقۇنۇچلۇق' }, { 'n': 'جاسۇسلۇق', 'v': 'جاسۇسلۇق' }, { 'n': 'فانتازىيەلىك', 'v': 'فانتازىيەلىك' }, { 'n': 'ھەركەتلىك', 'v': 'ھەركەتلىك' }, { 'n': 'تىراگىدىيەلىك', 'v': 'تىراگىدىيەلىك' }, { 'n': 'ئۇرۇش', 'v': 'ئۇرۇش' }, { 'n': 'تارىخى', 'v': 'تارىخى' }, { 'n': 'جىنايەت', 'v': 'جىنايەت' }, { 'n': 'كارتون', 'v': 'كارتون' }, { 'n': 'ۋەقەلىك', 'v': 'ۋەقەلىك' }] }, { 'key': '地区', 'name': '地区', 'value': [{ 'n': '全部', 'v': '' }, { 'n': 'جۇڭگۇ', 'v': 'جۇڭگۇ' }, { 'n': 'ئامېرىكا', 'v': 'ئامېرىكا' }, { 'n': 'ھېندىستان', 'v': 'ھېندىستان' }, { 'n': 'كورىيە', 'v': 'كورىيە' }, { 'n': 'ياپۇنيە', 'v': 'ياپۇنيە' }, { 'n': 'تايلاند', 'v': 'تايلاند' }, { 'n': 'باشقىلار', 'v': 'باشقىلار' }] }, { 'key': '年代', 'name': '年代', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '2024', 'v': '2024' }, { 'n': '2023', 'v': '2023' }, { 'n': '2022', 'v': '2022' }, { 'n': '2021', 'v': '2021' }, { 'n': '2020', 'v': '2020' }, { 'n': '2019', 'v': '2019' }, { 'n': '2018', 'v': '2018' }, { 'n': '2017', 'v': '2017' }, { 'n': '2016', 'v': '2016' }, { 'n': '2015', 'v': '2015' }, { 'n': '2014', 'v': '2014' }, { 'n': '2010-', 'v': '2010-' }] }],
        'قىسىملىق': [{ 'key': '类型', 'name': '类型', 'value': [{ 'n': '全部', 'v': '' }, { 'n': 'مۇھەببەتلىك', 'v': 'مۇھەببەتلىك' }, { 'n': 'كومىدىيەلىك', 'v': 'كومىدىيەلىك' }, { 'n': 'قورقۇنۇچلۇق', 'v': 'قورقۇنۇچلۇق' }, { 'n': 'جاسۇسلۇق', 'v': 'جاسۇسلۇق' }, { 'n': 'فانتازىيەلىك', 'v': 'فانتازىيەلىك' }, { 'n': 'ھەركەتلىك', 'v': 'ھەركەتلىك' }, { 'n': 'تىراگىدىيەلىك', 'v': 'تىراگىدىيەلىك' }, { 'n': 'ئۇرۇش', 'v': 'ئۇرۇش' }, { 'n': 'تارىخى', 'v': 'تارىخى' }, { 'n': 'جىنايەت', 'v': 'جىنايەت' }, { 'n': 'كارتون', 'v': 'كارتون' }, { 'n': 'ۋەقەلىك', 'v': 'ۋەقەلىك' }] }, { 'key': '地区', 'name': '地区', 'value': [{ 'n': '全部', 'v': '' }, { 'n': 'جۇڭگۇ', 'v': 'جۇڭگۇ' }, { 'n': 'ئامېرىكا', 'v': 'ئامېرىكا' }, { 'n': 'ھېندىستان', 'v': 'ھېندىستان' }, { 'n': 'كورىيە', 'v': 'كورىيە' }, { 'n': 'ياپۇنيە', 'v': 'ياپۇنيە' }, { 'n': 'تايلاند', 'v': 'تايلاند' }, { 'n': 'باشقىلار', 'v': 'باشقىلار' }] }, { 'key': '年代', 'name': '年代', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '2024', 'v': '2024' }, { 'n': '2023', 'v': '2023' }, { 'n': '2022', 'v': '2022' }, { 'n': '2021', 'v': '2021' }, { 'n': '2020', 'v': '2020' }, { 'n': '2019', 'v': '2019' }, { 'n': '2018', 'v': '2018' }, { 'n': '2017', 'v': '2017' }, { 'n': '2016', 'v': '2016' }, { 'n': '2015', 'v': '2015' }, { 'n': '2014', 'v': '2014' }, { 'n': '2010-', 'v': '2010-' }] }]

    },
    filter_def: {},
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    timeout: 5000,
    class_name: '电影&电视剧&动漫&短剧&综艺',
    class_url: 'كىنو&قىسىملىق&كارتۇن&تورفىلىم&پىروگرامما',
    limit: 5,
    multi: 1,
    searchable: 2,
    play_parse: true,
    lazy: $js.toString(() => {
        print('lllll' + input.split("?")[0]);
        if (input.includes('https')) {
        input = { parse: 1, url: input, js: '' };
        } else if (input.includes('wxv')) {
        input = 'https://alkoz.bilimnur.cn/play.php?url=' + input;
        input = { parse: 1, url: input, js: '' };
        };
    }),
    double: true,
    //推荐: 'json:data;mov_title;mov_img;mov_cate;id;mov_lang',
    一级: 'json:data;mov_title;mov_img;mov_cate;id;mov_lang',
    二级: '',
    二级: $js.toString(() => {
        input = input.split("/").pop();
        print(input);
        let url = 'https://alkoz.bilimnur.cn/apis/get_mov_detail';
        let body = JSON.stringify({
            id: input,
            openid: "oXAN_55mqq4ooXuQEXM47ANvKG0c&&adc",
            unionId: "oXAN_55mqq4ooXuQEXM47ANvKG0c",
            agent: "18"
        });
    let html =fetch(url, {
            method: 'POST',
            headers: getHeaders(),
            body:body,
        });
        let vodItems = [];
        let json = JSON.parse(html);
        let data = json.data.all;
        let tilte = data.mov_title;
        let img = data.mov_img;
        let vod_type = data.mov_cate;
        let area = data.mov_region;
        let content = data.mov_desc;
        let base_vod = {
            vod_id: input,
            vod_name: tilte,
            type_name: vod_type,
            //vod_actor: '',
            //vod_director: '',
            vod_content: content,
            vod_remarks: area,
            vod_pic: img
        };
        let sites = json.data.episode;
        let currentIndex = 0;
        let d = sites.map(function (it) {
            let _uu = it.url;
            let combinedString = `${currentIndex + 1}$${_uu}`;
            currentIndex++;
            return combinedString;
        });
        vodItems.push(d.join("#")); 
        let vod_play_url = vodItems.join("#");
        base_vod.vod_play_url = vod_play_url;
        let vod_play_from = 'bilimnur';
        base_vod.vod_play_from = vod_play_from;
        VOD = base_vod;
    }),
    搜索: 'json:data;mov_title;mov_img;mov_cate;id;mov_lang',
}

