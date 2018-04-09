var test = "BLAH";

$(document).ready(function(e) {
  $('#error').hide();
  $('#loading').hide();
  $('#previewing').hide();
  $('#uploadimage').on('submit', function(e) {
    e.preventDefault();
    $('#message').empty();
    $('#loading').show();
    $.ajax({
      url: '/journal/entry/image/add',
      type: 'POST',
      data: new FormData(this),
      contentType: false,
      cache: false,
      processData: false,
      success: function(
        data,
      ) {
        $('#loading').hide();
        $('#message').html(data)
      },
    })
  });

  // Function to preview image after validation
  $(function() {
    $('#file').change(function() {
      $('#message').empty(); // To remove the previous error message
      let file = this.files[0];
      let imagefile = file.type;
      let match = ['image/jpeg', 'image/png', 'image/jpg'];
      if (
        !(
          imagefile == match[0] ||
          imagefile == match[1] ||
          imagefile == match[2]
        )
      ) {
        $('#message').html(
          '<p id=\'error\'>Please Select A valid Image File</p>' +
            '<h4>Note</h4>' +
            '<span id=\'error_message\'>Only jpeg, jpg and png Images type allowed</span>',
        );
        return false;
      } else {
        let reader = new FileReader();
        reader.onload = imageIsLoaded;
        reader.readAsDataURL(this.files[0]);
      }
    });
  });
  
  function imageIsLoaded(e) {
    $('#previewing').show();
    $('#noimage').hide();
    $('#file').css('color', 'green');
    $('#image_preview').css('display', 'block');
    $('#previewing').attr('src', e.target.result);
    $('#previewing').attr('width', '250px');
    $('#previewing').attr('height', '230px');
  }
});
