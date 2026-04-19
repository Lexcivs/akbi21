window.AKBI_DATA.tm6 = `
<div class="page-header">
    <div class="page-badge" style="background: rgba(245,131,66,0.15); color: var(--tm6);">TM 06</div>
    <h1 class="page-title">Process Costing <span class="term-en">FIFO Method</span></h1>
    <p class="page-desc">First In First Out · Equivalent Units (3 Komponen) · Alokasi Biaya</p>
</div>

<div class="card color-tm6">
    <div class="card-title">FIFO vs Average <span class="tag">PERBANDINGAN</span></div>
    
    <div class="table-container">
        <table>
            <tr>
                <th>Aspek</th>
                <th><span style="color:var(--tm5); font-weight:700;">AVERAGE METHOD</span></th>
                <th><span style="color:var(--tm6); font-weight:700;">FIFO METHOD</span></th>
            </tr>
            <tr>
                <td><strong>Perlakuan Biaya Awal (BWIP Cost)</strong></td>
                <td>DIGABUNGKAN dengan biaya periode berjalan</td>
                <td><span class="hl-red">DIPISAHKAN</span> dari biaya periode berjalan</td>
            </tr>
            <tr>
                <td><strong>Asumsi Penyelesaian</strong></td>
                <td>Semua unit dicampur rata</td>
                <td>Unit dari BWIP <span class="hl-red">diselesaikan lebih dulu</span></td>
            </tr>
            <tr>
                <td><strong>Perhitungan EU</strong></td>
                <td>Transfer Out + (Ending WIP × %)</td>
                <td>3 Komponen (Penyelesaian BWIP + Started & Completed + Ending WIP)</td>
            </tr>
            <tr>
                <td><strong>Pembilang Cost/EU</strong></td>
                <td>Biaya Awal + Biaya Tambahan</td>
                <td><span class="hl">Biaya Tambahan SAJA (Added Cost ONLY)</span></td>
            </tr>
        </table>
    </div>
</div>

<div class="card color-tm6">
    <div class="card-title">3 Komponen Unit Ekuivalen (EU) FIFO <span class="tag">RUMUS KUNCI</span></div>
    
    <div class="formula-box">
        <div class="formula-label">RUMUS EU FIFO</div>
        <div class="formula-main" style="font-size:14px;">
            EU = [Beg.WIP × (1 − % Penyelesaian)] <br>
            <span style="margin-left:32px;">+ [Transfer Out − Beg.WIP]</span> <br>
            <span style="margin-left:32px;">+ [End.WIP × % Penyelesaian]</span>
        </div>
    </div>

    <div class="grid-3" style="margin-top:16px;">
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:8px; border-left:3px solid var(--tm6);">
            <h4 style="color:var(--tm6); margin-bottom:8px;">Komponen 1</h4>
            <p style="font-size:13px; color:var(--text-primary); font-weight:600;">Menyelesaikan Beg. WIP</p>
            <p style="font-size:12px; color:var(--text-secondary); margin-top:4px;">Sisa usaha yang diperlukan di periode ini.<br><em>Beg.WIP × (1 − % sudah selesai)</em></p>
        </div>
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:8px; border-left:3px solid var(--tm6);">
            <h4 style="color:var(--tm6); margin-bottom:8px;">Komponen 2</h4>
            <p style="font-size:13px; color:var(--text-primary); font-weight:600;">Started & Completed (S&C)</p>
            <p style="font-size:12px; color:var(--text-secondary); margin-top:4px;">Unit yang dimulai & selesai 100% di periode ini.<br><em>Transfer Out − Beg.WIP</em></p>
        </div>
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:8px; border-left:3px solid var(--tm6);">
            <h4 style="color:var(--tm6); margin-bottom:8px;">Komponen 3</h4>
            <p style="font-size:13px; color:var(--text-primary); font-weight:600;">Ending WIP</p>
            <p style="font-size:12px; color:var(--text-secondary); margin-top:4px;">Usaha pada unit yang belum selesai.<br><em>End.WIP × % penyelesaian</em></p>
        </div>
    </div>
</div>

<div class="card color-tm6">
    <div class="card-title">Alokasi Biaya Transfer Out (FIFO) <span class="tag">ALOKASI</span></div>
    <p>Dalam metode FIFO, biaya unit yang ditransfer (Transfer Out) dihitung dengan menjumlahkan dua bagian:</p>
    
    <ol style="margin-left:20px; font-size:14px; line-height:1.8; margin-top:12px;">
        <li><strong>Biaya Unit dari Persediaan Awal (Completing BWIP):</strong><br>
            = Biaya bawaan dari periode lalu + Biaya penyelesaian di periode ini.<br>
            <span style="color:var(--text-secondary); font-size:12px;"><em>Biaya penyelesaian = Komponen 1 (EU) × Cost/EU Periode Ini.</em></span>
        </li>
        <li style="margin-top:8px;"><strong>Biaya Unit Started & Completed:</strong><br>
            = Unit S&C × Total Cost/EU Periode Ini.
        </li>
    </ol>
    
    <div class="callout warning" style="margin-top:16px;">
        <div class="callout-title">⚠️ Hati-hati dengan Transferred-In di FIFO!</div>
        Untuk perhitungan EU dari elemen Transferred-In (TI) di departemen lanjutan, unit Beg.WIP sudah 100% selesai dari departemen sebelumnya. Jadi sisa kerjanya untuk TI adalah 0%. <br>
        <strong>EU (TI) Komponen 1 = Beg.WIP × (1 − 100%) = 0.</strong>
    </div>
</div>
`;
