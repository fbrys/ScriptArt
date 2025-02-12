"use client";

import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

export default function ResponsiveNav() {
  const [showNav, setShownNav] = useState(false);

  const showNavHandler = () => setShownNav(true);
  const hideNavHandler = () => setShownNav(false);
  return (
    <div>
      <Navbar openNav={showNavHandler} />
      <MobileNav showNav={showNav} closeNav={hideNavHandler} />
    </div>
  );
}
