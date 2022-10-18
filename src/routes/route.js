const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

//example 1)
router.get('/movies',function(req, res){
    console.log("The path params in the request are : ", req.params)
    let movies = [ "The Shining", "Insendies" ,"Rang de Basanti","Finding Nemo"]
    res.send(movies)
})
//example 2)

 let movies =  [ "The Shining", "Insendies" ,"Rang de Basanti","Finding Nemo"]
 router.get('/movies/:indexNumber',function(req,res){
const myParams = req.params.indexNumber
console.log(movies[myParams])
res.send(movies[myParams])

})

//example 3)
router.get('/movies/:indexNumber',function(req , res){
    let myParams =req.params.indexNumber
    const movies = [ "The Shining", "Insendies" ,"Rang de Basanti","Finding Nemo"]
    let a = movies[myParams]
    // if (movies.length>myParams){res.send(a)}
    // else {res.send("this data is not valid")}
   // movies.length>myParams?res.send(a):res.send("this data is not valid");
   if(movies.length > myparam ){
       res.send(a)
   }else{
       res.send("this data is not valid")
   }
}

    //postman= localhost:3000/movies/0
    //console.log("The path params in the request are : ", myParams)
    //res.send('The movie name is ' + myParams.indexNumber )
)
//example 4)




// Example 1 fstudents/:studentNameor path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router