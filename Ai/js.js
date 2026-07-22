let cartCount = 0;
let userGmail = ""; 

const cartCounter = document.getElementById('cart-counter');
const container = document.getElementById('products-container');
const sectionTitle = document.getElementById('section-title');
const gmailDisplay = document.getElementById('gmail-display');

const categories = ["BMW", "Mercedes", "Mashinalar", "Anime", "Manzaralar"];
const allProducts = [];
const totalProducts = 2000; 

// Har doim ishlaydigan aniq chiroyli anime rasmlari ID ro'yxati (Unsplash)
const animeImageIds = [
    "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&auto=format&fit=crop", // Anime Art
    "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&auto=format&fit=crop", // Cyberpunk Anime
    "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400&auto=format&fit=crop", // Retro Anime
    "https://images.unsplash.com/photo-1528360983277-13d401ccd795?w=400&auto=format&fit=crop", // Japan Street Anime Style
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&auto=format&fit=crop", // Neon Art
    "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=400&auto=format&fit=crop"  // Minimalist Anime
];

const animeNames = ["Naruto Uzumaki", "Luffy Gear 5", "Gojo Satoru", "Zoro Roronoa", "Eren Yeager", "Tanjiro Kamado", "Sasuke Uchiha", "Kakashi Hatake", "Itachi Uchiha", "Killua Zoldyck"];

for (let i = 1; i <= totalProducts; i++) {
    const categoryName = categories[(i - 1) % categories.length];
    let imgUrl = "";
    let title = categoryName + " Eksklyuziv №" + i;

    if (categoryName === "BMW") {
        imgUrl = "https://picsum.photos/400/300?random=bmwcar_" + i;
    } else if (categoryName === "Mercedes") {
        imgUrl = "https://picsum.photos/400/300?random=mercedesbenz_" + i;
    } else if (categoryName === "Mashinalar") {
        imgUrl = "https://picsum.photos/400/300?random=supercar_" + i;
    } else if (categoryName === "Anime") {
        // Har doim yuklanadigan va bloklanmaydigan ishonchli manba
        const imgIndex = (i - 1) % animeImageIds.length;
        imgUrl = animeImageIds[imgIndex] + "&sig=" + i; 
        
        const nameIndex = (i - 1) % animeNames.length;
        title = "Anime Poster: " + animeNames[nameIndex] + " (№" + i + ")";
    } else {
        imgUrl = "https://picsum.photos/400/300?random=beautifulnature_" + i;
    }

    const currentPrice = 120000 + (i * 500); 
    const oldPrice = currentPrice + 40000;

    allProducts.push({
        id: i,
        title: title,
        category: categoryName,
        imgUrl: imgUrl,
        currentPrice: currentPrice,
        oldPrice: oldPrice
    });
}

// Sahifaga chiqarish
function displayProducts(productsList) {
    container.innerHTML = ""; 

    if (productsList.length === 0) {
        container.innerHTML = "<p style='padding: 20px; font-size: 18px;'>Hech qanday mahsulot topilmadi.</p>";
        return;
    }

    productsList.forEach(function(product) {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
            <img src="${product.imgUrl}" alt="${product.title}" class="product-img" loading="lazy">
            <div class="product-info">
                <h3>${product.title}</h3>
                <p class="old-price">${product.oldPrice.toLocaleString()} so'm</p>
                <p class="current-price">${product.currentPrice.toLocaleString()} so'm</p>
                <button class="add-to-cart-btn" data-id="${product.id}">Xarid qilish (Rasm yuklash)</button>
            </div>
        `;
        container.appendChild(card);
    });
}

displayProducts(allProducts);

// --- QIDIRUV TIZIMI ---
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    sectionTitle.innerText = "Qidiruv natijalari: " + searchInput.value;
    
    const filtered = allProducts.filter(function(product) {
        return product.title.toLowerCase().includes(query) || product.category.toLowerCase().includes(query);
    });
    
    displayProducts(filtered);
}

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') { handleSearch(); }
});

// --- KATEGORIYALAR FILTRI ---
const categoryLinks = document.querySelectorAll('#categories-list a');

categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        categoryLinks.forEach(function(l) { l.classList.remove('active'); });
        link.classList.add('active');

        const selectedCategory = link.getAttribute('data-category');

        if (selectedCategory === 'all') {
            sectionTitle.innerText = "Hamma Mahsulotlar (2000 ta)";
            displayProducts(allProducts);
        } else {
            sectionTitle.innerText = selectedCategory + " Bo'limi";
            const filtered = allProducts.filter(function(product) {
                return product.category === selectedCategory;
            });
            displayProducts(filtered);
        }
    });
});

// Bosh sahifa
document.getElementById('logo-home').addEventListener('click', function() {
    searchInput.value = "";
    sectionTitle.innerText = "Hamma Mahsulotlar (2000 ta)";
    categoryLinks.forEach(function(l) { l.classList.remove('active'); });
    document.querySelector('[data-category="all"]').classList.add('active');
    displayProducts(allProducts);
});

// --- XARID TIZIMI VA RASM YUKLASH ---
container.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart-btn')) {
        
        if (!userGmail) {
            const input = prompt("Xarid qilishdan oldin Gmail pochtangizni kiriting (Masalan: avto@gmail.com):");
            
            if (input && input.includes("@") && input.includes(".")) {
                userGmail = input;
                gmailDisplay.innerText = userGmail;
                alert("Profilingiz tasdiqlandi! Rasm hozir yuklanadi.");
            } else {
                alert("Noto'g'ri Gmail kiritildi. Xarid bekor qilindi.");
                return;
            }
        }

        cartCount = cartCount + 1;
        cartCounter.innerText = "Savat (" + cartCount + ")";

        const productId = event.target.getAttribute('data-id');
        const foundProduct = allProducts.find(function(p) { return p.id == productId; });

        if (foundProduct) {
            fetch(foundProduct.imgUrl)
                .then(function(response) {
                    return response.blob(); 
                })
                .then(function(blob) {
                    const objectUrl = URL.createObjectURL(blob);
                    
                    const downloadLink = document.createElement('a');
                    downloadLink.href = objectUrl;
                    downloadLink.download = foundProduct.title.replace(/ /g, "_") + ".jpg";
                    
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    
                    document.body.removeChild(downloadLink);
                    URL.revokeObjectURL(objectUrl);
                })
                .catch(function() {
                    alert("Rasmni yuklashda xatolik yuz berdi. Internetni tekshiring.");
                });
        }
    }
});