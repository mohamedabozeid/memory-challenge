const Utils = {
    range: function(len){
      const result = [];
      for(let i=0; i<len; i++) result.push(0);
      return result;
    },
    randomNumbers: function(min, max, count){
      const result = [];
      while(result.length < count){
        let num = this.generateRandom(min,max);
         if(result.indexOf(num) === -1) result.push(num);
      }
      
      return result;
    },
    generateRandom: function(min, max) {
      return Math.floor((Math.random()* (max-min+1)) + min);
    }
  }

  export default Utils;