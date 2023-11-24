// subject[학년][반][요일][교시]
let subject = new Array(2);
for(let i=0;i<2;i++){
    subject[i] = Array(4);
    for(let j=0;j<4;j++){
        subject[i][j] = new Array(5);
        for(let k=0;k<5;k++){
            subject[i][j][k] = new Array(8);
        }
    }
}

let yoel = new Date().getDay();
switch(yoel){
    case 1:
        for(let i=0;i<8;i++){
            document.querySelectorAll("td.Monday")[i].style.backgroundColor = "rgba(104, 236, 243, 0.61)";
        }
        break;
    case 2:
        for(let i=0;i<8;i++){
            document.querySelectorAll("td.Tuseday")[i].style.backgroundColor = "rgba(104, 236, 243, 0.61)";
        }
        break;
    case 3:
        for(let i=0;i<8;i++){
            document.querySelectorAll("td.Wednesday")[i].style.backgroundColor = "rgba(104, 236, 243, 0.61)";
        }
        break;
    case 4:
        for(let i=0;i<8;i++){
            document.querySelectorAll("td.Thursday")[i].style.backgroundColor = "rgba(104, 236, 243, 0.61)";
        }
        break;
    case 5:
        for(let i=0;i<8;i++){
            document.querySelectorAll("td.Friday")[i].style.backgroundColor = "rgba(104, 236, 243, 0.61)";
        }
        break;
    default:
        break;
}

function set(){
    let math1 = JSON.parse(localStorage.getItem("math1"));
    let korean = JSON.parse(localStorage.getItem("korean"));
    let art_music = JSON.parse(localStorage.getItem("art_music"));
    let china = JSON.parse(localStorage.getItem("china"));
    let geometry = JSON.parse(localStorage.getItem("geometry"));
    let imformation = JSON.parse(localStorage.getItem("imformation"));
    let travel = JSON.parse(localStorage.getItem("travel"));
    let mulli = JSON.parse(localStorage.getItem("mulli"));
    let hwahak = JSON.parse(localStorage.getItem("hwahak"));
    let math2 = JSON.parse(localStorage.getItem("math2"));
    // 차례대로 (미적 확통 + 1학년 심수 수1) , (언매 화작) , (미술 음악) , (중국어 한문) 
    // (기하 경제수학 문예창작) , (정보 공학 창의) , (여행지리 과학사),(물리 생명 지역이해 국제경제) , (화학 지구과학 고전과윤리 국제관계와 기구)
    subject[0][0][0][0] = math1;
    subject[0][1][0][0] = math1;
    subject[0][2][0][0] = math1;
    subject[0][3][0][0] = math1;
    subject[1][0][0][0] = mulli;
    subject[1][1][0][0] = mulli;
    subject[1][2][0][0] = mulli;
    subject[1][3][0][0] = mulli;

    subject[0][0][0][1] = "한국사";
    subject[0][1][0][1] = "국어";
    subject[0][2][0][1] = "통합사회S";
    subject[0][3][0][1] = "영어A";
    subject[1][0][0][1] = art_music;
    subject[1][1][0][1] = art_music;
    subject[1][2][0][1] = china;
    subject[1][3][0][1] = china;

    subject[0][0][0][2] = "체육";
    subject[0][1][0][2] = "통합사회T";
    subject[0][2][0][2] = "영어A";
    subject[0][3][0][2] = "국어";
    subject[1][0][0][2] = china;
    subject[1][1][0][2] = china;
    subject[1][2][0][2] = art_music;
    subject[1][3][0][2] = art_music;

    subject[0][0][0][3] = "미술";
    subject[0][1][0][3] = "영어S";
    subject[0][2][0][3] = "생명";
    subject[0][3][0][3] = "물리";
    subject[1][0][0][3] = geometry;
    subject[1][1][0][3] = geometry;
    subject[1][2][0][3] = geometry;
    subject[1][3][0][3] = geometry;

    subject[0][0][0][4] = "정보";
    subject[0][1][0][4] = "미술";
    subject[0][2][0][4] = "음악";
    subject[0][3][0][4] = "음악";
    subject[1][0][0][4] = hwahak;
    subject[1][1][0][4] = hwahak;
    subject[1][2][0][4] = hwahak;
    subject[1][3][0][4] = hwahak;

    subject[0][0][0][5] = "영어A";
    subject[0][1][0][5] = "한국사";
    subject[0][2][0][5] = "음악";
    subject[0][3][0][5] = "음악";
    subject[1][0][0][5] = korean;
    subject[1][1][0][5] = korean;
    subject[1][2][0][5] = "보건";
    subject[1][3][0][5] = "체육";

    subject[0][0][0][6] = "국보";
    subject[0][1][0][6] = "국보";
    subject[0][2][0][6] = "국보";
    subject[0][3][0][6] = "국보";
    subject[1][0][0][6] = "보건";
    subject[1][1][0][6] = "영어K";
    subject[1][2][0][6] = "성경";
    subject[1][3][0][6] = "영어P";

    subject[0][0][0][7] = "영보";
    subject[0][1][0][7] = "영보";
    subject[0][2][0][7] = "영보";
    subject[0][3][0][7] = "영보";
    subject[1][0][0][7] = "수보";
    subject[1][1][0][7] = "수보";
    subject[1][2][0][7] = "수보";
    subject[1][3][0][7] = "수보";

    subject[0][0][1][0] = "화학";
    subject[0][1][1][0] = "체육";
    subject[0][2][1][0] = "국어";
    subject[0][3][1][0] = "정보";
    subject[1][0][1][0] = mulli;
    subject[1][1][1][0] = mulli;
    subject[1][2][1][0] = mulli;
    subject[1][3][1][0] = mulli;

    subject[0][0][1][1] = "과탐실";
    subject[0][1][1][1] = "과탐실";
    subject[0][2][1][1] = "통합사회T";
    subject[0][3][1][1] = "성경";
    subject[1][0][1][1] = "체육";
    subject[1][1][1][1] = "보건";
    subject[1][2][1][1] = "영어K";
    subject[1][3][1][1] = "ER";

    subject[0][0][1][2] = "국어";
    subject[0][1][1][2] = "영어A";
    subject[0][2][1][2] = "한국사";
    subject[0][3][1][2] = "영어S";
    subject[1][0][1][2] = imformation;
    subject[1][1][1][2] = imformation;
    subject[1][2][1][2] = imformation;
    subject[1][3][1][2] = imformation;

    subject[0][0][1][3] = "물리";
    subject[0][1][1][3] = "한국사";
    subject[0][2][1][3] = "정보";
    subject[0][3][1][3] = "ER";
    subject[1][0][1][3] = hwahak;
    subject[1][1][1][3] = hwahak;
    subject[1][2][1][3] = hwahak;
    subject[1][3][1][3] = hwahak;

    subject[0][0][1][4] = "영어S";
    subject[0][1][1][4] = "국어";
    subject[0][2][1][4] = "성경";
    subject[0][3][1][4] = "국어";
    subject[1][0][1][4] = travel;
    subject[1][1][1][4] = travel;
    subject[1][2][1][4] = travel;
    subject[1][3][1][4] = travel;

    subject[0][0][1][5] = math1;
    subject[0][1][1][5] = math1;
    subject[0][2][1][5] = math1;
    subject[0][3][1][5] = math1;
    subject[1][0][1][5] = imformation;
    subject[1][1][1][5] = imformation;
    subject[1][2][1][5] = imformation;
    subject[1][3][1][5] = imformation;

    subject[0][0][1][6] = "한국사";
    subject[0][1][1][6] = "정보";
    subject[0][2][1][6] = "ER";
    subject[0][3][1][6] = "화학";
    subject[1][0][1][6] = math2;
    subject[1][1][1][6] = math2;
    subject[1][2][1][6] = math2;
    subject[1][3][1][6] = math2;

    subject[0][0][1][7] = "예배";
    subject[0][1][1][7] = "예배";
    subject[0][2][1][7] = "예배";
    subject[0][3][1][7] = "예배";
    subject[1][0][1][7] = "예배";
    subject[1][1][1][7] = "예배";
    subject[1][2][1][7] = "예배";
    subject[1][3][1][7] = "예배";

    subject[0][0][2][0] = "국어";
    subject[0][1][2][0] = "물리";
    subject[0][2][2][0] = "한국사";
    subject[0][3][2][0] = "음악";
    subject[1][0][2][0] = hwahak;
    subject[1][1][2][0] = hwahak;
    subject[1][2][2][0] = hwahak;
    subject[1][3][2][0] = hwahak;

    subject[0][0][2][1] = "통합사회S";
    subject[0][1][2][1] = "통합사회T";
    subject[0][2][2][1] = "국어";
    subject[0][3][2][1] = "한국사";
    subject[1][0][2][1] = math2;
    subject[1][1][2][1] = math2;
    subject[1][2][2][1] = math2;
    subject[1][3][2][1] = math2;

    subject[0][0][2][2] = math1;
    subject[0][1][2][2] = math1;
    subject[0][2][2][2] = math1;
    subject[0][3][2][2] = math1;
    subject[1][0][2][2] = mulli;
    subject[1][1][2][2] = mulli;
    subject[1][2][2][2] = mulli;
    subject[1][3][2][2] = mulli;

    subject[0][0][2][3] = "통합사회T";
    subject[0][1][2][3] = "생명";
    subject[0][2][2][3] = "물리";
    subject[0][3][2][3] = "체육";
    subject[1][0][2][3] = art_music;
    subject[1][1][2][3] = art_music;
    subject[1][2][2][3] = "영어K";
    subject[1][3][2][3] = "성경";

    subject[0][0][2][4] = "미술";
    subject[0][1][2][4] = "미술";
    subject[0][2][2][4] = "영어S";
    subject[0][3][2][4] = "영어A";
    subject[1][0][2][4] = china;
    subject[1][1][2][4] = china;
    subject[1][2][2][4] = korean;
    subject[1][3][2][4] = korean;

    subject[0][0][2][5] = "미술";
    subject[0][1][2][5] = "미술";
    subject[0][2][2][5] = "통합사회T";
    subject[0][3][2][5] = "통합사회S";
    subject[1][0][2][5] = "영어P";
    subject[1][1][2][5] = "영어K";
    subject[1][2][2][5] = china;
    subject[1][3][2][5] = china;

    subject[0][0][2][6] = "생명";
    subject[0][1][2][6] = "영어A";
    subject[0][2][2][6] = "과탐실";
    subject[0][3][2][6] = "과탐실";
    subject[1][0][2][6] = korean;
    subject[1][1][2][6] = korean;
    subject[1][2][2][6] = art_music;
    subject[1][3][2][6] = art_music;

    subject[0][0][2][7] = "영보";
    subject[0][1][2][7] = "영보";
    subject[0][2][2][7] = "영보";
    subject[0][3][2][7] = "영보";
    subject[1][0][2][7] = "국보";
    subject[1][1][2][7] = "국보";
    subject[1][2][2][7] = "국보";
    subject[1][3][2][7] = "국보";

    subject[0][0][3][0] = "합동체육";
    subject[0][1][3][0] = "합동체육";
    subject[0][2][3][0] = "국어";
    subject[0][3][3][0] = "한국사";
    subject[1][0][3][0] = korean;
    subject[1][1][3][0] = korean;
    subject[1][2][3][0] = "진로";
    subject[1][3][3][0] = "보건";

    subject[0][0][3][1] = math1;
    subject[0][1][3][1] = math1;
    subject[0][2][3][1] = math1;
    subject[0][3][3][1] = math1;
    subject[1][0][3][1] = "성경";
    subject[1][1][3][1] = "진로";
    subject[1][2][3][1] = korean;
    subject[1][3][3][1] = korean;

    subject[0][0][3][2] = "한국사";
    subject[0][1][3][2] = "화학";
    subject[0][2][3][2] = "정보";
    subject[0][3][3][2] = "국어";
    subject[1][0][3][2] = "영어K";
    subject[1][1][3][2] = "체육";
    subject[1][2][3][2] = "영어P";
    subject[1][3][3][2] = "진로";

    subject[0][0][3][3] = "영어A";
    subject[0][1][3][3] = "국어";
    subject[0][2][3][3] = "체육";
    subject[0][3][3][3] = "통합사회T";
    subject[1][0][3][3] = mulli;
    subject[1][1][3][3] = mulli;
    subject[1][2][3][3] = mulli;
    subject[1][3][3][3] = mulli;

    subject[0][0][3][4] = "HR";
    subject[0][1][3][4] = "HR";
    subject[0][2][3][4] = "HR";
    subject[0][3][3][4] = "HR";
    subject[1][0][3][4] = "HR";
    subject[1][1][3][4] = "HR";
    subject[1][2][3][4] = "HR";
    subject[1][3][3][4] = "HR";

    subject[0][0][3][5] = "국어";
    subject[0][1][3][5] = "성경";
    subject[0][2][3][5] = "한국사";
    subject[0][3][3][5] = "정보";
    subject[1][0][3][5] = "진로";
    subject[1][1][3][5] = "영어P";
    subject[1][2][3][5] = "체육";
    subject[1][3][3][5] = "영어K";

    subject[0][0][3][6] = "수보";
    subject[0][1][3][6] = "수보";
    subject[0][2][3][6] = "수보";
    subject[0][3][3][6] = "수보";
    subject[1][0][3][6] = "영보";
    subject[1][1][3][6] = "영보";
    subject[1][2][3][6] = "영보";
    subject[1][3][3][6] = "영보";

    subject[0][0][3][7] = "국보";
    subject[0][1][3][7] = "국보";
    subject[0][2][3][7] = "국보";
    subject[0][3][3][7] = "국보";
    subject[1][0][3][7] = "수보";
    subject[1][1][3][7] = "수보";
    subject[1][2][3][7] = "수보";
    subject[1][3][3][7] = "수보";

    subject[0][0][4][0] = math1;
    subject[0][1][4][0] = math1;
    subject[0][2][4][0] = math1;
    subject[0][3][4][0] = math1;
    subject[1][0][4][0] = "ER";
    subject[1][1][4][0] = "성경";
    subject[1][2][4][0] = korean;
    subject[1][3][4][0] = korean;

    subject[0][0][4][1] = "정보";
    subject[0][1][4][1] = "한국사";
    subject[0][2][4][1] = "영어A";
    subject[0][3][4][1] = "진로";
    subject[1][0][4][1] = "영어K";
    subject[1][1][4][1] = "ER";
    subject[1][2][4][1] = china;
    subject[1][3][4][1] = china;

    subject[0][0][4][2] = "진로";
    subject[0][1][4][2] = "ER";
    subject[0][2][4][2] = "화학";
    subject[0][3][4][2] = "국어";
    subject[1][0][4][2] = travel;
    subject[1][1][4][2] = travel;
    subject[1][2][4][2] = travel;
    subject[1][3][4][2] = travel;

    subject[0][0][4][3] = "통합사회T";
    subject[0][1][4][3] = "정보";
    subject[0][2][4][3] = "합동체육";
    subject[0][3][4][3] = "합동체육";
    subject[1][0][4][3] = geometry;
    subject[1][1][4][3] = geometry;
    subject[1][2][4][3] = geometry;
    subject[1][3][4][3] = geometry;

    subject[0][0][4][4] = "성경";
    subject[0][1][4][4] = "진로";
    subject[0][2][4][4] = "국어";
    subject[0][3][4][4] = "생명";
    subject[1][0][4][4] = china;
    subject[1][1][4][4] = china;
    subject[1][2][4][4] = "ER";
    subject[1][3][4][4] = "영어K";

    subject[0][0][4][5] = "국어";
    subject[0][1][4][5] = "통합사회S";
    subject[0][2][4][5] = "음악";
    subject[0][3][4][5] = "통합사회T";
    subject[1][0][4][5] = math2;
    subject[1][1][4][5] = math2;
    subject[1][2][4][5] = math2;
    subject[1][3][4][5] = math2;

    subject[0][0][4][6] = "ER";
    subject[0][1][4][6] = "국어";
    subject[0][2][4][6] = "진로";
    subject[0][3][4][6] = "한국사";
    subject[1][0][4][6] = hwahak;
    subject[1][1][4][6] = hwahak;
    subject[1][2][4][6] = hwahak;
    subject[1][3][4][6] = hwahak;

    subject[0][0][4][7] = "CA";
    subject[0][1][4][7] = "CA";
    subject[0][2][4][7] = "CA";
    subject[1][3][4][7] = "CA";
    subject[1][0][4][7] = "CA";
    subject[1][1][4][7] = "CA";
    subject[1][2][4][7] = "CA";
    subject[1][3][4][7] = "CA";
}


function put(a,b,c,d,e,f,g,h,i,j,k,l){
    localStorage.clear();
    localStorage.setItem("hak",JSON.stringify(a));
    localStorage.setItem("ban",JSON.stringify(b));
    localStorage.setItem("math1",JSON.stringify(c));
    localStorage.setItem("korean",JSON.stringify(d));
    localStorage.setItem("art_music",JSON.stringify(e));
    localStorage.setItem("china",JSON.stringify(f));
    localStorage.setItem("geometry",JSON.stringify(g));
    localStorage.setItem("imformation",JSON.stringify(h));
    localStorage.setItem("travel",JSON.stringify(i));
    localStorage.setItem("mulli",JSON.stringify(j));
    localStorage.setItem("hwahak",JSON.stringify(k));
    localStorage.setItem("math2",JSON.stringify(l));
    set();
    for(let i=0;i<8;i++){
        document.querySelectorAll("td.Monday")[i].innerText = subject[a-1][b-1][0][i];
    }
    for(let i=0;i<8;i++){
        document.querySelectorAll("td.Tuseday")[i].innerText = subject[a-1][b-1][1][i];
    }
    for(let i=0;i<8;i++){
        document.querySelectorAll("td.Wednesday")[i].innerText = subject[a-1][b-1][2][i];
    }
    for(let i=0;i<8;i++){
        document.querySelectorAll("td.Thursday")[i].innerText = subject[a-1][b-1][3][i];
    }
    for(let i=0;i<8;i++){
        document.querySelectorAll("td.Friday")[i].innerText = subject[a-1][b-1][4][i];
    }
    main.style.display = "block";
    navi.style.display = "none";
}

function change_2nd(){
    let nd = document.getElementById('nd');
    let st = document.getElementById('st');
    st.style.display ="inline";
    nd.style.display = "none";
}

function change_1st(){
    let nd = document.getElementById('nd');
    let st = document.getElementById('st');
    st.style.display ="none";
    nd.style.display = "inline";
}

function change_0(){
    let nd = document.getElementById('nd');
    let st = document.getElementById('st');
    st.style.display ="none";
    nd.style.display = "none";
}

change_0();

function change(){
    localStorage.clear();
    location.reload();
}


let hak = JSON.parse(localStorage.getItem("hak"));
let ban = JSON.parse(localStorage.getItem("ban"));
let math1 = JSON.parse(localStorage.getItem("math1"));
let math2 = JSON.parse(localStorage.getItem("math2"));
let korean = JSON.parse(localStorage.getItem("korean"));
let art_music = JSON.parse(localStorage.getItem("art_music"));
let china = JSON.parse(localStorage.getItem("china"));
let geometry = JSON.parse(localStorage.getItem("geometry"));
let imformation = JSON.parse(localStorage.getItem("imformation"));
let travel = JSON.parse(localStorage.getItem("travel"));
let mulli = JSON.parse(localStorage.getItem("mulli"));
let hwahak = JSON.parse(localStorage.getItem("hwahak"));
let navi = document.getElementById('nav_all');
let main = document.getElementById("main_all");

if(hak===null && ban===null){
    main.style.display = "none";
    navi.style.display = "block";
} else{
    put(hak,ban,math1,korean,art_music,china,geometry,imformation,travel,mulli,hwahak,math2);
}


// function set(day){
//     for(let i=0;i<8;i++){
//         for(let j=0;j<2;j++){
//             for(let k=0;k<4;k++){
//                 document.querySelectorAll("input[type=text]")[8*i+4*j+k].value = subject[j][k][day-1][i];
//             }
//         }
//     }
// }



// function updata(day){
//     for(let i=0;i<8;i++){
//         for(let j=0;j<2;j++){
//             for(let k=0;k<4;k++){
//                 subject[j][k][day-1][i] = document.querySelectorAll("input[type=text]")[8*i+4*j+k].value;
//             }
//         }
//     }
//     save();
// }

// function save(){
//     localStorage.clear();
//     localStorage.setItem("arr",JSON.stringify(subject));
// }
