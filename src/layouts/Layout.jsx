import { Outlet } from "react-router-dom"
import  Modal  from "react-modal" 
import Sidebar from "../components/Sidebar"
import Resume from "../components/Resume"
import { useProducts } from "../hooks/useProducts"
import ModalProduct from "../components/ModalProduct"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useAuth } from "../hooks/useAuth"


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root')

export default function Layout() {

  const { data, error } = useAuth({middleware: 'auth'})
  const { modal } = useProducts()

  console.log(data)
  console.log(error)

  return (
    <>
    <div className="md:flex">
      <Sidebar />

        <main className="flex-1 h-screen overflow-y-scroll bg-gray-200 p-3"> 
          <Outlet />
        </main>

      <Resume />
    </div>

      <Modal isOpen={modal} style={customStyles}>
        <ModalProduct />
      </Modal>

      <ToastContainer />
    </>
  )
}
