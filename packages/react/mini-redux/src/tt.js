function test() {
  let num = 0;

  let getNum = () => num;
  let add = () => {
    num = num + 1;
    console.log(num);
  };

  return { num, add, getNum };
}

const tt = test();

export default tt;
