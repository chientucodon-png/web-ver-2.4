// ===================
// MODAL FUNCTIONS
// ===================

function openModal(key) {
    const m = data[key];
    if (!m) return; // Prevent error if key not found
    document.getElementById('modal-img').src = m.img;
    document.getElementById('modal-title').innerText = m.name;
    document.getElementById('modal-desc').innerText = m.desc;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// ===== DETAILED INFO MODAL =====
function showDetailedInfo(type) {
    const currentKey = getCurrentModalKey();
    if (!currentKey || !detailedInfo[currentKey]) return;

    const info = detailedInfo[currentKey];
    const titles = {
        intro: "📋 Giới thiệu chung",
        style: "🎨 Phong cách",
        feature: "✨ Đặc trưng",
        impact: "⭐ Dấu ấn"
    };

    document.getElementById('detail-title').innerText = titles[type] || "Thông tin";
    document.getElementById('detail-content').innerText = info[type] || "Không có thông tin chi tiết.";
    document.getElementById('detailModal').style.display = 'flex';
}

function closeDetailModal() {
    document.getElementById('detailModal').style.display = 'none';
}

// Store current modal key to know which person is being viewed
let currentModalKey = null;

function getCurrentModalKey() {
    return currentModalKey;
}

// Modify openModal to track current key
const originalOpenModal = window.openModal;
function openModal(key) {
    currentModalKey = key;
    const m = data[key];
    if (!m) return;
    document.getElementById('modal-img').src = m.img;
    document.getElementById('modal-title').innerText = m.name;
    document.getElementById('modal-desc').innerText = m.desc;

    // Ẩn/hiện nút chức năng dựa trên loại modal
    const buttonsVertical = document.querySelector('.modal-buttons-vertical');
    if (key.startsWith('img') || key.startsWith('vid')) {
        // Ẩn nút cho kỷ niệm
        buttonsVertical.style.display = 'none';
    } else {
        // Hiện nút cho học sinh và giáo viên
        buttonsVertical.style.display = 'flex';
    }

    document.getElementById('modal').style.display = 'flex';
}

function openMemoryType(type) {
    // Ẩn section memories
    document.getElementById('memories').classList.remove('active');

    if (type === 'images') {
        document.getElementById('memoryImages').classList.add('active');
        document.getElementById('memoryVideos').classList.remove('active');
    } else if (type === 'videos') {
        document.getElementById('memoryVideos').classList.add('active');
        document.getElementById('memoryImages').classList.remove('active');
    }
}

function backToMemories() {
    document.getElementById('memories').classList.add('active');
    document.getElementById('memoryImages').classList.remove('active');
    document.getElementById('memoryVideos').classList.remove('active');
}