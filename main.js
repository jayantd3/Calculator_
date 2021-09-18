let str ="";
const cal = (val) => {
    if(val === '='){
        let result = eval(str);
        str=result;
    }else if(val === 'CLR'){
        str="";
    }else if(val === 'BACKSPACE'){
        str = str.substr(0, str.length - 1);
    }else{
        str = str + val;
    }
    
   let elem= document.getElementById("displatText");
   elem.innerText = str;
 };