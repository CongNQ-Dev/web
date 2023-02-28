import React, { Fragment } from "react";
import "./App.css";
import { Outlet, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import TestState from "./components/state/States";
export default function App() {
  //   return (
  //     <div>
  //       <h1>Bookeeper</h1>
  //       <nav
  //         style={{
  //           borderBottom: "solid 1px",
  //           paddingBottom: "1rem",
  //         }}
  //       >
  //         <Link to="/invoices">Invoices</Link> |<br />
  //         <Link to="/expenses">Expenses</Link>
  //       </nav>
  //       <Outlet />
  //     </div>
  //   );

  return (
    <Fragment>
      <TestState />
    </Fragment>
  );
}
