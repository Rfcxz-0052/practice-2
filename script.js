const 文字欄 = document.querySelector(".文字欄");

文字欄.addEventListener("keyup", function(e){
    console.log(e.key);
});

//keyup 按下按鍵後放開
//key 回傳用戶按下的鍵名
