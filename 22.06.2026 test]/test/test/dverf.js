//* 1-topshiriq Hozirgi sana va vaqtni konsolga chiqaruvchi dastur yozing.
const sana = new Date();
console.log(sana)
//* 2-topshiriq Hozirgi yilni konsolga chiqaruvchi dastur yozing.
const hozirgiYil = new Date().getFullYear()
console.log(hozirgiYil)
//* 3-topshiriq Hozirgi oy raqamini (0-11 oralig'ida) konsolga chiqaruvchi dastur yozing.
const hozirgiOy = new Date().getMonth()
    console.log(hozirgiOy)

//* 4-topshiriq Hozirgi kun raqamini (1-31 oralig'ida) konsolga chiqaruvchi dastur yozing.
const bugun = new Date().getDate();
console.log(bugun);

//* 5-topshiriq Hozirgi sanani ISO formatda (YYYY-MM-DDTHH:mm:ss.sssZ) konsolga chiqaruvchi dastur yozing.
const hozirgiSana = new Date().toISOString();
console.log(hozirgiSana);


//* 6-topshiriq 1970-yil 1-yanvardan hozirgi vaqtgacha bo'lgan millisekundlar sonini konsolga chiqaruvchi dastur yozing.
const millisekund = Date.now();
console.log(millisekund);

//* 7-topshiriq Hozirgi sanani o'zbek tilida ko'rsatuvchi dastur yozing. (Intl.DateTimeFormat dan foydalaning)
const sana = new Intl.DateTimeFormat('uz-UZ').format();

console.log(sana);
//* 8-topshiriq Hozirgi vaqtga 5 soat qo'shib, yangi vaqtni konsolga chiqaruvchi dastur yozing
const hozir = Date.now();
const yangiVaqt = new Date(hozir + 5 * 60 * 60 * 1000);
console.log(yangiVaqt);
//*9-topshiriq Math.PI yordamida Pi sonini konsolga chiqaring.

//*10-topshiriq 0 va 1 oralig'ida tasodifiy son hosil qiling va konsolga chiqaring.

//*11-topshiriq 4.7 sonini eng yaqin butun songa yaxlitlang va natijani konsolga chiqaring.

//*12-topshiriq 4.9 sonini pastga (floor) yaxlitlang va natijani konsolga chiqaring.

//*13-topshiriq 4.1 sonini yuqoriga (ceil) yaxlitlang va natijani konsolga chiqaring.

//*14-topshiriq [5, 10, 3, 8] massividagi eng katta sonni toping va konsolga chiqaring.

//*15-topshiriq [5, 10, 3, 8] massividagi eng kichik sonni toping va konsolga chiqaring.

//*16-topshiriq -7 sonining absolut (modul) qiymatini toping va konsolga chiqaring.

//*17-topshiriq 2 ning 3-darajasini hisoblang va konsolga chiqaring.

//*18-topshiriq 16 ning kvadrat ildizini toping va konsolga chiqaring.

//*19-topshiriq 27 ning kub ildizini toping va konsolga chiqaring.