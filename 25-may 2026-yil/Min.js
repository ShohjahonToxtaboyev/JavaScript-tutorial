// let haftaKuni = parseInt(prompt("1 dan 7 gacha son kiriting:"));

// switch (haftaKuni) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;
//     default:
//         console.log("1 dan 7 gacha son kiriting!");

// }
// switch(oykunlari){

//          case 1:
//         console.log("qsh")
//           break;
//          case 2:
//         console.log("qsh")
//           break;
//          case 3:
//         console.log("bahor")
//           break;
//          case 4:
//         console.log("bahor")
//           break;
//          case 5:
//         console.log("bahor")
//           break;
//          case 6:
//         console.log("yoz")
//           break;
//          case 7:
//         console.log("yoz")
//           break;
//          case 8:
//         console.log("yoz")
//           break;
//          case 9:
//         console.log("kuz")
//           break;
//          case 10:
//         console.log("kuz")
//           break;
//          case 11:
//         console.log("kuz")
//           break;
//         case 12:
//             console.log("qsh")

// }

let oy = 2;

switch (oy) {
  case oy >= 3 && oy <= 5:
    console.log("Bahor");
    break;
  case oy >= 6 && oy <= 8:
    console.log("Yoz");
    break;
  case oy >= 9 && oy <= 11:
    console.log("Kuz");
    break;
  case oy == 12 || (oy >= 1 && oy <= 2):
    console.log("Qish");
    break;
  default:
    console.log("Siz xato oy raqamini kiritdingiz!");
}
