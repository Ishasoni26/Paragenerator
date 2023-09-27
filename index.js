const input = document.getElementById("numofwords");
const container = document.querySelector(".container");
const generateWords = (n)=>{
let text = " ";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(let i=0; i<n; ++i){
  const random = (Math.random()*25).toFixed(0);
  text = text+letters[random];
}

return text;
};

let numofwords;
const generatePara = () => {
const numofwords = Number(input.value);
// console.log(numofwords);


const para = document.createElement("p");
let data = " ";
for(let i=0;i<numofwords;++i){
  const randomNum = (Math.random()*6).toFixed(0);
  data=data+generateWords(randomNum);
  data+=" ";
}




para.innerText=data.toLowerCase();
para.setAttribute("class","paras");
container.append(para);

} ;