function makeBuger(type, num){
    console.log("빵덮기");
    console.log("고기덮기");
    if(num < 1){
        console.log("주문안됨")
        return "재주문 요청"
    }
    if(type == "새우"){
        console.log("새우패티");
    }else if(type == "고기"){
        console.log("고기패티");
    }
    console.log("밑빵덮기");

    return "완료"
}

let result = makeBuger("새우", 0);
console.log("결과값", result);