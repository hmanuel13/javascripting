let name = 'Yayan'

if(true){
  let name = 'Hilary'
  if(true){
    //variable shadowing
    console.log('first log: ' + name)
  }
}

if(true){
  console.log('second log: ' + name)
}