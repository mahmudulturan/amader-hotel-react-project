import Header from "../Components/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="md:w-11/12 mx-auto">
      <Header></Header>
      <div className="min-h-screen ">
      {navigation.state === "loading" ? (
        <div className="flex items-center justify-center">
            <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
        </div>
      ) : (
        <Outlet></Outlet>
      )}
      </div>
    </div>
  );
};

export default MainLayout;
