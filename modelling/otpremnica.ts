class Otpremnica {
    id: number;
    datum: Date;
    magacin: string;
    nalog: string;
    adresa: string;
    brojVagona: string;
    brojTovarnogLista: string;
    vrstaPakovanja: string;
    robuPrimio: string;
    robuIzdao: string;
    listaMaterijala: Materijal[];
}

class Materijal {
    redniBroj: number;
    sifraMaterijala: number;
    jedinicaMere: JedinicaMere;
    naziv: string;
    kolicina: number;
    cena: number;
    iznos: number;
}

class JedinicaMere {
    id: number;
    ime: string;
}