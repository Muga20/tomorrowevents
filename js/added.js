document.getElementById("ToClose").addEventListener("click", closeMessage);

function closeMessage() {
  document.getElementById("close").style.display = "none";
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  
function validateDetails(){

  if (document.getElementById("fill").value.length == 0)
  {
  alert("Please make sure you have filled all the spaces");
  return false;
  }
  if (document.getElementById("fill1").value.length == 0)
  {
  alert("Please make sure you have filled all the spaces");
  return false;
  }
  if (document.getElementById("fill2").value.length == 0)
  {
  alert("Please make sure you have filled all the spaces");
  return false;
  }
  if (document.getElementById("fill3").value.length == 0)
  {
  alert("Please make sure you have filled all the spaces");
  return false;
  }
  if (document.getElementById("fill4").value.length == 0)
  {
  alert("Please make sure you have filled all the spaces");
  return false;
  }
  if (document.getElementById("fill5").value.length == 0)
  {
  alert("Please make sure you have filled all the spaces");
  return false;
  }
  if (document.getElementById("fill6").value.length == 0)
  {
  alert("Please make sure you have filled all the spaces");
  return false;
  }
  else{
  alert ("Thanks We are checking on your details an Email will be sent if the process id Done");
  window.location = "../events.html";
   return false;
  }
  }