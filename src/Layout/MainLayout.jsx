import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="md:w-11/12 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;