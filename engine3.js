function findHack(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= arr[i][2].length; j++) {
            console.log(arr[i][j])
        }
    }
}
var array = [
    ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
    ["name2", 120, ["B", "A", "A", "A"]],
    ["name3", 160, ["B", "A", "A", "A", "A"]],
    ["name4", 140, ["B", "A", "A", "C", "A"]]
];
console.log(findHack(array))