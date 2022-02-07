//Tarefa de média - Gabriel Rodrigo

function media (){

    let sum = 0;
    
    for (let k =0; k<arguments.length; k++){
      sum+= arguments[k];
    }
    
    
    let media = sum/arguments.length;
      
    console.log(media);
    }
    
    media (2,2,2);