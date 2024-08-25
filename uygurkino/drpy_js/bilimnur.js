var rule = {
    title: '0zbel',
    host: 'http://123.toplamkino.cn',
    homeUrl: '/app/ozbil/project?id=1&page=1',
    detailUrl: '/app/ozbil/Number?id=fyid',
    searchUrl: '/app/ozbil/Seek?search=**&page=fypage',
    url: '/app/ozbil/project?id=fyclass&page=fypage',
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    timeout: 5000,
    class_name: 'تەۋسىيە&كىنو&قىسىملىق&كارتون',
    class_url: '0&1&2&3',
    limit: 5,
    multi: 1,
    searchable: 2,
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
    title:'vod_name;vod_type',
    img:'vod_pic;vod_type',
    desc:'主要信息;年代;地区;演员;导演',
    content:'简介',
    tabs:'',
    tab_text:'body&&Text',
    list_text:'body&&Text',
    list_url:'a&&href',
    list_url_prefix: '',
        lists: $js.toString(() => {
            LISTS = [];
            let html = request(input);
            let h = JSON.parse(html);
            let sites = h.list;
            let d = sites.map(function (it) {
                let _tt = it.index;
                let _uu = 'http://123.toplamkino.cn/app/ozbil/player?id=' + it.id + '&index=' + it.index;
                return _tt + '$' + _uu
            })
            LISTS.push(d);
        })
    },
    搜索: 'json:list;name;pic;;id',
}