import { useLoaderData } from "react-router-dom";
import WishlistLayout from "./WishlistLayout";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const WishList = () => {
    const { loading } = useContext(AuthContext)
    const loadmyCartData = useLoaderData();
    const [myCartData, setMyCartData] = useState(loadmyCartData);

    if (loading) {
        return <span className="loading loading-spinner text-error"></span>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {
                myCartData.map(cart => <WishlistLayout cart={cart} myCartData={myCartData} setMyCartData={setMyCartData} key={cart._id}></WishlistLayout>)
            }
        </div>
    );
};

export default WishList;