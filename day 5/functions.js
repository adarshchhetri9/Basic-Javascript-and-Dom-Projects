var arrow = (name, role) => {
  switch (role) {
    case "admin":
      return console.log(`${name} is and admin and has access to everything`);
    case "subadmin":
      return console.log(`${name} is a subadmin and litterally a vice admin`);
    case "testprep":
      return console.log(`${name} is a testprep and has access to create tests`);
    case "user":
      return console.log(`${name} is an user and he is fucked up with everything`);
    default:
        return console.log(`${name} is a trail user and he came to visit this shit `);
  }
};

console.log(arrow("adarsh","testpep"));