/*The first line gives you access to the express library by searching your node_modules for "express". The next creates an instance of the express constructor, which we will name "app".
 */
const express = require('express');
const app = express();


/*The app.listen method will start up the server locally on the port you give as its first argument (in this case the base url is: http://localhost:8000)
 */
app.listen(8000, function () {
    console.log("server is running")
})
