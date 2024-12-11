# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

The span of this algorithm is $\Theta(n log n)$, we have two parallel calls which accept $n/2$ elements each, since they have the same complexity, only one is added to the span, we also have a merge function that takes $\Theta(n)$ time, giving us $\Theta(nlogn)$ for a worst-case time complexity.

Help: https://www.geeksforgeeks.org/merge-sort/ for an implementation of mergesort which I then altered to be parallel. ChatGPT gave me the idea to use the paralleljs library.

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”