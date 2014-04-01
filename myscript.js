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
    //Retrieve a JSON representation of the bugObject
    var retrievedJson = localStorage.getItem("bugObject");
    bugObject = JSON.parse(retrievedJson);
    
    //Add the bug in current window 
    bugObject.completedBugs.push(bug);
    
    //Storage object again
    json = JSON.stringify(bugObject);
    localStorage.setItem("bugObject", json);
    
    //clear the input field
    document.getElementById('bug').value = "";
     alert("Bug added successfully!");
    }
 
