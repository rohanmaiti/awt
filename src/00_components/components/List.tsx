type ListPropType = {
    items?: string[],
    title?:string
}

function List({items, title}:ListPropType){
return (
    <>
    <h3>{title}</h3>
    <ol>
     {
        items?.map((ele)=>{
            return <li key={ele} >{ele}</li>
        })
     }
     </ol>
    </>
)
}

export default List;