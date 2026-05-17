const API_URL =
'https://script.google.com/macros/s/AKfycbwg2WwLbqneXa7a5mBWd7gVdObGh74yoq72PgS_PM1KnnEtSTZsKZOV9p7KrMa9KIQ/exec';


async function login(){

const fullname=
document
.getElementById(
'fullname'
)
.value;

const pin=
document
.getElementById(
'pin'
)
.value;

const response=
await fetch(
API_URL,
{

method:'POST',

body:JSON.stringify({

action:'login',

data:{

fullname,
pin

}

})

}

);

const result=
await response.json();

alert(
result.message
);

}
