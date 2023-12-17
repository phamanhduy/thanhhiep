    const numberCount = {};

function findActiveNumber(arr) {
    const N = arr.length;

    // Đếm số lần xuất hiện của mỗi số trong dãy
    for (let i = 0; i < N; i++) {
        const currentNumber = arr[i];
        // console.log({currentNumber})
        if (numberCount[currentNumber] === undefined) {
            numberCount[currentNumber] = 1;
        } else {
            numberCount[currentNumber]++;
        }
    }

    // Tìm số "active"
    for (let number in numberCount) {
        if (numberCount[number] > N / 2) {
            return parseInt(number);
        }
    }
}

// // Sử dụng hàm với dãy đầu vào
// const inputArray = [1, 3, 4, 1, 1];
// const activeNumber = findActiveNumber(inputArray);

// Hiển thị kết quả
// console.log({numberCount, activeNumber});

function getMaxCouple(arr) {
    let maxSum = 0;
    let resultString = '';

    // Duyệt qua mỗi cặp số trong mảng
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // Tính tổng cặp số hiện tại
            const currentSum = arr[i] + arr[j];

            // Nếu tổng lớn hơn maxSum, cập nhật maxSum và resultString
            if (currentSum > maxSum) {
                maxSum = currentSum;
                console.log({maxSum})
                resultString = `${arr[i]} + ${arr[j]}`;
            }
        }
    }

    return resultString;
}

// Sử dụng hàm với mảng đầu vào
const inputArray = [1, 3, 5, 2, 0, 1, 7];
const result = getMaxCouple(inputArray);

// Hiển thị kết quả
console.log("Cặp số có tổng lớn nhất là:", result);

