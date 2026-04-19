window.AKBI_DATA.tm2 = `
<div class="page-header">
    <div class="page-badge" style="background: rgba(66,184,245,0.15); color: var(--tm2);">TM 02</div>
    <h1 class="page-title">Perilaku Biaya <span class="term-id"></span> <span class="term-en">Cost Behavior</span></h1>
    <p class="page-desc">Fixed · Variable · Mixed · High-Low Method · Least Squares</p>
</div>

<div class="card color-tm2">
    <div class="card-title">3 Jenis Perilaku Biaya <span class="tag">KONSEP</span></div>
    
    <div class="table-container">
        <table>
            <tr>
                <th>Jenis Biaya</th>
                <th>Per Unit</th>
                <th>Total</th>
                <th>Contoh</th>
            </tr>
            <tr>
                <td><strong>Biaya Tetap</strong> <span class="term-en">Fixed Cost</span></td>
                <td><span class="hl-red">Berubah</span> (turun jika volume naik)</td>
                <td><span class="hl-green">Tetap</span></td>
                <td>Sewa pabrik, gaji manajer, depresiasi mesin</td>
            </tr>
            <tr>
                <td><strong>Biaya Variabel</strong> <span class="term-en">Variable Cost</span></td>
                <td><span class="hl-green">Tetap</span></td>
                <td><span class="hl-red">Berubah</span> (naik jika volume naik)</td>
                <td>Bahan baku langsung, upah buruh langsung</td>
            </tr>
            <tr>
                <td><strong>Biaya Campuran</strong> <span class="term-en">Mixed Cost / Semivariable</span></td>
                <td>Campuran</td>
                <td>Campuran</td>
                <td>Tagihan listrik pabrik (ada abonemen + pemakaian)</td>
            </tr>
        </table>
    </div>

    <div class="callout warning">
        <div class="callout-title">⚠️ Pernyataan Jebakan</div>
        Jangan tertipu! Biaya tetap secara total adalah TETAP, tetapi <strong>biaya tetap per unit</strong> akan BERUBAH (menurun jika produksi meningkat). Sebaliknya, <strong>biaya variabel per unit</strong> adalah TETAP, meskipun totalnya berubah.
    </div>
</div>

<div class="card color-tm2">
    <div class="card-title">Metode Titik Tertinggi-Terendah <span class="term-en">High-Low Method</span> <span class="tag">METODE</span></div>
    <p>Metode ini digunakan untuk memisahkan biaya campuran menjadi komponen tetap (Fixed Cost / FC) dan komponen variabel (Variable Cost / VC).</p>

    <div class="formula-box">
        <div class="formula-label">RUMUS HIGH-LOW</div>
        <div class="formula-main" style="margin-bottom:8px;">VC per unit (b) = (Biaya Tertinggi − Biaya Terendah) / (Unit Tertinggi − Unit Terendah)</div>
        <div class="formula-main" style="margin-bottom:8px;">Total FC (a) = Total Cost − (VC per unit × Unit)</div>
        <div class="formula-main">Persamaan Biaya: TC = a + bX</div>
        <div class="formula-note">X adalah volume atau tingkat aktivitas.</div>
    </div>

    <div style="background:var(--bg-tertiary); padding:20px; border-radius:8px; border-left: 4px solid var(--tm2); margin-top:16px;">
        <h4 style="margin-bottom:12px; color:var(--tm2);">CONTOH SOAL (Sering Keluar!)</h4>
        <p style="font-style:italic; margin-bottom:12px;">Januari: 1.600 unit, Total Cost Rp9.650. Februari: 1.900 unit, Total Cost Rp11.225. Tentukan persamaan biaya!</p>
        <ol style="margin-left:20px; font-family:var(--font-mono); font-size:14px; line-height:1.8;">
            <li>VC/unit = (11.225 − 9.650) / (1.900 − 1.600) = 1.575 / 300 = <strong>Rp5,25/unit</strong></li>
            <li>VC Total (pilih titik terendah) = 5,25 × 1.600 = Rp8.400</li>
            <li>FC = TC − VC = 9.650 − 8.400 = <strong>Rp1.250</strong></li>
            <li><strong>Hasil Persamaan: TC = 1.250 + 5,25X</strong></li>
        </ol>
    </div>
</div>

<div class="card color-tm2">
    <div class="card-title">Metode Regresi <span class="term-en">Least Squares Method</span> <span class="tag">REGRESI</span></div>
    
    <div class="callout info">
        <div class="callout-title">💡 Analisis Output Software</div>
        Dalam UTS, Anda biasanya diberikan output regresi dari Excel atau SPSS. Fokus pada dua angka ini untuk membuat persamaan <code>TC = a + bX</code>:
        <br><br>
        • <strong>Constant / Intercept:</strong> Ini adalah Total Fixed Cost (a)<br>
        • <strong>X Variable / X Coefficient:</strong> Ini adalah Variable Cost per unit (b)<br>
        <br>
        <em>Abaikan angka seperti R Square (0,90) atau Standard Error saat diminta menyusun persamaan biaya!</em>
    </div>
</div>
`;
