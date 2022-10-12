
import propTypes from 'prop-types'
import Button from './Button'


const Header=({title,onAdd,showAdd})=>{

    // const onClick=()=>{
    //     console.log("click");
    //   }

    return(
        <header className="header">
        <h1>{title}</h1>
        <Button 
        color={showAdd ? "red" :"green"}
        text={showAdd ?"close" : "Add"} 
        onClick={onAdd}/>
        </header>
    )
}
Header.defaultProps={
    title:"Task Tracker"
}
Header.propTypes={
    title:propTypes.string.isRequired
}

export default Header;