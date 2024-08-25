globalThis.create_token = function () {
    let html = request('https://diva.korgan.vip/api/user/qw_create_token');
    let h = JSON.parse(html);
    let create_token = h.result;
    return create_token
}
var rule = {
    title: 'Diva Fm',
    host: 'https://diva.korgan.vip',
    //homeUrl: '/api/index/get_articles_list?page=fypage&frea_type=0&order_type=0&cate_id=0&version=release',
    detailUrl: '/api/music/get_catalog_data?articles_id=fyid&is_ios=false&openid=ogBth5OZ_gwQrEXKpSHEF2Sza1f8&version=release',
    searchUrl: '/api/index/get_articles_list?page=fypage&keyword=**&version=release',
    url: '/api/index/get_articles_list?page=fypage&frea_type=0&order_type=0&cate_id=fyclass&version=release',
    headers: {
        'check_token': create_token(),
        'xweb_xhr': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309071d) XWEB/9129',
        'content-type': 'application/json',
        'accept': '*/*',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9'
    },
    timeout: 5000,
    class_name: '推荐&恐怖&komidia&生活',
    class_url: '0&1&2&3',
    limit: 5,
    multi: 1,
    searchable: 2,
    play_parse: true,
    lazy: $js.toString(() => {
        input = 'https://diva.korgan.vip/api/music/get_catalog_info?catalog_id=' + input.split("?")[0] + '&is_ios=false&openid=ogBth5OZ_gwQrEXKpSHEF2Sza1f8&version=release'
        let html = JSON.parse(fetch(input, fetch_params));
        input = html.result.catalog_info.url+'.m4a';
        input = { parse: 2, url: input, js: '' }
        print('nnnnnnnn' + input);
        

    }),
    double: true,
    //推荐: 'json:result.articles_list;title;thumb;catalog_count;id',
    一级: $js.toString(() => {
        var d = [];
        let html = JSON.parse(fetch(input, fetch_params));
        let data = html.result.articles_list;
        data.forEach(function (it) {
            d.push({
                title: it.title,
                img: it.thumb,
                desc: it.episode_count + ' / ' + it.catalog_count,
                url: it.id
            })
        });
        setResult(d);
    }),
    二级: $js.toString(() => {
        var d = [];
        VOD = {
            vod_url: input,
            vod_name: "",
            vod_actor: "",
            vod_year: "",
            vod_director: ""
        };
        let html = JSON.parse(fetch(input, fetch_params));
        let data = html.result.articles_info.catalog_list;
        print('nnnnnnnn' + data);
        let list = data.map(function (it) {
            let _tt = it.title;
            let _uu = it.id;
            return _tt + '$' + _uu
        });
        d.push(list.join("#"));
        VOD.vod_play_from = "Diva";
        VOD.vod_play_url = d.join("$$$");
        VOD.vod_name = html.result.articles_info.title;
        VOD.vod_pic = html.result.articles_info.thumb;
    }),
    搜索: $js.toString(() => {
        var d = [];
        let html = JSON.parse(fetch(input, fetch_params));
        let data = html.result.articles_list;
        data.forEach(function (it) {
            d.push({
                title: it.title,
                img: it.thumb,
                desc: it.episode_count + ' / ' + it.catalog_count,
                url: it.id
            })
        });
        setResult(d);
    }),
    
}
