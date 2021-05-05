const students=[
    String.fromCodePoint(0x1F608),
    {name: "Pragya", subject: "Javascript"},
    {name: "Siya", subject: 'machine Learning'},
    {name: "Min yu", subject: 'cloud computing'}
]

function enrollStudents(student){
    return new Promise((resolve,reject)=>{
    //setTime:-asynchronous
    setTimeout(function(){  
        let error =false //asuming no error from server-side
        students.push(student);
        console.log('student has been enrolled') ;
        if(!error){
            resolve();
        }    
        else{
            reject();
        }
    }, 3000);  
    })
    
}


function getStudents(){
    setTimeout(function(){
        let str='';
        
        //forEach:--synchronous function
        students.forEach(function(student){ 
            str +=`<li> ${student.name} </li>`
        });
        let st='<h1>Students List</h1>'
        document.querySelector('h1').innerHTML=st
        document.getElementById('students').innerHTML=str; 
        console.log('Students have been fetched')
    }, 1000);
}

newStudent = {name:'Sunny', subject:'Python'};
enrollStudents(newStudent).then(getStudents).catch(function(){
    console.log("Error 404!!")
    let st ='<h1>ERROR 404 !!!</h1>'
document.querySelector('h1').innerHTML=st
});
//callback
//or we can do like
/*
let enroll = enrollStudents(newStudent);
enroll.then(getStudents).catch(()=>{
document.getElementById('msg').innerHtml='ERROR 404 OCCURED!!'
});
//callback
*/
