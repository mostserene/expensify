console.log("utils.js");
const square = (x) => x * x;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
export { square, add };

// only one default export
//not an object definition

//export default - named exports
// export default subtract;
export default (a, b) => a - b;
