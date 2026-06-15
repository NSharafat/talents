import React from "react";
import Button from "../../../_components/Forms/Button";
import { RiGithubFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import InputText from "../../../_components/Forms/InputText";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

function SignUp() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        {" "}
        <div className="flex flex-col gap-2">
          <InputText label={"Email"} name={"email"} type={"email"} />
          <InputText label={"Password"} name={"password"} type={"password"} />
        </div>
        <Button type={"submit"} theme={"primary"} label={"Sign up"} />
      </div>
      <div className="oauth-wrapper">
        <div className="grid grid-cols-3 items-center justify-center py-5">
          <div className="h-px w-full bg-(--primary)"></div>
          <p className="text-xs text-(--primary)/85 text-center">
            or sign up with
          </p>
          <div className="h-px w-full bg-(--primary)"></div>
        </div>
        <div className="flex gap-2">
          <Button
            type={"button"}
            theme={"secondary"}
            label={
              <span className="flex py-1 px-3 items-center justify-center ">
                <FcGoogle className="h-6 w-6" />
              </span>
            }
          />
          <Button
            type={"button"}
            theme={"secondary"}
            label={
              <span className="flex py-1 px-3  items-center justify-center ">
                <FaFacebook className="h-6 w-6 text-[#1877f2]" />
              </span>
            }
          />
          <Button
            type={"button"}
            theme={"secondary"}
            label={
              <span className="flex py-1 px-3  items-center justify-center ">
                <FaLinkedin className="h-6 w-6 text-[#1877f2]" />
              </span>
            }
          />
          <Button
            type={"button"}
            theme={"secondary"}
            label={
              <span className="flex py-1 px-3  items-center justify-center ">
                <RiGithubFill className="h-6 w-6" />
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
