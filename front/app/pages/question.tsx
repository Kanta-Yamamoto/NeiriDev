import NavArray from "../components/templates/navArray";

export default function Question() {

  return (<>
  </>)
}

Question.getLayout = (page) => (
  <>
    <div className="flex">
      <NavArray />
      {page}
    </div>
  </>
)
