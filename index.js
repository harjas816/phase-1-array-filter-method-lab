// Code your solution here
function findMatching(drivers,oneWeWant){
    return drivers.filter(x => x.toUpperCase() === oneWeWant.toUpperCase())
}

function fuzzyMatch(drivers, letterFilter){
    return drivers.filter(x => letterFilter.includes(x[0]))
}

function matchName(drivers, criteria){
    return drivers.filter(x => x.name === criteria)
}