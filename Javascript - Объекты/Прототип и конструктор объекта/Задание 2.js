function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const student1 = {
    name: "Viktor", 
    ownCity: "Schyolkovo",
    age: 44,
    course: "Frontend"
  };

  console.log(showProps(student1, "shame"));  // false
  console.log(showProps(student1, "name"));  // true