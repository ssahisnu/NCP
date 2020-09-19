function profile_st() {
  window.location.href = "profile_st.html";
}
function upload_st() {
  window.location.href = "create_project.html";
}
function search_st() {
  window.location.href = "search.html";
}
function profile_fac() {
  window.location.href = "profile_fac.html";
}
function upload_fac(){
  window.location.href = "create_project.html";
}
function search_fac() {
  window.location.href = "search.html";
}

function complaint() {
  var txt;
  var person = prompt("Please enter your complaint:","Here");
  if (person == null || person == ""||person=="Here") {
    alertnot()
  } else {
    alertok(person)
  }
  
}
function alertok(person) {
  var con;
  if (confirm("Confirm conplaint\n"+person)) {
    con = 1;
  } 
  else{
   con = 0;
  }
  
}
function alertnot() {
  var con2;
  if (confirm("Complaint cancelled")) {
    con2 = 1;
  } else {
    con2 = 0;
  }
  
}
