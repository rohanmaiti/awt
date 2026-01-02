import Box from "./components/Box";
import Button from "./components/Button";
import Header from "./components/Header";
import List from "./components/List";

export default function App(){
    const array = ['Hii','Rohan','How','are','you?']
    const obj = {
        name: "Rohan",
        age: 22
    }

    return (
    <>
    {/* creating first component  */}
    <Header/>
    {/* props passing in functional component  */}
    <Button buttonText="submit" />
    <Button buttonText="click"></Button>
    <Button buttonText="back" />

    {/* we can pass multiple props & rendering list */}
    <List items={['one', 'two', 'three']} title="Number list" />

    {/* passing children */}
    <Box content="Learning how to pass children" >
        <h4>Children-1</h4>
        <h4>Children-2</h4>
    </Box>

    {/* how array is rendered in jsx ?? */}
    {array}

    {/* see how object is rendered in jsx, this will give error */}
    {/* {obj}  */}
    </>
    )
}