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
    alertok()
  }
  
}
function alertok() {
  var con;
  if (confirm("Complaint submitted")) {
    con = 1;
  } 
  else{
   con = 0;
  }
  
}
function alertnot() {
  var conn;
  if (confirm("Complaint cancelled")) {
    conn = 1;
  } else {
    conn = 0;
  }
  
}
