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

//---------------------------------------Send StemGirl----------------------------------------------------//
  //Reference for form collection(3)
  let stemGirlDb = firebase.database().ref('stemGirl');

//listen for submit event//
document.getElementById('stemGirlForm').addEventListener('submit', submitStemGirl);

//Submit form
function submitStemGirl(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  let location = document.querySelector('#location').value;
  let age = document.querySelector('#age').value;
  let school = document.querySelector('#school').value;
  let grade = document.querySelector('#grade').value;
  let skills = document.querySelector('#skills').value;

  // send mentor values
  sendStemGirl(name, email, phone, location, age, school, grade, skills)

  //Show Alert Message
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds
  setTimeout(function() {document.querySelector('.alert').style.display = 'none';
  }, 7000);

   //Form Reset After Submission
   document.getElementById('stemGirlForm').reset();

}

//Send Message to Firebase(4)
function sendStemGirl(name, email, phone, location, age, school, grade, skills) {
    let newStemGirlDb = stemGirlDb.push();
    newStemGirlDb.set({
      name: name,
      email: email,
      phone: phone,
      location: location,
      age: age,
      school: school, 
      grade: grade, 
      skills: skills
    });
}

