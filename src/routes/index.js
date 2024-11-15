import { createBrowserRouter } from "react-router-dom";
import Home from "../module/home";
import DefaultLayout from "./defaultLayout";
import AuthLayout from "./authLayout";
import Signin from "../components/signin";
import Signup from "../components/signup";
import Resetpassword from "../components/resetpassword";
import Otpverify from "../components/OTPverification";
import Setnewpassword from "../components/Setnewwpassword";
import Kyc from "../module/kyc";
import OrderStatus from "../module/orderStatus";
import Profile from "../module/profile";
import BuyerSeller from "../module/buyerSeller";
import Transaction from "../module/transaction";
import Notification from "../module/notification";
import WalletBallance from "../module/walletBallance";
import Dashboard from "../module/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/walletBallance",
        element: <WalletBallance />,
      },
      {
        path: "/kyc",
        element: <Kyc />,
      },
      {
        path: "/orderstatus",
        element: <OrderStatus />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/buyerseller",
        element: <BuyerSeller />,
      },
      {
        path: "/transaction",
        element: <Transaction />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/otpverify",
        element: <Otpverify />,
      },
      {
        path: "/resetpassword",
        element: <Resetpassword />,
      },
      {
        path: "/setnewpassword",
        element: <Setnewpassword />,
      },
    ],
  },
]);

export default router;
