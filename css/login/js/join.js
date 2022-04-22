//value
let patternN = /[0-9]/; //숫자
let patternE = /[a-zA-Z]/; //영어
let patternH = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; //한글
let patternS = /[~!@#\#$%<>^&*]/; //특수문자
let selectText;

//id 중복검사용 
let duplicateCheck ="abcd";

//Object
let inputPW={};
let selectImf =
{
    //선택된 input
    data:{},
    // 입력 경고
    warning(text){
        labelImf.innerText = text; 
        labelImf.style.color = 'red';
       selectImf.data.style.color = 'red';
       selectImf.data.style.borderBottom="solid 2px red";
       selectImf.data.value= "";
    },
    // 입력 확인
    confirmImf(){
        labelImf.innerText ="";
        selectImf.data.style.color = '';
        selectImf.data.style.borderBottom="";
    }
};

// 입력 검사 기준
const pattern ={
    N: /[0-9]/,//숫자
    E:/[a-zA-Z]/,
    H:/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
    S:/[~!@#\#$%<>^&*]/
};

let joinForm = document.querySelector('.joinForm');
let joinInput = joinForm.querySelectorAll('input');
let closeWindow = document.querySelector('.joinForm button:last-child');




// 선택된 입력란 구분
joinForm.onclick = function(){
    selectImf.data = document.activeElement;
    
    labelImf = document.querySelector('label[for='+selectImf.data.id+']');
    // 포커스 종료시
    selectImf.data.onblur =function(){    
        if(selectImf.data.placeholder==="아이디"){
             if(pattern.H.test(selectImf.data.value) || pattern.S.test(selectImf.data.value)){
                selectImf.warning("*영어와 숫자만 입력 가능합니다");
             }else if((duplicateCheck === selectImf.data.value)){
                selectImf.warning("*이미 아이디가 있습니다");     
             }else{
                selectImf.confirmImf();
             } 
        }
        else if(selectImf.data.placeholder === "비밀번호확인"){
                inputPW = joinInput[1].value;
                
                console.log(inputPW);
                if(inputPW != selectImf.data.value){
                    selectImf.warning('비밀번호가 똑같지 않습니다');
                }
                else{
                    selectImf.confirmImf();
                }
            
        }
    };
};
// 닫기 
closeWindow.onclick = () => {
    window.close();
};




