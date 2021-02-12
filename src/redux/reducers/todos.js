import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actionTypes";
import { filterByIds, filterAllIds, idCheck } from '../modFunctions';

const initialState = {
    allIds: [],
    byIds: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            let { id, content, priority, dueDate } = action.payload;
            id = idCheck(id, Math.max.apply(Math, state.allIds), state.allIds);
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false,
                        priority,
                        dueDate
                    }
                }
            };
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            };
        }
        case DELETE_TODO: {
            const { id } = action.payload;
            let newAllIds = filterAllIds(id, state.allIds);
            let newByIds = filterByIds(id, state.byIds);
            return {
                ...state,
                allIds: newAllIds,
                byIds: newByIds
            }
        }
        default:
            return state;
    }
}
