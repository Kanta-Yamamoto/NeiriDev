import NavArray from "../components/templates/navArray";

const Todolist = () => {

  const todoData = [{ content: "買い物をする", date: "2022-04-03" }, { content: "迎えに行く", date: "2022-04-05" }]

  console.log(todoData)

  return (<>
    <div className="w-full h-auto flex">
      <div className="w-1/2 h-full">

        {todoData.map((todoArray) => (
          <div key={todoArray.content} className="w-full min-h-content">
            {todoArray.content}{todoArray.date}

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
