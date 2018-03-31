import database from '../firebase/firebase';

// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes


// async action
// component calls action generator
// action generator returns funtion
// component dispatches function
// function runs (has the ability to dispatch other actions or do whatever it wants)


// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  }
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => (
  {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
);

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => (
  {
    type: 'REMOVE_EXPENSE',
    id
  }
);

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

export const setExpenses = (expenses = []) => (
  {
    type: 'SET_EXPENSES',
    expenses
  }
);

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses')
      .once('value')
      .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        });
        return expenses;
      })
      .then((expenses) => dispatch(setExpenses(expenses)));
  }
};