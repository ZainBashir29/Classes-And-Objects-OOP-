console.log("This is Promises");

let prom1 = new Promise((resolve, reject)=>{
    let b = Math.random();
    if(b<0.5) {
        reject("No random number was supporting you");
    } else {
    setTimeout(()=>{
        console.log("I am done");
        resolve("Zain");
    }, 1000);
}
});

let prom2 = new Promise((resolve, reject)=>{
    let b = Math.random();
    // if(b<0.5) {
    //     reject("No random number was supporting you 2");
    // } else {
    setTimeout(()=>{
        console.log("I am done 2");
        resolve("Zain 2");
    }, 2000);
// }
});

let prom3 = new Promise((resolve, reject)=>{
    let b = Math.random();
    // if(b<0.5) {
    //     reject("No random number was supporting you 3");
    // } else {
    setTimeout(()=>{
        console.log("I am done 3");
        resolve("Zain 3");
    }, 2500);
// }
});

let prom4 = new Promise((resolve, reject)=>{
    let b = Math.random();
    // if(b<0.5) {
    //     reject("No random number was supporting you 4");
    // } else {
    setTimeout(()=>{
        console.log("I am done 4");
        resolve("Zain 4");
    }, 3000);
// }
});

let prom5 = new Promise((resolve, reject)=>{
    let b = Math.random();
    // if(b<0.5) {
    //     reject("No random number was supporting you 5");
    // } else {
    setTimeout(()=>{
        console.log("I am done 5");
        resolve("Zain 5");
    }, 3500);
// }
});

let p = Promise.any([prom1, prom2, prom3, prom4, prom5]);

console.log(p);


// prom1.then((a)=>{
//     console.log(a);
// }, (err)=>{
//     console.log(err);
// })

// .then(()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Hey bro!");
//             resolve("Zain OP");
//         }, 1000);
//     })
// }).then((a)=>{
//     console.log(a);
// })

// prom1.finally(()=>{
//     console.log("Promise executed successfully!");
// });

// }).catch((err)=>{
//     console.log("No random number was supporting you");
// });

// let loadScript = new Promise((resolve, reject)=>{
//     let script = document.createElement("script");
//     script.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js";
//     script.onload = resolve("Script is loaded successfully!");
//     document.head.append(script);
// });

// loadScript.then((a)=>{
//     console.log(a);
// });

let i = Promise.resolve("Itachi");
i.then(()=>{
    console.log(i);
})

let s = Promise.reject("Sasuke");
s.catch((err)=>{
    console.log(err);
})