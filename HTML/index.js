// Link html to JS :   <script src = " link "></script>
// for print : console.log()
// var a = 5      Redeclare and Reassign
// let b = 6      not Redeclare but do reassign ,,, not access outside the block
// const c = 10   not redeclare not reassign ,,, not access outside the block

/*
var a = 5
var a = 8

let b = 56
b = 67

const c =73

console.log(a)
console.log(b)
console.log(c)

let firstName = 'tony'
let lastName = 'stark'
console.log(`${firstName} ${lastName}`)


// == value compare
console.log(5=='5')
// === datatype compare
console.log(5=='5')

// TERNARY OPERATOR :-
let user=true
user?console.log('hello'):console.log('hii')

// ARRAY :-
// forinloop : index print
let arr= [1,2,3,4,'s','hello',true]
for(let i in arr)
{
console.log(i)
}

// forofloop : value print
for(let i of arr)
{
console.log(i)
}

// function
function add()
{
    console.log('hr')
}
add()
add()

// function
function adds()
{
    console.log('hrr')
}
adds()


// arrow function
const ad=(a)=>
{
    console.log('hr')
}
ad(5)

//foreach function : new arr not creat, update done in given arr
arr.forEach( (a)=>
{
    console.log(a)
    //console.log(b)
    //console.log(c)
} )

// map function : update done in new arr creat
arr.map( (a)=>  
{
    console.log(a)
    //console.log(b)
    //console.log(c)
} )

let new1=arr.map( (a)=>
{
    return a
} )
console.log(new1)

//filter function : go full arr
let new2=arr.filter((a)=> 
{
    return a>2
})
console.log(new2)


// find function : condition find then stop
let new3=arr.find((a)=>
{
    return a>2
})
console.log(new3)


// SUM : 
let arrs=[1,2,3,4,5,6]
let new4=arrs.reduce((a,b,c,d)=>
{
return a+b
})
console.log(new4)

// function call after var. declare
function outer()
{
    inner()
    var num =5
    function inner()
    {
        console.log(num)
    }
}
outer()

// var. declare after function call
function outers()
{
    var num =5
    inners()
    function inners()
    {
        console.log(num)
    }
}
outers()

  
function outerss(a)
 {
    console.log('outerss')
    a()
 }
 function innerss()
 {
    console.log('innerss')
 }
outerss(innerss)


// function jo ek function return kare
function outerr()
    {
        console.log('outerr')
        function innerr()
        {
            console.log('innerr')
        }
        return innerr
    }
let i=outerr()
i()

console.log(x);
var x = 0;

var y=1;
console.log(y);

// console.log(z);  error occur
// let z = 2;

let g = 2;
console.log(g);
*/


// FIND STRING IN A ARRAY :-
// let ar=[1,2,3,4,5,true,false,'hello','hiii']
// function get(ar)
// {
//     let res=[]
//     for(let item of ar)
//     {
//         if(typeof item==='string')
//         {
//             res.push(item)
//         }
//     }
//     return res
// }
// console.log(get(ar))

// FIND NUMBER IN A ARRAY :-
// let ary=[1,2,3,4,5,true,false,'hello','hiii']
// function gets(ary)
// {
//     let res=[]
//     for(let item of ary)
//     {
//         if(typeof item==='number')
//         {
//             res.push(item)
//         }
//     }
//     return res
// }
// console.log(gets(ary))


// OPTIMIZATION WAY OF FIND ONE DATATYPE LIST IN ARRAY :-
// let array=[1,2,3,4,5,true,false,'hello','hiii']
// function getstring(item)
// {
//     return typeof item==='string'
// }
// function getnumber(item)
// {
//     return typeof item==='number'
// }
// function getboolean(item)
// {
//     return typeof item==='boolean'
// }
// function gett(array,fn)
// {
//     let ress=[]
//     for(let item of array)
//     {
//         if(fn(item))
//         {
//             ress.push(item)
//         }
//     }
//     return ress
// }
// console.log(gett(array,getstring))
// console.log(gett(array,getnumber))
// console.log(gett(array,getboolean))

// CALLBACK FUNCTION :- 
// function callback(num,fn)
// {
//     return fn(num)
// }
// function boolean(num)
// {
//     return typeof num ==='boolean'
// }
// console.log(callback(true,boolean))


// function outer()
// {
// }
// let user = new outer()
// console.log(user)

// function outers(user,users)
// {
//     this.userName=user,
//     this.userLastName=user,    
// }
// let users = new outers()
// console.log(users)