//import fetch from 'cross-fetch';
//import axios from 'axios' 
/* import Usuario from './arquivo1';
import {somaZ,num1,obj1,num2} from './arquivo1';
const Arquivo2 = require('./arquivo2');

import {divisao} from './arquivo1' */
//const fetch = require('cross-fetch');
//const axios = require('axios')

// uso do require
//console.log(Arquivo2.x)

// import export
//Usuario.writeName();
//console.log(obj1, num1,divisao(2,3), num2, somaZ(1,2,3,4,5,6))
/* let obj = {
  name: "fabio",
  cpf: "444.333.222-40",
  soma(a, b) {
    return a + b;
  },
};
console.log(obj);
console.log(obj.name);
console.log(obj["cpf"]);
console.log(obj.soma(2, 3));

class Obj2 {
  constructor(nameNew, cpfNew) {
    this.name = nameNew;
    this.cpf = cpfNew;
  }
  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }

  soma(a, b) {
    return a + b;
  }
}
let Objeto2 = new Obj2("fabio", "444.333.222-40");
console.log(Objeto2.getName, Objeto2.cpf);

let Obj3 = class {
  constructor(nameNew, cpfNew) {
    this.name = nameNew;
    this.cpf = cpfNew;
  }
  soma(a, b) {
    return a + b;
  }
};
class Obj4 {
  metodo1() {
    console.log("metodo1");
  }
}
let obj4 = new Obj4();

let objClass = new Obj3("fabio", "444.333.222-40");
console.log(objClass.name, objClass.cpf, objClass.soma(2, 4));
// heranças
class Usuario {
  constructor(name, cpf) {
    this.name = name;
    this.cpf = cpf;
  }
  buscarUsuario(name) {
    console.log(name);
  }
}
class Professor extends Usuario {
  constructor(name, cpf, siape) {
    super(name, cpf);
    this.siape = siape;
  }
  colocarNotas() {
    console.log("colocarNotas");
  }
}
class Aluno extends Usuario {
  constructor(name, cpf, matricula) {
    super(name, cpf);
    this.matricula = matricula;
  }
}
let fabio = new Professor("fabio", "444.333.222-40", "12345");
console.log(fabio.name, fabio.cpf, fabio.siape);
console.log(fabio.buscarUsuario("jose"));
let objAluno = new Professor("Jussara", "444.333.222-50", "2222222222222222");
console.log(objAluno.name, objAluno.cpf, objAluno.matricula);

/// var let e const
let name = 100;
let name2 = 10;
let x;
var y;
const z = 100;
const obj2 = {
  name: "fabio",
};

obj2.name = "jose";
console.log(obj2.name); */

// arrow function
/* let soma = function (a,b){
  return a + b
}
let soma3 = (a,b)=> a + b */

/* function media (callback){
  let result = callback(2,3)/2
  console.log(result);
}

media (soma3);


let nums = [1,2,3,4,5]
let soma444 = 0;
let media2 = nums.reduce((result,valorAtual,index, nums)=>{
  soma444 = soma444 + valorAtual;
  if(index == nums.length - 1){
    result = soma/nums.length
  }
  return result
},0);

console.log(media2)

let array= [
  'fabio',
  'jose',
  'jussara'
] */
/* 
let tamanhos = array.map((elemento)=>elemento.length)

console.log(tamanhos) 

//valores default
let somaX = (a,b=0) => console.log(a+b)

somaX(5) */

/* // escopo var x let
if (true) {
  let n = "nome";
  var n1 = "fabio";
  console.log(n);
  console.log(n1);
}
console.log(n1); */
//console.log(n);

// desestruturação
/* const user = {
  name:'fabio',
  cpf:'111.222.333-55',
  address:{
    street:'coronel seliano',
    number:45
  }
}
const nameX = user.name;
const cpfX = user.cpf;
const streetX = user.address.street */
//console.log(nameX,cpfX,streetX);

/* const {name} = user;
console.log(name); */

/* const {name,cpf,address:{street,number}} = user;
console.log(name,cpf,street,number)

function write(objeto){
  console.log(objeto.name,objeto.cpf,objeto.address.street)
}
write(user);

function write2({name,cpf,address:{street}}){
  console.log(name,cpf,street)
}
write2(user) */

/* //rest
const user2 = {
  name:'fabio',
  birth:35,
  cpf:'111.222.333-55',
  address:{
    street:'coronel seliano',
    number:45
  }
}
const {name, ...props} = user2;
console.log(name,"resto: ", props)

function soma (...nums){
  console.log(nums)
  return nums.reduce((soma,elementoAtual) => soma + elementoAtual,0)
} */

//console.log(soma(1,2,3,4,5,6,7,8,9))
/* 
//spread
const user3 = {
  name:'fabio',
   birth:35,
  cpf:'111.222.333-55',
  address:{
    street:'coronel seliano',
    number:45
  }
}
console.log(user3)
const user4 = {...user3,name:'gabriel',cnh:11111}// pois não pode ter duas propriedades iguais
console.log(user4)
 */
// template literals
/* 
const nomeCompleto = `fabio ${sobrenome}`
console.log(nomeCompleto)
// sintaxe curta de objeto
const namey = 'fabio';
const user5 = {
  namey,
  cpy:'111.222.33-44'
}
console.log(user5)
 */


// asyn /await
/* async function soma(a, b) {
  return a + b;
}

async function media(callback, a, b) {
  let soma = await callback(a, b);
  let media = soma / 2;
  console.log(media);
}
try {
  media(soma, 2, 3);
} catch (error) {
  console.error('erro no cálculo da média',error);
}

async function firstLetterToUpper(string) {
  let firstLetter = string.charAt(0);
  let newString = firstLetter.toUpperCase() + string.slice(1);
  return newString;
}

async function reverseString(string) {
  let stringReverse = string.split("").reverse().join("");
  return stringReverse;
}

async function addHelloToString(string) {
  let newString = string + " - Hello World";
  return newString;
}

async function write() {
  try {
    let upperValue = await firstLetterToUpper("hcode");
    console.log(upperValue);
  
    let reverseValue = await reverseString(upperValue);
    console.log(reverseValue);
  
    let helloValue = await addHelloToString(reverseValue);
    console.log(helloValue);
  } catch (error) {
    console.error('error na impressão',error)
  }
 
}
write() */

/* async function getGameByName(name) {
  try {

      let result;
      result = await fetch(`https://api.github.com/users/${name}`);

      result = await result.json();

      console.log(result);

  } catch (error) {
    console.log(err)
      console.error(error);
  }
}
getGameByName('fabioabrantes') */

/* class Api{
  static async getUserInfo(name){
    try {
      const response = await axios.get(`https://api.github.com/users/${name}`)
      console.log(response)
    } catch (error) {
      console.warn('erro na api')
    }
    
  }
}
Api.getUserInfo('fabioabrantes') */