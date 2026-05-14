window.addEventListener("load",()=>{
	
	let pola = document.getElementsByClassName("rowny");
	let pola2 = document.getElementsByClassName("rowny2");
	let start = document.getElementById("start");
	let wypisz = document.getElementById("wypisz");
	let ilosc = document.getElementById("ile");
	let wybor = document.getElementById("wybieram");
	var i;

	start.addEventListener("click",()=>{
		if(wybor.value == 1){
			for(i=0;i < ilosc.value;i++){
				pola[i].style.display = "block";
			}
			wybor.disabled = true;
			wybor.style.cursor = "default";
			ilosc.disabled = true;
			ilosc.style.cursor = "default";
			start.style.display = "none";
			wypisz.style.display = "block";
		}else if(wybor.value == 2){
			for(i=0;i < ilosc.value;i++){
				pola2[i].style.display = "block";
			}
			wybor.disabled = true;
			wybor.style.cursor = "default";
			ilosc.disabled = true;
			ilosc.style.cursor = "default";
			start.style.display = "none";
			wypisz.style.display = "block";
		}
	});

	let sortuj = document.getElementById("sortuj");
	let koncz = document.getElementById("koniec");

	sortuj.addEventListener("click",()=>{
		let jeden = document.getElementById("1").value;
		let dwa = document.getElementById("2").value;
		let trzy = document.getElementById("3").value;
		let cztery = document.getElementById("4").value;
		let piec = document.getElementById("5").value;
		let szesc = document.getElementById("6").value;
		let siedem = document.getElementById("7").value;
		let osiem = document.getElementById("8").value;
		let dziewiec = document.getElementById("9").value;
		let dziesiec = document.getElementById("10").value;
		let jedynascie = document.getElementById("11").value;
		let dwanascie = document.getElementById("12").value;
		let trzynascie = document.getElementById("13").value;
		let czternascie = document.getElementById("14").value;
		let pietnascie = document.getElementById("15").value;
		let szesnascie = document.getElementById("16").value;
		let siedemnascie = document.getElementById("17").value;
		let osiemnascie = document.getElementById("18").value;
		let dziewietnascie = document.getElementById("19").value;
		let dwadziescia = document.getElementById("20").value;
		let dwadziescia1 = document.getElementById("21").value;
		let dwadziescia2 = document.getElementById("22").value;
		let dwadziescia3 = document.getElementById("23").value;
		let dwadziescia4 = document.getElementById("24").value;
		let dwadziescia5 = document.getElementById("25").value;
		let dwadziescia6 = document.getElementById("26").value;
		let dwadziescia7 = document.getElementById("27").value;
		let dwadziescia8 = document.getElementById("28").value;
		let dwadziescia9 = document.getElementById("29").value;
		let trzydziesci = document.getElementById("30").value;
		let trzydziesci1 = document.getElementById("31").value;
		let trzydziesci2 = document.getElementById("32").value;
		let trzydziesci3 = document.getElementById("33").value;
		let trzydziesci4 = document.getElementById("34").value;
		let trzydziesci5 = document.getElementById("35").value;
		let trzydziesci6 = document.getElementById("36").value;
		let trzydziesci7 = document.getElementById("37").value;
		let trzydziesci8 = document.getElementById("38").value;
		let trzydziesci9 = document.getElementById("39").value;
		let czterdziesci = document.getElementById("40").value;
		let czterdziesci1 = document.getElementById("41").value;
		let czterdziesci2 = document.getElementById("42").value;
		let czterdziesci3 = document.getElementById("43").value;
		let czterdziesci4 = document.getElementById("44").value;
		let czterdziesci5 = document.getElementById("45").value;
		let czterdziesci6 = document.getElementById("46").value;
		let czterdziesci7 = document.getElementById("47").value;
		let czterdziesci8 = document.getElementById("48").value;
		let czterdziesci9 = document.getElementById("49").value;
		let piecdziesiat = document.getElementById("50").value;
		let piecdziesiat1 = document.getElementById("51").value;
		let piecdziesiat2 = document.getElementById("52").value;
		let piecdziesiat3 = document.getElementById("53").value;
		let piecdziesiat4 = document.getElementById("54").value;
		let piecdziesiat5 = document.getElementById("55").value;
		let piecdziesiat6 = document.getElementById("56").value;
		let piecdziesiat7 = document.getElementById("57").value;
		let piecdziesiat8 = document.getElementById("58").value;
		let piecdziesiat9 = document.getElementById("59").value;
		let szescdziesiat = document.getElementById("60").value;
		let wart = [jeden, dwa, trzy, cztery, piec, szesc, siedem, osiem, dziewiec, dziesiec, jedynascie, dwanascie, trzynascie, czternascie, pietnascie, szesnascie, siedemnascie, osiemnascie, dziewietnascie, dwadziescia, dwadziescia1, dwadziescia2, dwadziescia3, dwadziescia4, dwadziescia5, dwadziescia6, dwadziescia7, dwadziescia8, dwadziescia9, trzydziesci];
		let wart2 = [trzydziesci1, trzydziesci2, trzydziesci3, trzydziesci4, trzydziesci5, trzydziesci6, trzydziesci7, trzydziesci8, trzydziesci9, czterdziesci, czterdziesci1, czterdziesci2, czterdziesci3, czterdziesci4, czterdziesci5, czterdziesci6, czterdziesci7, czterdziesci8, czterdziesci9, piecdziesiat, piecdziesiat1, piecdziesiat2, piecdziesiat3, piecdziesiat4, piecdziesiat5, piecdziesiat6, piecdziesiat7, piecdziesiat8, piecdziesiat9, szescdziesiat];
		let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
		let num2 = ["31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"];
		let spr = [];
		let spr2 = [];
		let tab = [];
		let tab2 = [];

		function wyrazy(wart, num, tab, spr){
			if(isNaN(wart)){
				document.getElementById(num).style.backgroundColor = "#9FFB88";
				tab[num] = wart;
				spr[num] = 1;
			}else{
				document.getElementById(num).style.backgroundColor = "#E34234";
				spr[num] = 0;
			}
		}

		function sort_wyr(tab, spr){
			if(spr.every((kazdy)=>{return kazdy == 1;})){
				tab.sort();
				let gotowa = tab.join(", ");
				let wynik = gotowa.substring(0, gotowa.length-2);
				koncz.textContent = wynik;
			}else{
				koncz.textContent = "Musisz wypełnić wszystkie pola odpowiednią wartością - wyrazami!";
			}
		}

		function liczby(wart2, num, num2, tab2, spr2){
			if(wart2 == ""){
				document.getElementById(num2).style.backgroundColor = "#E34234";
				spr2[num] = 0;
			}else{
				document.getElementById(num2).style.backgroundColor = "#9FFB88";
				tab2[num] = wart2;
				spr2[num] = 1;
			}
		}

		function sort_licz(tab2, spr2){
			if(spr2.every((kazdy)=>{return kazdy == 1;})){
				tab2.sort((a, b)=>{return a - b;});
				let gotowa2 = tab2.join(", ");
				let wynik2 = gotowa2.substring(0, gotowa2.length-2);
				koncz.textContent = wynik2;
			}else{
				koncz.textContent = "Musisz wypełnić wszystkie pola odpowiednią wartością - liczbami!";
			}
		}

		if(wybor.value == 1){
			switch(ilosc.value){
				case "2": for(i=0;i < 2;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "3": for(i=0;i < 3;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "4": for(i=0;i < 4;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "5": for(i=0;i < 5;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "6": for(i=0;i < 6;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "7": for(i=0;i < 7;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "8": for(i=0;i < 8;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "9": for(i=0;i < 9;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "10": for(i=0;i < 10;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "11": for(i=0;i < 11;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "12": for(i=0;i < 12;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "13": for(i=0;i < 13;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "14": for(i=0;i < 14;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "15": for(i=0;i < 15;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "16": for(i=0;i < 16;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "17": for(i=0;i < 17;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "18": for(i=0;i < 18;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "19": for(i=0;i < 19;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "20": for(i=0;i < 20;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "21": for(i=0;i < 21;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "22": for(i=0;i < 22;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "23": for(i=0;i < 23;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "24": for(i=0;i < 24;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "25": for(i=0;i < 25;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "26": for(i=0;i < 26;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "27": for(i=0;i < 27;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "28": for(i=0;i < 28;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "29": for(i=0;i < 29;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr); break;
				case "30": for(i=0;i < 30;i++){wyrazy(wart[i], num[i], tab, spr);} sort_wyr(tab, spr);
			}
		}else{
			switch(ilosc.value){
				case "2": for(i=0;i < 2;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "3": for(i=0;i < 3;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "4": for(i=0;i < 4;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "5": for(i=0;i < 5;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "6": for(i=0;i < 6;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "7": for(i=0;i < 7;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "8": for(i=0;i < 8;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "9": for(i=0;i < 9;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "10": for(i=0;i < 10;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "11": for(i=0;i < 11;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "12": for(i=0;i < 12;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "13": for(i=0;i < 13;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "14": for(i=0;i < 14;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "15": for(i=0;i < 15;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "16": for(i=0;i < 16;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "17": for(i=0;i < 17;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "18": for(i=0;i < 18;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "19": for(i=0;i < 19;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "20": for(i=0;i < 20;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "21": for(i=0;i < 21;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "22": for(i=0;i < 22;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "23": for(i=0;i < 23;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "24": for(i=0;i < 24;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "25": for(i=0;i < 25;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "26": for(i=0;i < 26;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "27": for(i=0;i < 27;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "28": for(i=0;i < 28;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "29": for(i=0;i < 29;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2); break;
				case "30": for(i=0;i < 30;i++){liczby(wart2[i], num[i], num2[i], tab2, spr2);} sort_licz(tab2, spr2);
			}
		}
	});
});