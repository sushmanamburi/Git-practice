/*console.log("Hello World");

function add(a,b){
	return a+b;
}
console.log(add(5,6));

let mul = (a,b) => a*b;
console.log(mul(2,3));

let sub = (a,b) => a-b;
console.log(sub(5,3));*/
/*--------Arrow fns-------------------------*/

let x = {
	name : "sushma",
	y : function(age,handle){
		handle(age);
	},
done : function(){
	this.y(25, age => console.log(age+this.name))
}
}
x.done();

/*--------let-------------------*/

let a=10;
let y = function  x(){
   let a=20;
   console.log(a);
}
console.log(a);
y();

/*-------Default params-------------------*/
function some(name="sushma",age){
	if(!name) name = 'sushma'
   console.log("name is" + name + ", age is" + age);
}
some(null, 25);

/*-------Spread operator----------------*/
let first=[1,2,3];
let second=[4,5,6];

function add(a,b,c){
let result = a+b+c;
	console.log(result);
}

add(...first)
add(...second)

/*--------Destructuring----------------*/

function func1(){
return{
	name: 'sushma',
	age:25,
	city: 'Bentonville',
	state:'AR'
	  }
}
var {name,city} = func1();
console.log(name);
console.log(city);

/*-----import export modules----*/

export function mul(a,b){
	return a*b;
}

/*------ Promises-----*/

/*var prom = new Promise((resolve,reject)=>{
	
	setTimeout(()=>{
      if(true){
		resolve('Resolve executed');
	} else{
		reject('Reject executed');
	}
	},3000);
	
});
prom.then((data)=>{
	console.log(data);
	return foobar;
	throw new Error('error thrown');
}).
then((data)=>console.log('data is:', data));
prom.catch((error)=>console.error(error));*/

/*------Map & Weakmap ---------*/
/*API-- get(),set(),size,clear(),has()*/
var myMap = new Map();
myMap.set('name','sushma');
myMap.set('age', 25);

console.log(myMap.get('name'));
console.log(myMap.get('age'));
console.log(myMap.size);
console.log(myMap.has('name'));
console.log(myMap.has('city'));
//console.log(myMap.clear());

/* Iterators-- keys(),entries(),values()*/
 for(var key of myMap.keys()){
 	console.log(key);
 }

 for (var value of myMap.values()){
 	console.log(value);
 }

 for (var [key,value] of myMap.entries()){
 	console.log("keys are:" +key+ "values are:" +value);
 }

