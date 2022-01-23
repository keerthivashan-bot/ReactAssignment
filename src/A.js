export default function A(props){
    function converter(){
        var a=parseInt(props.x);
        var b=parseInt(props.y);
        return(a+b);
    }
    return(
        <h2>Sum of {props.x}+{props.y}={converter()}</h2>
    );
}