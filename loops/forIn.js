let student = {
    name: "Ronit",
    age: 20,
    course: "Web Dev"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}
