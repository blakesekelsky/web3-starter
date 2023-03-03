const { expect } = require('chai');
const { ethers } = require('hardhat');

describe("SampleContract", () => {
    let owner, sampleContract;

    beforeEach(async () => {
        [owner,] = await ethers.getSigners();

        const SampleContract = await ethers.getContractFactory("SampleContract");
        sampleContract = await SampleContract.deploy();
    })

    describe("Deployment", () => {
        it("Should have an owner, and it's own address", async () => {
            expect(owner).to.not.equal(null);
            expect(sampleContract.address).to.not.equal(null);
        })
    })

    describe("Functions", () => {
        it("initialize values", async () => {
            let myInt, myData, isEnabled;
            myInt = await sampleContract.myInt();
            myData = await sampleContract.myData();
            isEnabled = await sampleContract.isEnabled();

            expect(myInt).to.equal(13);
            expect(myData).to.equal('hello');
            expect(isEnabled).to.equal(true);
        })

        it("setter functions", async () => {
            await sampleContract.setData('bye');
            await sampleContract.toggle();

            let myInt, myData, isEnabled;
            myInt = await sampleContract.myInt();
            myData = await sampleContract.myData();
            isEnabled = await sampleContract.isEnabled();

            expect(myInt).to.equal(13);
            expect(myData).to.equal('bye');
            expect(isEnabled).to.equal(false);
        })
    })

})