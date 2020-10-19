module.exports ={
  x:10,
  soma(...nums){
    return nums.reduce((soma,elementoAtual) => soma + elementoAtual,0);
  },
  obj1:{
    name:'fabio',
    cpf:'111.222.333-44'
  }
}