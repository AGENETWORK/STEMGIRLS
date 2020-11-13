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
  
//--------------------------------------- Send Partner ----------------------------------------------------//
  //Reference for form collection(3)
  let partnerDb = firebase.database().ref('partner');

//listen for submit event//
document.getElementById('partnerform').addEventListener('submit', submitPartner);

//Submit form
function submitPartner(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  let gender = document.querySelector('#gender').value;
  let address = document.querySelector('#address').value;
  let city = document.querySelector('#city').value;
  let country = document.querySelector('#country').value;
  

  // send mentor values
  sendPartner(name, email, phone, gender, address, city, country)

  //Show Alert Message
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds
  setTimeout(function() {document.querySelector('.alert').style.display = 'none';
  }, 7000);

   //Form Reset After Submission
   document.getElementById('partnerform').reset();

}

//Send Message to Firebase(4)
function sendPartner(name, email, phone, gender, address, city, country) {
    let newPartnerDb = partnerDb.push();
    newPartnerDb.set({
      name: name,
      email: email,
      phone: phone,
      gender: gender,
      address: address,
      city: city,
      country: country
    });
  }
