# JavaScript Null Handling Bug

This repository demonstrates a common bug in JavaScript related to handling null values. The original code has a flaw in its approach to null inputs, and this improved version provides a more robust solution. 

## Bug Description

The function `foo` attempts to handle null values but does not account for scenarios where both input parameters are null. This could lead to unexpected behavior in other parts of the application.

## Solution

The solution introduces an error handling mechanism to address situations where both `a` and `b` are null and improve code stability.