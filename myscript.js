var bugs = new Array();



window.onload = function() {
    if (sessionStorage.name == "") {   
           sessionStorage.name = ("What is your name noble Bug Tester?");
        }
    else{
      //  alert("Hello " + sessionStorage.getItem("name"));
     }
   
 }
 
 
 function addBug(){
    var bug = document.getElementById('bug').value;
        if (isNan(bug)) {
            alert("Nice try funny guy, enter a real number");
            return;
         }
    
    var node = document.createElement("li");
    var textnode = document.createTextNode(bug);
    node.appendChild(textnode);
    document.getElementById('bugList').appendChild(node);
    
    }
 
