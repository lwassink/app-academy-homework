function titleize(names, callback) {
  let titlized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  titlized.forEach(el => callback(el));
}
