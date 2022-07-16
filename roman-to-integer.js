let romanToInt = function(s) {
    const map = {I : 1, V : 5, X : 10, L : 50, C : 100, D : 500, M : 1000};
    let res = 0 ;
    for( let i=0; i< s.length; i++){
        let one = map[s[i]];
        let tow = map[s[i + 1]];
        if(one < tow){
            res += tow - one
            //res = res + tow - one 
            i++
        }else{
            // res = res + map[s[i]]
            res += map[s[i]]
        }
    }
    return res
};