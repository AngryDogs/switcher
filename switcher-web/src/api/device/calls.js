const url = "http://localhost:8000/api/devices/"

const init = { method: 'POST',
               headers: {
                 'Authorization': 'JWT ' + getCookie('token'),
                 'Content-Type': 'application/x-www-form-urlencoded'
               },
               mode: 'cors',
               cache: 'default' };

function getCookie(cname) {
   var name = cname + "=";
   var decodedCookie = decodeURIComponent(document.cookie);
   var ca = decodedCookie.split(';');
   for(var i = 0; i <ca.length; i++) {
       var c = ca[i];
       while (c.charAt(0) === ' ') {
           c = c.substring(1);
       }
       if (c.indexOf(name) === 0) {
           return c.substring(name.length, c.length);
       }
   }
   return "";
}

export function changeDeviceState() {
 return fetch(url + "update", init).then(res => {
   return res.json();
 }).catch(err => {
   return err;
 });
}
