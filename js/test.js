const array = [...Array(10).keys()].map(x => ++x);

for (let i in array) {
    for (let j in array) {
        console.log(i * j);
    }
}
