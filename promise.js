let a = 3 

let result = await fetch('https://jsonplaceholder.typicode.com/users')
                   .then(result => console.log(result))
                   .catch(err => console.log(err));

                
console.log(a)
console.log(result);