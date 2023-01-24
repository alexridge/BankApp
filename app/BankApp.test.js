/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});
const BankApp = require("./BankApp")

describe('deposit', () => { 
  it("should return correct value after depositing", () => {
   const bankapp = new BankApp; 
   bankapp.deposit(400);
    expect(bankapp.balance()).toEqual(400.00);
});
  it("should return correct value after depositing", () => {
    const bankapp = new BankApp; 
    bankapp.deposit(400);
    bankapp.deposit(452.23);
     expect(bankapp.balance()).toEqual(852.23);
 });
});

describe('withdraw', () => { 
    it("should return correct value after withdrawing", () => {
     const bankapp = new BankApp; 
     bankapp.deposit(400);
     bankapp.withdraw(200);
      expect(bankapp.balance()).toEqual(200);
  });
    it("should return correct value after withdrawing", () => {
      const bankapp = new BankApp; 
      bankapp.deposit(400);
      bankapp.withdraw(52);
      bankapp.withdraw(.52);
       expect(bankapp.balance()).toEqual(347.48);
   });
  });

  describe('statements', () => { 
    it("should return correct number of formatted statements", () => {
     const bankapp = new BankApp; 
     bankapp.deposit(400);
     bankapp.withdraw(200);
      expect(bankapp.statement().length).toEqual(2 + 1);
  });
    it("should return correct number of formatted statements", () => {
      const bankapp = new BankApp; 
      bankapp.deposit(400);
      bankapp.withdraw(52);
      bankapp.withdraw(.52);
      bankapp.withdraw(.52);
      bankapp.withdraw(.52);
       expect(bankapp.statement().length).toEqual(5 + 1);
   });
  });