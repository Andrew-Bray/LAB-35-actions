import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';
const initialState = {
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.payload.blogIndex]: [
          ...(state[action.payload.blogIndex] || []),
          action.payload.comment]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.blogIndex]: 
          state[action.payload.blogIndex]
            .filter(comment => comment !== action.payload.comment)
            
        
      };
    default: 
      return state;
  }
}
