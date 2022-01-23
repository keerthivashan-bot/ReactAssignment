export default function X({a,b}){  // a,b parameters recieve the argument info
    function convert(){
        a=parseInt(a);    // convering from string to integer
        b=parseInt(b);
        return(a+b);
    }

    return(
        <p>a+b is {convert()}</p> //returning JSX is must
    );
}