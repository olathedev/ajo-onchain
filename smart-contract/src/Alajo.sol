// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Alajo {
    address public owner;
    IERC20 public owo;

    constructor(address token) {
        owner = msg.sender;
        owo = IERC20(token);
    }

    mapping(address => uint256) public book;
    uint256 public totalContributions;

    event ContributionMade(address indexed user, uint256 amount);
    event WithdrawalMade(address indexed user, uint256 amount);

    function payAjo(uint256 _amount) external {
        require(_amount > 0, "Amount must be greater than zero");
        uint256 balance = owo.balanceOf(msg.sender);
        require(balance >= _amount, "INSUFFICIENT BALANCE");
        bool success = owo.transferFrom(msg.sender, address(this), _amount);
        require(success, "Transfer failed");
        book[msg.sender] += _amount;
        totalContributions += _amount;
        emit ContributionMade(msg.sender, _amount);
    }

    function verifyAjo(address _user) external view returns (uint256) {
        return book[_user];
    }

    function getTotalContributions() external view returns (uint256) {
        return totalContributions;
    }
}
