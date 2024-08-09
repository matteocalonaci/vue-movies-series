Inizialmente creo 3 componenti:
- `The_Header`,
- `The_Main`,
- `The_Footer`,




In `The_Header` creo una navbar con:
- logo,
- titolo,
- links 

i `links` sono salvati come oggetti di un array nel data.
Li passo tramite un v-for nel template.




In `The_Main` 
faccio partire sue chiamate `ajax / axios` per ricuperare dati di `movies` e `series`.

creo altri due componenti `Single_Movie`e `Single_Serie` nei quali creo le strutture delle single card e passo questi valori ai componenti tramite props stampandoli in pagina tramite due v-for distinti per avere tutte le card dell'array di movies e tutte le card dell'array di series.

Uso `pagination` per stampare in pagina solo le prime 6 card e due button per andare avanti e indietro.




In `The_Footer` creo 3 colonne:
-  `custumers`,
-  `company`,
-  `further_info`.

ognuna delle quali corrisponde ad un array.
uso un v-for per stampare i contenuti dell'array.
