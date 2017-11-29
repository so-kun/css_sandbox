// -------------------------------------------------------------------
// htmlタグに以下のブラウザ判別用クラスを追加します
// -------------------------------------------------------------------
/*
    htmlタグに以下のブラウザ判別用クラスを追加します。
    例えばIE6なら <html class="ie ie6"> となります。
    対象：ie, chrome, firefox, oepra, sagari
    ※一応将来のバージョンにも対応してるのでIE99でも「class="ie ie99"」となります。
    ※ブラウザ名は全て小文字指定、バージョン指定の部分は、最初のマイナーバージョンまで、小数点の0のみはピリオドごと消える、「.」は「_」になる。
    例：「Safari」→「safari」
    例：「IE11.0」→「ie11」
    例：「IE5.5」→「ie5_5」
    例：「Safari5.1.7」→「safari5_1」
*/
var BROWSER_NAME;
var BROWSER_VERSION;
function addBrowserClass() {
    var __add = function(name, ver){
        if(document.documentElement.className){ document.documentElement.className += ' '; }
        document.documentElement.className += name + (ver!='' ? ' ' + name+(ver*1).toString().replace('.','_') : '');
        BROWSER_NAME=name;
        BROWSER_VERSION=ver;
    }
    var userAgent = window.navigator.userAgent.toLowerCase();
    var appVersion = window.navigator.appVersion.toLowerCase();
    if( get = userAgent.match( /msie (\d+(\.\d+)?)/i ) )              { __add('ie',      get[1]); }
    else if( get = userAgent.match( /Trident.+rv\:(\d+(\.\d+)?)/i ) ) { __add('ie',      get[1]); }
    else if( get = userAgent.match( /chrome\/(\d+(\.\d+)?)/i ) )      { __add('chrome',  get[1]); }
    else if( get = userAgent.match( /firefox\/(\d+(\.\d+)?)/i ) )     { __add('firefox', get[1]); }
    else if( get = userAgent.match( /opera\/(\d+(\.\d+)?)/i ) )       { __add('opera',   get[1]); }
    else if( get = userAgent.match( /safari\/(\d+(\.\d+)?)/i ) )      { __add('safari',  get[1]); }
    else if( get = userAgent.match( /edge\/(\d+(\.\d+)?)/i ) )        { __add('edge',    get[1]); }

    // ついでにモバイルOS情報を付加する→ios(iphone, ipad, ipod), android
    if( get = userAgent.match( /iPhone OS (\d+(\.\d+)?)/i ) )    { __add('ios',     get[1]); }
    if( get = userAgent.match( /iPhone;/i ) )                    { __add('iphone',  ''); }
    else if( get = userAgent.match( /iPod;/i ) )                 { __add('ipod',    ''); }
    else if( get = userAgent.match( /iPad;/i ) )                 { __add('ipad',    ''); }
    else if( get = userAgent.match( /Android (\d+(\.\d+)?)/i ) ) { __add('android', get[1]); }
}

function checkVersion(browserNameArr,browserVersionArr,errorFunc) {
    for (var i = 0; i < browserNameArr.length; i++) {
        if(browserNameArr[i]===BROWSER_NAME && browserVersionArr[i]>=parseInt(BROWSER_VERSION)){
            errorFunc();
        }
    }
}
