import FormButton from "./FormButton";
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
          placeholder={`Enter current password`}
          name={"currentPassword"}
        />
        <Input
          label={"New Password"}
          placeholder={`Minimum 8 characters`}
          name={"newPassword"}
        />
        <Input
          label={"Confirm New Password"}
          placeholder={`Re-enter new password`}
          name={"confirmPassword"}
        />
        <div className="flex justify-end">
          <FormButton type={'submit'} text={'Update Password'}/>
        </div>
      </form>
      <div className="text-xs sm:text-sm text-on-background/50 flex flex-col sm:flex-row justify-between gap-2">
        <span>Signed in on 2 active sessions</span>
        <button className="hover:text-error flex items-center gap-1 cursor-pointer">
            <MdLogout className=""/>
            Log out of all devices
        </button>
      </div>
    </div>
  );
};

export default Security;
