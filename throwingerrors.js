// const json = '{ "name": "Yoda", "age": 20 }';
 
// try {
//   const user = JSON.parse(json);
 
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }


// menimbulkan error 
// const json = '{ bad json }';
 
// try {
//   const user = JSON.parse(json);
 
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// const json = '{ "age": 20 }';
 
// try {
//   const user = JSON.parse(json);
//   if(!user.name) {
//     throw new SyntaxError("'name' is required.");
//   }

//   errorcode;
 
//   console.log(user.name); 
//   console.log(user.age);  // 20
// } catch (error) {
//   console.log(`JSON Error: ${error.message}`);

// }

try {
    const user = JSON.parse(json);
    if(!user.name) {
      throw new SyntaxError("'name' is required.");
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    } else {
      console.log(error.stack);
    }
  }