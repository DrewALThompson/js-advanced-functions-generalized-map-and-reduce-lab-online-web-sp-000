function map (obj, callback){
  let newArr = [];
  for (const key in obj){
    newArr.push(callback(obj[key]))
  }
  return newArr;
}

function reduce (obj, callback, accum){
  let a;
  accum? a = accum : a = 0;
  for (let i = 0; i < obj.length; i++){
    a = callback(obj)
    console.log(a);
  }
  a;
}