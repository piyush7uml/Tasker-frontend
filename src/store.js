import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userRegisterReducer, userLoginReducer } from './Reducers/userReducers';
import { todoListReducer, todoAddReducer, todoDeleteReducer, taskAddReducer, taskDeleteReducer } from './Reducers/todoReducers';




const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    todoList: todoListReducer,
    todoAdd: todoAddReducer,
    todoDelete: todoDeleteReducer,
    taskAdd: taskAddReducer,
    taskDelete: taskDeleteReducer

})


const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}


const middleware = [thunk]



const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store