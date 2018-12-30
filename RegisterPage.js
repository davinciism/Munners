 var dpURL;
 var filename;

 function updatePost(fname,gender,lname,email,password,school, ) {
         const db = firebase.firestore();
  const myPost = db.collection('MUNSacc').doc(fname+lname);
  myPost.set({
      FirstName: fname,
      LastName: lname,
      Email: email,
      Password : password,
      School: school,
      Gender: gender,
      DpURL: dpURL
  })
}

function upload(files){

var storageRef = firebase.storage().ref();
var file  = files.item(0);
filename=file.name;

var metadata = {
  contentType: 'image/jpeg'
};
console.log("Starting!")
var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    
  }, function(error) {

}, function() {
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
    var horseRef = storageRef.child('images/'+filename);
    horseRef.getDownloadURL().then(function(url) {
    
      var img = document.getElementById('myimg');
      img.src = url;
    
    });
  });
});
}

