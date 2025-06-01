let 分數 = 55;
let 及格 = 60;
let 出席率 = 0.9
if (分數 >= 及格 && 出席率 >= 0.8) {
    console.log("恭喜通過課程!");
}else if(分數 >= 及格 || 出席率 >= 0.8){
    console.log("通過，但需要補交作業");
}else{
    console.log("未通過課程");
}