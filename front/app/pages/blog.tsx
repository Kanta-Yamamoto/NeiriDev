import NavArray from "../components/templates/navArray";

const Blog = () => {

  return (<>
  </>)
}

export default Blog

Blog.getLayout = (page) => (
  <>
    <div className="flex">
      <NavArray />
      {page}
    </div>
  </>
)
