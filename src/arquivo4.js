// asyn /await
async function soma(a, b) {
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
write() 