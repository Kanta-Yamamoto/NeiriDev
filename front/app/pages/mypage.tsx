import { BsPencilFill } from "react-icons/bs"
import { BsCameraFill } from "react-icons/bs"
import { FaUserAlt } from "react-icons/Fa"


const mypage = () => {

  return (
    <>
      <div className="w-full h-full">
        <nav className="w-1/5 h-10 font-bold text-2xl tracking-wide">
          <div className="py-2 border-b-2 border-gray indent-1 flex items-center"><div className="text-lg mr-1 mt-0.5"><BsCameraFill /></div>ZOOM-IMAGE</div>
          <div className="py-2 border-b-2 indent-1 border-gray flex items-center"><div className="text-lg mr-1 mt-0.5"><BsPencilFill /></div>TODO-LIST</div>
          <div className="py-2 border-b-2 indent-1 border-gray flex items-center"><div className="text-lg mr-1.5 mt-0.5"><FaUserAlt /></div>PROFILE</div>
        </nav>
      </div>
    </>)
}

export default mypage
