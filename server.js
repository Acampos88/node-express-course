/*The first line gives you access to the express library by searching your node_modules for "express". The next creates an instance of the express constructor, which we will name "app".
 */
const express = require('express');
const app = express();

/*So far, we have only made GET requests to our server. A POST request can send data securely through the request body. In order to make POST requests, first we need to include the "body-parser" library from our node_modules (included with express). Add these lines after the app variable: */
const bodyParser = require('body-parser');

app.use(bodyParser.json());


const mockUserData = [
    {
        name: 'Mark'
    },
    {
        name: 'Jill'
    }
]
app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

/*In Express, words with a colon in front of them in the url are treated as variables. You can access the value of each variable through req.params, like this*/
app.get('/users/:id', function (req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})


//Let's write a function to handle a POST request made to the 'login' //endpoint, as if a user was trying to log in:
app.post('/login', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})

/*The app.listen method will start up the server locally on the port you give as its first argument (in this case the base url is: http://localhost:8000)
 */
app.listen(8000, function () {
    console.log("server is running")
})
