;(function() {
  chrome.contextMenus.create({
    "title": "使用迅雷离线下载",
    "contexts": ["link"],
    "onclick": function(info, tab) {
      window.open("http://lixian.vip.xunlei.com/lixian_login.html?furl=" + info.linkUrl);
    }
  });
})();
