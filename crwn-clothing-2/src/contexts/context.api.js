import { createContext, useEffect, useReducer } from "react";
import { isAuth } from "../actions/actions";
import { useNavigate } from "react-router-dom";



export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) =>
  dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER,payload:user});

  const value = { currentUser, setCurrentUser };
    const navigate = useNavigate()
    useEffect(()=>{
        if(currentUser){
            navigate('/shop')
        }else{
          navigate('/auth')
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentUser])
  
  useEffect(() => {
       
     const unsubScribe = () => {
      isAuth().then(data =>{
        console.log(data.user)  
        setCurrentUser(data.user)})
     }

     return unsubScribe
  
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};