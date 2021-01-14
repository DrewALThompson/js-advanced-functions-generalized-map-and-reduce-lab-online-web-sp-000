function map (obj, change){
  let newArr = [];
  for (const key in obj){
    newArr.push(change(obj[key]))
  }
  return newArr;
}

function reduce (obj, change, total)