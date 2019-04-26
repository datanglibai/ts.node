let testMap: Map<string, string[]> = new Map<string, string[]>();
testMap.set('item1', ['a', 'b', 'c']);
console.log(Object.keys(testMap).length);
console.log(Object.keys(testMap.entries));

testMap.set('item2', ['d', 'e', 'f']);
testMap.set('item3', ['a3', 'b3', 'c3']);

Object.keys(testMap).forEach(key => {
    console.log(key, testMap[key]);
})