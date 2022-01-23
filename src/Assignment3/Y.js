export default function Y({a,b,c}){  //exporting component must remember
    function convert(){
        a=parseInt(a);     
        b=parseInt(b);
        c=parseInt(c);
        return(a+b+c);                //function must have return type here it doesn't be a jsx normal js code
    }

    return(
        <p>a+b+c is {convert()}</p>
    );
}