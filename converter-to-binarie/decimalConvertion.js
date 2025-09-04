function convert(decimal){
    
  let residuos = []
  while(decimal > 0){
      let resto = decimal % 2
      let result = Math.floor(decimal / 2)
      console.log(`${decimal}/2 = ${result} residuo ${resto}`);
        decimal = result
      residuos.push(resto)
  }
  return residuos.reverse().join("")
}

console.log(convert(23519));