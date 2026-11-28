import React from "react";
import Logo from "../components/Logo";
import Input from "../components/Input";
import FormButton from "../components/FormButton";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <main className="w-full bg-background flex flex-col items-center justify-center p-2 min-h-screen gap-5">
      <div className="flex items-center flex-col">
        <Logo fontSize={"text-2xl"} imageSize={"w-13"} />
        <p className="text-sm text-on-background/60">
          Create your developer knowledge vault
        </p>
      </div>
      <form className="bg-surface border w-full max-w-md border-outline-variant p-5 rounded-xl flex flex-col gap-4">
        <Input
          label={"Full Name"}
          name={"fullName"}
          placeholder={"Haris Haseeb"}
        />
        <Input label={"Email"} name={"email"} placeholder={"haris@gmail.com"} />
        <Input
          label={"Password"}
          name={"password"}
          placeholder={"Minimum 8 characters"}
        />
        <Input
          label={"Confirm New Password"}
          placeholder={`Re-enter new password`}
          name={"confirmPassword"}
        />
        <FormButton text={"Sign Up"} />
      </form>
      <p className="text-sm text-on-background/60">
        Already have an account?{" "}
        <NavLink to={"/sign_in"} className={"text-on-background font-bold"}>
          Sign In
        </NavLink>
      </p>
    </main>
  );
};

export default Signup;
