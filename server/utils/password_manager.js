function SaltPasswords() {}

function FormatPassword(passwordStr) {
  let decrytedPassword = DecryptPassword(passwordStr);
  const saltedPassword = decrytedPassword + "saaalt";
}

function EncryptPassword() {}

function DecryptPassword() {}

export { SaltPasswords, EncryptPassword, DecryptPassword };
