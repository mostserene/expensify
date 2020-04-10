import { createStore } from "redux";

//action generators 
const incrementCount = ({incrementBy = 1} = {}) => ({
        type:'INCREMENT',
        incrementBy: typeof incrementBy === 'number' ? incrementBy:1
    });

    const decrementCount = ({decrementBy = 1} = {}) => ({
        type:'DECREMENT',
        decrementBy: typeof decrementBy === 'number' ? decrementBy:1
    });

    const setCount = ({count = 101} = {}) => ({
        type:'SET',
        count
    });
    const resetCount = ({count = 1} = {}) => ({
        type:'RESET',
        count: 0
    });

    
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case "INCREMENT":
       // const incrementBy =
      //    typeof action.incrementBy === "number" ? action.incrementBy : 1;
        return {
          count: state.count + action.incrementBy
        };
      case "DECREMENT":
      //  const decrementBy =
       //   typeof action.decrementBy === "number" ? action.decrementBy : 0;
        return { count: state.count - action.decrementBy };
      case "RESET":
        return {
          count: action.count
        };
      case "SET": 
        return {
          count: action.count
      }
      case "DEFAULT": {
        return state;
      }
    }
  };

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:10}));


// unsubscribe();


store.dispatch(resetCount());

//store.dispatch(decrementCount());

store.dispatch(setCount({count:-100}));