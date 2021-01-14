function map (obj, callback){
  let newArr = [];
  for (const key in obj){
    newArr.push(callback(obj[key]))
  }
  return newArr;
}

function reduce (obj, callback, accum){
  for (let i = 0; i < obj.length; i++){
    accum = callback(accum, obj[i]);
  }
  return accum;
}