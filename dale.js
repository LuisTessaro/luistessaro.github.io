const entry = [
    { string: '6 bananaemuitobomsenaotemquedescascarbanana', result: 'banana' },
    { string: '2 luisemelhorquelucas', result: 'lu' },
    { string: '1 aaaaabbbeeee', result: 'a' },
    { string: '6 felipeviadaoviadaoviadao', result: 'viadao' },
    { string: '1 cu', result: 'c' }
]



function solve(entryString) {
    const subSet = createSubsetList(...entryString.split(' '))
    console.table(subSet)
    const mostCommon = getMostCommon(subSet)
    return mostCommon
}

function getMostCommon(subSet) {
    let biggestN = 0
    let mostCommon = ''

    const countObj = {}
    subSet.forEach(e => countObj[e] = countObj[e] ? countObj[e] = countObj[e] + 1 : countObj[e] = 1)

    Object.keys(countObj).forEach(e => {
        if(countObj[e] > biggestN){
            biggestN = countObj[e]
            mostCommon = e
        }
    })

    return mostCommon
}

function createSubsetList(n, string) {
    n = parseInt(n)
    const arr = []

    for (let i = 0; i < string.length - n + 1; i++) 
        arr.push(string.substring(i, n + i))

    return arr
}

function teste(entry) {
    entry.forEach((e, i) => solve(e.string) === e.result ? console.log(`Test ${i + 1} passed!`) : console.log(`Test ${i + 1} failed!`))
}

teste(entry)