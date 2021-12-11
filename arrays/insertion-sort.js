console.clear();

const insertionSort = arr => {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let prevIdx = i - 1;
    const curr = arr[i];

    while (arr[prevIdx] > curr && prevIdx >= 0) {
      arr[prevIdx + 1] = arr[prevIdx];
      prevIdx--;
    }

    arr[prevIdx + 1] = curr;

    console.log(arr);
  }
};

insertionSort([5, 4, 3, 2, 1]);

/**
 * 5 4 3 2 1
 * 4 5 3 2 1
 * 3 4 5 2 1
 * 2 3 4 5 1
 * 1 2 3 4 5
 */
