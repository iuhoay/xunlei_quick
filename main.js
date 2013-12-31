;(function() {
  chrome.contextMenus.create({
    "title": "使用迅雷离线下载",
    "contexts": ["link", "selection"],
    "onclick": function(info, tab) {
      var link = get_link(info);
      if (link) {
        chrome.tabs.create({
          url: "http://lixian.vip.xunlei.com/lixian_login.html?furl=" + link
        });
      }
    }
  });

  function get_link(info) {
    if (info.selectionText) {
      return info.selectionText;
    } else if (info.linkUrl) {
      return info.linkUrl;
    }
  }
})();
