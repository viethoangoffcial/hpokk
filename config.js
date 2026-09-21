/* HPOK CONFIGURATION - ENHANCED MASKING */
(function() {
    // Tên miền gốc: https://hpokapp.gamer.gd
    // Bước 1: Base64 -> aHR0cHM6Ly9ocG9rYXBwLmdhbWVyLmdk
    // Bước 2: Đảo ngược chuỗi -> ZGwucmVtYWcuZHBwYWtvcGg2THk2U0h0YUhR
    const masked = "ZGwucmVtYWcuZHBwYWtvcGg2THk2U0h0YUhR"; 
    
    // Hàm giải mã ngược
    const decode = (str) => {
        return atob(str.split("").reverse().join(""));
    };

    window.HPOK_DOMAIN = decode(masked);
    console.log("System Secured");

    // Chặn F12 và Chuột phải
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.onkeydown = (e) => {
        if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || (e.ctrlKey && e.keyCode == 85)) {
            return false;
        }
    };
})();
