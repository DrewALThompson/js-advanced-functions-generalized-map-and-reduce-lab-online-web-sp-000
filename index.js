function map (obj, change){
  let newArr = [];
  for (const key in obj){
    newArr.push(change(obj[key]))
  }
  return newArr;
}

function reduce (obj, change, accum){
  accum = obj[0] || 0;
  for (let i = 0; i < )
}