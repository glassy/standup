 (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "http://connect.facebook.net/zh_TW/all.js#xfbml=1&appId=1486305334918397";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  $.post(
    'https://graph.facebook.com',
    {   id: location.href,
        scrape: true  }, function(response){
        console.log(response);
    }
  );  // FB API





var weApp = angular.module('weApp', ['shackhand'])
    .config(function ($FBProvider) {
            var myInitFunction = function ($window, $rootScope, $fbInitParams) {
                if (p.fbApp) $window.FB.init(
                  { appId: '1486305334918397',
                  //  version: 'v2.0'
                  });
            }
    }).config(["$userProvider", function($userProvider) {
        $userProvider.initAll({
                    slogen: '透明連線：支持者現身吧！',
                    selectBar:'',
                    checkList: [],
                    whiteList: [],
                    layers: ['無黨參選人','綠黨參選人','民陣參選人','樹黨參選人'], 
                    iconSize:[80,80,80,80],
                    urls: ['https://ethercalc.org/2014noparty',
                           'https://ethercalc.org/2014greenparty',
                           'https://ethercalc.org/2014peopleboss',
                           'https://ethercalc.org/2014treeparty'
                          ], //'https://glassystandup.firebaseio.com',
                    layerIcons: [
                                'https://www.moedict.tw/%E7%84%A1.png',
                                'http://www.greenparty.org.tw/sites/www.greenparty.org.tw/themes/gptw/images/green_party_logo.png',
                                'http://upload.wikimedia.org/wikipedia/zh/thumb/d/da/Emblem_of_people_boss.png/225px-Emblem_of_people_boss.png',
                                'http://upload.wikimedia.org/wikipedia/commons/2/2f/%E7%B8%A3%E9%81%93139%E6%AF%8D%E5%A5%B3%E6%A8%9F%E6%A8%B91.JPG',
                         //       'https://www.moedict.tw/地.png?font=wt006',
                         //       'https://www.moedict.tw/人.png?font=wt006',
                                ],
                    types: ['ethercalc', 'ethercalc','ethercalc','ethercalc' ], //'hackmap', 'firebase',
                    logins:['','',''], // 'facebook'
                    toFlags: [volFlag, volFlag, volFlag, volFlag], //
                    toLabels: [volLabel, volLabel, volLabel, volLabel], //
                    headers:[ ],
                    lang:'zh-tw',
               //     zoom: 13,
                    listKeys: ['name','note','address'], //,'share','ask', 'connect_me',
                    listKeyNames: {
                      name:'名稱',
                      address:'位於',
                  //    share: '分享',
                  //    ask:'尋找',
                      note: '自我介紹'
                    }
                 });
  }]);



      function toLabel (hand, i, Icon, year, whichLabel) {
          whichLabel = whichLabel || 'name';
          var label = " ";
     //     console.log(whichLabel);
          switch (whichLabel) {
            case 'name':
                label += ((hand.name && hand.name) || "");
                break;
            default:
                label += ((hand[whichLabel] && hand[whichLabel]) || "");
                break;
          }
          if (!label) label = ' ';
          return label;

       }

      var volLabel = toLabel;


     function volFlag(hand, i, Icon) {
           var flag =  '<div class = "flag">'


                          +'<strong>'
                            +'<a href = "https://www.google.com.tw/webhp?#q='
                                + encodeURI(hand.name) +'" target = "_blank">'
                               + hand.name +'</a>'
                          +'</strong>'

                          + ((hand.site && '<a href = "'+$$SKH.toHref(hand.site)+'" target = "_blank">'
                            + '<img title = "' + hand.site
                                +'"src = "http://www.google.com/s2/favicons?domain=' + hand.site +'">'
                            + '</a>') || "") + '代表' + hand.pt  +'參選'

                          + '<br />'                          
                          
                          +hand.address
                          +hand.role+'<hr/>'

                          + ((hand.img && '<img class = "skh-big-avatar" src = "'+ hand.img +'" />') || '')

                          +'<br>&nbsp;&nbsp;'
                      
             //             +'<b>聯絡方式：</b>'+( hand.connect_me || "")+'<br />'
             //             +'<hr>'
                      //    +'<hr>'
                      //    +'<hr>'
                      //    +'<b>介紹：</b>'
                          +( hand.note.replace(/\n/g, '<br>')|| "")+'<br />'
                          +'<hr>'
                          +'</div>';
              return flag;
       }
