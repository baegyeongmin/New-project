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
for(let i=0;i<2;i++){
    for(let j=0;j<4;j++){
        for(let k=0;k<5;k++){
            for(let l=0;l<8;l++){
                subject[i][j][k][l] = i+j+k+l;
            }
        }
    }
}
// let subject = JSON.parse(localStorage.getItem("arr"));

function put(a,b){
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
    localStorage.clear();
    localStorage.setItem("hak",JSON.stringify(a));
    localStorage.setItem("ban",JSON.stringify(b));
    main.style.display = "block";
    navi.style.display = "none";
}

function change(){
    localStorage.clear();
    history.go(0);
}
let hak = JSON.parse(localStorage.getItem("hak"));
let ban = JSON.parse(localStorage.getItem("ban"));
let navi = document.getElementById('nav_all');
let main = document.getElementById("main_all");

if(hak===null && ban===null){
    main.style.display = "none";
    navi.style.display = "block";
} else{
    put(hak,ban);
}


function set(day){
    for(let i=0;i<8;i++){
        for(let j=0;j<2;j++){
            for(let k=0;k<4;k++){
                document.querySelectorAll("input[type=text]")[8*i+4*j+k].value = subject[j][k][day-1][i];
            }
        }
    }
}

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
