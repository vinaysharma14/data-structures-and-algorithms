console.clear();

const mergeSubArrays = (arr, left, mid, right) => {
  const mergedSubArr = [];

  let leftSubArrIt = left;
  let rightSubArrIt = mid + 1;

  while (leftSubArrIt <= mid && rightSubArrIt <= right) {
    mergedSubArr.push(
      arr[
        arr[leftSubArrIt] < arr[rightSubArrIt]
          ? leftSubArrIt++
          : rightSubArrIt++
      ]
    );
  }

  while (leftSubArrIt <= mid) {
    mergedSubArr.push(arr[leftSubArrIt++]);
  }

  while (rightSubArrIt <= right) {
    mergedSubArr.push(arr[rightSubArrIt++]);
  }

  mergedSubArr.forEach((item, index) => {
    arr[left + index] = item;
  });

  console.log(arr, mergedSubArr);
};

const mergeSort = (arr, left, right) => {
  if (left === right) {
    return;
  }

  const mid = parseInt((left + right) / 2);

  mergeSort(arr, left, mid); // left sub array
  mergeSort(arr, mid + 1, right); // right sub array
  mergeSubArrays(arr, left, mid, right); // merge both sub arrays
};

mergeSort([38, 27, 43, 3, 9, 82, 10], 0, 6);
