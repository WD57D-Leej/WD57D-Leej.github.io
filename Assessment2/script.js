let studentList = {
    
    list1:'John',
    
    
    
    list2: 'Jane',
    
    
    list3: 'Joe',
    };
console.log(`${studentList.list1} is added to the student's list`);
console.log(`${studentList.list2} is added to the student's list`);
console.log(`${studentList.list3} is added to the student's list`);
console.log('There are total number of 3 students in the students list.');

function list(studentList)
{
    console.log(studentList.list1);
    console.log(studentList.list2);
    console.log(studentList.list3)   
}
list(studentList);

let listEnrolle = ('');
function list_2(studentList)
{
    if (listEnrolle.toLowerCase() == studentList.list3.toLowerCase()) 
    {
       console.log(`${studentList.list3} is an Enrollee`);
       
    }
    else 
    {
        console.log(`${studentList.list3} not found in the list`);
        
    }
}
list_2(studentList);

let Section = ['Jane - Section A','Joe - Section A','John - Section A'];
console.log(Section);

function Section_A(Section)
{
    console.log(`Student ${Section[0]}`);
    console.log(`Student ${Section[1]}`)
    console.log(`Student ${Section[2]}`)
}
Section_A(Section);

delete studentList.list3
console.log('Joe was removed from the students list');
console.log(studentList);

const studentGrades = [
	{ studentId: 1, Q1: 89.3, Q2: 91.2, Q3: 93.3, Q4: 89.8 },
	{ studentId: 2, Q1: 69.2, Q2: 71.3, Q3: 76.5, Q4: 81.9 },
    { studentId: 3, Q1: 95.7, Q2: 91.4, Q3: 90.7, Q4: 85.6 },
	{ studentId: 4, Q1: 86.9, Q2: 74.5, Q3: 83.3, Q4: 86.1 },
	{ studentId: 5, Q1: 70.9, Q2: 73.8, Q3: 80.2, Q4: 81.8 }
];
for (let i = 0; i<studentGrades.length;i++)
{
    let average = (studentGrades[i].Q1 + studentGrades[i].Q2 + studentGrades[i].Q3 + studentGrades[i].Q4)/4;
    console.log(average.toFixed(1));
}

let people = [
    {
        name: 'John',
        age: 30,
        gender: 'male'
    },
    {
        name: 'Jane',
        age: 25,
        gender: 'female'
    },
    {
        name: 'Bob',
        age: 40,
        gender: 'male'
    }
];
people.push({name:'Abdul', age: 22, gender:'LGBTQRST'})
console.log(people);

