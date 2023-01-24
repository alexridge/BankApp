(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // app/BankApp.js
  var require_BankApp = __commonJS({
    "app/BankApp.js"(exports, module) {
      var BankApp2 = class {
        constructor() {
          var bankAccount = 0;
          this.bankAccount = bankAccount;
          const transactions = ["Date || Withdrawls || Deposits || Balance "];
          this.transactions = transactions;
          this.statements = document.querySelector("#statements");
          this.buttonD = document.querySelector("#submit-d").addEventListener("click", () => {
            this.depo = document.querySelector("#d-input").value;
            this.deposit(this.depo * 1);
          });
          this.buttonw = document.querySelector("#submit-w").addEventListener("click", () => {
            this.withd = document.querySelector("#w-input").value;
            this.withdraw(this.withd * 1);
          });
        }
        statement() {
          return this.transactions;
        }
        balance() {
          return this.bankAccount;
        }
        deposit(num) {
          const newTot = this.bankAccount + num;
          this.bankAccount = newTot;
          const date = new Date().toISOString().slice(0, 10);
          const action = `${date} | || | \xA3${num} | | \xA3${newTot}`;
          this.transactions.push(action);
          console.log(newTot, num);
        }
        withdraw(num) {
          const newTot = this.bankAccount - num;
          this.bankAccount = newTot;
          const date = new Date().toISOString().slice(0, 10);
          const action = `${date} | | \xA3${num} | || | \xA3${newTot}`;
          this.transactions.push(action);
          console.log(newTot, num);
        }
      };
      module.exports = BankApp2;
    }
  });

  // app/BankView.js
  var require_BankView = __commonJS({
    "app/BankView.js"(exports, module) {
      var BankView2 = class {
        constructor(model) {
          this.model = model;
          this.mainContainer = document.querySelector("#statements");
          this.buttonStatements = document.querySelector("#view-s").addEventListener("click", () => {
            const state = document.querySelectorAll("#statement");
            state.forEach((statement) => {
              statement.remove();
            });
            this.displayStatements();
          });
        }
        displayStatements() {
          const statements = this.model.statement();
          statements.forEach((statement) => {
            const eachStatement = document.createElement("p");
            eachStatement.textContent = statement;
            eachStatement.id = "statement";
            this.mainContainer.append(eachStatement);
          });
        }
      };
      module.exports = BankView2;
    }
  });

  // index.js
  var BankApp = require_BankApp();
  var BankView = require_BankView();
  var Bank = new BankApp();
  var BankViewer = new BankView(Bank);
  BankViewer.displayStatements(Bank);
})();
