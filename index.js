function map (obj, change){
  let newArr = [];
  for (const key in obj){
    newArr.push(change(obj[key]))
  }
  return newArr;
}

function reduce (obj, change, accum){
  let a;
  accum? a = accum : a = 0;
  for (let i = 0; i < obj.length; i++){
    a+=(change(obj[i]));
    console.log(a);
  }
  a;
}