// tura ve yazı sayıları başlangıçta 0
let tura = 0;
let yazi = 0;

// flip ve reset butonlarını seç
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let coin = document.querySelector(".coin");

// flip butonuna tıklandığında
flipBtn.addEventListener("click", ()=>{
    // rastgele 0 veya 1 seçer (0 = tura, 1 = yazı)
    let i = Math.floor(Math.random() * 2);

    // coin animasyonu geçici iptal et
    coin.style.animation = "none";

    if(i){
        // eğer 1 ise  (yazı), 100ms sonra coine flip-tura animasyonu ekle
        setTimeout(() => {
            coin.style.animation = "spin-tura 3s forwards";
        }, 100);
        // tura sayısını 1 artır
        tura++;
    } else {
        // eğer 0 ise (tura), 100ms sonra coine spin-yazi animasyonu ekle
        setTimeout(() => {
            coin.style.animation = "spin-yazi 3s forwards";
        }, 100);
        // yazı sayısını 1 artır
        yazi++;
    }

    // statistikleri güncelle ve butonu devre dışı bırak
    setTimeout(updateStats, 3000);
    disableButton();
} );

// istatistikleri güncelleme fonksiyonu
function updateStats(){
    document.querySelector("#tura-count").textContent = `Tura: ${tura}`;
    document.querySelector("#yazi-count").textContent = `Yazı: ${yazi}`;
}

//butonu geçici olarak devre dışı bırakma fonksiyonu
function disableButton(){
    flipBtn.disabled = true;
    setTimeout(() => {
        flipBtn.disabled = false;
    }, 3000);
}

// reset butonuna tıklandığında
resetBtn.addEventListener("click", ()=>{
    // coin animasyonunu iptal et ve tura ve yazı sayısını sıfırla
    coin.style.animation = "none";
    tura = 0;
    yazi = 0;
    updateStats();
});