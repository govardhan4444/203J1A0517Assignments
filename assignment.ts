//typescript types
let str :string="hello";
let num :number=17;
let bool:boolean=true;
let numbers: number[] = [1, 2, 3, 4, 5];
let person: [string, number] = ["Govardhan", 21];
enum Color {
    Red,
    Green,
    Blue
}
let chosenColor: Color = Color.Blue;

{
    console.log(str);
    console.log(num);
    console.log(bool);
    console.log(numbers);
    console.log(person);
    console.log("Chosen color:", chosenColor);
}
//question 2
//functions
function add()
{
let x=10;
let y=20;
console.log(x+y);
}
add();
//capitalize
function capitalizeString(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
let originalString: string = "hello";
let capitalizedString: string = capitalizeString(originalString);
console.log(capitalizedString); 

//question 3
//interfaces
interface Person
 {
    name: string;
    age: number;
    email: string;
}
let user: Person = 
{
    name: "Govardhan",
    age: 21,
    email: "bgr.doe@example.com"
};
console.log("Name:", user.name);
console.log("Age:", user.age);
console.log("Email:", user.email);

//question 4
//class

class Car {
    make: string;
    model: string;
    year: number;

    displayInfo(): void {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

// Example usage:
let myCar: Car = new Car();
myCar.make = "Audi";
myCar.model = "a6";
myCar.year = 2024;
myCar.displayInfo(); 

//question 5
//Generics
function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
}
let oa: number[] = [1, 2, 3, 4, 5];
let ra: number[] = reverseArray(oa);
console.log(ra); 

let sa: string[] = ["apple", "banana", "orange"];
let rsa: string[] = reverseArray(sa);
console.log(rsa); 


