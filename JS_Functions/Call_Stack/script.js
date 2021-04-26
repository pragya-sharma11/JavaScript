function ceo(){
    console.log('I am ceo');
    cto()
}

function cto(){
    console.log('I am cto');
    teamHead()
}

function teamHead(){
    console.log('I am teamHead');
    developer()
}

function developer(){
    console.log('I am developer');
    try{
    client()
    }
    catch{
       console.log("error")
    }
}

function client(){
    console.log('I am client');
    throw new Error("Error!!")
}

ceo()