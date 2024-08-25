globalThis.getHeaders= function(){
    let headers = {
        'Host': 'qutbay.bilimnur.cn',        
        'User-Agent': 'Mozilla/5.0 (Linux; Android 7.1.1; OPPO A83t Build/N6F26Q; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160083 MMWEBSDK/20231202 MMWEBID/7764 MicroMessenger/8.0.47.2560(0x28002F50) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
        'token': token,
        'Origin': 'https://qutbay.bilimnur.cn',
        //'Content-Length': 104,
        'Content-Type': 'application/json',
         };
return headers
}
globalThis.playsign= function(t){
 
 let url ='https://qutbay.bilimnur.cn/apis/vipsList?openid=oONjg6neV9CngJRNZFwEAxi_AhTc'
  let html = request(url);
  let json = JSON.parse(html);
  let data =json.data.user;
  let openid =data.openid;
  let unionId =data.unionId;
  globalThis.token =data.token;
  let e=md5("Berip aqagnigkini mara"+openid+unionId+t+token+"Berip aqagnigkini mara");   
 let playsign=md5("Berip aqagnigkini mara"+e);
 return playsign
}
globalThis.get_other_episode= function(input){
    let url1 = 'https://qutbay.bilimnur.cn/apis/get_other_episode';
    let body1 = JSON.stringify({
        id: input,
        openid: "oIxus6pciyiTYO9GAiTxfBIOA_tg",
        unionId: "oONjg6neV9CngJRNZFwEAxi_AhTc",
        time: '1718196763',
        sign: '0ea7ca403dd959c01443f8944a3da9f1',
    });
    let html1 =fetch(url1, {
            method: 'POST',
            headers: getHeaders(),
            body: body1,
        });
    //let html1 = post(url1, { headers: getHeaders(), data: body1});
    print(html1);
    let json1 = JSON.parse(html1);
    let sites = json1.data[1];
    let currentIndex = 0;
    let d = sites.map(function (it) {
        let _uu = it.id+'￥'+it.mov_pid;
        let combinedString = `${currentIndex + 1}$${_uu}`;
        currentIndex++;
        return combinedString;
    });
    return d
}
globalThis.getMyEpisode= function(input){
    let url2 = 'https://qutbay.bilimnur.cn/apis/getMyEpisode';
    let parts = input.split('￥');
    let curId = parseInt(parts[0], 10); 
    let pid = parseInt(parts[1], 10); 
    let body2 = JSON.stringify({
        curId: curId,
        openid: "oIxus6pciyiTYO9GAiTxfBIOA_tg",
        uid: "oONjg6neV9CngJRNZFwEAxi_AhTc",
        pid:pid
    }); 
     let html2 =fetch(url2, {
            method: 'POST',
            headers: getHeaders(),
            body:body2,
        });
    let json2 = JSON.parse(html2);
    let playurl = json2.data.url;  
    return playurl
  
}

var rule = {
title: 'Qutbay1',
host: 'https://qutbay.bilimnur.cn',
//homeUrl: '/apis/get_category_mov?page=1&region=&year=&type=&lan=&time=1718163458&sign=2dc042a72b488d866f8ddcfdab632bd3',
detailUrl: 'fyid',
searchUrl: '/apis/search?keyword=**&page=fypage&time=1718276960&sign=8fce3d4809fb61b51a283d3b843106d0',
url: '/apis/get_category_mov?page=fypage&fyfilter&time=1718163458&sign=2dc042a72b488d866f8ddcfdab632bd3',
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
//timeout: 2000,
class_name: 'كىنو&قىسىملىق&كارتۇن&قىسقا تور فىلمى&سەنئەت-پىروگرامما',
class_url: 'كىنو&قىسىملىق&كارتۇن&قىسقا تور فىلمى&سەنئەت-پىروگرامما',
searchable: 2,
play_parse: true,
lazy: $js.toString(() => {
    if (input.includes('https')) {
    input = { parse: 1, url: input, js: '' };
    } else if (input.startsWith('wxv')) {
    input = 'https://alkoz.bilimnur.cn/play.php?url=' + input;
    input = { parse: 1, url: input, js: '' };
    }else if (input.includes('￥')) {
     let parts = input.split('￥');
    let curId = parseInt(parts[0], 10); 
    input=getMyEpisode(input);
    input = { parse: 1, url: input, js: '' };
    
    };
}),
double: true,
//推荐: 'json:data;mov_title;mov_img;mov_cate;id;mov_lang',
一级: 'json:data;mov_title;mov_img;mov_cate;id;mov_lang',
二级: '',
二级: $js.toString(() => {
    let vodItems = [];
     input = input.split("/").pop();
    let url = 'https://qutbay.bilimnur.cn/apis/get_mov_detail';
    let t = Math.floor(Date.now() / 1000);
    let body = JSON.stringify({
        id: input,
        openid: "oIxus6pciyiTYO9GAiTxfBIOA_tg",
        unionId: "oONjg6neV9CngJRNZFwEAxi_AhTc",
        time: t,
        sign: playsign(t),
        agent: 30565
    });
    log(playsign(t));
    log(body);
   // let html = post(url, { headers: getHeaders(), data: body });
   let html =fetch(url, {
            method: 'POST',
            headers: getHeaders(),
            body:body,
        });
    let json = JSON.parse(html);
    let data = json.data.all;
    let tilte = data.mov_title;
    let img = data.mov_img;
    let vod_type = data.mov_cate;
    let area = data.mov_region;
    let content = data.mov_desc;
    let all = data.all;
    let base_vod = {
        vod_id: input,
        vod_name: tilte,
        type_name: vod_type,
        vod_year: '',
        vod_area: '',
        vod_actor: '',
        vod_director: '',
        vod_content: content,
        vod_remarks: area,
        vod_pic: img
    };
   if (all > 1) {
    vodItems.push(get_other_episode(input).join("#"));
    } else {
    let sites = json.data.epiplay;
        let currentIndex = 0;
        let d = sites.map(function (it) {
            let _uu = it.url;
            let combinedString = `${currentIndex + 1}$${_uu}`;
            currentIndex++;
            return combinedString;
        });
        vodItems.push(d.join("#")); 
    };
    let vod_play_url = vodItems.join("#");
    base_vod.vod_play_url = vod_play_url;
    let vod_play_from = 'Qutbay'
    base_vod.vod_play_from = vod_play_from;
    VOD = base_vod;
}),
搜索: 'json:data;mov_title;mov_img;mov_cate;id;mov_lang',
}
