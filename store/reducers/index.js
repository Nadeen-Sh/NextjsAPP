import {combineReducers} from 'redux'
import { postReducer } from './postReducer';
import { staticReducer } from './staticReducer';





export default combineReducers({
post: postReducer,
static: staticReducer


});