var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null) {
    btnSubmit.onclick = function () {
        if (validateForm()) {
            //     // Gửi dữ liệu đi.
            doRegister();
        }
    }
}

function doRegister() {
    var txtName = document.forms['register-form']['name'];
    var txtEmail = document.forms['register-form']['email'];
    var txtphone = document.forms['register-form']['phone'];
    var radioGender = document.forms['register-form']['gender'];
    var checkboxHobby = document.forms['register-form']['hobby'];
    var txtAdress = document.forms['register-form']['address'];
    if (txtName != null && txtName != null) {
        var name = txtName.value;
        var email = txtEmail.value;
        var phone = txtphone.value;
        var gender = radioGender.value;
        var hobby = checkboxHobby.value;
        var address = txtAdress.value;
        var jsMember = {
            name: name,
            email: email,
            phone: phone,
            gender: gender,
            hobby: hobby,
            address: address,
        }
    }
}

function validateForm() {
    // Lưu trữ trạng thái validate của cả form.
    var isValid = true;
    var isValidName = true;
    var isValidEmail = true;
    var isValidPhone = true;
    var txtname = document.forms['register-form']['name'];
    var msgName = txtname.nextElementSibling;
    if (txtname.value == null || txtname.value.length == 0) {
        msgName.classList.remove("msg-success");
        msgName.classList.add("msg-error");
        msgName.innerHTML = "Vui lòng nhập tên";
        isValidName = false;
    } else if (txtname.value > 50) {
        msgName.classList.remove("msg-error");
        msgName.classList.add("msg-success");
        msgName.innerHTML = "Tên tối đa 50 ký tự";
    } else {
        msgName.classList.remove("msg-error");
        msgName.classList.add("msg-success");
        msgName.innerHTML = "OK.";
    }
    var txtemail = document.forms['register-form']['email'];
    var msgemail = txtemail.nextElementSibling;
    if (txtname.value == null || txtname.value.length == 0) {
        msgemail.classList.remove("msg-success");
        msgemail.classList.add("msg-error");
        msgemail.innerHTML = "Vui lòng nhập đúng định dạng email";
        isValidEmail = false;
    } else {
        msgName.classList.remove("msg-error");
        msgName.classList.add("msg-success");
        msgName.innerHTML = "OK.";
    }
    var txtphone = document.forms['register-form']['phone'];
    var msgphone = txtphone.nextElementSibling;
    if (txtphone.value == null || txtphone.value.length == 0) {
        msgphone.classList.remove("msg-success");
        msgphone.classList.add("msg-error");
        msgphone.innerHTML = "Vui lòng nhập số điện thoại";
        isValidPhone = false
    } else {
        msgphone.classList.remove("msg-error");
        msgphone.classList.add("msg-success");
        msgphone.innerHTML = "OK.";
    }
    isValid = isValidName && isValidEmail && isValidPhone;
    return isValid;
}

