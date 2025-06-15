const 文字欄 = document.querySelector(".文字欄");
const 清單 = document.querySelector(".清單");
const 按鈕 = document.querySelector(".按鈕");

function 新任務() {
    if(文字欄.value === ""){
        return;
    }
    const 任務 = document.createElement("li");
    任務.innerHTML = `
        <input type="checkbox" class="打勾方塊">
        <label>${文字欄.value}</label>
        <button class="垃圾桶">🗑</button>
    `
    清單.append(任務);  //用 append (附加) 的語法 把新任務放到清單的底部
    文字欄.value = ""; //把文字欄清空，方便用戶輸入下一個任務
};

按鈕.addEventListener("click", 新任務);

文字欄.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        新任務();
    }
});

