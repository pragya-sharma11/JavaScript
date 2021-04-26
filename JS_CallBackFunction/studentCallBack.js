const students=[
    {name: "Pragya", subject: "Javascript"},
    {name: "Siya", subject: 'machine Learning'},
    {name: "Min yu", subject: 'cloud computing'}
]

function enrollStudents(student, callBackFunction){
    //setTime:-asynchronous
    setTimeout(function(){  //this function basically waits for 3 sec for responding the server then execute the function
        students.push(student);
        console.log('student has been enrolled') ;
        callBackFunction();    
    }, 3000);  //3000 millisec are required to respond the server.
    
}
//if server takes more time then fetching data then only previously stored students will be shown in list.
//if takes less time then fetching then newly enrolled student will also be shown in list.
/*
we will give a function as an argument in enrollStudents() as a callback function
so, it will say ,getStudents() can only be execute when 3 sec are completed.
so at first data is send to server(enroll the students) then only we can fetch the data. 
*/

function getStudents(){
    setTimeout(function(){
        let str='';
        //forEach:--synchronous function
        students.forEach(function(student){ // forEach also takes a function as an argument:-callback function
            str +=`<li> ${student.name} </li>`
        });
        document.getElementById('students').innerHTML=str; //it put data in place where id = students ,data will will be the content of str
        console.log('Students have been fetched')
    }, 1000); //1000 millisec are required to fetch data from server.
}

newStudent = {name:'Sunny', subject:'Python'};
enrollStudents(newStudent, getStudents);//callback
//getStudents();--->now we need not to excute it like this