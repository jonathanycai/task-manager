import { useEffect, useReducer } from "react";

import initialState from "./fixture";

function reducer(state, { type, payload }) {
    switch (type) {
        case "TOGGLE":
            return {
                ...state,
                expandedId: state.expandedId === payload ? null : payload,
            };
        case "ADD_TASK":
            return {
                ...state,
                tasks: state.tasks.concat([
                    { id: Math.random() * 10000000, title: payload, steps: [] },
                ]),
            };
        case:
    }
}