//Sum of all hourglasses in the 2D array
function hourglassSum(arr) {
    let hourglasses = [];
    if(typeof arr === 'object'
        && arr.length === 6
        && arr.map(i => i.length).reduce((p, n) => p +n) === 36){
            for(let row = 0; row <= 3; row++) {
                for(let col = 0; col <= 3; col++) {
                    let sum = 0;
                    sum += arr[row][col];
                    sum += arr[row][col+1];
                    sum += arr[row][col+2];
                    sum += arr[row+1][col+1];
                    sum += arr[row+2][col];
                    sum += arr[row+2][col+1];
                    sum += arr[row+2][col+2];
                    hourglasses.push(sum);
                }
            }
        } 
    return (hourglasses.length > 0) ? Math.max(...hourglasses) : 0;
}

//Rotate array to left
function rotLeft(a, d) { //a: array, d: # of rotation
    for(let i = 0; i < d; i++) {
        a.push(a.splice(0,1)[0]);
       }
    return a;
}

//Arrays - DS
function reverseArray(a) {
    for(let i=a.length-1; i>=0; i--) {
        console.log(a[i]);
    }
}