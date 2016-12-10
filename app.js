 // Initialize Firebase


  var config = {
    apiKey: "AIzaSyD7YxADB-gA8gef4MwJz3xtcuMU8_li-gM",
    authDomain: "final-project-4726b.firebaseapp.com",
    databaseURL: "https://final-project-4726b.firebaseio.com",
    storageBucket: "final-project-4726b.appspot.com",
    messagingSenderId: "50489128767"
  };

  firebase.initializeApp(config);

var storageRef = firebase.storage().ref();
var mountainsRef = storageRef.child('text.html');

// Create a reference to 'images/mountains.jpg'
var mountainImagesRef = storageRef.child('saved/text.html');


// $(document).ready(function(){
var a = "no";
  
  
(function checkBrowser(){
    if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
  alert('continue');
    } else {
     alert('The File APIs are not fully supported in this browser.');
  }
})();

// $('#variable').on('click', function(){
//   console.log(a);
//   alert(a);
// })

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {
      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          //Render thumbnail.
          //var span = document.createElement('iframe');

          var span = [e.target.result];
          var code = '<iframe src="' + span + '"></iframe>'
          document.getElementById('list').innerHTML=code;
          // var info = [e.target.result]
          // $('#list').val(info);
          console.log(a);

        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);

  $( function() {
    $( "#draggable" ).draggable();
  } );

// <script>
//   function handleFileSelect(evt) {
//     var files = evt.target.files; // FileList object

//     // Loop through the FileList and render image files as thumbnails.
//     for (var i = 0, f; f = files[i]; i++) {

//       // Only process image files.
//       if (!f.type.match('image.*')) {
//         continue;
//       }

//       var reader = new FileReader();

//       // Closure to capture the file information.
//       reader.onload = (function(theFile) {
//         return function(e) {
//           // Render thumbnail.
//           var span = document.createElement('span');
//           span.innerHTML = ['<img class="thumb" src="', e.target.result,
//                             '" title="', escape(theFile.name), '"/>'].join('');
//           document.getElementById('list').insertBefore(span, null);
//         };
//       })(f);

//       // Read in the image file as a data URL.
//       reader.readAsDataURL(f);
//     }
//   }
$('#variable').on('click',function() {
    var name = $('iframe').contents().find('#p1_9').val();
    $('#here').text(name)
  });

//})