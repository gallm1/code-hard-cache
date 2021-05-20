import React, { createContext, useReducer, useContext } from "react";
import { ADD_TERM, UPDATE_SEARCH, UPDATE_TERMS } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
	switch (action.type) {
		
		case UPDATE_TERMS:
			return {
				...state,
				terms: [...action.terms]
			};

		case ADD_TERM:
			return {
				...state,
				terms: [action.term, ...state.terms]
			};

        case UPDATE_SEARCH:
            return {
                ...state,
                search: action.search
            }

		default:
			return state;
	}
};

const StoreProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		terms: [],
        search: ""
	});

	return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
	return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
