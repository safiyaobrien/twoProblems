function prime_position(x){
    if(x==1){
        return 2;
    }else if(x==2){
        return 3;
    }
    var z=4;
    var count=2;
    while(true){
        for(var i=2; i<z-1; i++){
            if(z%i==0){
                break;
            }
            if(i==z-2){
                count++;
                break;
            }
        }
        if(count==x){
            return z;
        }
        z++;
    }
}

function sort_subtract(x){
    var r=x.toString();
    var arr=[];
    for(var i=0; i<r.length; i++){
        arr[i]= parseInt(r.substring(i,i+1));
    }
    var y="";
    var z="";
    var big=arr.sort(function(a,b){return b-a});
    for(var i=0; i<big.length;i++){
        y+=big[i].toString();
    }
    var small=arr.sort();
    for(var i=0; i<small.length; i++){
        z+=small[i].toString();
    }
    return parseInt(y)-parseInt(z);
}