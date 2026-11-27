import ProfileInformation from "../components/ProfileInformation"
import Security from "../components/Security"

const Settings = () => {
  return (
    <main className="bg-background w-full divide-y divide-outline flex flex-col gap-7 p-8">
      <div className="pb-4">
        <h2 className="text-on-background text-2xl font-semibold">Account & Settings</h2>
        <p className="text-on-background/70 text-sm ">Manage your profile details and account security.</p>
      </div>

      <ProfileInformation/>
      <Security/>
    </main>
  )
}

export default Settings