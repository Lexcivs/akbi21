// Navigation Configuration
const navItems = [
    { id: 'home', label: 'Home / Overview', icon: '🏠' },
    { id: 'tm1', label: 'TM 1: Pengantar Akuntansi', icon: '01' },
    { id: 'tm2', label: 'TM 2: Perilaku Biaya', icon: '02' },
    { id: 'tm3', label: 'TM 3: Siklus Biaya', icon: '03' },
    { id: 'tm4', label: 'TM 4: Job Order Costing', icon: '04' },
    { id: 'tm5', label: 'TM 5: Process Costing (Avg)', icon: '05' },
    { id: 'tm6', label: 'TM 6: Process Costing (FIFO)', icon: '06' },
    { id: 'tm7', label: 'TM 7: Biaya Kualitas', icon: '07' },
    { id: 'interactive', label: '📝 Praktik Laporan', icon: '✏️' },
    { id: 'tips', label: '🎯 Tips UTS', icon: '💡' },
    { id: 'quiz', label: '🧪 Latihan Soal', icon: 'Q' }
];

const audioOverviews = {
    home: "Selamat datang di AKBI Masterclass. Ini adalah panduan belajar interaktif Anda untuk ujian tengah semester Akuntansi Biaya. Silakan pilih menu di samping untuk mulai belajar.",
    tm1: "Tatap Muka 1 membahas pengantar akuntansi biaya. Anda akan belajar tentang klasifikasi biaya, perbedaan biaya langsung dan tidak langsung, serta tiga akun persediaan pabrik.",
    tm2: "Tatap Muka 2 fokus pada perilaku biaya. Anda akan mempelajari biaya tetap, biaya variabel, biaya campuran, serta metode high-low dan regresi.",
    tm3: "Tatap Muka 3 membahas siklus biaya. Ini meliputi perhitungan pemakaian bahan baku, total biaya manufaktur, harga pokok produksi, dan harga pokok penjualan.",
    tm4: "Tatap Muka 4 tentang Job Order Costing, yaitu sistem perhitungan biaya berdasarkan pesanan pelanggan secara spesifik.",
    tm5: "Tatap Muka 5 membahas Process Costing dengan metode rata-rata tertimbang, digunakan untuk produksi massal berkelanjutan.",
    tm6: "Tatap Muka 6 membahas Process Costing dengan metode First In First Out atau FIFO, di mana penyelesaian unit awal dipisahkan dari unit baru.",
    tm7: "Tatap Muka 7 tentang Biaya Kualitas. Membahas biaya pencegahan, penilaian, kegagalan internal, kegagalan eksternal, serta perbedaan cacat normal dan cacat abnormal.",
    interactive: "Ini adalah modul praktik interaktif untuk menyusun Laporan Biaya Produksi. Anda dapat berlatih mengisi angka untuk metode Average dan FIFO di berbagai departemen. Jika jawaban Anda salah, tanda bintang merah akan muncul.",
    tips: "Berikut adalah tips dan trik untuk ujian tengah semester. Hati-hati dengan jebakan soal seperti gas LPG dan jurnal barang jadi. Selalu ingat cheat sheet rumus cepat.",
    quiz: "Ini adalah bagian kuis latihan. Uji pemahaman Anda dengan soal-soal pilihan ganda yang mirip dengan ujian asli. Pilih jawaban yang menurut Anda paling tepat."
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    window.addEventListener('hashchange', handleRouteChange);
    
    // Initial route
    if (!window.location.hash) {
        window.location.hash = '#home';
    } else {
        handleRouteChange();
    }
});

function initNavigation() {
    const navContainer = document.getElementById('sidebar-nav');
    navContainer.innerHTML = navItems.map(item => `
        <a href="#${item.id}" class="nav-item" data-id="${item.id}">
            <div class="nav-icon">${item.icon}</div>
            ${item.label}
        </a>
    `).join('');
}

function handleRouteChange() {
    const hash = window.location.hash.substring(1) || 'home';
    
    // Update active state in sidebar
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.toggle('active', el.dataset.id === hash);
    });

    // Render content
    const viewContainer = document.getElementById('view-container');
    
    // Stop any playing audio when changing routes
    window.speechSynthesis.cancel();
    
    // Smooth transition
    viewContainer.style.opacity = 0;
    setTimeout(() => {
        if (window.AKBI_DATA[hash]) {
            viewContainer.innerHTML = window.AKBI_DATA[hash];
            
            // Inject Audio Button
            if (audioOverviews[hash]) {
                const header = viewContainer.querySelector('.page-header');
                if (header) {
                    const audioBtn = document.createElement('button');
                    audioBtn.className = 'audio-btn';
                    audioBtn.innerHTML = '🔊 Dengarkan Ringkasan';
                    audioBtn.onclick = () => playAudio(hash, audioBtn);
                    header.appendChild(audioBtn);
                }
            }
        } else {
            viewContainer.innerHTML = `
                <div class="page-header">
                    <h1 class="page-title">Content Not Found</h1>
                    <p class="page-desc">The requested section is still under construction or does not exist.</p>
                </div>
            `;
        }
        viewContainer.style.opacity = 1;
        window.scrollTo(0, 0);
    }, 200);
}

// Interactivity Handlers (Global because content is injected dynamically)
window.toggleAcc = function(header) {
    const body = header.nextElementSibling;
    const isOpen = body.classList.contains('open');
    
    // Close all in same container
    const parent = header.closest('.card') || document.body;
    parent.querySelectorAll('.acc-body.open').forEach(b => {
        b.classList.remove('open');
        b.previousElementSibling.classList.remove('open');
    });
    
    if(!isOpen) {
        body.classList.add('open');
        header.classList.add('open');
    }
};

window.switchTab = function(btn, panelId) {
    const pillsContainer = btn.closest('.tab-pills');
    if (!pillsContainer) return;
    
    // Remove active from all pills
    pillsContainer.querySelectorAll('.tab-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    
    // Find all tab panels in same scope
    const scope = btn.closest('.card') || document.getElementById('view-container');
    scope.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    
    const target = document.getElementById(panelId);
    if(target) target.classList.add('active');
};

let correctCount = 0;
let answeredCount = 0;

window.answerQuiz = function(btn, result) {
    const question = btn.closest('.quiz-question');
    if(question.dataset.answered === 'true') return;
    
    question.dataset.answered = 'true';
    answeredCount++;
    
    // Disable all options
    question.querySelectorAll('.quiz-opt').forEach(opt => {
        opt.style.pointerEvents = 'none';
        opt.style.opacity = '0.6';
    });
    
    btn.classList.add(result);
    btn.style.opacity = '1';
    
    if(result === 'correct') {
        correctCount++;
    } else {
        // Find the correct one and highlight
        const correctBtn = Array.from(question.querySelectorAll('.quiz-opt')).find(b => b.onclick.toString().includes('correct'));
        if (correctBtn) {
            correctBtn.classList.add('correct');
            correctBtn.style.opacity = '1';
        }
    }
    
    // Show explanation
    const exp = question.querySelector('.quiz-explanation');
    if (exp) exp.classList.add('show');
    
    // Update score if scoreboard exists
    const scoreEl = document.getElementById('score');
    const totalEl = document.getElementById('total');
    if (scoreEl && totalEl) {
        scoreEl.textContent = correctCount;
        totalEl.textContent = answeredCount;
    }
};

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('themeToggleBtn').textContent = '🌙';
    }
}

window.toggleTheme = function() {
    const isLight = document.body.classList.toggle('light-theme');
    const btn = document.getElementById('themeToggleBtn');
    if (isLight) {
        localStorage.setItem('theme', 'light');
        btn.textContent = '🌙';
    } else {
        localStorage.setItem('theme', 'dark');
        btn.textContent = '☀️';
    }
};

// Audio Overview Logic
window.playAudio = function(hashKey, btn) {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        btn.classList.remove('playing');
        btn.innerHTML = '🔊 Dengarkan Ringkasan';
        return;
    }

    const text = audioOverviews[hashKey];
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95; // Slightly slower for better comprehension
    
    utterance.onstart = () => {
        btn.classList.add('playing');
        btn.innerHTML = '⏸️ Hentikan Audio';
    };
    
    utterance.onend = () => {
        btn.classList.remove('playing');
        btn.innerHTML = '🔊 Dengarkan Ringkasan';
    };
    
    utterance.onerror = () => {
        btn.classList.remove('playing');
        btn.innerHTML = '🔊 Dengarkan Ringkasan';
        alert('Gagal memutar audio. Pastikan browser Anda mendukung Text-to-Speech bahasa Indonesia.');
    };

    window.speechSynthesis.speak(utterance);
};

// Cost Report Validation Logic
window.validateReportInput = function(input) {
    const expected = parseFloat(input.getAttribute('data-ans'));
    const actual = parseFloat(input.value);
    
    // Clear previous states
    input.classList.remove('error', 'success');
    const icon = input.nextElementSibling;
    
    // If empty, do nothing or show error
    if (input.value.trim() === '') {
        if(icon) icon.style.opacity = '0';
        return;
    }
    
    if (isNaN(actual)) {
        input.classList.add('error');
        if(icon) {
            icon.textContent = '*';
            icon.style.opacity = '1';
            icon.style.color = 'var(--danger)';
        }
        return;
    }
    
    // Check match with small tolerance for float precision (e.g. 69.90)
    if (Math.abs(expected - actual) < 0.02) {
        input.classList.add('success');
        if(icon) {
            icon.textContent = '✓';
            icon.style.opacity = '1';
            icon.style.color = 'var(--success)';
        }
    } else {
        input.classList.add('error');
        if(icon) {
            icon.textContent = '*';
            icon.style.opacity = '1';
            icon.style.color = 'var(--danger)';
        }
    }
};

window.resetPractice = function(btn) {
    const panel = btn.closest('.tab-panel');
    if (!panel) return;
    
    panel.querySelectorAll('.cpr-input').forEach(input => {
        input.value = '';
        input.classList.remove('error', 'success');
        const icon = input.nextElementSibling;
        if(icon) {
            icon.textContent = '*';
            icon.style.opacity = '0';
            icon.style.color = '';
        }
    });
};
