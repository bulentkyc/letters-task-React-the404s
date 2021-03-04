export default function (props) {
/* 
    let test = 'test2';
    props.obj.newKey = 'xyz'
 */
    //console.log('component',props.change, state);
    return (
        <input onChange = {props.change} value = {props.children}/>
    );
}