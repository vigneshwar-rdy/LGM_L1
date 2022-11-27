var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  list[i].appendChild(span);
}
var exit = document.getElementsByClassName("exit");
var i;
for (i = 0; i < exit.length; i++) {
  exit[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}
var td = document.querySelector('ul');
list.addEventListener('click', function(cl) {
  if (cl.target.tagName === 'LI') {
  cl.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var iV = document.getElementById("Input").value;
  var td = document.createTextNode(iV);
  li.appendChild(td);
  if (iV === '') {
  alert("PLEASE FILL THE DETAILS");
  } else {
    document.getElementById("UL").appendChild(li);
  }
  document.getElementById("Input").value = "";
  var rand = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  rand.className = "exit";
  rand.appendChild(text);
  li.appendChild(rand);
  for (i = 0; i < exit.length; i++) {
    exit[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}
