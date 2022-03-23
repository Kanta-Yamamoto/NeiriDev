import Link from 'next/link'

const UnderlineLink = (props) => {
  return (<Link href={props.url}><a><p className="text-center mb-5 underline">{props.children}</p></a></Link>)
}

export default UnderlineLink
