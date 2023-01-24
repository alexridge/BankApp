class BankView {
  constructor(model) {
  this.model = model;
  this.mainContainer = document.querySelector('#statements');
  this.buttonStatements = document.querySelector('#view-s').addEventListener('click', () =>{
    const state = document.querySelectorAll('#statement')
    state.forEach(statement => {
        statement.remove();
    });
    this.displayStatements();
  });
  }

displayStatements () {
  const statements = this.model.statement();
  statements.forEach(statement => { 
    const eachStatement = document.createElement('p');
    eachStatement.textContent = statement;
    eachStatement.id = 'statement';
    this.mainContainer.append(eachStatement);
  });
};
};

module.exports = BankView;