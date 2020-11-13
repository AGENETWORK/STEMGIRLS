 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBDugoQX3XTgl32seFEtimxJ73yC38MTp0",
    authDomain: "stem-girls-307c9.firebaseapp.com",
    databaseURL: "https://stem-girls-307c9.firebaseio.com",
    projectId: "stem-girls-307c9",
    storageBucket: "stem-girls-307c9.appspot.com",
    messagingSenderId: "231056994218",
    appId: "1:231056994218:web:3989b1a9a6dfa68df785d3",
    measurementId: "G-9Y900LVBMT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
//--------------------------------------- Send ambassador ----------------------------------------------------//
  //Reference for form collection(3)
  let ambassadorDb = firebase.database().ref('ambassador');

//listen for submit event//
document.getElementById('ambassadorform').addEventListener('submit', submitAmbassador);

//Submit form
function submitAmbassador(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  let address = document.querySelector('#address').value;
  let city = document.querySelector('#city').value;
  let country = document.querySelector('#country').value;
  let twitter = document.querySelector('#twitter').value;
  let facebook = document.querySelector('#facebook').value;
  

  // send mentor values
  sendAmbassador(name, email, phone, address, city, country, twitter, facebook)

  //Show Alert Message
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds
  setTimeout(function() {document.querySelector('.alert').style.display = 'none';
  }, 7000);

   //Form Reset After Submission
   document.getElementById('ambassadorform').reset();

}

//Send Message to Firebase(4)
function sendAmbassador(name, email, phone, address, city, country, twitter, facebook) {
    let newAmbassadorDb = ambassadorDb.push();
    newAmbassadorDb.set({
      name: name,
      email: email,
      phone: phone,
      address: address,
      city: city,
      country: country,
      twitter: twitter,
      facebook: facebook
    });
  }
