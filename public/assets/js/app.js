  //Reference for form collection(3)
  let formMessage = firebase.database().ref('mentor');

//listen for submit event//
document.getElementById('mentorform').addEventListener('submit', submitMentor);

//Submit form
function submitMentor(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  let location = document.querySelector('#location').value;
  let age = document.querySelector('#age').value;

  // send mentor values
  sendMentor(name, email, phone, location, age)

  //Show Alert Message
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds
  setTimeout(function() {document.querySelector('.alert').style.display = 'none';
  }, 7000);

   //Form Reset After Submission
   document.getElementById('mentorform').reset();



//Send Message to Firebase(4)
function sendMentor(name, email, phone, location, age) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      email: email,
      phone: phone,
      location: location,
      age: age
    });
}
}