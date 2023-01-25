
class BankApp {
  constructor() {
    var bankAccount = 0;
    this.bankAccount = bankAccount;
    const transactions = ["Date || Withdrawls || Deposits || Balance "]; 
    this.transactions = transactions
    this.statements = document.querySelector('#statements');
    document.addEventListener('DOMContentLoaded', function () {
    this.buttonD = document.querySelector('#submit-d').addEventListener('click', () =>{
      this.depo = document.querySelector('#d-input').value;
      this.deposit(this.depo * 1);
    });
    this.buttonw = document.querySelector('#submit-w').addEventListener('click', () =>{
      this.withd = document.querySelector('#w-input').value;
      this.withdraw(this.withd * 1);
    });
  });
};
  statement () {
   return(this.transactions);
  };

  balance(){
    return(this.bankAccount);
};

  deposit(num) {
    const newTot = this.bankAccount + num;
    this.bankAccount = newTot;
    const date = new Date().toISOString().slice(0, 10);
    const action = `${date} | || | £${num} | | £${newTot}`;
    this.transactions.push(action);
    console.log(newTot, num );
};

  withdraw (num) {
    const newTot = this.bankAccount - num;
    this.bankAccount = newTot;
    const date = new Date().toISOString().slice(0, 10);
    const action = `${date} | | £${num} | || | £${newTot}`;
   this.transactions.push(action);
   console.log(newTot, num );
};

};

module.exports = BankApp; 