/**
 * ============================================================================
 * HPOK CELEBRATION LOADER - ULTIMATE MID-AUTUMN FESTIVAL EDITION (TẾT TRUNG THU)
 * Style: Đêm Rằm Trăng Tròn, Đèn Lồng Bay, Thỏ Ngọc, Múa Lân & Mưa Sao Băng 2D Canvas
 * ============================================================================
 */

(function () {
    'use strict';

    // 1. INJECT CSS NỀN NỔI BẬT & GIAO DIỆN CELEBRATION
    const style = document.createElement('style');
    style.id = 'hpok-midautumn-styles';
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;700;900&family=Montserrat:wght@800;900&display=swap');

        #hpok-global-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(circle at 50% 30%, #2b0840 0%, #0d0414 70%, #05010a 100%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 999999;
            transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s ease;
            font-family: 'Lexend', 'Montserrat', sans-serif;
            overflow: hidden;
            user-select: none;
            -webkit-user-select: none;
        }

        #midautumn-canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }

        .loader-content {
            position: relative;
            z-index: 10;
            text-align: center;
            width: 90%;
            max-width: 480px;
            padding: 30px 20px;
            background: rgba(24, 9, 40, 0.65);
            border: 2px solid rgba(255, 215, 0, 0.4);
            border-radius: 28px;
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            box-shadow: 0 0 50px rgba(255, 215, 0, 0.25), inset 0 0 20px rgba(255, 215, 0, 0.15);
            animation: containerGlow 3s infinite alternate;
        }

        @keyframes containerGlow {
            0% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.2), inset 0 0 15px rgba(255, 215, 0, 0.1); border-color: rgba(255, 215, 0, 0.3); }
            100% { box-shadow: 0 0 60px rgba(255, 215, 0, 0.4), inset 0 0 30px rgba(255, 215, 0, 0.25); border-color: rgba(255, 215, 0, 0.8); }
        }

        /* BANNER HEADER TRUNG THU */
        .celebration-badge {
            display: inline-block;
            background: linear-gradient(90deg, #d32f2f, #ff8f00, #d32f2f);
            background-size: 200% auto;
            color: #ffffff;
            font-size: 11px;
            font-weight: 900;
            padding: 6px 18px;
            border-radius: 50px;
            text-transform: uppercase;
            letter-spacing: 2px;
            border: 1px solid #ffe082;
            box-shadow: 0 0 15px rgba(255, 143, 0, 0.6);
            animation: gradientShift 2s linear infinite, bounceSlow 2s infinite;
            margin-bottom: 15px;
        }

        @keyframes gradientShift { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @keyframes bounceSlow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }

        .moon-title-wrap {
            position: relative;
            margin: 10px 0 20px;
        }

        .moon-icon-bg {
            font-size: 70px;
            filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.9));
            animation: moonPulse 2s infinite alternate;
            display: block;
            margin: 0 auto 10px;
        }

        @keyframes moonPulse {
            0% { transform: scale(1); filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.8)); }
            100% { transform: scale(1.08); filter: drop-shadow(0 0 35px rgba(255, 235, 59, 1)); }
        }

        .hpok-title {
            font-size: 26px;
            font-weight: 900;
            background: linear-gradient(180deg, #ffffff 0%, #ffe082 50%, #ffb300 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
            letter-spacing: 1px;
            margin: 0;
            text-transform: uppercase;
        }

        .hpok-subtitle {
            color: #d1c4e9;
            font-size: 13px;
            margin-top: 5px;
            font-weight: 600;
            letter-spacing: 0.5px;
        }

        /* PROGRESS BAR CAO CẤP */
        .progress-box {
            margin: 25px 0 15px;
            position: relative;
        }

        .progress-bar-bg {
            width: 100%;
            height: 16px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 20px;
            padding: 3px;
            border: 1px solid rgba(255, 215, 0, 0.3);
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
            position: relative;
            overflow: hidden;
        }

        .progress-bar-fill {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #ff8f00 0%, #ffd700 50%, #fff59d 100%);
            border-radius: 20px;
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
            transition: width 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
            position: relative;
        }

        .progress-bar-fill::after {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
            animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }

        .progress-text-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            font-size: 12px;
            font-weight: 700;
        }

        .status-msg { color: #ffe082; text-shadow: 0 0 5px rgba(255, 224, 130, 0.5); }
        .percent-num { color: #00ff88; font-family: 'Montserrat', sans-serif; font-size: 14px; }

        /* DECORATION CORNERS */
        .decor-corner {
            position: absolute;
            width: 16px;
            height: 16px;
            border: 2px solid var(--gold, #ffd700);
        }
        .top-left { top: 8px; left: 8px; border-right: none; border-bottom: none; border-top-left-radius: 8px; }
        .top-right { top: 8px; right: 8px; border-left: none; border-bottom: none; border-top-right-radius: 8px; }
        .bottom-left { bottom: 8px; left: 8px; border-right: none; border-top: none; border-bottom-left-radius: 8px; }
        .bottom-right { bottom: 8px; right: 8px; border-left: none; border-top: none; border-bottom-right-radius: 8px; }

        /* FOOTER TIP */
        .midautumn-footer {
            margin-top: 15px;
            font-size: 11px;
            color: #b39ddb;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
        }
    `;
    document.head.appendChild(style);

    // 2. KHỞI TẠO DOM LOADER
    const loaderContainer = document.createElement('div');
    loaderContainer.id = 'hpok-global-loader';
    loaderContainer.innerHTML = `
        <canvas id="midautumn-canvas"></canvas>
        <div class="loader-content">
            <div class="decor-corner top-left"></div>
            <div class="decor-corner top-right"></div>
            <div class="decor-corner bottom-left"></div>
            <div class="decor-corner bottom-right"></div>

            <div class="celebration-badge">🌕 Đêm Hội Rước Đèn 2026 🏮</div>
            
            <div class="moon-title-wrap">
                <span class="moon-icon-bg">🌕</span>
                <h1 class="hpok-title">HPOK VIP MID-AUTUMN</h1>
                <div class="hpok-subtitle">Hệ Thống Trò Chơi Giải Trí Cao Cấp</div>
            </div>

            <div class="progress-box">
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" id="hpok-progress-fill"></div>
                </div>
                <div class="progress-text-wrap">
                    <span class="status-msg" id="hpok-status-text">Đang tải tài nguyên Đêm Rằm...</span>
                    <span class="percent-num" id="hpok-percent-text">0%</span>
                </div>
            </div>

            <div class="midautumn-footer">
                <span>🥮 Chúc Quý Khách Vui Tết Trung Thu - Rước Lộc Nổ Hũ! 🐇</span>
            </div>
        </div>
    `;
    document.body.appendChild(loaderContainer);

    // 3. CANVAS ENGINE: HIỆU ỨNG ĐÈN LỒNG, TRĂNG, SAO BĂNG & PHÁO HOÀNG GIA
    const canvas = document.getElementById('midautumn-canvas');
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // Mảng lưu trữ các hạt hiệu ứng
    const lanterns = [];
    const stars = [];
    const shootingStars = [];
    const rabbits = [];

    // Tạo sao nền
    for (let i = 0; i < 120; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2,
            alpha: Math.random(),
            speed: Math.random() * 0.02 + 0.005
        });
    }

    // Lớp Đèn Lồng (Lantern)
    class Lantern {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = height + Math.random() * 100 + 50;
            this.speedY = Math.random() * 0.8 + 0.4;
            this.speedX = Math.sin(Math.random() * Math.PI) * 0.5;
            this.size = Math.random() * 14 + 18;
            this.swing = Math.random() * 0.05;
            this.swingAngle = Math.random() * Math.PI * 2;
            this.alpha = Math.random() * 0.5 + 0.5;
            this.hue = Math.floor(Math.random() * 30) + 10; // Tông màu đỏ vàng trung thu
        }

        update() {
            this.y -= this.speedY;
            this.swingAngle += this.swing;
            this.x += Math.sin(this.swingAngle) * 0.4 + this.speedX;

            if (this.y < -60) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);

            // Tỏa sáng bao quanh đèn lồng
            const radialGlow = ctx.createRadialGradient(0, 0, 2, 0, 0, this.size * 1.8);
            radialGlow.addColorStop(0, `hsla(${this.hue}, 100%, 60%, ${this.alpha * 0.8})`);
            radialGlow.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = radialGlow;
            ctx.beginPath();
            ctx.arc(0, 0, this.size * 1.8, 0, Math.PI * 2);
            ctx.fill();

            // Thân Đèn Lồng
            ctx.fillStyle = `hsla(${this.hue}, 90%, 50%, ${this.alpha})`;
            ctx.beginPath();
            ctx.ellipse(0, 0, this.size * 0.8, this.size, 0, 0, Math.PI * 2);
            ctx.fill();

            // Viền vàng trên & dưới
            ctx.fillStyle = '#ffd700';
            ctx.fillRect(-this.size * 0.5, -this.size - 2, this.size, 3);
            ctx.fillRect(-this.size * 0.5, this.size - 1, this.size, 3);

            // Tua rua treo dưới
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(0, this.size);
            ctx.lineTo(0, this.size + 12);
            ctx.stroke();

            ctx.restore();
        }
    }

    // Lớp Mưa Sao Băng (Shooting Star)
    class ShootingStar {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width * 1.5 - width * 0.5;
            this.y = -50;
            this.length = Math.random() * 80 + 40;
            this.speed = Math.random() * 10 + 6;
            this.alpha = 1;
            this.active = false;
        }

        update() {
            if (!this.active) {
                if (Math.random() < 0.005) this.active = true;
                return;
            }
            this.x += this.speed;
            this.y += this.speed * 0.6;
            this.alpha -= 0.015;

            if (this.alpha <= 0 || this.y > height || this.x > width) {
                this.reset();
            }
        }

        draw() {
            if (!this.active) return;
            ctx.save();
            const grad = ctx.createLinearGradient(this.x, this.y, this.x - this.length, this.y - this.length * 0.6);
            grad.addColorStop(0, `rgba(255, 235, 59, ${this.alpha})`);
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.strokeStyle = grad;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - this.length, this.y - this.length * 0.6);
            ctx.stroke();
            ctx.restore();
        }
    }

    // Khởi tạo các đối tượng
    for (let i = 0; i < 25; i++) lanterns.push(new Lantern());
    for (let i = 0; i < 4; i++) shootingStars.push(new ShootingStar());

    // Loop Animation
    function renderCanvas() {
        ctx.clearRect(0, 0, width, height);

        // Vẽ Sao Đêm Lấp Lánh
        stars.forEach(s => {
            s.alpha += s.speed;
            if (s.alpha > 1 || s.alpha < 0) s.speed = -s.speed;
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(s.alpha)})`;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fill();
        });

        // Vẽ Mưa Sao Băng
        shootingStars.forEach(ss => {
            ss.update();
            ss.draw();
        });

        // Vẽ Đèn Lồng
        lanterns.forEach(l => {
            l.update();
            l.draw();
        });

        requestAnimationFrame(renderCanvas);
    }
    renderCanvas();

    // 4. TIẾN TRÌNH LOADER & GIẢ LẬP TẢI DỮ LIỆU BẮT MẮT
    const fillEl = document.getElementById('hpok-progress-fill');
    const percentEl = document.getElementById('hpok-percent-text');
    const statusEl = document.getElementById('hpok-status-text');

    const statusMessages = [
        "Đang kết nối máy chủ Đêm Rằm...",
        "Tải dữ liệu Game Nổ Hũ & Bắn Cá...",
        "Chuẩn bị quà tặng Trung Thu +88K...",
        "Khởi tạo hiệu ứng Live Casino...",
        "Hoàn tất! Đang vào sảnh HPOK..."
    ];

    let currentPercent = 0;

    const progressInterval = setInterval(() => {
        // Tăng phần trăm thông minh
        const increment = Math.floor(Math.random() * 8) + 3;
        currentPercent += increment;

        if (currentPercent > 100) currentPercent = 100;

        fillEl.style.width = currentPercent + '%';
        percentEl.innerText = currentPercent + '%';

        // Đổi thông báo theo tiến trình
        if (currentPercent < 25) {
            statusEl.innerText = statusMessages[0];
        } else if (currentPercent < 55) {
            statusEl.innerText = statusMessages[1];
        } else if (currentPercent < 80) {
            statusEl.innerText = statusMessages[2];
        } else if (currentPercent < 95) {
            statusEl.innerText = statusMessages[3];
        } else {
            statusEl.innerText = statusMessages[4];
        }

        // Khi tải xong 100%
        if (currentPercent >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
                loaderContainer.style.opacity = '0';
                loaderContainer.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    loaderContainer.remove();
                }, 1000);
            }, 500);
        }
    }, 120);

})();
