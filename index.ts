// for compile configuration.
const test = { id: 5, name: "abc" };
const test2 = { id: 6, name: "hjdgfj" };
let test3;
test3 = "jjdjh";
//delete test3;
//test2.newprop = "this is new property";
console.log("hello world!", test, test2);


// for type inference
/*
let user = {};
user.name = "alice";
*/

type MyType1 = { a: number, b: string };
type MyType2 = { a: number, b: string };

let obj1: MyType2 = { a: 0, b: 'type2' };
let obj2: MyType1 = { a: 0, b: 'type1' };

//obj1 = obj2;
console.log(typeof (obj1) === typeof (obj2));

// type compatibility
interface Course {
    name: string;
    lessonCount?: number;
}
interface Named {
    name: string;
}
let named: Named = { name: 'Name goes here' };
let course: Course = {
    name: 'Components and Directives', lessonCount: 20
}

named = course;
course = named;

console.log(course);

//

//non nullable type
interface People {
    name?:string;
    address?: string;
}
let nonNullObj:People = {};
nonNullObj = null;
