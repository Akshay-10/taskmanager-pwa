import React from "react";
import Container from "../../components/container/Container";
import HomeHeader from "../../components/base/header/HomeHeader";

const Home = () => {
  return (
    <Container>
      <div className="Home grid grid-cols-12 w-full">
        <div className="flex w-full items-start justify-between col-span-12">
            <HomeHeader />
       </div>
      </div>
    </Container>
  );
};

export default Home;
