const axios = require('axios');


const getData =() => { axios.get('https://us-west-2.data.tidbcloud.com/api/v1beta/app/dataapp-uYFCQhPa/endpoint/getMateriales/All',
{auth: 
    {
    username: 'C0OH2140',
    password: 'c1549ec8-d219-43c6-ae0a-f924ebf7302f',
    }
}).then((res)=> {
module.exports.data = res.data.data.rows

;
}
);
}

