//function getfile(file,callback){
//  var xhr = new XMLHttpRequest();
  //xhr.overrideMimeType("appliation/json");
  //xhr.open("GET",file,true);
  //xhr.onreadystatechange = function(){
    //if(xhr.readyState === 4 && xhr.status == "200"){
    //  callback(xhr.responseText);
    //}
  //};
  //xhr.send(null);
//}

//getfile("sample.json",function(text){
  //var data=JSON.parse(text);
  //console.log(data);
//})

function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else {
        reject(new Error('error'));
      }
    })
  })
}

var newFile=loadJSON("sample.json");

newFile.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
})
var childTwo=document.querySelector(".childtwo");

function career(careerobj){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Career objective";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  childTwo.appendChild(hr);
  var careerParagraph=document.createElement("p");
  careerParagraph.textContent=careerobj.info;
  childTwo.appendChild(careerParagraph);
}

function education(edu){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="educational qualifications";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  childTwo.appendChild(hr);
  for(var i=0;i<edu.length;i++){
    var eduH3=document.createElement("h3");
    eduH3.textContent=edu[i].degree;
    childTwo.appendChild(eduH3);
    var eduU1=document.createElement("u1");
    var eduLi=document.createElement("li");
    eduLi.textContent=edu[i].institute;
    eduU1.appendChild(eduLi);
    childTwo.appendChild(eduU1);
    var eduU2=document.createElement("u2");
    var eduLi=document.createElement("li");
    eduLi.textContent=edu[i].data;
    eduU2.appendChild(eduLi);
    childTwo.appendChild(eduU2);
  }
}
