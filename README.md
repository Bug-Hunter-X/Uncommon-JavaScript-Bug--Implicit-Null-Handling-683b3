# Uncommon JavaScript Bug: Implicit Null Handling

This repository demonstrates a subtle bug in JavaScript related to null handling. The `foo` function intends to add two numbers, but it prematurely returns `null` if either input is `null`. This behavior might be unexpected when dealing with other falsy values like `0` or an empty string. 

The `bug.js` file contains the buggy code, and the `bugSolution.js` file provides a corrected version.

## Bug Description:
The issue arises from the direct null check using `===`. While it correctly handles `null` values, it fails to account for other falsy values that might unintentionally cause the function to return null. This could lead to unexpected behavior and difficult-to-trace errors.