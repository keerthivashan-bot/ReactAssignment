export default function A1(props){
    function finder(){
        var a=parseInt(props.a);
        var b=parseInt(props.b);
        var c=parseInt(props.c);
        if(a>b && a>c){
            return(a);
        }
        else if(b>a && b>c){
            return(b);
        }
        else{
            return(c);
        }
    }
    return(
        <h2>The greatest of {props.a},{props.b},{props.c} is {finder()}</h2>
    );
}