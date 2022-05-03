'use strict'


// indexOf

const arr1 = [1,12,34,7]

function indexOf (arr1, item){

    for ( let i = 0; i < arr1.length; i++) {

        if ( arr1[i] === item ) {

            return console.log(i);

        }
    }

    return -1

};

indexOf(arr1,7);



// if (arr1.indexOf(5) === -1) console.log('Такого элемента нет');

// console.log(arr1.indexOf(7));



// lastIndexOf


const arr2 = [1,12,34,7,51,80]


function indexOf (arr2, item){

    for (let i = arr2.length-1 ; i >= 0; i--) {

        if ( arr2[i] === item ) {

            return console.log(i);

        }
    }

    return -1

};

indexOf(arr2,34);



// find

const arr3 = [51,80,4,61]

function find(arr3){

    for(let i = 0; i < arr3.length; i++){

        if (arr3[i] > 60 ){

            return arr3[i]
        }

    } return undefined;


}

console.log(

    find(arr3, function(item){

        return item ;

    })

           
);



// findIndex


const arr4 = [1,10,2,21]


function findIndex(arr4, callback){

    let result = -1;

    arr4.forEach(function(item, index, arr){

        if (callback(item, index, arr)){

            result = index;

        }

    })

   return result;
           
}

console.log(
    findIndex(arr4, function(index){
    return index

    })
);




// includes

const arr5 = [1,12,51,80,4,11]


function includes(arr5,item){

    for ( let i = 0; i < arr3.length; i++) {

        if ( arr5[i] === item ) {

            return console.log(true);

        }
    }

    return console.log(false) 

};

includes(arr5,12);


// every

let arrNum = [1,2,10,2,21]

function every(arrNum, callback){

  
    for(let i = 0; i < arrNum.length; i++){ 

        if(callback (arrNum[i])){
            
            return false;

        }

    }

    return true;
           
}

console.log(
    every(arrNum, function(item){

        return isNaN(item);
        

    })
);



// some

let arrNumb = [1,10,'lol']


function some(arrNumb, callback){

    let result = true;

    arrNumb.forEach(function(item, index, arr){

        if (callback(item, index, arr)){

            result = false;

        }

    })

   return result;
           
}

console.log(
    some(arrNumb, function(item){
    return isNaN(item)

    })
);
