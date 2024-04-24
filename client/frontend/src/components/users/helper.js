function ValidateName(name) {
  if (name === "") {
    return {
      isValid: false,
      message: "name should not be empty",
    };
  }
  var nameRegex = new RegExp("^[a-zA-Z ]*$");
  if (nameRegex.test(name)) {
    return {
      isValid: true,
      message: "",
    };
  } else {
    return {
      isValid: false,
      message: "name should not contain special charcters",
    };
  }
}

function ValidateEmail() {}

function ValidatePassword() {}

function MatchPassword() {}

function ValidateMobile(phone) {
  if (phone === "") {
    return {
      isValid: false,
      message: "mobile number should not be empty",
    };
  }
  var mobileRegex = new RegExp("^d{10}$");
  if (mobileRegex.test(phone)) {
    return {
      isValid: true,
      message: "",
    };
  } else {
    return {
      isValid: false,
      message: "mobile should not contain special charcters",
    };
  }
}

export {
  ValidateEmail,
  ValidateMobile,
  ValidateName,
  ValidatePassword,
  MatchPassword,
};
