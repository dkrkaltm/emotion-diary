//value
let pattern1 = /[0-9]/; //숫자
let pattern2 = /[a-zA-Z]/; //영어
let pattern3 = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; //한글
let pattern4 = /[~!@#\#$%<>^&*]/; //특수문자
let selectText;

//id 중복검사용 
let duplicateCheck ="abcd";

//Object
let selectForm ={};


let joinForm = document.querySelector('.joinForm');
let joinInput = joinForm.querySelectorAll('input');
let labelId = joinForm.querySelector('label');


joinForm.onclick = function(){
    selectForm = document.activeElement;
    selectForm.onblur =function(){
        
        if(selectForm.placeholder==="아이디"){
             if(pattern3.test(selectForm.value) || pattern4.test(selectForm.value)){
                warning("*영어와 숫자만 입력 가능합니다");
             }else if((duplicateCheck === selectForm.value)){
                warning("*중복됩니다");     
             }else{
                 labelId.innerText ="";
                 selectForm.style.color = 'white';
             }
             
        }
    };
};

function warning(text){
    labelId.innerText = text; 
    labelId.style.color = 'red';
   selectForm.style.color = 'red';
}



