/*function greetMe(){
    console.log("hello there.")
}
console.log("hello there.")
greetMe()

function greetperson(name){
    console.log("hello", name) //or "hello" + manu -> string concatnation
}
let n="manya"
greetperson(n)


let username=prompt("Can I have your name please?");
alert(username+", Welcome to my website.");

let resp=confirm("Do you want to continue?")
console.log(resp)*/



const clickbtn = document.getElementById('click-button');
//Getting control of html element in storing it in 35
clickbtn.addEventListener('click', function () {
    document.getElementById('output').textContent = "The button was clicked...";
});

const outputArea = document.getElementById('output');
const hovercontrol = document.getElementById('contact');

hovercontrol.onmouseenter = function () { //ISME FUNCTION ASSIGN HOTA H
    outputArea.textContent = "Your mouse in on Contact section";
}

//OR

hovercontrol.addEventListener('mouseleave', () => { //for enter: mouseenter
    outputArea.textContent = "";
})


const formcontrol = document.getElementById('contact-form');


formcontrol.addEventListener('submit', function (event) {
    event.preventDefault(); //stop page reload

    //Fetch the username written by the user and store it in a var
    //Fetch the pw written by the user and store it in a var
    //Print the same in the website output area

    //const name = document.getElementById('name');//this will give control
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;
    const date= new Date().toISOString(); //converted to string
    
    console.log(name);
    console.log(email);
    console.log(msg);

    const response= {name, email, msg, date}; //RESPONSES
    console.log(response)

    //Create a reference to your dummy database
    //What will your dummy database actually be?
    //It will be a list stored on chrome's localstorage (cache)

    //When you run the program for the first time dummydatabase will be created as an empty list,from the next time it wont be created, it will just be accessed and the control will be stored in the javascript variable "dummydatabase"
    const dummydatabase= JSON.parse(localStorage.getItem('DummyDatabase')) || [];  // || is OR, && is AND
    console.log(dummydatabase);
    //STORING the user response in dummydatabase
    dummydatabase.push(response);
    console.log(dummydatabase);
    
    
    outputArea.textContent = `Name: ${name} | Email: ${email} | Message: ${msg}`;

})


//MAKE ADMIN LOGIN WORK

function showAdminSection() { //aur connect kiya h isko with a #admin html
    document.getElementById('admin-login').style.display = "block";
}

document.getElementById("admin-form").addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const pw = document.getElementById('pw').value;

    outputArea.textContent = `Username is ${username} and pw is ${pw}`;

    const storedusername = "admin";
    const storedpassword = "password";
    if (username == storedusername && pw == storedpassword) {
        alert('Welcome, login Successful!');
        document.getElementById('admin-login').style.display= "none";

        document.getElementById('user-msgs').style.display="block";
    
        //call the fn to display user messages
    }
    else{
        alert('Login Unsuccessful! Please try again..')
    }

})


//MAKE YOUR CONTACT ME SECTION STORE RESPONSES
//iska connection wgera hum upr kr chuke h