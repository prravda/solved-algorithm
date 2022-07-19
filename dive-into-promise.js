// function getLine() {
//   return new Promise((res) => {
//     setTimeout(
//       (arg) => {
//         res(arg);
//       },
//       2000,
//       'def'
//     );
//   });
// }

// async function main() {
//   let line = 'abc';
//   line = await getLine();
//   console.log('before print line');
//   console.log(line);
// }

// main();

function getLine() {
  return new Promise(() => {});
  //return new Promise(()=>{
  //    setTimeout(()=>{},2000)
  //})
  //return new Promise(resolve=>{
  //    setTimeout(resolve,2000,'def')
  //})
}

async function main() {
  let line = 'abc';
  getLine().then((returnValue) => {
    console.log(`returnValue: ${returnValue}`);
    line = returnValue;
  });
  console.log(line);
}

main().catch((err) => console.log(err));
