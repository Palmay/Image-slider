
let Character = "Default";
let Num = 148;
let index = 0;
if(window.localStorage.getItem('Characters') == null || window.localStorage.getItem('Characters') == undefined){
  console.log("You are welcome to add as much characters as you want!")
  let Charsi = [{"Name":"Add Images !", "Num":0}];
  window.localStorage.setItem('Characters', JSON.stringify(Charsi));

}
const Chars = JSON.parse(window.localStorage.getItem('Characters'));




function play() { document.getElementById("play_button").disabled = true; for (let i=1; i<Num; i++) {
  let input = document.getElementById("input").value;
  if(input === ""){input = "451";}
  setTimeout( function timer(){
    const image = document.createElement("img");
    image.className = "image";
    image.id = i;
    image.style.height = (document.getElementById('Height').value)+'px';
    image.style.width = (document.getElementById('Width').value)+'px';
    image.src = `Characters/${Character}/${i}.jpg`;
    document.body.appendChild(image);
    var element = document.getElementById(i-1);
    if(element!=null){
    element.remove();}
    $(`#${i}`).fadeOut(7000, function() { $(this).remove();i === Num-1 ?  document.getElementById("play_button").disabled = false : console.log(); });
    
  }, i*input);
  
}}

myAudio = document.getElementById("myAudio")
myAudio1 = document.getElementById("myAudio1")
myAudio2 = document.getElementById("myAudio2")
let range1 = document.getElementById("range");
range1.onchange = function(){myAudio.volume = range1.value/100;
  myAudio1.volume = range1.value/100;
  myAudio2.volume = range1.value/100}

function togglePlay() {
  return myAudio.paused ? audio1play()  : audio1stop();
};
function togglePlay1() {
  return myAudio1.paused ? audio2play() : audio2stop();
};
function togglePlay2() {
  return myAudio2.paused ? audio3play() : audio3stop();
};


function audio1play(){
  myAudio.play()
  document.getElementById('button1').innerHTML = "Soundtrack 1 -- playing";
}
function audio2play(){
  myAudio1.play()
  document.getElementById('button2').innerHTML = "Soundtrack 2 -- playing";
}
function audio3play(){
  myAudio2.play()
  document.getElementById('button3').innerHTML = "Soundtrack 3 -- playing";
}
function audio1stop(){
  myAudio.pause()
  document.getElementById('button1').innerHTML = "Soundtrack 1 -- play";
}
function audio2stop(){
  myAudio1.pause()
  document.getElementById('button2').innerHTML = "Soundtrack 2 -- play";
}
function audio3stop(){
  myAudio2.pause()
  document.getElementById('button3').innerHTML = "Soundtrack 3 -- play";
}

function NextChar(){
  if(Chars[index+1]!=null){
    document.getElementById("CharacterName").innerHTML = Chars[index+1].Name;
    Character = Chars[index+1].Name;
    Num = Chars[index+1].Num;
    index++;
  }
  else{
    console.log("err out of array");
  }
}

function BackChar(){
  if(Chars[index-1]!=null){
    document.getElementById("CharacterName").innerHTML = Chars[index-1].Name;
    Character = Chars[index-1].Name;
    Num = Chars[index-1].Num;
    index--;
  }
  else{
    console.log("err out of array");
  }
}

let folder = document.getElementById("myInput");
    folder.onchange=function(){
     var files = folder.files,
    len = files.length
    var dirname = files[0].webkitRelativePath;
    var n = dirname.indexOf('/');
    dirname = dirname.substring(0, n != -1 ? n : dirname.length);
    var newcharobj = {Name : dirname, Num: len};
    Chars.push(newcharobj);
    window.localStorage.setItem('Characters', JSON.stringify(Chars));
    functionAlert()
}
function functionAlert(msg, myYes) {
  var confirmBox = $("#confirm");
  confirmBox.find(".message").text(msg);
  confirmBox.find(".yes").unbind().click(function() {
     confirmBox.hide();
  });
  confirmBox.find(".yes").click(myYes);
  confirmBox.show();
}
