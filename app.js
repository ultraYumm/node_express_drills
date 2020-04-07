const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));

app.get('/lotto', (req, res) => {
    
    
  const { numbers } = req.query
  console.log(numbers)

  const numbersArray = () => {
    var newArray = []
    var i;
    for (i = 0; i < 6; i++) {
        newArray.push(parseInt(numbers[i])) 

    }
    return newArray

}

console.log("Hello")
console.log(numbersArray())
  
  
  const randomArray = () => {
      var newArray = []
      var i;
      for (i = 0; i < 6; i++) {
          newArray.push(Math.floor(Math.random(i) * 19)+1) 
  
      }
      return newArray
  
  }
  
  const random = randomArray() 
  console.log(random)
  
  
  var match = numbersArray().filter((num) => random.includes(num));
  console.log(match)
  
  const message = () => {
      if (match.length === 6) {
        return "Wow! Unbelievable! You could have won the mega millions!"
      }
      else if(match.length === 5) {
        return "Congratulations! You win $100!"
      }
      else if(match.length === 4) {
        return "Congratulations, you win a free ticket"
      }
      else return "Sorry, you lose"
      
    }
  
  res.send(message());
  })
  

  app.listen(8080, () => {
    console.log('Express server is listening on port 8080!');
  });




  /*app.get('/sum', (req, res) => {
    //res.send('Hello sum test!');
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const add = a + b

    const message = `The sum of ${a} and ${b} is ${add}.`;

    res.send(message);



  }); */


 /* app.get('/cipher', (req, res) => {
    
    
    const text = req.query.text;
    const textArray = text.split('')
    const shift = parseInt(req.query.shift);
    function encrypt () {var newArray = []
        var i;
        for (i = 0; i < textArray.length; i++) {
          newArray.push(textArray[i].charCodeAt(0))
      
        }
        console.log(newArray)
      
        var newLetterArray = []
        var y;
        for (y=0; y < newArray.length; y++) {
          newLetterArray.push(String.fromCharCode(newArray[y]+shift))
        }
      
        console.log (newLetterArray)
      
        var newWord = newLetterArray.join("")
      
        return newWord
      
      
      }

    const message = `The text is ${encrypt()}.`;

    res.send(message); */



/*const number = parseInt(req.query.number);

const pickedArray = number;


const pickedArray = () => {
    var newArray = []
    var i;
    for (i = 0; i < 6; i++) {
        newArray.push(number + i) 
    }
    return newArray

  
}

const picked = pickedArray 
console.log(picked)


const randomArray = () => {
    var newArray = []
    var i;
    for (i = 0; i < 6; i++) {
        newArray.push(Math.floor(Math.random(i) * 19)+1) 

    }
    return newArray

}

const random = randomArray() 
console.log(random)


var match = picked.filter((num) => random.includes(num));

const message = () => {
    if (match.length === 6) {
      return "Wow! Unbelievable! You could have won the mega millions!"
    }
    else if(match.length === 5) {
      return "Congratulations! You win $100!"
    }
    else if(match.length === 4) {
      return "Congratulations, you win a free ticket"
    }
    else return "Sorry, you lose"
    
  }

res.send(message());
})

*/
