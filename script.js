let fn = ()=>{
  console.log("Noman");
}


// let callback = (arg, fn) => {
//   console.log(arg);
//   fn();
// }

let loadScript = (src, callback) => {
  let script = document.createElement("script");
  script.src = src;
  script.onload = callback("Zain", fn);
  document.head.append(script);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg, fn) => {
  console.log(arg);
  fn();
});


// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (script)=>{
//   alert('Script is loaded');
//   alert(script.src);
// });

// let loadScript = (src, callback) => {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => {
//     callback(null, script);
//   }
//   script.onerror = () => {
//     callback(new Error('Failed'));
//   }
//   document.head.append(script);
// }

// loadScript("cdn/zain", (error, script) => {
//   if(error) {
//     console.error("Script is not loaded");
//   } else {
//     alert('Script is loaded');
//     alert(script.src);
//   }
// })