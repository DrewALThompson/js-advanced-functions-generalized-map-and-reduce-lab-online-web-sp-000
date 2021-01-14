function map (obj, change, newArr = []){
  for (const key in obj){
    newArr.push(change(key));
  }
  newArr;
}