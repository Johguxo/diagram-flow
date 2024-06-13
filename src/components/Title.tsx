interface Props {
  name: string
}


function Title(props: Props ){
  return (
    <>
      <div className="border-2 border-blue-800 rounded-md text-blue-800 font-semibold">{props.name}</div>
    </>
  )
}


export default Title