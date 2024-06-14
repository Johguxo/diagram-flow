interface Props {
  name: string
}


function TitleOrange(props: Props ){
  return (
    <>
      <div className="flex self-center m-2 w-fit p-1 border-2 border-orange-500 rounded-md text-orange-500 font-semibold">{props.name}</div>
    </>
  )
}


export default TitleOrange