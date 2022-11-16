import React from "react";
import Tlogin  from './Tlogin';

interface LoginState {
    password: string;
    userName: string;
    isLoading: boolean;
    error: string;
    isLoggedIn: boolean;
  }
  
  type LoginAction =
    | { type: "login" | "success" | "error" | "logout" }
    | { type: "field"; fieldName: string; payload: string };
  
  const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
    switch (action.type) {
      case "field": {
        return {
          ...state,
          [action.fieldName]: action.payload
        };
      }
      case "login": {
        return {
          ...state,
          error: "",
          isLoading: true
        };
      }
      case "success": {
        return { ...state, error: "", isLoading: false, isLoggedIn: true };
      }
      case "error": {
        return {
          ...state,
          isLoading: false,
          isLoggedIn: false,
          userName: "",
          password: "",
          error: "Incorrect userName or password!"
        };
      }
      case "logout": {
        return {
          ...state,
          isLoggedIn: false
        };
      }
      default:
        return state;
    }
  };
  
  const initialState: LoginState = {
    password: "",
    userName: "",
    isLoading: false,
    error: "",
    isLoggedIn: false
  };
  
  export default function Login() {
    const [state, dispatch] = React.useReducer(loginReducer, initialState);
    <>{console.log(state)}</>
    const { userName, password, isLoading, error, isLoggedIn } = state;
  
    
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch({ type: "login" });
  
    try {
        await Tlogin({ userName, password });
        dispatch({ type: "success" });
      } catch (error) {
        dispatch({ type: "error" });
      }
    };
  
    return (
      <div className="App">
        <div className="login-container">
          {isLoggedIn ? (
            <>
              <p>{`Hello ${userName}`}</p>
              <button type="button" onClick={() => dispatch({ type: "logout" })}>
                Log out
              </button>
            </>
          ) 
          : 
          (
            <form className="form" onSubmit={onSubmit}>
              {error && <p className="error">{error}</p>}
              <p> PLease Login!</p>
              <input
                type="text"
                placeholder="userName"
                value={userName}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    fieldName: "userName",
                    payload: e.currentTarget.value
                  })
                }
              />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    fieldName: "password",
                    payload: e.currentTarget.value
                  })
                }
              />
              <button type="submit" className="submit" disabled={isLoading}>
                {isLoading ? "Loggin in....." : "Login In"}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }