const fs = require('fs');

const data = fs.readFileSync('c:/cobamateri/js/data/interactive.js', 'utf8');

// 1. Add buttons to tab-pills
const tabPillsTarget = `        <button class="tab-pill" onclick="switchTab(this,'p-fifo-1')">FIFO - Dept 1</button>`;
const tabPillsReplacement = `        <button class="tab-pill" onclick="switchTab(this,'p-fifo-1')">FIFO - Dept 1</button>
        <button class="tab-pill" style="background-color: var(--tm4); color: white;" onclick="switchTab(this,'p-adv-avg')">Advanced - Average</button>
        <button class="tab-pill" style="background-color: var(--tm4); color: white;" onclick="switchTab(this,'p-adv-fifo')">Advanced - FIFO</button>`;

let newData = data.replace(tabPillsTarget, tabPillsReplacement);

// 2. Add tab panels at the end (before the last </div>)
const tabPanelsTarget = `        </div>\n    </div>\n</div>\n\`;`;
const tabPanelsReplacement = `        </div>
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
\`;`;

newData = newData.replace(tabPanelsTarget, tabPanelsReplacement);
fs.writeFileSync('c:/cobamateri/js/data/interactive.js', newData);
