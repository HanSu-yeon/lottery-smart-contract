const _deploy_smart_contract = require("../migrations/1_deploy_smart_contract");
const Lottery = artifacts.require("Lottery");
//contract(테스트할 컨트랙트 명,callback function([deployer, user1,user2])) : 기본적인 모카 테스트 구조
//파라미터 : account들이 순서대로 들어온다 지금은 0,1,2주소
contract("Lottery", function ([deployer, user1, user2]) {
  let lottery;
  beforeEach(async () => {
    console.log("Before each");
    lottery = await Lottery.new();
  });
  it("Basic test", async () => {
    console.log("Basic test");
    let owner = await lottery.owner();
    let value = await lottery.getSomeValue();
    console.log(`owner : ${owner}`);
    console.log(`value : ${value}`);
    assert.equal(10, 10);
  });
  //모카에서 test할때 특정 테케만 테스트하고 싶으면 .only 써주기
  it.only("getPot should return curdrent pot", async () => {
    let pot = await lottery.getPot();
    assert.equal(pot, 0);
  });
});
