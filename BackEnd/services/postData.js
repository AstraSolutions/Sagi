const axios = require('axios');


const postData = () => {
    var data = require('./getData.js')
    axios.post("/Api/Material", data)
    axios.get("/Api/Material")
}

