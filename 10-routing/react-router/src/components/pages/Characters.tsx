import { FC } from "react";
import { Outlet } from "react-router-dom";

import HomeButton from "../molecules/HomeButton";

const Characters: FC = () => (
  <>
    <header>
      <h1>『SLAM DUNK』登場人物</h1>
    </header>
    <Outlet />
    <HomeButton />
  </>
);

export default Characters;
