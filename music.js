/**
 * HPOK OFFICIAL - MUSIC SYSTEM MASTER
 * Music: DJ Thái Hoàng x MC Bùm - Live Show H2 Club
 * Link: https://youtu.be/3f_7PkSp91E
 */

const VIDEO_ID = '3f_7PkSp91E'; // ID nhạc mới đã cập nhật
let player;

// 1. Tạo Giao diện Điều khiển (Nút đĩa quay Neon)
function initMusicUI() {
    if (document.getElementById('hpok-music-player')) return;
    const html = `
        <div id="hpok-music-player">
            <div id="yt-player-frame" style="position:fixed; opacity:0; pointer-events:none; width:1px; height:1px;"></div>
            <div id="btn-music" onclick="toggleMusic()" style="position:fixed; bottom:85px; right:15px; z-index:9999; background:rgba(0,0,0,0.6); border:2px solid #ff007f; width:45px; height:45px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; color:#ff007f; box-shadow:0 0 15px rgba(255,0,127,0.5);">
                <i id="music-ico" class="fa-solid fa-compact-disc fa-spin"></i>
            </div>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', html);
}

// 2. Cấu hình YouTube IFrame API
if (!window.YT) {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
}

function onYouTubeIframeAPIReady() {
    // Lấy thời gian phát từ lần trước và trạng thái tắt nhạc
    const savedTime = parseFloat(localStorage.getItem('hpok_ms_time')) || 0;
    const isMuted = localStorage.getItem('hpok_ms_muted') === 'true';

    player = new YT.Player('yt-player-frame', {
        height: '0', width: '0', videoId: VIDEO_ID,
        playerVars: { 
            'autoplay': isMuted ? 0 : 1, 
            'loop': 1, 
            'playlist': VIDEO_ID, 
            'controls': 0, 
            'start': Math.floor(savedTime) 
        },
        events: {
            'onReady': (e) => {
                e.target.setVolume(70); // Âm lượng 70% phù hợp cho Vinahouse
                if (!isMuted) {
                    e.target.playVideo();
                } else {
                    updateUI(false);
                }
                
                // Lưu thời gian phát vào localStorage mỗi giây
                setInterval(() => {
                    if (player && player.getCurrentTime && player.getPlayerState() === 1) {
                        localStorage.setItem('hpok_ms_time', player.getCurrentTime());
                    }
                }, 1000);
            },
            'onStateChange': (e) => {
                // Tự động phát lại khi nhạc kết thúc (Vòng lặp)
                if (e.data === YT.PlayerState.ENDED) e.target.playVideo();
            }
        }
    });
}

// 3. Hàm Bật/Tắt nhạc và Cập nhật Giao diện
function toggleMusic() {
    if (!player) return;
    const state = player.getPlayerState();
    if (state === YT.PlayerState.PLAYING) {
        player.pauseVideo();
        localStorage.setItem('hpok_ms_muted', 'true');
        updateUI(false);
    } else {
        player.playVideo();
        localStorage.setItem('hpok_ms_muted', 'false');
        updateUI(true);
    }
}

function updateUI(active) {
    const ico = document.getElementById('music-ico');
    const btn = document.getElementById('btn-music');
    if (!ico || !btn) return;
    if (active) {
        ico.classList.add('fa-spin');
        btn.style.color = btn.style.borderColor = "#ff007f";
    } else {
        ico.classList.remove('fa-spin');
        btn.style.color = btn.style.borderColor = "#555";
    }
}

// 4. Kích hoạt tự động phát khi người dùng chạm vào trang
initMusicUI();
document.addEventListener('click', () => {
    if (player && localStorage.getItem('hpok_ms_muted') !== 'true') {
        player.playVideo();
        updateUI(true);
    }
}, { once: true });
