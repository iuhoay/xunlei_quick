;(function() {
  chrome.contextMenus.create({
    "title": "使用迅雷离线下载",
    "contexts": ["link", "selection"],
    "onclick": function(info, tab) {
      chrome.tabs.create({
        url: "http://lixian.vip.xunlei.com/lixian_login.html?furl=" + info.linkUrl
      });
    }
  });
})();
