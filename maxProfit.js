const timeUnit = { p: 4, t: 5, c: 10 }
const earnings = { p: 1000, t: 1500, c: 3000 }

// 1. first eliminate buildings which are smaller than time input
// 2. start with smaller building

// const profits = { t: 0, p: 0, c: 0 }
// const calculateMaxProfit = (time) => {
//     let max = 0
//     const totalEarning = []
//     Object.keys(timeUnit).forEach(item => {
//         let earning = 0
//         let itemTime = time
//         let obj = {}
//         let count = 0
//         while (itemTime >= timeUnit[item]) {
//             count++
//             itemTime -= timeUnit[item]
//             obj[item] = count
//             earning += itemTime * earnings[item]
//         }
//         totalEarning.push(earning)
//         if (earning >= max) {
//             max = earning
//             profits[item] = obj[item]
//         }
//     })
//     return totalEarning.sort((a, b) => b - a)[0]
// }

// const maxProfit = calculateMaxProfit(5)
// console.log({ maxProfit })

// const getFormattedResult = (obj) => {
//     const testObj = { t: 0, p: 0, c: 0 }
//     const arr = []
//     Object.keys(obj).forEach(item => {
//         if (obj[item] !== 0) arr.push({ ...testObj, [item]: obj[item] })
//     })
//     return arr
// }

// console.log(getFormattedResult(profits));

const calculateMaxProfit = (time) => {
    const tempObj = { ...timeUnit }
    const profits = { t: 0, p: 0, c: 0 }
    let max = 0
    Object.keys(tempObj).forEach(item => {
        if (tempObj[item] > time) delete tempObj[item]
    })
    const keys = Object.keys(tempObj)
    const values = Object.values(tempObj)
    while (time > values[0]) {
        const allTwice = keys.filter(item => time > tempObj[item] * 2)
        const newTempObj = { ...tempObj }
        Object.keys(newTempObj).forEach(item => {
            if (newTempObj[item] > time) delete newTempObj[item]
        })

        if (allTwice.length === keys.length) {
            console.log("block-1")
            profits[keys.length - 1] += 1
            max += earnings[keys.length - 1] * (time - values[values.length - 1])
            time -= values[values.length - 1]
        } else if (allTwice.length === 0) {
            console.log("block-2")
            let key = 0
            if (time >= tempObj[keys[key]] * 2) key = keys.length - 1
            if (newTempObj[keys[key]]) {
                profits[keys[key]] += 1
                max += earnings[keys[key]] * (time - values[key])
                time -= values[key]
            } else {
                profits[keys[key - 1]] += 1
                max += earnings[keys[key - 1]] * (time - values[key - 1])
                time -= values[key - 1]
            }
        } else if (allTwice.length === 1) {
            console.log("block-3")
            profits[keys[1]] += 1
            max += earnings[keys[1]] * (time - values[1])
            time -= values[1]
        } else if (allTwice.length === 2) {
            console.log("block-4")
            profits[keys[1]] += 1
            max += earnings[keys[1]] * (time - values[1])
            time -= values[1]
        }
        console.log({ allTwice })
        // allTwice.forEach(item => {
        //     time -= tempObj[item]
        //     profits[item] += 1
        // })

    }
    console.log({ profits, max })
}

calculateMaxProfit(14)

// 10 - 8500
// 14 - 19500