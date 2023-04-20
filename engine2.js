function findHack(arr) {
    let r = [];
    console.log(typeof(arr))
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i][2].length; j++) {
            if (arr[i][1] >= 200) {
                if (arr[i][2][j] == 'B') {
                    console.log("i:", i)
                    console.log("j:", j)
                    r.push(arr[i][0]);
                }
            }

        }
    }
    return r;
}
let array = [
    ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
    ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
    ["name3", 200, ["B", "A", "A", "C"]], // name3 point is 200 but real point is 90 => hacked
    ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
];
console.log(findHack(array))