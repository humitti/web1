function get_calc(btn){
    if(btn.value =="="){
        document.dentaku.display.value=eval(document.dentaku.display.value);
        return get_calc(btn)=alert("計算式が不適切です");
    }else if(btn.value =="C"){
        document.dentaku.display.value="" 
    } else {
        if(btn.value =="×"){
            btn.value="*";
        }else if(btn.value=="÷"){
            btn.value="/";
        }
        document.dentaku.display.value += btn.value;
        document.dentaku.multi_btn.value = "×";
        document.dentaku.div_btn.value = "÷";
    }
}