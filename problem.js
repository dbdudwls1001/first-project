// 함수문제1
// function greet(name){
//     console.log("안녕 내이름은" ,name, "야");
//     return name;
// }
// let input = greet("에밀리아");
// console.log(input);
//함수문제2
// function meetAt(year,month,day){
//    if(day){
//     return year+"/"+month+"/"+day;
//    }else if(month){
//     return year+"년"+month+"월";
//    }else if(year){
//     return year+"년"
//    }   
// }
// let a = meetAt(2022);
// console.log(a);
//함수문제3
// let min = [100,200,3,0,2,1];

// function findSmallestElement (arr){
//     let min = arr[0];
//     if(arr.length === 0 ){
//         return 0;
//     }else {
//         for(let i =0; i < arr.length; i++){
//             if(min > arr[i]){
//                 min = arr[i];
//             }
//         }
//         return min;
//     }
// }
// let a = findSmallestElement(min);
// console.log(a);
//함수 문제 4
// let unit = [50000, 10000, 5000, 1000, 500, 100, 10]
// function findSmallestMony(mony){
//     for(let i = 0; i < unit.length; i++){
//         let num = Math.floor(mony/unit[i]);
 
//         console.log(unit[i] + "x" + num);
//         mony = mony - (unit[i]*num);
//     }
// }
// findSmallestMony(12300);
// let unit = [50000,10000,5000,1000,500,100,50,10];
// function atmMosin(money){
//     for(let i = 0; i<unit.length; i++){
//         let num = Math.floor(money/unit[i]);
//         console.log(unit[i],"x",num);
//         money = money-(unit[i]*num);
//     }
// }
// atmMosin(12300)
// function meetAt(year,month,date){
//      if(date){
//         return `${year}/${month}/${date}`;
//     }else if(month){
//         return `${year}년 ${month}월`;
//     }else if(year){
//         return `${year}년`;
//     }
// }
// console.log(meetAt(2022,1,7));
// function findSmallestElement(arr){
//     if(arr.length == 0){
//         return 0;
//     }
//     let min = arr[0];
//     for(let i =0; i < arr.length; i++){
//         if(min>arr[i]){
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(findSmallestElement([100,200,3,0,2,1]));
// let unit = [50000,10000,5000,1000,500,100];
// function giveMeChange(money){
//     for(let i =0; i < unit.length; i++){
//         let num = Math.floor(money/unit[i]);

//         money = money - (unit[i]*num);
//         console.log(`${unit[i]}x${num}`);
//     }
//     return money;
// }
// giveMeChange(12300);
