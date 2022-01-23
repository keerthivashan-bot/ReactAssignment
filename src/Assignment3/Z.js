export default function Z() {
    function convert(){
       var a1=122;
        var b1=34;
        var c1=12;
        var d1=87;
        return(a1+b1+c1+d1);
    }
    return(
        <p>a1+b1+c1+d1 is {convert()}</p>
    );
}