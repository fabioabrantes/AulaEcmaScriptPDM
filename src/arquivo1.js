export let num1=10;
export let num2 = 20;
export let obj1 = {
  name:'fabio',
  birth:35,
  cpf:'111.222.333-55',
  address:{
    street:'coronel seliano',
    number:45
  }
}

export let somaZ = (...nums) => nums.reduce((soma,elementoAtual) => soma + elementoAtual,0);

export async function divisao(a,b){
  let result;
  if(b<0){
    result =0;
  }else{
    result = a/b
  }
  return result;
  
}

class User {
  constructor(nameX){
    this.name= nameX
  }
   writeName(){
    console.log(this.name);
  }
}
const Usuario = new User('fabio')
export default Usuario;

