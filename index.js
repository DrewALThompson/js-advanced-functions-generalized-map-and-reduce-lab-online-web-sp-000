function map (obj, callback){
  let newArr = [];
  for (const key in obj){
    newArr.push(callback(obj[key]))
  }
  return newArr;
}

function reduce (obj, callback, accum){
  const keys = Object.keys(obj)
  accum? accum : accum = true;
  for (let i = 0; i < obj.length; i++){
    console.log(keys)
    accum = callback(accum, obj[i]);
  }
  return accum;
}