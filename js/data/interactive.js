window.AKBI_DATA.interactive = `
<div class="page-header">
    <div class="page-badge" style="background: rgba(200,66,245,0.15); color: var(--tm5);">📝 PRAKTIK LAPORAN</div>
    <h1 class="page-title">Cost Report Builder</h1>
    <p class="page-desc">Latih kemampuan Anda menyusun Cost of Production Report. Masukkan angka yang tepat pada kolom yang tersedia. Tanda bintang merah (*) akan muncul jika jawaban salah.</p>
</div>

<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
        <div class="tab-pills">
            <button class="tab-pill active" onclick="switchTab(this,'p-avg-1')">Average - Dept 1</button>
            <button class="tab-pill" onclick="switchTab(this,'p-avg-2')">Average - Dept 2</button>
            <button class="tab-pill" onclick="switchTab(this,'p-fifo-1')">FIFO - Dept 1</button>
            <button class="tab-pill" style="background-color: var(--tm4); color: white;" onclick="switchTab(this,'p-adv-avg')">Advanced - Average</button>
            <button class="tab-pill" style="background-color: var(--tm4); color: white;" onclick="switchTab(this,'p-adv-fifo')">Advanced - FIFO</button>
        </div>
        <button class="nav-btn" onclick="resetPractice(this)" style="background: rgba(255,0,0,0.1); color: var(--danger); border: 1px solid var(--danger); border-radius: 20px; font-weight: 500; font-size: 14px; display: flex; align-items: center; gap: 6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            Reset Tab
        </button>
    </div>

    <!-- TAB: AVERAGE DEPT 1 -->
    <div class="tab-panel active" id="p-avg-1">
        <div class="worked-example">
            <div class="we-label">DATA SOAL: PT. ALPHA (Metode Average) — Dept. Produksi</div>
            <div class="we-problem">
                <strong>Unit Data:</strong> Beg. WIP = 200 unit; Started = 600 unit; Transfer Out = 650 unit; End. WIP = 150 unit (90% Bahan Baku, 60% Tenaga Kerja & FOH).<br>
                <strong>Biaya Beg. WIP:</strong> Bahan Baku = $5.365; Tenaga Kerja = $530; FOH = $795.<br>
                <strong>Biaya Ditambahkan:</strong> Bahan Baku = $26.035; Tenaga Kerja = $8.350; FOH = $12.525.
            </div>
            <p style="font-size:12px; margin-top:8px; color:var(--text-secondary);">Petunjuk: Hitung EU, Cost/EU, dan alokasi biaya. Masukkan angka tanpa pemisah ribuan (misal: 45500).</p>
        </div>

        <div class="tbl-wrap" style="margin-top:16px;">
            <table class="cpr-table">
                <thead><tr><th>Cost Charged to Department</th><th class="eq-col">Equivalent Units (EU)</th><th class="uc-col">Cost / EU</th></tr></thead>
                <tbody>
                    <tr><td class="indent">Bahan Baku (Materials)</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="785"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="40"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">Tenaga Kerja (Labor)</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="740"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="12"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">Overhead Pabrik (FOH)</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="740"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="18"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="subtotal"><strong>Total Cost / EU</strong></td>
                        <td></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="70"><span class="validation-icon">*</span></div></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="tbl-wrap" style="margin-top:16px;">
            <table class="cpr-table">
                <thead><tr><th>Cost Accounted For</th><th>Total Amount</th></tr></thead>
                <tbody>
                    <tr><td><strong>Transfer Out (650 unit)</strong></td>
                        <td>$<div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="45500"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="section-head" colspan="2">Ending WIP Allocation</td></tr>
                    <tr><td class="indent">Bahan Baku (Materials)</td>
                        <td>$<div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="5400"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">Tenaga Kerja (Labor)</td>
                        <td>$<div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1080"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">Overhead Pabrik (FOH)</td>
                        <td>$<div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1620"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="subtotal"><strong>Total Ending WIP</strong></td>
                        <td>$<div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="8100"><span class="validation-icon">*</span></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- TAB: AVERAGE DEPT 2 -->
    <div class="tab-panel" id="p-avg-2">
        <div class="worked-example">
            <div class="we-label">DATA SOAL: PT. ALPHA (Metode Average) — Dept. Perakitan</div>
            <div class="we-problem">
                <strong>Unit Data:</strong> Beg. WIP = 250 unit; Transferred In = 650 unit; Transfer Out (FG) = 800 unit; End. WIP = 100 unit (40% Bahan Baku, 20% TK & FOH).<br>
                <strong>Biaya Beg. WIP:</strong> Transferred In (TI) = $17.410; Bahan Baku = $3.451; Tenaga Kerja = $3.611; FOH = $3.611.<br>
                <strong>Biaya Ditambahkan:</strong> Transferred In (TI) = $45.500; Bahan Baku = $14.273; Tenaga Kerja = $20.989; FOH = $20.989.
            </div>
            <p style="font-size:12px; margin-top:8px; color:var(--text-secondary);">Note: Cost/EU dibulatkan ke 2 desimal (gunakan titik untuk koma, misal: 21.10) kecuali jika bulat sempurna.</p>
        </div>

        <div class="tbl-wrap" style="margin-top:16px;">
            <table class="cpr-table">
                <thead><tr><th>Cost Charged to Department</th><th class="eq-col">Equivalent Units (EU)</th><th class="uc-col">Cost / EU</th></tr></thead>
                <tbody>
                    <tr><td class="indent" style="color:var(--tm5); font-weight:600;">Transferred-In (TI)</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="900"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" step="0.01" class="cpr-input" onblur="validateReportInput(this)" data-ans="69.90"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">Bahan Baku (Materials)</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="840"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" step="0.01" class="cpr-input" onblur="validateReportInput(this)" data-ans="21.10"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">Tenaga Kerja (Labor)</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="820"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" step="0.01" class="cpr-input" onblur="validateReportInput(this)" data-ans="30"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">Overhead Pabrik (FOH)</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="820"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" step="0.01" class="cpr-input" onblur="validateReportInput(this)" data-ans="30"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="subtotal"><strong>Total Cost / EU</strong></td>
                        <td></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="151"><span class="validation-icon">*</span></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="tbl-wrap" style="margin-top:16px;">
            <table class="cpr-table">
                <thead><tr><th>Cost Accounted For</th><th>Total Amount</th></tr></thead>
                <tbody>
                    <tr><td><strong>Transfer Out (800 unit)</strong></td>
                        <td>$<div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="120800"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="section-head" colspan="2">Ending WIP Allocation</td></tr>
                    <tr><td class="indent">Transferred-In (100 unit × 100%)</td>
                        <td>$<div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="6990"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">Bahan Baku (Materials)</td>
                        <td>$<div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="844"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="subtotal"><strong>Total Ending WIP</strong></td>
                        <td>$<div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="9034"><span class="validation-icon">*</span></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- TAB: FIFO DEPT 1 -->
    <div class="tab-panel" id="p-fifo-1">
        <div class="worked-example">
            <div class="we-label">DATA SOAL: PT. OMEGA (Metode FIFO) — Dept. Produksi</div>
            <div class="we-problem">
                <strong>Unit Data:</strong> Beg. WIP = 400 unit (100% BB, 50% Konv); Started = 2.000 unit; Transfer Out = 1.800 unit; End. WIP = 600 unit (100% BB, 50% Konv).<br>
                <strong>Biaya Beg. WIP:</strong> Bahan Baku = $4.000; Konversi (TKL+FOH) = $2.000.<br>
                <strong>Biaya Ditambahkan (Added Only):</strong> Bahan Baku = $20.000; Konversi = $19.000.
            </div>
            <p style="font-size:12px; margin-top:8px; color:var(--text-secondary);">Ingat: Cost/EU pada FIFO HANYA menggunakan biaya yang ditambahkan (Added Cost) di periode ini!</p>
        </div>

        <div class="tbl-wrap" style="margin-top:16px;">
            <table class="cpr-table">
                <thead><tr><th>Perhitungan EU dan Cost/EU (FIFO)</th><th class="eq-col">EU (3 Komponen)</th><th class="uc-col">Cost / EU (Added)</th></tr></thead>
                <tbody>
                    <tr><td class="indent">Bahan Baku (Materials)</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="2000"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="10"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">Biaya Konversi (Conversion)</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1900"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="10"><span class="validation-icon">*</span></div></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="tbl-wrap" style="margin-top:16px;">
            <table class="cpr-table">
                <thead><tr><th>Alokasi Transfer Out (FIFO)</th><th>Total Amount</th></tr></thead>
                <tbody>
                    <tr><td class="indent"><strong>Komponen 1: Menyelesaikan Beg. WIP</strong></td><td></td></tr>
                    <tr><td class="indent2">Biaya Beg. WIP Bawaan</td><td>$6.000</td></tr>
                    <tr><td class="indent2">Sisa penyelesaian Konversi (200 EU × $10)</td>
                        <td>$<div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="2000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent"><strong>Komponen 2: Started & Completed</strong></td><td></td></tr>
                    <tr><td class="indent2">Unit S&C (1.400 unit × $20)</td>
                        <td>$<div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="28000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="subtotal"><strong>Total Transfer Out</strong></td>
                        <td>$<div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="36000"><span class="validation-icon">*</span></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- TAB: ADVANCED AVERAGE -->
    <div class="tab-panel" id="p-adv-avg">
        <div class="worked-example">
            <div class="we-label">LATIHAN ADVANCED: PT. Lapis Bento (Metode Average) — Dept. 1</div>
            <div class="we-problem" style="text-align: center;">
                <img src="assets/image_418275379_0.jpg" alt="Soal PT Lapis Bento" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border);">
            </div>
            <p style="font-size:12px; margin-top:8px; color:var(--text-secondary);">Isi tabel di bawah ini sesuai dengan format lengkap laporan biaya produksi PT Lapis Bento.</p>
        </div>

        <!-- QUANTITY DATA -->
        <div class="tbl-wrap" style="margin-top:16px;">
            <table class="cpr-table">
                <thead><tr><th colspan="2">1. QUANTITY DATA</th><th style="width: 80px; text-align:center;">M</th><th style="width: 120px; text-align:center;">Konversi</th><th style="width: 100px; text-align:center;">Total</th></tr></thead>
                <tbody>
                    <tr><td colspan="2">Beginning WIP</td><td></td><td></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="150"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td colspan="2">Transfer in (quantity added this month)</td><td></td><td></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="3000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="subtotal" colspan="2"><strong>Number of units processed</strong></td><td></td><td></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="3150"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td colspan="2">Transfer out (qty transferred to 2nd department)</td><td></td><td></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="2800"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td colspan="2">Ending WIP</td>
                        <td style="text-align:center;">100%</td><td style="text-align:center;">60%</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="350"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="subtotal" colspan="2"><strong>Number of units produced</strong></td><td></td><td></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="3150"><span class="validation-icon">*</span></div></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- COST ASSIGNED -->
        <div class="tbl-wrap" style="margin-top:16px;">
            <table class="cpr-table">
                <thead><tr><th>2. COST ASSIGNED</th><th>Total cost</th><th>EU</th><th>Cost per unit</th></tr></thead>
                <tbody>
                    <tr><td class="section-head" colspan="4">From Beginning WIP</td></tr>
                    <tr><td class="indent">Material</td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1200000"><span class="validation-icon">*</span></div></td>
                        <td></td><td></td>
                    </tr>
                    <tr><td class="indent">Labor</td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="870000"><span class="validation-icon">*</span></div></td>
                        <td></td><td></td>
                    </tr>
                    <tr><td class="indent">FOH</td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="330000"><span class="validation-icon">*</span></div></td>
                        <td></td><td></td>
                    </tr>
                    <tr><td class="subtotal"><strong>Total beginning WIP</strong></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="2400000"><span class="validation-icon">*</span></div></td>
                        <td></td><td></td>
                    </tr>

                    <tr><td class="section-head" colspan="4">Added this month:</td></tr>
                    <tr><td class="indent">Material</td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="11500000"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="3150"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="4032"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">Labor</td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="9000000"><span class="validation-icon">*</span></div></td>
                        <td rowspan="2"><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="3010"><span class="validation-icon">*</span></div></td>
                        <td rowspan="2"><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="4252"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">FOH</td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="2600000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="subtotal"><strong>Total cost added this month</strong></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="23100000"><span class="validation-icon">*</span></div></td>
                        <td></td><td></td>
                    </tr>
                    <tr style="background:var(--tm5); color:white;"><td class="subtotal"><strong>TOTAL PRODUCTION COST</strong></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="25500000"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="6160"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="8284"><span class="validation-icon">*</span></div></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- COST CALCULATION -->
        <div class="tbl-wrap" style="margin-top:16px;">
            <table class="cpr-table">
                <thead><tr><th>3. COST CALCULATION</th><th style="width: 80px; text-align:center;">Completion %</th><th style="width: 100px; text-align:center;">EU</th><th style="width: 120px; text-align:center;">Cost per unit</th><th>TOTAL</th></tr></thead>
                <tbody>
                    <tr><td colspan="5"><strong>Transferred to next Dept:</strong></td></tr>
                    <tr><td class="indent">Unit: <div class="cpr-input-wrapper" style="display:inline-block; width:80px;"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="2800"><span class="validation-icon">*</span></div></td>
                        <td style="text-align:center;">100%</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="2800"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="8284"><span class="validation-icon">*</span></div></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="23195200"><span class="validation-icon">*</span></div></td>
                    </tr>
                    
                    <tr><td class="section-head" colspan="5">Ending WIP:</td></tr>
                    <tr><td class="indent">Material (Unit: <div class="cpr-input-wrapper" style="display:inline-block; width:60px;"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="350"><span class="validation-icon">*</span></div>)</td>
                        <td style="text-align:center;">100%</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="350"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="4032"><span class="validation-icon">*</span></div></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1411200"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">Labor (Unit: <div class="cpr-input-wrapper" style="display:inline-block; width:60px;"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="350"><span class="validation-icon">*</span></div>)</td>
                        <td rowspan="2" style="text-align:center; vertical-align:middle;">60%</td>
                        <td rowspan="2" style="vertical-align:middle;"><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="210"><span class="validation-icon">*</span></div></td>
                        <td rowspan="2" style="vertical-align:middle;"><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="4252"><span class="validation-icon">*</span></div></td>
                        <td rowspan="2" style="vertical-align:middle;">Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="892920"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">FOH (Unit: 350)</td></tr>
                    <tr><td class="subtotal" colspan="4"><strong>Total ending WIP cost</strong></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="2304120"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr style="background:var(--tm5); color:white;"><td class="subtotal" colspan="4"><strong>TOTAL PRODUCTION COST</strong></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="25499320"><span class="validation-icon">*</span></div></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- PERHITUNGAN UNIT EKUIVALEN (REVISI) -->
        <div class="tbl-wrap" style="margin-top:16px;">
            <table class="cpr-table">
                <thead><tr><th>Perhitungan Unit Ekuivalen</th><th>Unit</th><th>BB (100%)</th><th>Konversi (60%)</th></tr></thead>
                <tbody>
                    <tr><td>Unit ekuivalen ditransfer keluar</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="2800"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="2800"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="2800"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td>Unit ekuivalen di persediaan akhir</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="350"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="350"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="210"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr style="background:rgba(0,0,0,0.05);"><td class="subtotal"><strong>Total Unit Ekuivalen</strong></td>
                        <td></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="3150"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="3010"><span class="validation-icon">*</span></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <!-- PERHITUNGAN BIAYA PER UNIT EKUIVALEN -->
        <div class="tbl-wrap" style="margin-top:16px;">
            <table class="cpr-table">
                <thead><tr><th>Perhitungan Biaya per Unit Ekuivalen</th><th>M</th><th>Konversi (L+OH)</th></tr></thead>
                <tbody>
                    <tr><td>Biaya persediaan di awal</td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1200000"><span class="validation-icon">*</span></div></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1200000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td>Biaya yang ditambahkan selama periode berjalan</td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="11500000"><span class="validation-icon">*</span></div></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="11600000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="subtotal"><strong>Total biaya dipertanggungjawabkan</strong></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="12700000"><span class="validation-icon">*</span></div></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="12800000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td>Dibagi unit ekuivalen</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="3150"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="3010"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr style="background:rgba(0,0,0,0.05);"><td class="subtotal"><strong>Biaya per Unit Ekuivalen</strong></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="4032"><span class="validation-icon">*</span></div></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="4252"><span class="validation-icon">*</span></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- TAB: ADVANCED FIFO -->
    <div class="tab-panel" id="p-adv-fifo">
        <div class="worked-example">
            <div class="we-label">LATIHAN ADVANCED: PT. Long Bite (Metode FIFO) — Dept. 1</div>
            <div class="we-problem" style="text-align: center;">
                <img src="assets/image_1513708878_0.jpg" alt="Soal PT Long Bite" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border);">
            </div>
            <p style="font-size:12px; margin-top:8px; color:var(--text-secondary);">Isi tabel di bawah ini sesuai dengan format lengkap laporan biaya produksi PT Long Bite.</p>
        </div>

        <!-- QUANTITY DATA -->
        <div class="tbl-wrap" style="margin-top:16px;">
            <table class="cpr-table">
                <thead><tr><th colspan="2">1. QUANTITY DATA</th><th style="width: 80px; text-align:center;">M</th><th style="width: 80px; text-align:center;">L</th><th style="width: 80px; text-align:center;">FOH</th><th style="width: 100px; text-align:center;">Total</th></tr></thead>
                <tbody>
                    <tr><td colspan="2">Beginning WIP</td><td></td><td></td><td></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1200"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td colspan="2">Transfer in (quantity from previous department)</td><td></td><td></td><td></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="2000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="subtotal" colspan="2"><strong>Number of units processed</strong></td><td></td><td></td><td></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="3200"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td colspan="2">Transfer out</td><td></td><td></td><td></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1500"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td colspan="2">Ending WIP</td>
                        <td style="text-align:center;">100%</td><td style="text-align:center;">100%</td><td style="text-align:center;">50%</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td colspan="2">Spoiled WIP</td>
                        <td style="text-align:center;">100%</td><td style="text-align:center;">100%</td><td style="text-align:center;">100%</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="700"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="subtotal" colspan="2"><strong>Number of units produced</strong></td><td></td><td></td><td></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="3200"><span class="validation-icon">*</span></div></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- COST ASSIGNED -->
        <div class="tbl-wrap" style="margin-top:16px;">
            <table class="cpr-table">
                <thead><tr><th>2. COST ASSIGNED</th><th>Total cost</th><th>EU</th><th>Cost per unit</th></tr></thead>
                <tbody>
                    <tr><td class="section-head" colspan="4">From Beginning WIP</td></tr>
                    <tr><td class="indent">Material</td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="4000"><span class="validation-icon">*</span></div></td>
                        <td></td><td></td>
                    </tr>
                    <tr><td class="indent">Labor</td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1000"><span class="validation-icon">*</span></div></td>
                        <td></td><td></td>
                    </tr>
                    <tr><td class="indent">FOH</td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1000"><span class="validation-icon">*</span></div></td>
                        <td></td><td></td>
                    </tr>
                    <tr><td class="subtotal"><strong>Total beginning WIP</strong></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="6000"><span class="validation-icon">*</span></div></td>
                        <td></td><td></td>
                    </tr>

                    <tr><td class="section-head" colspan="4">Added this month:</td></tr>
                    <tr><td class="indent">Material</td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="48060000"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1780"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="27000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">Labor</td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="19360000"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1760"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="11000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">FOH</td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="17600000"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1760"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="10000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="subtotal"><strong>Total cost added this month</strong></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="85020000"><span class="validation-icon">*</span></div></td>
                        <td></td><td></td>
                    </tr>
                    <tr style="background:var(--tm5); color:white;"><td class="subtotal"><strong>TOTAL PRODUCTION COST</strong></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="85026000"><span class="validation-icon">*</span></div></td>
                        <td></td><td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- COST CALCULATION -->
        <div class="tbl-wrap" style="margin-top:16px;">
            <table class="cpr-table">
                <thead><tr><th>3. COST CALCULATION</th><th style="width: 100px; text-align:center;">Current %</th><th style="width: 100px; text-align:center;">EU</th><th style="width: 120px; text-align:center;">Cost per unit</th><th>TOTAL</th></tr></thead>
                <tbody>
                    <tr><td colspan="5"><strong>Transferred to next Dept:</strong></td></tr>
                    <tr><td class="section-head" colspan="5">From Beginning WIP</td></tr>
                    <tr><td class="indent" colspan="4">Biaya Beg. WIP Bawaan</td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="6000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">Material</td>
                        <td style="text-align:center;">0%</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="0"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="27000"><span class="validation-icon">*</span></div></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="0"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">Labor</td>
                        <td style="text-align:center;">40%</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="480"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="11000"><span class="validation-icon">*</span></div></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="5280000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">FOH</td>
                        <td style="text-align:center;">80%</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="960"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="10000"><span class="validation-icon">*</span></div></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="9600000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    
                    <tr><td class="section-head" colspan="5">From cost added this month (S&C)</td></tr>
                    <tr><td class="indent">Unit: <div class="cpr-input-wrapper" style="display:inline-block; width:80px;"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="300"><span class="validation-icon">*</span></div></td>
                        <td style="text-align:center;">100%</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="300"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="48000"><span class="validation-icon">*</span></div></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="14400000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="subtotal" colspan="4"><strong>Total production cost transferred</strong></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="29286000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    
                    <tr><td class="section-head" colspan="5">Ending WIP:</td></tr>
                    <tr><td class="indent">Material (Unit: 1000)</td>
                        <td style="text-align:center;">100%</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1000"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="27000"><span class="validation-icon">*</span></div></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="27000000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">Labor (Unit: 1000)</td>
                        <td style="text-align:center;">100%</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1000"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="11000"><span class="validation-icon">*</span></div></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="11000000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="indent">FOH (Unit: 1000)</td>
                        <td style="text-align:center;">50%</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="500"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="10000"><span class="validation-icon">*</span></div></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="5000000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td class="subtotal" colspan="4"><strong>Total ending WIP cost</strong></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="43000000"><span class="validation-icon">*</span></div></td>
                    </tr>

                    <tr><td class="section-head" colspan="5">Spoiled Goods:</td></tr>
                    <tr><td class="indent" colspan="4">Total Spoiled Cost</td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="12740000"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr style="background:var(--tm5); color:white;"><td class="subtotal" colspan="4"><strong>TOTAL PRODUCTION COST</strong></td>
                        <td>Rp <div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="85026000"><span class="validation-icon">*</span></div></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- PERHITUNGAN UNIT EKUIVALEN (REVISI) -->
        <div class="tbl-wrap" style="margin-top:16px;">
            <table class="cpr-table">
                <thead><tr><th>Perhitungan Unit Ekuivalen</th><th>M</th><th>L</th><th>FOH</th></tr></thead>
                <tbody>
                    <tr><td>Transfer Out</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1500"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1500"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1500"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td>Ending WIP (100%, 100%, 50%)</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1000"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1000"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="500"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td>Spoiled WIP (100%, 100%, 100%)</td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="700"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="700"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="700"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr><td>- Beginning WIP (100%, 60%, 20%)</td>
                        <td>-<div class="cpr-input-wrapper" style="display:inline-block; width:80px;"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1200"><span class="validation-icon">*</span></div></td>
                        <td>-<div class="cpr-input-wrapper" style="display:inline-block; width:80px;"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="720"><span class="validation-icon">*</span></div></td>
                        <td>-<div class="cpr-input-wrapper" style="display:inline-block; width:80px;"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="240"><span class="validation-icon">*</span></div></td>
                    </tr>
                    <tr style="background:rgba(0,0,0,0.05);"><td class="subtotal"><strong>Total Unit Ekuivalen</strong></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1780"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1760"><span class="validation-icon">*</span></div></td>
                        <td><div class="cpr-input-wrapper"><input type="number" class="cpr-input" onblur="validateReportInput(this)" data-ans="1960"><span class="validation-icon">*</span></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
`;
