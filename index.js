function map (newArr = [], obj, key){
  for (const key in obj){
    newArr.push(key)
  }
}