import NavArray from "../components/templates/navArray";

const Todolist = () => {

  const todoData = [{ content: "買い物をする" }, { content: "迎えに行く" }]


  return (<>
    <div className="w-full h-auto flex">
      <div className="w-1/2 h-full">

        {todoData.map((todoArray) => (
          <div key={todoArray.content} className="w-full min-h-content">
            {todoArray.content}

          </div>
        ))}

      </div>
      <div className="w-1/2 h-full">

      </div>
    </div>
  </>)
}

export default Todolist

Todolist.getLayout = (page) => (
  <>
    <div className="flex">
      <NavArray />
      {page}
    </div>
  </>
)
