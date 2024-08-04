import { Route, Routes } from "react-router-dom"
import Layout from './layouts/layout';
import HomePage from "./Pages/HomePage";
import OrderPage from "./Pages/OrderPage";
import { CartProvider } from "./components/CardContext";

const AppRoutes = () => {
    return(
        <CartProvider>
            <Routes>
                <Route path="/" element={<Layout><HomePage/></Layout>}/>
                <Route path="/order-page" element={<Layout><OrderPage/></Layout>}/>
            </Routes>
        </CartProvider>
    )
}

export default AppRoutes;