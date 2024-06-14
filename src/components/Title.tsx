interface Props {
  name: string,
  noMargin?: boolean,
  isClear?: boolean;
}


function Title(props: Props ){
  return (
    <>
      <div className={ `${(props.isClear ? "border-sky-400 text-sky-400": "text-blue-800 border-blue-800 ")}` + " border-2 font-semibold " + (props.noMargin ? "rounded-3xl m-1 p-1":"rounded-md m-2")}>{props.name}</div>
    </>
  )
}


export default Title