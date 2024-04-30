function generatePIDwithPrefix(prefix) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  prefix += "_";

  for (let i = 0; i < 16; i++) {
    prefix += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return prefix;
}

export { generatePIDwithPrefix };
