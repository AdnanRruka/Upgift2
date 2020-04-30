const users = require('../users/users')


hello = (req, res) => {


  // const idFoundet = users.find(id =>{
  //   if(id === )
  // })
  response = {
    "Hello": "Adnan",
    "query": res.query,
    "params": res.params,
    "headers": res.headers
  }
  console.log(response.params)
  res.send(response);


};

module.exports = {
  hello: hello,
  params: hello
} 