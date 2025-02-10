import React from "react";

import webBg from "../../../shared/asserts/images/image/background/web_bg.png";
import mobileBg from "../../../shared/asserts/images/image/background/mobile_bg.png";
import { useNavigate } from "react-router-dom";
import Container from "../../components/container/Container";
import ButtonWithIcon from "../../components/base/ButtonWithIcon";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <Container>
      <div className="grid grid-cols-12 w-full h-screen relative">
        <picture className="absolute top-0 left-0 w-full h-full">
          {/* Web background for larger screens */}
          <source media="(min-width: 768px)" srcSet={webBg} />
          {/* Mobile background for smaller screens */}
          <source media="(max-width: 767px)" srcSet={mobileBg} />
          {/* Default image if no media query matches */}
          <img
            src={webBg} // Fallback image in case of unsupported picture tag
            alt="Background"
            className="object-cover w-full h-full"
          />
        </picture>
        <div className="md:block hidden"></div>
        <div className="relative md:col-span-5 lg:col-span-4 col-span-12 z-10 flex w-full h-full items-center justify-center px-8">
          <div className="flex flex-col gap-4 w-full items-center">
            <p className="text-[#7B1984] font-bold text-[26px] ">TaskBuddy</p>
            <p className="text-gray-700 text-center sm:text-start">
              Streamline your workflow and track progress effortlessly with our
              all-in-one task management app.
            </p>
            <div className="w-full">
              <ButtonWithIcon
                onClick={() => navigate("home")}
                title="Continue with Google"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
