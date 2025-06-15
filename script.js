const 文字欄 = document.querySelector(".文字欄");

文字欄.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        console.log(文字欄.value);
    }
});

//keyup 按下按鍵後放開
//key 回傳用戶按下的鍵名
