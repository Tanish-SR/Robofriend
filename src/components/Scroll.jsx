
function Scroll(props){
    return (
        <div style={{overflowY: 'scroll', height:'720px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;