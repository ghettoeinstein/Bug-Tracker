window.onload = function() {
  
  //Check if there is an existing bugObject. If not create one.

  
  bugObject = {};
  bugObject.completedBugs = [];
  bugObject.incompleteBugs = [];
  json = JSON.stringify(bugObject);
  localStorage.setItem("bugObject", json);

 
 }
 
 
 function addBug(){
    var bug = document.getElementById('bug').value;
     
    var node = document.createElement("li");
    
    var textnode = document.createTextNode(bug);
    node.appendChild(textnode);
    document.getElementById('bugList').appendChild(node);
    
    var retrievedJson = localStorage.getItem("bugObject");
    bugObject = JSON.parse(retrievedJson);
    bugObject.completedBugs.push(bug);
    
    json = JSON.stringify(bugObject);
    localStorage.setItem("bugObject", json);
    
    
    }
 
