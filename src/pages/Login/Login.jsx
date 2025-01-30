import React from "react";
import Container from "../../components/Container/Container";
import webBg from "../../assets/images/image/background/web_bg.png";
import ButtonWithIcon from "../../components/Base/Button/ButtonWithIcon";
import mobileBg from "../../assets/images/image/background/mobile_bg.png";
import { Router, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <Container>
      <div className="flex w-full h-screen relative">
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
        <div className="relative z-10 flex w-full h-full items-center sm:justify-center lg:justify-start md:justify-start lg:ml-[10%] px-6">
          <div className="flex flex-col gap-4 w-full sm:w-[300px]">
            <p className="text-[#7B1984] font-bold text-[26px]">TaskBuddy</p>
            <p className="text-gray-700">
              Streamline your workflow and track progress effortlessly with our
              all-in-one task management app.
            </p>
            <div className="mt-6">
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
