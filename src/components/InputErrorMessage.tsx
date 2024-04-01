
interface IProps {
    msg? : string
}

const InputErrorMessage = ({msg} : IProps) => {
  return <>
  <p className="text-red-700 font-semibold">{msg}</p>
  </>
}

export default InputErrorMessage