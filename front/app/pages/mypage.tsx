import NavArray from "../components/templates/navArray";


export default function mypage() {

  return (
    <>

    </>)
}

mypage.getLayout = (page) => (
  <>
    <div className="flex">
      <NavArray />
      {page}
    </div>
  </>
)
