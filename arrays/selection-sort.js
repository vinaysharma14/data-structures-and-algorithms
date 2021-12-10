console.clear();

const selectionSort = arr => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      arr[i] += arr[minIndex];
      arr[minIndex] = arr[i] - arr[minIndex];
      arr[i] -= arr[minIndex];
    }
  }

  console.log(arr);
};

selectionSort([5, 4, 3, 2, 1]);

/**
 * 5 4 3 2 1
 * 1 | 4 3 2 5
 * 1 2 | 3 4 5
 * 1 2 3 | 4 5
 * 1 2 3 4 | 5
 *
 * 5 2 6 7 2 1 0 3
 * 0 | 2 6 7 2 1 5 3
 * 0 1 | 6 7 2 2 5 3
 * 0 1 2 | 7 6 2 5 3
 * 0 1 2 2 | 6 7 5 3
 * 0 1 2 2 3 | 7 5 6
 * 0 1 2 2 3 5 | 7 6
 * 0 1 2 2 3 5 6 | 7
 */
