export default function (props) {
    let status = 'Text is too short!';
    
    if (props.text.length >= props.limit) {
        status = 'That\'s OK!';
    }
    
    return (
        <p>{status}</p>
    );
}