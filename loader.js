/**
 * HPOK CELEBRATION LOADER - VICTORY EDITION (30/04 - 01/05)
 * Phong cách: Đỏ - Vàng hoàng kim, hiệu ứng pháo hoa, chuyên nghiệp cao cấp.
 */

(function() {
    // 1. CẤU HÌNH CSS (Tông màu Đại Lễ & Hiệu ứng động)
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');

        #hpok-global-loader {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(circle at center, #2b0000 0%, #050505 100%);
            display: flex; justify-content: center; align-items: center;
            z-index: 1000000; transition: opacity 0.8s ease;
            font-family: 'Montserrat', sans-serif; overflow: hidden;
        }

        /* Canvas Pháo Hoa Nền */
        #firework-canvas {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            z-index: 1; pointer-events: none;
        }

        .loader-content { 
            text-align: center; position: relative; z-index: 10; 
            width: 90%; max-width: 450px; 
        }

        /* Banner Khuyến mãi kiểu "Bùng nổ" */
        .celebration-banner {
            background: linear-gradient(90deg, #ff0000, #ffcc00, #ff0000);
            background-size: 200% auto;
            color: #fff; padding: 10px 25px; border-radius: 50px;
            font-size: 14px; font-weight: 900; letter-spacing: 1px;
            box-shadow: 0 0 30px rgba(255, 0, 0, 0.6);
            border: 2px solid #fff; margin-bottom: 30px;
            animation: shine 3s linear infinite, pulse 1.5s ease-in-out infinite;
        }

        @keyframes shine { to { background-position: 200% center; } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }

        /* Icon Ngôi sao vàng hào quang */
        .main-star {
            width: 140px; height: 140px; margin: 0 auto 20px;
            filter: drop-shadow(0 0 25px #ffcc00);
            animation: starSpin 6s linear infinite;
        }

        @keyframes starSpin {
            0% { transform: rotateY(0deg) scale(1); }
            50% { transform: rotateY(180deg) scale(1.1); }
            100% { transform: rotateY(360deg) scale(1); }
        }

        /* Typography HPOK phong cách chữ vàng 3D */
        .brand-title { 
            font-size: 65px; font-weight: 900; letter-spacing: 15px; 
            margin-bottom: 30px; color: #ffcc00;
            text-shadow: 2px 2px 0 #800000, 4px 4px 0 #500000, 0 0 30px rgba(255, 204, 0, 0.5);
            display: block;
        }

        /* Thanh tiến trình chuyên nghiệp */
        .progress-wrapper { width: 100%; margin: 20px 0; }
        .loading-info { 
            display: flex; justify-content: space-between; 
            color: #ffcc00; font-size: 12px; font-weight: 700; 
            text-transform: uppercase; margin-bottom: 8px;
        }

        .track-bar {
            height: 10px; background: rgba(255, 255, 255, 0.1);
            border-radius: 20px; overflow: hidden; border: 1px solid rgba(255, 204, 0, 0.3);
        }
        .fill-bar {
            width: 0%; height: 100%;
            background: linear-gradient(90deg, #ffcc00, #ff0000);
            box-shadow: 0 0 15px #ff0000;
            transition: width 0.4s ease-out;
        }

        .footer-tag { color: rgba(255,255,255,0.4); font-size: 9px; margin-top: 25px; letter-spacing: 2px; }
        .no-scroll { overflow: hidden !important; }
    `;
    document.head.appendChild(style);

    // 2. CẤU TRÚC HTML (Sử dụng icon ngôi sao vàng đại lễ)
    const loaderHTML = `
        <div id="hpok-global-loader">
            <canvas id="firework-canvas"></canvas>
            <div class="loader-content">
                <div class="celebration-banner">⭐ BÙNG NỔ KHUYẾN MÃI ĐẠI LỄ 30/4 - 1/5 ⭐</div>
                
                <div class="main-star">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 0l79.1 160.3L512 185.9l-128 124.7 30.2 176.1L256 403.8 97.8 486.7l30.2-176.1L0 185.9l176.9-25.6L256 0z" fill="#ffcc00"/>
                    </svg>
                </div>

                <div class="brand-title">HPOK</div>

                <div class="progress-wrapper">
                    <div class="loading-info">
                        <span id="status-text">Đang tải dữ liệu...</span>
                        <span id="load-pct">0%</span>
                    </div>
                    <div class="track-bar">
                        <div class="fill-bar" id="load-bar"></div>
                    </div>
                </div>

                <div class="footer-tag">PHIÊN BẢN ĐẠI LỄ HÙNG TRÁNG • HPOK 2026</div>
            </div>
        </div>
    `;

    // 3. LOGIC PHÁO HOA (Tạo điểm nhấn chuyên nghiệp)
    function initFireworks() {
        const canvas = document.getElementById('firework-canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            constructor(x, y, color) {
                this.x = x; this.y = y; this.color = color;
                this.speed = Math.random() * 3 + 1;
                this.angle = Math.random() * Math.PI * 2;
                this.vx = Math.cos(this.angle) * this.speed;
                this.vy = Math.sin(this.angle) * this.speed;
                this.alpha = 1;
            }
            update() {
                this.x += this.vx; this.y += this.vy;
                this.alpha -= 0.01;
            }
            draw() {
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = this.color;
                ctx.beginPath(); ctx.arc(this.x, this.y, 2, 0, Math.PI * 2); ctx.fill();
            }
        }

        function createExplosion() {
            const x = Math.random() * canvas.width;
            const y = Math.random() * (canvas.height / 2);
            const colors = ['#ffcc00', '#ff0000', '#ffffff'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            for (let i = 0; i < 30; i++) particles.push(new Particle(x, y, color));
        }

        let frame = 0;
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (frame % 40 === 0) createExplosion();
            particles = particles.filter(p => p.alpha > 0);
            particles.forEach(p => { p.update(); p.draw(); });
            frame++;
            requestAnimationFrame(animate);
        }
        animate();
    }

    // 4. KHỞI CHẠY HỆ THỐNG
    function startLoading() {
        const div = document.createElement('div');
        div.innerHTML = loaderHTML;
        document.body.appendChild(div.firstElementChild);
        document.body.classList.add('no-scroll');

        initFireworks();

        const bar = document.getElementById('load-bar');
        const pctTxt = document.getElementById('load-pct');
        const statusTxt = document.getElementById('status-text');
        let progress = 0;

        const messages = ["Khởi tạo sảnh lễ...", "Kết nối máy chủ...", "Xử lý ưu đãi X3...", "Vào Game ngay!"];

        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 5) + 2;
            
            if (progress < 25) statusTxt.innerText = messages[0];
            else if (progress < 60) statusTxt.innerText = messages[1];
            else if (progress < 90) statusTxt.innerText = messages[2];
            else statusTxt.innerText = messages[3];

            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    const overlay = document.getElementById('hpok-global-loader');
                    overlay.style.opacity = '0';
                    document.body.classList.remove('no-scroll');
                    setTimeout(() => overlay.remove(), 800);
                }, 800);
            }

            if (bar) bar.style.width = progress + '%';
            if (pctTxt) pctTxt.innerText = progress + '%';
        }, 120);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startLoading);
    } else {
        startLoading();
    }
})();
