import fetch from 'cross-fetch';
import axios from 'axios' 

//const fetch = require('cross-fetch');
//const axios = require('axios')



async function getGameByName(name) {
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
//getGameByName('fabioabrantes') 

class Api{
  static async getUserInfo(name){
    try {
      const response = await axios.get(`https://api.github.com/users/${name}`)
      console.log(response.data)
    } catch (error) {
      console.warn('erro na api')
    }
    
  }
}
Api.getUserInfo('fabioabrantes')