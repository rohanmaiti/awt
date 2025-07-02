type PropsType = {
    buttonText:string
}
function Button(props:PropsType){
    return (
        <>
        <button>{props.buttonText}</button>
        </>
    )
}
export default Button;