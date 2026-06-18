const data = {
    adzka: {
        img: "Adzka.png",
        name: "Adzka",
        msg: "Terima kasih sudah menjadi bagian dari cerita kelas ini. Semoga langkahmu di kelas 11 dipenuhi keberanian, tawa, dan banyak hal baik yang tak terduga."
    },
    altamis: {
        img: "alta.png",
        name: "Altamis",
        msg: "Semoga setiap halaman baru di kelas 11 membawa pengalaman indah yang kelak akan menjadi kenangan yang selalu dirindukan."
    },
    fira: {
        img: "Fira.jpeg",
        name: "Fira",
        msg: "Tetaplah bersinar dengan caramu sendiri. Semoga hari-harimu di kelas 11 dipenuhi kebahagiaan dan mimpi yang semakin dekat untuk digapai."
    },
    aufa: {
        img: "Aufa.jpeg",
        name: "Aufa",
        msg: "Semoga semangatmu tetap tumbuh seperti pagi yang selalu datang membawa harapan baru di setiap harinya."
    },
    azriel: {
        img: "Azriel.jpeg",
        name: "Azriel",
        msg: "Jangan takut pada perjalanan yang panjang, karena setiap langkah kecilmu hari ini sedang membangun masa depan yang hebat."
    },
    dinda: {
        img: "Dinda.jpeg",
        name: "Dinda",
        msg: "Semoga kelas 11 menjadi tempat lahirnya banyak cerita indah, tawa tulus, dan pencapaian yang membanggakan."
    },
    fahna: {
        img: "fahna.jpeg",
        name: "Fahna",
        msg: "Teruslah melangkah dengan hati yang hangat. Semoga setiap usaha yang kamu tanam berbuah kebahagiaan di kemudian hari."
    },
    gayatri: {
        img: "Gayatri (2).jpg",
        name: "Gayatri",
        msg: "Semoga semua hal baik yang pernah kamu berikan kembali kepadamu dalam bentuk kebahagiaan yang berlipat ganda."
    },
    hanum: {
        img: "Hanum.png",
        name: "Hanum",
        msg: "Tetaplah menjadi pribadi yang membawa ketenangan bagi sekitarnya. Semoga perjalananmu selalu dipenuhi cahaya dan keberkahan."
    },
    khairani: {
        img: "Khairani.jpg",
        name: "Khairani",
        msg: "Semoga hari-harimu di kelas 11 seindah langit senja; sederhana, tetapi selalu meninggalkan kesan yang mendalam."
    },
    husna: {
        img: "Husna.jpg",
        name: "Husna",
        msg: "Teruslah percaya pada dirimu sendiri. Banyak hal hebat sedang menunggumu di depan sana."
    },
    bahama: {
        img: "Bahama.jpeg",
        name: "Bahama",
        msg: "Semoga setiap tantangan yang datang justru menjadi jalan untuk menemukan versi terbaik dari dirimu."
    },
    naufal: {
        img: "Nopal.jpg",
        name: "Naufal",
        msg: "Semoga langkahmu selalu dipenuhi keberanian untuk mencoba, belajar, dan tumbuh menjadi pribadi yang lebih hebat."
    },
    nadhira: {
        img: "Nadhira.jpeg",
        name: "Nadhira",
        msg: "Jadilah seperti bintang yang tetap bersinar meski tidak selalu terlihat. Usahamu akan menemukan waktunya untuk bersinar."
    },
    najma: {
        img: "Najma.jpeg",
        name: "Najma",
        msg: "Terima kasih telah mewarnai hari-hari di kelas ini. Semoga kenangan baik selalu menemanimu ke mana pun kamu pergi."
    },
    nayra: {
        img: "nayraa.png",
        name: "Nayra",
        msg: "Semoga setiap mimpi yang kamu simpan diam-diam menemukan jalannya untuk menjadi nyata suatu hari nanti."
    },
    rakha: {
        img: "Rakha (2).jpeg",
        name: "Rakha",
        msg: "Langit yang luas mengajarkan bahwa tidak ada batas untuk bermimpi. Semoga kamu selalu berani mengejar apa yang kamu yakini."
    },
    ayyub: {
        img: "Ayyub.jpg",
        name: "Ayyub",
        msg: "Semoga setiap hari di kelas 11 menghadirkan pelajaran berharga, teman-teman baik, dan cerita yang layak dikenang."
    },
    shofi: {
        img: "Shofi.jpg",
        name: "Shofi",
        msg: "Tetaplah menjadi dirimu yang unik dan berharga. Dunia selalu membutuhkan orang-orang yang tulus seperti dirimu."
    },
    terbit: {
        img: "Terbit.png",
        name: "Terbit",
        msg: "Seperti namamu, semoga kamu selalu menemukan alasan untuk bangkit dan bersinar setiap kali hari baru dimulai."
    },
    zaidan: {
        img: "Zaidan.jpeg",
        name: "Zaidan",
        msg: "Semoga perjalananmu di kelas 11 dipenuhi keberanian untuk mencoba hal baru dan kebijaksanaan untuk menikmati setiap prosesnya."
    }
};

function showPerson(id){
    document.getElementById("detail").style.display = "block";
    document.getElementById("personImg").src = data[id].img;
    document.getElementById("personName").textContent = data[id].name;
    document.getElementById("personMessage").textContent = data[id].msg;
}

function enterSite(){
    document.getElementById("intro").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 700);
}

function openLetter(){
    document.getElementById("letter").style.display = "block";
}
