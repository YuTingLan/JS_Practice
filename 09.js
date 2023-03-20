// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

// JS string 關鍵字搜尋與擷取

// function removeAnchor(url) {
//     // 實作寫在這裡
//     const anchorIndex = url.indexOf('#'); // 找出錨點的位置
//   if (anchorIndex == -1) {
//     // 如果沒有錨點，直接回傳原本的網址
//     return url;
//   } else {
//     // 使用substring回傳 0-anchorIndex 的字元
//     return url.substring(0, anchorIndex);
//   }
// }

function removeAnchor(url) {
  // 實作寫在這裡
    //用split把＃當做切割點, 再回傳字串[0]
    return url.split('#')[0];
}

  console.log(removeAnchor("5xruby.tw")) // 印出 5xruby.tw
  console.log(removeAnchor("5xruby.tw/#about")) // 印出 5xruby.tw/
  console.log(removeAnchor("5xruby.tw/courses/?page=1#about")) // 印出 5xruby.tw/courses/?page=1