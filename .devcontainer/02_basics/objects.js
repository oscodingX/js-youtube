//objects.literal

const mySym = Symbol("key1")

const JsUser = {
name : "pranay",
mySym : "mykey1",
location : "guwahati",
email : "pranay@google.com",
isloggedin : "false",
}

JsUser.greeting= function(){
    console.log("hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello Js user ,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());;



