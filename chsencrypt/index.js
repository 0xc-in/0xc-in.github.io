function dec(enc_chr){
    if (enc_chr in enc_dict){
        return enc_dict[enc_chr];
    }
    return enc_chr;
}
function decstr(enc_str){
    var dec_str = "";
    for(const enc_chr of enc_str){
        console.log(enc_chr)
        console.log(dec(enc_chr));
        dec_str += dec(enc_chr);
    }
    
    return dec_str;
}
