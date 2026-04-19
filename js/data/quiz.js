window.AKBI_DATA.quiz = `
<div class="page-header">
    <div class="page-badge" style="background: rgba(66,245,160,0.15); color: var(--tm4);">🧪 KUIS</div>
    <h1 class="page-title">Latihan Soal UTS</h1>
    <p class="page-desc">Uji pemahaman Anda dengan soal format UTS asli. Pilih jawaban untuk melihat penjelasan.</p>
</div>

<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; padding:16px 24px; background:var(--bg-tertiary); border-radius:8px; border:1px solid var(--border-light);">
    <div style="font-family:var(--font-heading); font-size:18px; font-weight:700;">Scoreboard</div>
    <div style="font-family:var(--font-mono); font-size:16px;">Benar: <span id="score" style="color:var(--success); font-weight:700;">0</span> / <span id="total">0</span></div>
</div>

<style>
.quiz-question { background:var(--bg-secondary); border:1px solid var(--border-light); border-radius:12px; padding:24px; margin-bottom:24px; }
.quiz-q-text { font-size:16px; font-weight:600; margin-bottom:20px; line-height:1.6; }
.quiz-opt { display:flex; align-items:flex-start; gap:12px; padding:16px; border:1px solid var(--border-light); border-radius:8px; cursor:pointer; transition:all 0.2s; font-size:14px; text-align:left; background:transparent; color:var(--text-primary); width:100%; margin-bottom:12px; font-family:var(--font-body); }
.quiz-opt:hover { background:var(--bg-tertiary); }
.quiz-opt.correct { border-color:var(--success); background:rgba(66,245,160,0.1); color:var(--success); }
.quiz-opt.wrong { border-color:var(--danger); background:rgba(245,66,100,0.1); color:var(--danger); }
.opt-letter { font-family:var(--font-mono); font-size:12px; font-weight:700; width:24px; height:24px; display:flex; align-items:center; justify-content:center; background:var(--bg-tertiary); border-radius:4px; flex-shrink:0; }
.quiz-explanation { margin-top:20px; padding:16px; background:rgba(66,184,245,0.05); border:1px solid rgba(66,184,245,0.2); border-radius:8px; display:none; }
.quiz-explanation.show { display:block; animation:fadeIn 0.3s ease; }
</style>

<!-- Soal 1 -->
<div class="quiz-question" data-answered="false">
    <div class="quiz-q-text">1. Klasifikasi biaya berdasarkan <em>seberapa mudah suatu biaya ditelusuri ke obyeknya</em> adalah...</div>
    <div>
        <button class="quiz-opt" onclick="answerQuiz(this,'wrong')"><span class="opt-letter">A</span> Biaya tetap dan biaya variabel</button>
        <button class="quiz-opt" onclick="answerQuiz(this,'correct')"><span class="opt-letter">B</span> Biaya langsung dan biaya tidak langsung</button>
        <button class="quiz-opt" onclick="answerQuiz(this,'wrong')"><span class="opt-letter">C</span> Biaya produk dan biaya periodik</button>
        <button class="quiz-opt" onclick="answerQuiz(this,'wrong')"><span class="opt-letter">D</span> Biaya relevan dan irrelevan</button>
    </div>
    <div class="quiz-explanation">
        <div class="callout-title" style="color:var(--tm2);">💡 PENJELASAN</div>
        Kemudahan ditelusuri (Traceability) menentukan apakah biaya itu Langsung (Direct) atau Tidak Langsung (Indirect).
    </div>
</div>

<!-- Soal 2 -->
<div class="quiz-question" data-answered="false">
    <div class="quiz-q-text">2. Manakah dari berikut ini yang merupakan karakteristik dari <em>Process Costing</em>?</div>
    <div>
        <button class="quiz-opt" onclick="answerQuiz(this,'wrong')"><span class="opt-letter">A</span> Biaya diakumulasikan per pesanan (job)</button>
        <button class="quiz-opt" onclick="answerQuiz(this,'correct')"><span class="opt-letter">B</span> Produk yang dihasilkan bersifat homogen (seragam)</button>
        <button class="quiz-opt" onclick="answerQuiz(this,'wrong')"><span class="opt-letter">C</span> Cocok untuk kantor pengacara dan rumah sakit</button>
        <button class="quiz-opt" onclick="answerQuiz(this,'wrong')"><span class="opt-letter">D</span> Dokumen utamanya adalah Job Order Cost Sheet</button>
    </div>
    <div class="quiz-explanation">
        <div class="callout-title" style="color:var(--tm2);">💡 PENJELASAN</div>
        Process Costing digunakan untuk produksi massal produk homogen secara berkelanjutan (misal: pabrik mie, semen).
    </div>
</div>

<!-- Soal 3 -->
<div class="quiz-question" data-answered="false">
    <div class="quiz-q-text">3. Entri jurnal untuk mencatat transfer produk yang telah selesai diproduksi (siap dijual) adalah...</div>
    <div>
        <button class="quiz-opt" onclick="answerQuiz(this,'correct')"><span class="opt-letter">A</span> Dr: Persediaan Barang Jadi | Cr: Persediaan BDP</button>
        <button class="quiz-opt" onclick="answerQuiz(this,'wrong')"><span class="opt-letter">B</span> Dr: Persediaan BDP | Cr: Persediaan Bahan Baku</button>
        <button class="quiz-opt" onclick="answerQuiz(this,'wrong')"><span class="opt-letter">C</span> Dr: Harga Pokok Penjualan | Cr: Persediaan Barang Jadi</button>
        <button class="quiz-opt" onclick="answerQuiz(this,'wrong')"><span class="opt-letter">D</span> Dr: Kas | Cr: Penjualan</button>
    </div>
    <div class="quiz-explanation">
        <div class="callout-title" style="color:var(--tm2);">💡 PENJELASAN</div>
        Saat produk SELESAI diproduksi, pindah dari Barang Dalam Proses (WIP) ke Barang Jadi (FG). Belum ada COGS sampai produk benar-benar terjual!
    </div>
</div>
`;
