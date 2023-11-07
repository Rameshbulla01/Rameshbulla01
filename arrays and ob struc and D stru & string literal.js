// BSICS of an ARRAY
// const student = ["jacob","jhon","jane"];
// console.log(student);
// // [ 'jacob', 'jhon', 'jane' ]

// const student = ["jacob","jhon","jane"];
// console.log(student[0]);
// jacob

// const student = ["jacob","jhon","jane"]; //literal way
// const stu = new Array("jacob","jhon","jane"); //Contructor way
// [ 'jacob', 'jhon', 'jane' ];

// length property
// const student = ["jacob","jhon","jane"];
// console.log(student.length);
// 3

// **METHODS OF AN ARRAY;
//  >PUSH
// const student = ["jacob","jhon","jane"];
// student.push("Jessica");
// console.log(student);
// [ 'jacob', 'jhon', 'jane', 'Jessica' ];

//  >POP
// const student = ["jacob","jhon","jane","Jessica"];
// student.pop();
// console.log(student);
// [ 'jacob', 'jhon', 'jane' ];

// >unshift
// const student = ["jacob","jhon","jane"];
// student.unshift("Jessica");
// console.log(student);
// [ 'Jessica', 'jacob', 'jhon', 'jane' ];

// >shift
// const student = ["jacob","jhon","jane","Jessica"];
// student.shift();
// console.log(student);

// >slice;
// const student = ["jacob","jhon","jane"];
// const result = student.slice();
// console.log(result);
// console.log(student);
// // [ 'jacob', 'jhon', 'jane' ]
// [ 'jacob', 'jhon', 'jane' ] //Nothinfg is changed it's copyed data frm original data

// >silece(stratindex,Endindex);
// const student = ["jacob","jhon","jane"];
// const result = student.slice(0,2);
// console.log(result);
// console.log(student);
// [ 'jacob', 'jhon' ];
// [ 'jacob', 'jhon', 'jane' ]; //What the values you have given in the slice it will copy that values;

// >splice
// const student = ["jacob","jhon","jane"];
// const result = student.splice(0,1);
// console.log(result);
// console.log(student);
// [ 'jacob' ]
// [ 'jhon', 'jane' ]; //What all the values you have given in the splice that will remove the orignal array;

// >splice(adding another eliments between 2 elemmts)
// const student = ["jacob","jhon","jane"];
// const result = student.splice(1,0,"Jessica"); // here the index will start from 1
// console.log(result,"Result");
// console.log(student,"Student");
// [] Result
// [ 'jacob', 'Jessica', 'jhon', 'jane' ] Student

// >splice(Deleting and add)
// const student = ["jacob","jhon","jane"];
// const result = student.splice(1,1,"Jessica");
// console.log(result,"Result");
// console.log(student,"Student");
// [ 'jhon' ] Result
// [ 'jacob', 'Jessica', 'jane' ] Student

// **ARRAY PART-2

// >includes
// const student = ["jacob","jhon","jane"];
// const result = student.includes('jane'); //It was a case sensitive method
//console.log(result);

//indexOf
// const student = ["jacob","jhon","jane"];
// const result = student.indexOf('jane') //wen you will give whout case sensitive iit will give you -1
// console.log(result);
// //2

// >Is Array
// const str = 'Hiiii'
// const student = ["jacob","jhon","jane"];
// const result = Array.isArray(student); //if it is array it will give the true otherwise false
// console.log(result);

// >Join(it will convert entaire array into string)
// const student = ["jacob","jhon","jane"];
// const result = student.join("-"); // if you want symbols in the output ex> jacob-jhon-jane 
// console.log(result); //jacob,jhon,jane
// console.log(typeof result); //string

// **String methods (strings is the squence of the charecter)

// const literalstr = "Hello"; // Literal-way
// const Contructor =  new String('Hiii');
// console.log(literalstr);
// console.log(Contructor);
// Hello
// [String: 'Hiii']

// >length property
// const student = ["jacob","jhon","jane"];
// const result = student.length;
// console.log(result);
//3

//charAt() Method;
// const student = "Hello"
// const result = student.charAt(3);
// console.log(result);
//L

//Includes Methods(in REAL TIME **);
// const student = "Hello"
// const result = student.includes("l");
// console.log(result);
//true

// >slice method
// const student = "Hello"
// const result = student.slice(1);
// console.log(result);
//ello

// >toLowercase & toUppercase
// const student = "Hello"
// // const result = student.toLocaleLowerCase();  //output>hello
// const result = student.toUpperCase(); //output > HELLO
// console.log(result);

// >trime 
// const student = "  Hello   " ;
// console.log(student); //Output   hello(with space);
// const result = student.trim();
// console.log(result); //Output Hello(without space);

// >split (it will conver string into array)
// const student = "Jane, jhone, jacob";
// const result = student.split(); //if you give "" each element have space
// console.log(result);
//[ 'Jane, jhone, jacob' ];


//** Objects in JS;

//data and methods
// const Obj = {
//     name : 'Jane',
//     age : 23,
//     location :  'Switcherland',
//     fullname: function(){
//         alert('my name is')
//     },
// }
// console.log(obj.fullname()); if you want to access use html file and conncet js

// console.log(Obj.name);

//console.log(obj["name"]);  if you want to access use html file and conncet js

//IF you want to store the multiple pursons data

// > array of objects
// const persons = [
//     {
//             name : 'Jane',
//             age : 23,
//             location :  'Switcherland',
//             fullname: function(){
//                 alert('my name is')
//             },
//         },
//         {
//             name : 'Jane',
//             age : 23,
//             location :  'Switcherland',
//             fullname: function(){
//                 alert('my name is')
//             },
//         },
// ];
// console.log(persons);

// Object Destructring
// const person = {
//     name:'jane',
//     age: 23,
//    location:'switcherland'
// };
// const {name,age,location}=person;


// console.log(name);
// const array = [2,4,'jane',4,'jhon'];
// const [n1,n2,name1,n3,name2] = array;
// console.log(name1);