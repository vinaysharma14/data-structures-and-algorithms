console.clear();

const bubbleSort = arr => {
  const n = arr.length;

  /**
   * with each pass an element bubbles up to
   * it's correct position, so `n-1 th` loop
   * would be useless to loop as `n-1` items
   * would have been already placed correctly
   */
  for (let i = 0; i < n - 1; i++) {
    let didSwap = false;

    console.log(`[${arr}]`); // input for each pass

    /**
     * iteration condition is reduced by 1 so that we do
     * not end up accessing an array index out of bound

     * further with each pass, an element bubbles up to
     * it's correct position. so the subsequent passes
     * need to iterate only the elements which have not
     * bubbled up yet, i.e. ignore the bubbled up elements
     * which can be checked with no of passes done so in each
     * pass we reduce the max possible iteration condition by `i`
     */
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        didSwap = true;

        arr[j] += arr[j + 1];
        arr[j + 1] = arr[j] - arr[j + 1];
        arr[j] -= arr[j + 1];
      }

      console.log(`[${arr}]`); // each swap in a pass
    }

    if (!didSwap) {
      break;
    }

    console.log();
  }
};

bubbleSort([5, 4, 3, 2, 1]);
