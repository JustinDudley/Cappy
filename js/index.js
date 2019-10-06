console.log("connection success");

function GetNamePhone() {
    var NamePhoneCtrl = document.getElementById("userNbr");
    console.log("userNbr is " + NamePhoneCtrl.value + ". Just sayin\'!");
    var userIdReq = NamePhoneCtrl.value;
    
    User = ""; //this will actually be an object, not a string
    for (user of users) {
        if (user.id == userIdReq) {
            User = user; 
        }
    }
    
    var resultCtrl = document.getElementById("result");
    resultCtrl.innerHTML = `${User.firstname}, ${User.phone}`; 

}
var users = [
    {
        "id": 15,
        "username": "McZinger",
        "password": "IWillMcZingYou",
        "firstname": "Margaret",
        "lastname": "Sprigg-Dudley",
        "phone": "513-555-1212",
        "email": "margaret@gmail.com",
        "isReviewer": false,
        "isAdmin": false
    },
    {
        "id": 16,
        "username": "airplaneWatcher",
        "password": "plane",
        "firstname": "Max",
        "lastname": "Sprigg-Dudley",
        "phone": "513-555-8888",
        "email": "max@gmail.com",
        "isReviewer": false,
        "isAdmin": false
    },
    {
        "id": 17,
        "username": "dudder",
        "password": "DoNotWant!",
        "firstname": "Justin",
        "lastname": "Dudley",
        "phone": "513-555-9998",
        "email": "jdudley@aol.com",
        "isReviewer": false,
        "isAdmin": false
    },
    {
        "id": 18,
        "username": "sprague",
        "password": "nevergiveup",
        "firstname": "Susan",
        "lastname": "Sprigg",
        "phone": "510-434-9999",
        "email": "smsprigg99@gmail.com",
        "isReviewer": false,
        "isAdmin": false
    },
    {
        "id": 19,
        "username": "threelegs",
        "password": "mySonIsAnActorToo",
        "firstname": "Geoff",
        "lastname": "Hoyle",
        "phone": "415-666-1111",
        "email": "funguy@gmail.com",
        "isReviewer": false,
        "isAdmin": false
    },
    {
        "id": 20,
        "username": "clownfounder",
        "password": "onceamime",
        "firstname": "Larry",
        "lastname": "Pisoni",
        "phone": "415-777-9090",
        "email": "clown@aol.com",
        "isReviewer": false,
        "isAdmin": false
    },
    {
        "id": 21,
        "username": "cointrick",
        "password": "nowyouseeit",
        "firstname": "Jaffo",
        "lastname": "Noname",
        "phone": "510-000-0000",
        "email": "findme@gmail.com",
        "isReviewer": false,
        "isAdmin": false
    }
];