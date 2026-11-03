(function(){
var D=Drama;
D.start({scene:function(t,S){D.stall(t,S,S.f.served);if(S.f.api)D.bubble(75,140,S.f.api,"#5DCAA5");},
  cam:D.stallCam,names:{O:"▶ 豚骨老板"},
  onLine:function(i,S){var f=S.f;f.coatB=true;f.jacket=3;f.served=i>=6;f.api=i===5?"REQUEST":(i===6?"RESPONSE":"");},
  onEnd:function(S){S.f.coatB=true;S.f.jacket=3;S.f.served=true;},
  endText:"未完待续……下集：运河城，前端和后端是什么？",
  lines:[
["N","Nakasu. Back to the ramen stall.","中洲。回到拉面屋台。","wide",""],
["A","Our app needs weather data. We need an API.","我们的 App 需要天气数据。需要一个 API。","A",""],
["B","What is an API?","什么是 API？","B",""],
["O","Look at me. I am an API.","看着我。我就是 API。","Ox","flash"],
["T","API 就像服务员","你点单（request），服务员去厨房拿，再把菜端回来（response）。程序之间就是这样对话","T","pop","An API is like a waiter."],
["O","You send a request: one ramen.","你发一个请求：一碗拉面。","O",""],
["O","I send a response: one ramen. Hot.","我返回一个响应：一碗拉面。热的。","O",""],
["T","request 请求 / response 响应","一问一答。调用 AI 的 API 也是：发 request，收 response","T","pop","Request. Response."],
["A","Can you give me an example?","能举个例子吗？","A",""],
["B","Request: is it cloudy? Response: yes, always.","请求：是阴天吗？响应：是，永远是。","Bx","blush"],
["T","Can you give me an example?","听不懂解释时最好用的一句，问人问 AI 都好使","T","pop","Can you give me an example?"],
["A","How much does your API cost?","你的 API 多少钱？","A",""],
["O","Ten thousand yen. Per request.","一万日元。每次请求。","Ox","flash"],
["A","That's a very expensive API!","这 API 也太贵了！","Ax","shock"],
["T","cost = 花费 / per request = 按次","很多 AI 的 API 真的是按次或按量收费，不过没有豚骨这么贵","T","pop","How much does it cost?"]]});
})();
