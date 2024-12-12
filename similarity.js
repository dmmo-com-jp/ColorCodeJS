class ColorCode{
    constructor(color){
        this.Rawcolor = color
        if(color.length === 8){
            this.Alpha = Number("0x"+color.slice(6,8))
        }
        this.red = Number("0x"+color.slice(0,2))
        this.green = Number("0x"+color.slice(2,4))
        this.blue = Number("0x"+color.slice(4,6))

        //calculate Hue
        if(this.red>Math.max(this.green,this.blue)) this.Hue = 60*((this.green-this.blue)/(Math.max(this.red,this.green,this.blue)-Math.min(this.red,this.green,this.blue)));
        if(this.green>Math.max(this.red,this.blue)) this.Hue = 60*((this.blue-this.red)/(Math.max(this.red,this.green,this.blue)-Math.min(this.red,this.green,this.blue)))+120;
        if(this.blue>Math.max(this.green,this.blue)) this.Hue = 60*((this.red-this.green)/(Math.max(this.red,this.green,this.blue)-Math.min(this.red,this.green,this.blue)))+240;
        if(this.red === this.green && this.red === this.blue) this.Hue = 0
        //calculate Saturation and Brightness
        this.Brightness = Math.max(this.red,this.green,this.blue)
        this.Saturation = (this.Brightness-Math.min(this.red,this.green,this.blue))/this.Brightness
    }
    similarity(color2){
        this.Rawcolor2 = color2
        if(color2.length === 8){
            this.Alpha2 = Number("0x"+color2.slice(6,8))
        }
        this.red2 = Number("0x"+color2.slice(0,2))
        this.green2 = Number("0x"+color2.slice(2,4))
        this.blue2 = Number("0x"+color2.slice(4,6))
        if(color2.length === 8){
            return Cos_r([this.red,this.green,this.blue,this.Alpha],[this.red2,this.green2,this.blue2,this.Alpha2])
        }else{
            return Cos_r([this.red,this.green,this.blue],[this.red2,this.green2,this.blue2])
    }}
    AlphaBlending(color2){
        this.red2 = Number("0x"+color2.slice(0,2))
        this.green2 = Number("0x"+color2.slice(2,4))
        this.blue2 = Number("0x"+color2.slice(4,6))
        this.Alpha2 = Number("0x"+color2.slice(6,8))
        if(this.Rawcolor.length === 8){
            return {red:AlphaBlend(this.red,this.red2),green:AlphaBlend(this.green,this.green2),blue:AlphaBlend(this.blue,this.blue2),Alpha:AlphaBlend(this.Alpha,this.Alpha2)}
        }else{
            return {red:AlphaBlend(this.red,this.red2),green:AlphaBlend(this.green,this.green2),blue:AlphaBlend(this.blue,this.blue2)}
        }
    }
    
}

function Cos_r(list1,list2){
    let temp1 = 0
    let temp2 = 0
    let temp3 = 0
    for(let i = 0;i < list1.length;i++){
        temp1 = temp1 + (list1[i]*list2[i])
        temp2=temp2+(list1[i]*list1[i])
        temp3=temp3+(list2[i]*list2[i])
    }
    const re = temp1/(Math.sqrt(temp2)*Math.sqrt(temp2))
    return re
}
function AlphaBlend(C,C2,alpha){
    return C+(C2-C)*(alpha/255)
}