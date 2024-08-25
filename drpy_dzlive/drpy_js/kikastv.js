var rule = {
    title: 'kikastv',
    host: 'https://bolliwot.kikastv.top',
    //homeUrl: '/apis/get_category_mov?page=1&region=&year=&type=&lan=',
    detailUrl: '/api/getMovDetail?id=fyid&openid=oZIe85_WRgRpG-6OU5QigWImVCmc',
    searchUrl: '/api/search?keyword=**&page=fypage',
    url: '/api/get_category_mov?page=fypage&fyfilter',
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
        } else if (input.startsWith('wxv')) {
        input = 'https://alkoz.bilimnur.cn/play.php?url=' + input;
        input = { parse: 1, url: input, js: '' };
        };
    }),
    double: true,
    //推荐: 'json:data;mov_title;mov_img;mov_cate;id;mov_lang',
    一级: 'json:data;mov_title;mov_img;mov_cate;id;mov_lang',
    二级: '',
    二级: $js.toString(() => {
        let vodItems = [];
        let html = request(input);
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
            vod_actor: '',
            vod_director: '',
            vod_content: content,
            vod_remarks: area,
            vod_pic: img
        };
        let sites = json.data.epiplay;
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
        let vod_play_from = 'Kikastv'
        base_vod.vod_play_from = vod_play_from;
        VOD = base_vod;
    }),
    搜索: 'json:data;mov_title;mov_img;mov_cate;id;mov_lang',
}



