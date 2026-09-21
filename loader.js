/**
 * HPOK CELEBRATION LOADER - MID-AUTUMN EDITION (TẾT TRUNG THU)
 * Phong cách: Đêm Rằm Trăng Tròn, Đèn Lồng Bay, Vàng Trăng - Đỏ Đội Đèn Chuyên Nghiệp Cao Cấp.
 */

(function() {
    // 1. CẤU HÌNH CSS (Tông màu Đêm Rằm & Hiệu ứng Trăng, Đèn Lồng)
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');

        #hpok-global-loader {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(circle at center, #1a0b2e 0%, #08020f 100%);
            display: flex; justify-content: center; align-items: center;
            z-index: 1000000; transition: opacity 0.8s ease;
            font-family: 'Montserrat', sans-serif; overflow: hidden;
        }

        /* Canvas Đèn Lồng Bay Nền */
        #midautumn-canvas {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            z-index: 1; pointer-events: none;
        }

        .loader-content { 
            text-align: center; position: relative; z-index: 10; 
            width: 90%; max-width: 450px; 
        }

        /* Banner Khuyến mãi Tết Trung Thu */
        .celebration-banner {
            background: linear-gradient(90deg, #d32f2f, #ffb300, #d32f2f);
            background-size: 200% auto;
            color: #fff; padding: 10px 25px; border-radius: 50px;
            font-size: 13px; font-weight: 900; letter-spacing: 1px;
            box-shadow: 0 0 25px rgba(255, 179, 0, 0.6);
            border: 2px solid #ffe082; margin-bottom: 30px;
            animation: shine 3s linear infinite, pulse 1.5s ease-in-out infinite;
        }

        @keyframes shine { to { background-position: 200% center; } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }

        /* Icon Mặt Trăng Tròn Hào Quang 3D */
        .main-moon {
            width: 140px; height: 140px; margin: 0 auto 20px;
            filter: drop-shadow(0 0 35px #ffca28);
            animation: moonFloat 4s ease-in-out infinite;
        }

        @keyframes moonFloat {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-10px) scale(1.03); }
        }

        /* Typography HPOK phong cách chữ Vàng Trăng 3D */
        .brand-title { 
            font-size: 65px; font-weight: 900; letter-spacing: 15px; 
            margin-bottom: 30px; color: #ffe082;
            text-shadow: 2px 2px 0 #b71c1c, 4px 4px 0 #5f0909, 0 0 35px rgba(255, 224, 130, 0.6);
            display: block;
        }

        /* Thanh tiến trình Trung Thu */
        .progress-wrapper { width: 100%; margin: 20px 0; }
        .loading-info { 
            display: flex; justify-content: space-between; 
            color: #ffe082; font-size: 12px; font-weight: 700; 
            text-transform: uppercase; margin-bottom: 8px;
        }

        .track-bar {
            height: 10px; background: rgba(255, 255, 255, 0.1);
            border-radius: 20px; overflow: hidden; border: 1px solid rgba(255, 224, 130, 0.4);
        }
        .fill-bar {
            width: 0%; height: 100%;
            background: linear-gradient(90deg, #ffb300, #e64a19);
            box-shadow: 0 0 15px #ff9800;
            transition: width 0.4s ease-out;
        }

        .footer-tag { color: rgba(255, 224, 130, 0.5); font-size: 9px; margin-top: 25px; letter-spacing: 2px; }
        .no-scroll { overflow: hidden !important; }
    `;
    document.head.appendChild(style);

    // 2. CẤU TRÚC HTML (Mặt Trăng Tròn & Biểu tượng Bánh Trung Thu / Đèn lồng)
    const loaderHTML = `
        <div id="hpok-global-loader">
            <canvas id="midautumn-canvas"></canvas>
            <div class="loader-content">
                <div class="celebration-banner">🥮 TƯNG BỪNG TẾT TRUNG THU • RẮM THÁNG TÁM 🥮</div>
                
                <div class="main-moon">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <radialGradient id="moonGrad" cx="30%" cy="30%" r="70%">
                                <stop offset="0%" stop-color="#fffde7"/>
                                <stop offset="50%" stop-color="#ffe082"/>
                                <stop offset="100%" stop-color="#ffb300"/>
                            </radialGradient>
                        </defs>
                        <!-- Mặt Trăng Tròn -->
                        <circle cx="256" cy="256" r="230" fill="url(#moonGrad)"/>
                        <!-- Vết lõm mặt trăng nhẹ nhàng -->
                        <circle cx="180" cy="150" r="30" fill="#fbc02d" opacity="0.25"/>
                        <circle cx="320" cy="220" r="45" fill="#fbc02d" opacity="0.2"/>
                        <circle cx="220" cy="340" r="35" fill="#fbc02d" opacity="0.2"/>
                    </svg>
                </div>

                <div class="brand-title">HPOK</div>

                <div class="progress-wrapper">
                    <div class="loading-info">
                        <span id="status-text">Đang thắp đèn trông trăng...</span>
                        <span id="load-pct">0%</span>
                    </div>
                    <div class="track-bar">
                        <div class="fill-bar" id="load-bar"></div>
                    </div>
                </div>

                <div class="footer-tag">PHIÊN BẢN ĐÊM RẰM TẾT TRUNG THU • HPOK 2026</div>
            </div>
        </div>
    `;

    // 3. LOGIC HIỆU ỨNG ĐÈN LỒNG BAY (Floating Lanterns) & SAO ĐÊM
    function initMidAutumnEffects() {
        const canvas = document.getElementById('midautumn-canvas');
        const ctx = canvas.getContext('2d');
        let lanterns = [];
        let stars = [];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Khởi tạo sao đêm
        for (let i = 0; i < 60; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2,
                alpha: Math.random(),
                speed: Math.random() * 0.02 + 0.005
            });
        }

        // Lớp Đèn Lồng
        class Lantern {
            constructor() {
                this.reset();
                this.y = Math.random() * canvas.height; // Phân bổ đều ban đầu
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100 + 20;
                this.speed = Math.random() * 0.8 + 0.4;
                this.size = Math.random() * 12 + 10;
                this.swing = Math.random() * 0.02;
                this.swingAngle = Math.random() * Math.PI * 2;
                this.alpha = Math.random() * 0.5 + 0.5;
            }
            update() {
                this.y -= this.speed;
                this.swingAngle += this.swing;
                this.x += Math.sin(this.swingAngle) * 0.5;
                if (this.y < -30) this.reset();
            }
            draw() {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                
                // Ánh sáng tỏa ra từ đèn lồng
                const glow = ctx.createRadialGradient(this.x, this.y, 2, this.x, this.y, this.size * 1.8);
                glow.addColorStop(0, 'rgba(255, 179, 0, 0.8)');
                glow.addColorStop(1, 'rgba(255, 87, 34, 0)');
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 1.8, 0, Math.PI * 2);
                ctx.fill();

                // Thân đèn lồng
                ctx.fillStyle = '#ff3d00';
                ctx.beginPath();
                ctx.ellipse(this.x, this.y, this.size * 0.7, this.size, 0, 0, Math.PI * 2);
                ctx.fill();

                // Lõi sáng bên trong
                ctx.fillStyle = '#fff59d';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 0.3, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
        }

        for (let i = 0; i < 25; i++) lanterns.push(new Lantern());

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Vẽ sao lấp lánh
            stars.forEach(s => {
                s.alpha += s.speed;
                if (s.alpha > 1 || s.alpha < 0) s.speed = -s.speed;
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(s.alpha)})`;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Vẽ đèn lồng bay
            lanterns.forEach(l => {
                l.update();
                l.draw();
            });

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

        initMidAutumnEffects();

        const bar = document.getElementById('load-bar');
        const pctTxt = document.getElementById('load-pct');
        const statusTxt = document.getElementById('status-text');
        let progress = 0;

        const messages = [
            "Pha trà ngắm trăng...", 
            "Thắp đèn lồng Rằm...", 
            "Nhận quà Trung Thu X3...", 
            "Rước đèn vào Game ngay!"
        ];

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
