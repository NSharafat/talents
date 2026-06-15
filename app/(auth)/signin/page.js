import React from "react";
import InputText from "../../../_components/Forms/InputText";
import Button from "../../../_components/Forms/Button";
import { RiGithubFill, RiGoogleFill } from "react-icons/ri";
import { FcGoogle, FcLike } from "react-icons/fc";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

function SignIn() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        {" "}
        <div className="flex flex-col gap-2">
          <InputText label={"Email"} name={"email"} type={"email"} />
          <InputText label={"Password"} name={"password"} type={"password"} />
        </div>
        <Button type={"submit"} theme={"primary"} label={"Sign in"} />
        <p className="underline text-xs font-medium text-center text-(--primary)">
          Forgot password?
        </p>
      </div>
      <div className="oauth-wrapper">
        <div className="grid grid-cols-3 items-center justify-center py-5">
          <div className="h-px w-full bg-(--primary)"></div>
          <p className="text-xs text-(--primary)/85 text-center">
            or sign in with
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

export default SignIn;
