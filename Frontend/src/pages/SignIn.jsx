import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import Input from "../components/Input";
import FormButton from "../components/FormButton";

const SignIn = () => {
  return (
    <main className="w-full bg-background flex flex-col items-center justify-center p-2 min-h-screen gap-5">
      <div className="flex items-center flex-col">
        <Logo fontSize={"text-2xl"} imageSize={"w-13"} />
        <p className="text-sm text-on-background/60">
          Your personal developer knowledge vault
        </p>
      </div>
      <form className="bg-surface border w-full max-w-md border-outline-variant p-5 rounded-xl flex flex-col gap-4">
        <Input label={"Email"} name={"email"} placeholder={"haris@gmail.com"} />
        <Input
          label={"Password"}
          name={"password"}
          placeholder={"Minimum 8 characters"}
        />
        <label
          htmlFor="rememberMe"
          className="text-sm text-on-background/60 flex items-center gap-2 cursor-pointer"
        >
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              className="peer appearance-none w-4 h-4 border-2 border-outline rounded-sm 
            checked:bg-primary checked:border-primary
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1
             transition-colors cursor-pointer"
            />
            <svg
              className="w-3.5 h-3.5 text-white absolute pointer-events-none hidden peer-checked:block"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          Remember Me
        </label>
        <FormButton text={"Sign In"} />
      </form>
      <p className="text-sm text-on-background/60">
        New to LinkVault?{" "}
        <NavLink to={"/sign_up"} className={"text-on-background font-bold"}>
          Create an account
        </NavLink>
      </p>
    </main>
  );
};

export default SignIn;
