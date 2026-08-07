//1
const hozir = new Date()
console.log(hozir)//Mon Aug 03 2026 16:31:49 GMT+0300 (Москва, стандартное время)

//2
//2) Millisekundlar soni orqali (Unix Epoch'dan boshlab)
const sana1 = new Date(0); // 1970-01-01T00:00:00.000Z
const sana2 = new Date(1000 * 60 * 60); // Epoch'dan 1 soat keyin

console.log(sana1)
console.log(sana2)

const juma = new Date(2026, 7, 7); // 2026-yil 7-avgust - bu juma kuni
console.log(juma.getDate()); // 7 (oyning kuni)
console.log(juma.getDay()); // 5 (haftaning kuni - juma)
 

console.log(Math.round(4.4)); // 4 - eng yaqin butun songa yaxlitlaydi (0.5 va undan yuqori - yuqoriga)
console.log(Math.round(4.5)); // 5
console.log(Math.round(-4.5)); // -4 (diqqat: manfiy sonlarda -4.5 -> -4, ya'ni yuqoriga yaxlitlanadi!)

console.log(Math.floor(4.9)); // 4 - har doim PASTGA yaxlitlaydi (kichraytiradi)
console.log(Math.floor(-4.1)); // -5 - manfiy sonlarda ham "pastga" (kichikroq tomonga)

console.log(Math.ceil(4.1)); // 5 - har doim YUQORIGA yaxlitlaydi (kattalashtiradi)
console.log(Math.ceil(-4.9)); // -4 - manfiy sonlarda ham "yuqoriga" (kattaroq tomonga)

console.log(Math.trunc(4.9)); // 4 - kasr qismini shunchaki "kesib tashlaydi" (yaxlitlamaydi)
console.log(Math.trunc(-4.9)); // -4 - Math.floor'dan farqli, faqat kasr qismini olib tashlaydi

// round, floor, ceil, trunc farqini bitta jadvalda ko'rish:
console.log(Math.round(2.5), Math.floor(2.5), Math.ceil(2.5), Math.trunc(2.5)); // 3 2 3 2
console.log(
  Math.round(-2.5),
  Math.floor(-2.5),
  Math.ceil(-2.5),
  Math.trunc(-2.5),
); // -2 -3 -2 -2


console.log(Math.max(5, 10, 3, 8)); // 10 - berilgan sonlar orasidan eng kattasi
console.log(Math.min(5, 10, 3, 8)); // 3 - eng kichigi

console.log(Math.pow(2, 10)); // 1024 - 2 ning 10-darajasi (2**10 bilan bir xil)
console.log(Math.pow(5, 2)); // 25 - 5 ning kvadrati
console.log(Math.pow(2, 0.5)); // 1.414... - kvadrat ildizga teng (chunki 0.5-daraja = ildiz)