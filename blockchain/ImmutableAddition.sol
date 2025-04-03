
pragma solidity ^0.8.0;

contract ImmutableAddition {
    event SumCalculated(uint operandOne, uint operandTwo, uint result);

    function add(uint a, uint b) public returns (uint) {
        uint result = a + b;
        emit SumCalculated(a, b, result);
        return result;
    }
}
