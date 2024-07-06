import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes/index";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_user_info } from "./store/Reducers/authReducer";


const DashBoardApp = () => {
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.auth)
  const [areRoutesReady, setRoutesReady] = useState(false);
  const [allRoutes, setAllRoutes] =useState([...publicRoutes]);
  // console.log(allRoutes);
  useEffect(() => {
    const routes = getRoutes()
    console.log([...allRoutes,routes])
    setAllRoutes([...allRoutes,routes])
    setRoutesReady(true)
  }, [])
  
  useEffect(() => {
    if (token) {
        dispatch(get_user_info())
    }

},[token])

  return areRoutesReady ? 
  <Router allRoutes={allRoutes}/> :
  null
};

export default DashBoardApp;
