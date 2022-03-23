import NavArray from "../components/templates/navArray";

const Profile = () => {

  return (<>
  </>)
}

export default Profile

Profile.getLayout = (page) => (
  <>
    <div className="flex">
      <NavArray />
      {page}
    </div>
  </>
)
