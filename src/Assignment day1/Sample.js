export default function Sample({x,y,z}){ //
    function addition(){
        var a=1;
        let b=2;
        const c=1;
        x=parseInt(x);
        y=parseInt(y);
        z=parseInt(z);
        return(a+"+"+x+" is "+(a+x)+" , "+ b+"+"+y+" is "+" "+(b+y)+" , "+c+"+"+z+" is "+(c+z));
    }
    return(
        <p>{addition()}</p>
    );
}