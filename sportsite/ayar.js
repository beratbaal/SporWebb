var slayt = document.getElementsByClassName("slayt");

var slaytSayisi = slayt.length;

var slaytNo = 0;

slaytGoster(slaytNo);

function onceki(){
    slaytNo--;
    slaytGoster(slaytNo);
}
function sonraki(){
    slaytNo++;
    slaytGoster(slaytNo);
}
setInterval(function(){
    slaytNo++;
    slaytGoster(slaytNo);
     
    
},3000)



function slaytGoster(slaytNumarası){

    slaytNo = slaytNumarası;

    if(slaytNumarası >= slaytSayisi){
        slaytNo = 0;
    }
    if(slaytNumarası < 0){
        slaytNo = slaytSayisi - 1 ;
    }

    for(i = 0; i < slaytSayisi; i++){
        slayt[i].style.display = "none";
    }

    slayt[slaytNo].style.display = "block";
}

function hesapla(){
    var kilo = document.KitleForm.kilo.value;
    var boy = document.KitleForm.boy.value;

    if(kilo > 0 && boy > 0 && kilo < 220 && boy < 2.50){
        var sonuc = kilo/(boy*boy);
        document.KitleForm.indeks.value = sonuc;
        if(sonuc < 18.5){
            document.KitleForm.islemsonucu.value = "Zayıfsınız";
        }
        if(sonuc > 18.5 && sonuc < 25){
            document.KitleForm.islemsonucu.value = "İdeal Kilonuzdasınız";
        }
        if(sonuc > 25){
            document.KitleForm.islemsonucu.value = "Şişmansınız";
        }
    }
    else{
        alert("Boy ve kilo bilgilerini lütfen doğru girin");
    }
}

function hesaplacal(){
    var cinsiyet = document.KaloriHesap.cinsiyet.value;
    var kilo = document.KaloriHesap.kilo.value;
    var boy = document.KaloriHesap.boy.value;
    var yas = document.KaloriHesap.yas.value;   
    
   

    if(cinsiyet=="kadın" && kilo > 0 && boy > 0 && kilo < 220 && boy < 2.50){
        var sonuc = (655 + (9.6 * kilo) + (1.8 * boy) - (4.7 * yas));
        document.KaloriHesap.kalori.value = sonuc;
    }
    else if(cinsiyet=="erkek" && kilo > 0 && boy > 0 && kilo < 220 && boy < 2.50){
        var sonuc = (66 + (13.7 * kilo) + (5 * boy) + (6.8 * yas));
        document.KaloriHesap.kalori.value = sonuc;
    }
    else{
        alert("Boy ve kilo bilgilerini lütfen doğru girin");
    }
}