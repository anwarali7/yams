function de(){
  return Math.floor ( Math.random() * 6 ) + 1
}

export const dice = ( n = 5 )  => {
  const dicesArrray = []
  for (let i = 0; i < n; i++) dicesArrray.push(de())
  return dicesArrray
}
