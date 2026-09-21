(function() {
    const CONFIG = {
        virtual: "https://hpokapp.gamer.gd",
        // Lấy tên miền đã giải mã từ config.js, nếu chưa có thì để trống
        real: window.HPOK_DOMAIN || "", 
        brand: "hpok.com",
        path: "/secure/verify/system-v25"
    };

    const updateURL = () => {
        if (window.location.hostname !== CONFIG.virtual) {
            const fakeURL = `https://${CONFIG.virtual}${CONFIG.path}/${CONFIG.brand}`;
            window.history.replaceState({hpok: true}, '', fakeURL);
        }
    };
    
    // Đợi window.HPOK_DOMAIN sẵn sàng
    if (CONFIG.real) {
        updateURL();
        // Các logic fixAssets bên dưới...
    } else {
        setTimeout(updateURL, 100);
    }
    
    // ... (Giữ nguyên các hàm fixAssets và Anti-F12 bên dưới)
})();
