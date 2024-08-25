globalThis.getlist = function (input) {
    let url = 'https://mirak.djmuh.com/api/movie/search';
    const options = {
        method: 'POST',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220099 MMWEBSDK/20240404 MMWEBID/172 MicroMessenger/8.0.49.2600(0x2800315A) WeChat/arm64 Weixin NetType/4G Language/zh_CN ABI/arm64',
            'Content-Type': 'application/json'
        },
        body: input
    };
    let html = fetch(url, options);
    let json = JSON.parse(html);
    let data = json.data
    print('json:' + json);
    return data
};
globalThis.getdetelit = function (input) {
    let url1 = 'https://mirak.djmuh.com/api/movie/detail';
    let body1 = JSON.stringify({
        movie_id: input,
        i: 22
    });

    let options1 = {
        method: 'POST',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220099 MMWEBSDK/20240404 MMWEBID/172 MicroMessenger/8.0.49.2600(0x2800315A) WeChat/arm64 Weixin NetType/4G Language/zh_CN ABI/arm64',
            'Content-Type': 'application/json'
        },body:body1
    };
    print('inputinput' + body1)
    let html1 = fetch(url1, options1);
    let json1 = JSON.parse(html1);
    let data1 = json1.data;
    return data1
};


var rule = {
    title: 'Mirak',
    //host: '',
    //homeUrl: '',
    detailUrl: 'fyid',
    searchUrl: '{\"page\":fypage,\"keyword\":\"**\",\"tag\":\"\",\"year\":\"\",\"cate_id\":\"\",\"area\":\"\",\"i\":22}',
    url: '{\"page\":fypage,\"keyword\":\"\",\"tag\":\"\",\"year\":\"\",\"cate_id\":fyclass,\"area\":\"\",\"i\":22}',
    headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309071d) XWEB/9129',
    },
    timeout: 5000,
    class_name: 'كىنو&كارتۇن&قىسىملىق&تەنتەربىيە&ئۆزتىل&سەنئەت',
    class_url: '1&3&6&11&12&2',
    limit: 5,
    multi: 1,
    searchable: 1,
    play_parse: true,
    lazy: $js.toString(() => {
        print('nnnnnnnn' + input);
        input = 'https://alkoz.bilimnur.cn/play.php?url=' + input;
        input = { parse: 1, url: input, js: '' }

    }),
    double: true,
    //推荐: 'json:result.articles_list;title;thumb;catalog_count;id',
    一级: $js.toString(() => {
        input = input.split("/").pop();
        var d = [];
        print('inputinput' + input)
        let json = getlist(input);
        json.forEach(function (it) {
            d.push({
                title: it.name,
                img: it.cover,
                desc: it.douban,
                url: it.id
            })
        });
        setResult(d);

    }),
    二级: '',
    二级: $js.toString(() => {
        print(input);
        let vodItems = [];
        let data = getdetelit(input);
        let tilte = data.name;
        let img = data.cover;
        let vod_type = data.tag;
        let area = data.area;
        let content = data.movie_desc;
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
        let play_src = data.play_src;
        let currentIndex = 0;
        let sites = play_src.split('\n');
        let d = sites.map(function (id) {
            let _uu = id;
            let combinedString = `${currentIndex + 1}$${_uu}`;
            currentIndex++;
            return combinedString;
        });
        vodItems.push(d.join("#"));
        let vod_play_url = vodItems.join("#");
        base_vod.vod_play_url = vod_play_url;
        let vod_play_from = 'Mirak';
        base_vod.vod_play_from = vod_play_from;
        VOD = base_vod;
    }),
    搜索: $js.toString(() => {
        eval(rule.一级.replace('js:', ''));
    }),
}