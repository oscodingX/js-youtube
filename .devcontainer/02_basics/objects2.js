//const tinderUser = new Object()
const tinderUser= {}

 tinderUser.id = "123qwe" 
 tinderUser.name = "sam"
 tinderUser.loggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "abc@gmail.com",
    fullName : {
        userfullname :{
            firstname : "pranay",
            lastname : "pareek"
        }
    }
}

//console.log(regularUser.fullName);

//const obj1 = {1:"a", 2:"b"};
//const obj2 = {3:"c", 4:"d"};
//const obj4 = {5:"e", 6:"f"};
//const obj3 = object.assign({} , obj1, obj2, obj4)

const course = {
    coursename : "js",
    price : "99",
    courseTeacher : "pranay"

}

//course.courseTeacher

const{courseTeacher} = course

console.log(courseTeacher);

