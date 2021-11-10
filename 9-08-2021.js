function generateHashtag (str) {
    if (str==="") {
        return false;
    }
    let split = str.split(" ");
    if (split.join("")==""){
        return false;
    }
    let filtered = split.filter(word => word!="" || word!=" " || word!=null)
    let capp = filtered.map(word => word[0].toUpperCase()+word.slice(1));

    let result = capp.join("")
    if (result===""){
        return false;
    }
    if (result.length<139 || result.length<0) {
        return "#"+result;
    } else {
        return false;
    }
}