

//  https://github.com/Mahy-460/assignment.js


/*--------------------------------kilometerToMeter-----------------------------------*/


function kilometerToMeter(kilometer){
        var total =  kilometer * 1000;  // 1 kilometer = 1 meter
        return total;
}

var kilometer = 12;
var result = kilometerToMeter(kilometer);
console.log(result);


/*-------------------------------budgetCalculator--------------------*/



function budgetCalculator(num1,num2,num3){
 
     if(num1){
         var watch = num1 * 50;     // watch
         var add1 = watch;
     }
     if(num2){                      // phone
         var phone = num2 * 100;
         var add2 = phone;
         var add3 = add1 + add2;
     }
     if(num3){
         var laptop = num3 * 500;   // laptop
         var add3= laptop;
         var total = add1 + add2+ add3;
     }
     return total;
}

var result = budgetCalculator(2,2,2);
console.log(result);






/*------------------------------hotelCost-------------------------*/

function hotelCost(days){          
    var day = 0;
    if(!(days > 0)){
        return "undifind";
    }
    if(days <= 10){
        day = days * 100;
    }
    else if(days <= 20){
        var firstPart = 10 * 100;
        var reming = days - 10;
        var secondPart = reming * 80;
        day = firstPart +  secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var reming = days - 20;
        var thardPart = reming * 50;
        day = firstPart + secondPart + thardPart;
    }
   return day
}

var result = hotelCost(21);
console.log(result);

/*-----------------------------------------megaFriend--------------------------*/

function megaFriend(frinds){
    var max = [0];
for(var i = 0; i < frinds.length ; i++){
    var element = frinds[i];
    if(max.length < frinds[i].length){
        max = frinds[i];
    }
 
}
return max;
}

var frinds = ["mahy Hassan ","laboni","albarte"];
var result  = megaFriend(frinds);
console.log(result);


/*----------------------------------------------Finished-------------------------*/