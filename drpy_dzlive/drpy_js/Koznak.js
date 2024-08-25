var rule = {
    title: 'Koznak',
    host: 'http://123.toplamkino.cn',
    homeUrl: '/app/koznak/project?id=1&page=1',
    detailUrl: '/app/koznak/Number?id=fyid',
    //searchUrl: '/app/koznak/Seek?search=**&page=fypage',
    url: '/app/koznak/project?id=fyclass&page=fypage',
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    timeout: 5000,
    class_name: '推荐&电影&电视剧&动漫',
    class_url: 'OTT-zongyi&OTT-dianying&OTT-dianshijv&OTT-shaoer',
    limit: 5,
    multi: 1,
    //searchable: 0,
    play_parse: true,
    lazy: $js.toString(() => {
        print('lllll' + input.split("?")[0]);
        let data = JSON.parse(request(input))
        input = data.playurl;
    }),
    double: true,
    推荐: 'json:list;name;pic;;id',
    一级: 'json:list;name;pic;;id',
    二级: '',
    二级: {
        lists: $js.toString(() => {
            LISTS = [];
            let html = request(input);
            let h = JSON.parse(html);
            let sites = h.list;
            let d = sites.map(function (it) {
                let _tt = it.index;
                let _uu = 'http://123.toplamkino.cn/app/koznak/player?id=' + it.id + '&index=' + it.index;
                return _tt + '$' + _uu
            })
            LISTS.push(d);
        })
    },
    //搜索: 'json:list;name;pic;;id',
}