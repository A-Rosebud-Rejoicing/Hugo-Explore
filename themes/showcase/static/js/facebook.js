  
 /* Facebook Quote API 
 Typical Call: JavaScript (document, 'script', 'facebook-jssdk');
 Requires <div id="fb-root"></div> - which is really what should be all that's included on facebook.body.html
 */
function FacebookQuote(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
  fjs.parentNode.insertBefore(js, fjs);
 }
  