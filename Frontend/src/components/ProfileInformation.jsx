import Input from "./Input";
import { MdOutlineFileUpload } from "react-icons/md";

const ProfileInformation = () => {
  return (
    <form className="bg-surface border border-outline-variant p-5 max-w-2xl rounded-xl flex flex-col gap-4">
      <div>
        <h3 className="text-on-background text-xl font-semibold mb-1">
          Profile Information
        </h3>
        <p className="text-on-background/70 text-xs">
          Update your avatar, display name, and primary email address.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <img
          src="/linkvault_logo.jpeg"
          alt=""
          className="size-15 sm:size-20 rounded-full border border-outline-variant"
        />
        <div className="flex flex-col gap-1">
          <label className="px-3 py-1 sm:px-4 sm:py-2 text-sm font-semibold text-on-background bg-surface-container border border-outline rounded-lg cursor-pointer hover:bg-surface-container-high">
            <span className="flex items-center gap-1">
              <MdOutlineFileUpload />
              Upload Avatar
            </span>
            <input type="file" className="hidden" />
          </label>
          <span className="text-on-background/70 text-xs">
            JPG or PNG, max 2 MB.
          </span>
        </div>
      </div>

      <Input
        label={"Full Name"}
        div={`flex flex-col`}
        labelClass={"text-on-surface text-sm"}
        placeholder={`Haris Haseeb`}
        name={"fullName"}
        type={"text"}
        classname={
          "bg-surface-container-low mt-1 w-full outline-none placeholder:text-on-surface/50 font-display p-2 text-on-surface font-normal text-sm focus:border-primary border rounded-sm border-outline-variant"
        }
      />
      <Input
        label={"Email Address"}
        div={`flex flex-col`}
        labelClass={"text-on-surface text-sm"}
        placeholder={`Haris@gamil.com`}
        name={"fullName"}
        type={"text"}
        classname={
          "bg-surface-container-low mt-1 w-full outline-none placeholder:text-on-surface/50 font-display p-2 text-on-surface font-normal text-sm focus:border-primary border rounded-sm border-outline-variant"
        }
      />
      <div className="flex justify-end">
        <button className="bg-primary text-on-background text-sm font-semibold px-3 py-2 rounded-lg">
          Save Profile
        </button>
      </div>
    </form>
  );
};

export default ProfileInformation;
