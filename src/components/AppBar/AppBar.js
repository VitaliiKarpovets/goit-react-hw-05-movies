import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Header, MainContainer } from "./AppBar.styled";

export default function AppBar() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <MainContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </>
  );
}
