import { Outlet } from "react-router-dom";
import Header from './Header';
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../utils/utils";
import { updateCustomer, updateSellers } from "../store/Reducers/chatReducer";

const MainLayout = () => {

  const dispatch = useDispatch()
  const {userInfo } = useSelector(state => state.auth)

  useEffect(() => {
    socket.on('activeCustomer',(customers)=>{
        dispatch(updateCustomer(customers))
    })
    socket.on('activeSeller',(sellers)=>{
        dispatch(updateSellers(sellers))
    })
  })

  useEffect(() => {
      if (userInfo && userInfo.role === 'seller') {
          socket.emit('add_seller', userInfo._id,userInfo)
      } else {
          socket.emit('add_admin', userInfo)
      }
  },[userInfo])
  
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className="bg-[#cdcae9] w-full min-h-screen">
      {/* <Header />
      <SideBar /> */}
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
