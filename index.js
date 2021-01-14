function map (obj, callback){
  let newArr = [];
  for (const key in obj){
    newArr.push(callback(obj[key]))
  }
  return newArr;
}

function reduce (obj, callback, accum){
  accum? accum : accum = 0;
  for (let i = 0; i < obj.length; i++){
    accum = callback(accum, obj[i]);
  }
  console.log(!!true);
  return accum;
}