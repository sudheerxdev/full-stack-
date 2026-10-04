// // // const arr = [1, 2, 3, 4, 5];

// // // function sumArray(array) {
// // //     return array.reduce((sum, currentValue) => sum + currentValue, 0);
// // // }

// // // console.log(sumArray(arr)); // Output: 15

// // let age = 22;
// // age = 23;

// // console.log(age);
// let x = 10;
// let y = x;

// y = 20;

// console.log(x);
// console.log(y);

class Solution {
    static int findPerimeter(int[][] mat) {
        int n = mat.length;
        int m = mat[0].length;
        int perimeter = 0;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {

                if (mat[i][j] == 1) {
                    // Every 1-cell initially has 4 sides
                    perimeter += 4;

                    // Check upper cell
                    if (i > 0 && mat[i - 1][j] == 1) {
                        perimeter -= 2;
                    }

                    // Check left cell
                    if (j > 0 && mat[i][j - 1] == 1) {
                        perimeter -= 2;
                    }
                }
            }
        }

        return perimeter;
    }
}
