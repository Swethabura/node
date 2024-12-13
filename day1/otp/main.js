// function to generate random otp

otp = ""
string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
numbers = "1234567890"
function otp_generator(digits=4){
    for(i=0;i<2;i++){
        const num = Math.floor(Math.random()*string.length);
        otp += string[num];
    }
    for(i=2;i<digits;i++){
        const num = Math.floor(Math.random()*numbers.length);
        otp += numbers[num]
    }
    otp = otp.split('').sort(() => 0.5- Math.random()).join('');
    return otp;
}
// console.log(otp_generator());

module.exports = otp_generator;