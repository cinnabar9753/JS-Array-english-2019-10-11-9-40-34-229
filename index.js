// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
typeof(a)
typeof(b)

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (var i=0;i<a.length;i++) {
    a[i]=a[i]*2
}
console.log(a)
// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var key=1
switch(key){
    case 1:
        console.log(colors[0]+" "+colors[1]+" "+colors[2]+" "+colors[3]);
        break
    case 2:
        console.log(colors[0]+"+"+colors[1]+"+"+colors[2]+"+"+colors[3]);
        break
    case 3:
        console.log(colors[0]+","+colors[1]+","+colors[2]+","+colors[3]);
        break
}

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function dsc(a,b){
    return b-a
}
console.log(a.sort(dsc));


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function max(arr) {
    arr = arr.slice();
    var _arr = [];
    for (var i = arr.length; i--;) {
        if (typeof arr[i] === "string") {
            arr.unshift.apply(_arr, arr.splice(i, 1));
        }
    }
    arr.push.apply(arr.sort(), _arr.sort());
    var temp = +!!arr.length, count = temp;
    var next, cur = arr.shift(), ret = cur;
    for (;;) {
        if (!arr.length) return ret;
        next = arr.shift();
        temp = cur === next ? ++temp : 1;
        if (temp > count) {
            count = temp;
            ret = cur;
        }
        cur = next;
    }
}
console.log(max(a));
