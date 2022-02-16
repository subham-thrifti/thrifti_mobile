const roundNumber = (num, precision = 2) => Math.round(num * Math.pow(10, precision))/Math.pow(10, precision)

export {
    roundNumber
}