import { useRef } from "react";
import Card from "../components/Card";
import Dialog from "../components/Dialog";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Dashboard = () => {

  const dialogModal = useRef(null)

  const handleModalOpen = () => {
    dialogModal.current.showModal()
  }

  const handleModalClose = () => {
    dialogModal.current.close()
  }

  return (
    <main className="bg-background w-full divide-y divide-outline-variant flex flex-col">
      <Header handleModalOpen = {handleModalOpen}/>
      <div className="p-5 flex-1">
        <div className="font-display flex justify-between items-baseline">
          <h2 className="text-on-background text-lg">All Links</h2>
          <span className="text-on-background/50 text-xs font-mono">
            42 resources
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3.5">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <Dialog dialogModal = {dialogModal} handleModalClose = {handleModalClose}/>

      <Footer />
    </main>
  );
};

export default Dashboard;
