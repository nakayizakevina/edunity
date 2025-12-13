import "./Options.css"

export default function Options(props){
    return(
        <ul className="dropdown">
                <li>{props.list}</li>
                <li>{props.list1}</li>
                <li>{props.list2}</li>
                <li>{props.list3}</li>
        </ul>
    )
}