pragma solidity ^0.8.0;

contract Lottery{

  //   truffle을 사용해 contract와 상호작용 확인
  address public owner; //public쓰면 자동으로 getter 만들어줌
  constructor() {
    owner = msg.sender;
  }

  function getSomeValue() public pure returns (uint256 value){
    return 5;
  }
}