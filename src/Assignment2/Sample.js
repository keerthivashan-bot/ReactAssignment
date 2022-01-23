export default function Sample({a,c,b}){
    function convert(){
        a=parseInt(a);
        b=parseInt(b);
        c=parseInt(c);
        return(a+b+c);
    }
    return(
        <p>sum of {a}+{b}+{c} is {convert()}</p>
    );
}