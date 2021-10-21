$(document).ready(() => {
  $("#validation").validate({
    rules: {
      name: {
        required: true,
        minlength : 10
      },
      harga: {
        required: true,
        min : 5000
      },
   
      barang: {
        required: true,
      },
   
      kode: {
        required: true,
        digits: true,
        minlength: 10
      },
    },
 
    submitHandler: () => {
      Swal.fire({
        title: "Are you sure want to submit this form",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire({
            icon: "success",
            title: "Your work form is already submitted",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            window.location.replace("https://oploverz.biz/");
          })
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    },
  });
})