const formValid = {
  function() {
    function formValidate() {
      const contactForm = $('.contact-form');
      contactForm.validate({
        rules: {
          name: 'required',
          message: 'required',
          email: {
            required: true,
            email: true,
          },
        },
        messages: {
          name: 'Please enter your name',
          email: 'Please enter a valid email address',
        },
        submitHandler(form) {
          form.submit();
        },
      });
    }

    return {
      publicMethod: formValidate(),
    };
  },
};

export default formValid;
