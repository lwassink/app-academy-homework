function madlib(verb, adjective, nown) {
  let v = verb.toUpperCase();
  let a = adjective.toUpperCase();
  let n = nown.toUpperCase();
  console.log(`We shall ${v} the ${a} ${n}`);
}

madlib("considder", "cutest", "guacamole");
