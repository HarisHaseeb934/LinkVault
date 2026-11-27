import Input from "./Input";
import { MdLogout } from "react-icons/md";

const Security = () => {
  return (
    <div className="divide-y divide-outline bg-surface border border-outline-variant p-5 max-w-2xl rounded-xl flex flex-col gap-4">
      <form className=" flex flex-col gap-4 pb-7">
        <div>
          <h3 className="text-on-background text-xl font-semibold mb-1">
            Security
          </h3>
          <p className="text-on-background/70 text-xs">
            Change your password or revoke active sessions.
          </p>
        </div>

        <Input
          label={"Current Password"}
          div={`flex flex-col`}
          labelClass={"text-on-surface text-sm"}
          placeholder={`Enter current password`}
          name={"currentPassword"}
          type={"text"}
          classname={
            "bg-surface-container-low mt-1 w-full outline-none placeholder:text-on-surface/50 font-display p-2 text-on-surface font-normal text-sm focus:border-primary border rounded-sm border-outline-variant"
          }
        />
        <Input
          label={"New Password"}
          div={`flex flex-col`}
          labelClass={"text-on-surface text-sm"}
          placeholder={`Minimum 8 characters`}
          name={"newPassword"}
          type={"text"}
          classname={
            "bg-surface-container-low mt-1 w-full outline-none placeholder:text-on-surface/50 font-display p-2 text-on-surface font-normal text-sm focus:border-primary border rounded-sm border-outline-variant"
          }
        />
        <Input
          label={"Confirm New Password"}
          div={`flex flex-col`}
          labelClass={"text-on-surface text-sm"}
          placeholder={`Re-enter new password`}
          name={"confirmPassword"}
          type={"text"}
          classname={
            "bg-surface-container-low mt-1 w-full outline-none placeholder:text-on-surface/50 font-display p-2 text-on-surface font-normal text-sm focus:border-primary border rounded-sm border-outline-variant"
          }
        />
        <div className="flex justify-end">
          <button className="bg-primary text-on-background text-sm font-semibold px-3 py-2 rounded-lg">
            Update Password
          </button>
        </div>
      </form>
      <div className="text-xs sm:text-sm text-on-background/50 flex flex-col sm:flex-row justify-between gap-2">
        <span>Signed in on 2 active sessions</span>
        <button className="hover:text-error flex items-center gap-1">
            <MdLogout className=""/>
            Log out of all devices
        </button>
      </div>
    </div>
  );
};

export default Security;
