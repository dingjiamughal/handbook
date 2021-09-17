// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // 846297531

// // 135794862;
// // 268497531

// function mirror(arr) {
//   let flag = true;
//   let popIndex = -1;
//   let shiftIndex = 0;
//   const temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (flag) {
//       const index = popIndex >= 0 ? popIndex : 0;
//       temp.splice(temp.length - 1 - index, 0, arr[i]);

//       popIndex++;
//       flag = false;
//     } else {
//       const index = Math.ceil(shiftIndex / 2);
//       temp.splice(index, 0, arr[i]);

//       shiftIndex++;
//       flag = true;
//     }
//   }

//   return temp;
// }

// console.log(mirror(arr));

const retry = fetchData => {
  const limit = 5;

  fetchData().catch(() => {
    if (limits > 0) {
      limit--;
      retry(fetchData);
    }
  });
};
