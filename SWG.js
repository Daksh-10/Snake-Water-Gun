let SWG={
  0:"S",
  1:"W",
  2:"G"
}
let runAgain=true;

let chooseSWG=(SWG)=>{
  let a=SWG[Math.floor(Math.random()*3)];
  let b=prompt("Choose Snake,Water or Gun");

  if(b=='S' && a=='W'){
    alert("User won");
    
  }

  else if(b=='S' && a=='G'){
    alert("User lose");
  }

  else if(b=='S' && a=='S'){
    alert("Tie");
  }
  else if(b=='W' && a=='W'){
    alert("Tie");
  }

  else if(b=='W' && a=='G'){
    alert("User won");
  }

  else if(b=='W' && a=='S'){
    alert("User lose");
  }
  else if(b=='G' && a=='W'){
    alert("User lose");
  }

  else if(b=='G' && a=='G'){
    alert("Tie");
  }

  else if(b=='G' && a=='S'){
    alert("User won");
  }
  alert("PC chose",a);
  
}

while(runAgain){
chooseSWG(SWG);
runAgain=confirm("Wanna play again");
}
