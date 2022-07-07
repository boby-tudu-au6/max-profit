const timeUnit = {
    t: 5,
    p: 4,
    c: 10
}

const earnings = {
    t: 1500,
    p: 1000,
    c: 3000
}

const profits = {
    t: 0,
    p: 0,
    c: 0
}


const calculateMaxProfit = (time) => {
    let max = 0
    const totalEarning = []
    Object.keys(timeUnit).forEach(item => {
        let earning = 0
        let itemTime = time
        let obj = {}
        let count = 0
        while (itemTime >= timeUnit[item]) {
            count++
            itemTime -= timeUnit[item]
            obj[item] = count
            earning += itemTime * earnings[item]
        }
        totalEarning.push(earning)
        if (earning >= max) {
            max = earning
            profits[item] = obj[item]
        }
    })
    return totalEarning.sort((a, b) => b - a)[0]
}

const maxProfit = calculateMaxProfit(7)
console.log({ maxProfit })

const getFormattedResult = (obj) => {
    const testObj = { t: 0, p: 0, c: 0 }
    const arr = []
    Object.keys(obj).forEach(item => {
        if (obj[item] !== 0) arr.push({ ...testObj, [item]: obj[item] })
    })
    return arr
}

console.log(getFormattedResult(profits));