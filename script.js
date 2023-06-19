// question-1

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 
          
          studentRecords.map((item)=>{
               console.log(item.name.toUpperCase())
          }) 

        //   question-2

        let studentmarks = studentRecords.filter((item)=>{
            return(item.marks>50)
       })
       
       console.log(studentmarks)

    //    question-3
    let studentid = studentRecords.filter((item)=>{
        return(item.marks>50)
   })
  let name1 = studentid.filter((stdname)=>{
            return (stdname.id>120)
        })
   console.log(name1)

//    question-4
let sum = studentRecords.reduce((prevalue,curvalue)=>{
    return prevalue+=curvalue.marks
},0)
console.log(sum)

// question-5

let studentmark1 = studentRecords.filter((item)=>{
    return(item.marks>50)
})
let name2 = studentmark1.map((stdname)=>{
        return (stdname.name)
    })
console.log(name2)

//  question-6

let studentid1 = studentRecords.filter((item)=>{
    return(item.id>120)
})
let sum1 = studentid1.reduce((prevalue,curvalue)=>{
        return prevalue+=curvalue.marks
    },0)
console.log(sum1)

// question-7

let totalMarks = studentRecords
        .map((student) => {
          if (student.marks < 50) {
            student.marks += 15;
          }
          return student;
        })
        .filter((student) => student.marks > 50)
        .reduce((sum, student) => sum + student.marks, 0)
        
        console.log('Total marks of students with marks greater than 50:', totalMarks);

        // question-8

        let obj1 = { name: 'John', class: 'A', rollNo: 1 };
        let obj2 = { name: 'Alice', class: 'B', rollNo: 2 };
        let obj3 = { name: 'Mike', class: 'A', rollNo: 3 };
        let obj4 = { name: 'Emma', class: 'B', rollNo: 4 };
        let obj5 = { name: 'Tom', class: 'A', rollNo: 5 };
        let obj6 = { name: 'Sarah', class: 'B', rollNo: 6 };
        
        // Store the objects in an array
        let arrayOfObjects = [obj1, obj2, obj3, obj4, obj5, obj6];
        
        console.log(arrayOfObjects);