import NavArray from "../components/templates/navArray";


const mypage = () => {

  return (
    <>
    </>)
}

export default mypage

mypage.getLayout = (page) => (
  <>
    <div className="flex">
      <NavArray />
      {page}
    </div>
  </>
)
