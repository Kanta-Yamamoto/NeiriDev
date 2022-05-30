import { BsPencilFill } from "react-icons/bs";
import { BsCameraFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/Fa";
import { BsFillBookFill } from "react-icons/Bs";
import { BsFillQuestionSquareFill } from "react-icons/Bs";
import NavFrame from "../../components/organisms/navFrame";

const NavArray = () => {
  return (
    <>
      <div className="w-52 h-full">
        <nav className="w-52 font-bold text-2xl tracking-wide">
          <NavFrame url={"zoom-image"}>
            <div className="text-lg mr-1 mt-0.5">
              <BsCameraFill />
            </div>
            HOME
          </NavFrame>

          <NavFrame url={"todolist"}>
            <div className="text-lg mr-1 mt-0.5">
              <BsPencilFill />
            </div>
            NOTE
          </NavFrame>

          <NavFrame url={"profile"}>
            <div className="text-lg mr-1.5 mt-0.5">
              <FaUserAlt />
            </div>
            PROFILE
          </NavFrame>

          <NavFrame url={"blog"}>
            <div className="text-lg mr-1.5 mt-0.5">
              <BsFillBookFill />
            </div>
            BLOG
          </NavFrame>

          <NavFrame url={"question"}>
            <div className="text-lg mr-1.5 mt-0.5">
              <BsFillQuestionSquareFill />
            </div>
            QUESTION
          </NavFrame>
        </nav>
      </div>
    </>
  );
};

export default NavArray;
