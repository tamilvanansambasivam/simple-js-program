function getSecondLargest(nums) {
    // Complete the function
    let uniq1 = nums.sort();
    let uniq2 = [...new Set(uniq1)];
    let uniq3 = uniq2.sort(function(a, b){return b-a});
    return uniq3[1];
}

