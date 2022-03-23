import Link from 'next/link'

const NavFrame = (props) => {

  return (<>
    <Link href={props.url}><div className="py-2 border-b-2 border-gray indent-1 flex items-center w-52 cursor-pointer">{props.children}</div>
    </Link></>)
}

export default NavFrame
