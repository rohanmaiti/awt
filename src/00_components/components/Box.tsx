type BoxProps = {
  content: string;
  children?: React.HTMLElementType | any;
};
function Box(props: BoxProps) {
  return (
    <div>
      <h3>Box content{props.content}</h3>
      <div>
        {props.children}
      </div>
    </div>
  );
}
export default Box;
