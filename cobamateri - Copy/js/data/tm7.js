window.AKBI_DATA.tm7 = `
<div class="page-header">
    <div class="page-badge" style="background: rgba(66,245,232,0.15); color: var(--tm7);">TM 07</div>
    <h1 class="page-title">Biaya Kualitas & Kerugian <span class="term-en">Cost of Quality</span></h1>
    <p class="page-desc">4 Kategori Biaya Kualitas · Spoiled Goods · Normal vs Abnormal</p>
</div>

<div class="card color-tm7">
    <div class="card-title">4 Kategori Biaya Kualitas <span class="term-en">Categories of Quality Costs</span> <span class="tag">TEORI UTAMA</span></div>
    
    <div class="grid-2">
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:8px;">
            <div style="color:var(--tm7); font-weight:700; font-family:var(--font-mono); margin-bottom:8px;">1. PREVENTION COSTS (Biaya Pencegahan)</div>
            <p style="font-size:13px; color:var(--text-secondary); margin-bottom:8px;">Biaya yang dikeluarkan untuk <strong>mencegah</strong> terjadinya cacat produk sebelum proses produksi berjalan.</p>
            <ul style="font-size:12px; margin-left:16px; color:var(--text-primary);">
                <li>Pelatihan (Training) karyawan</li>
                <li>Desain kualitas produk (Quality Engineering)</li>
                <li>Pemeliharaan preventif mesin (Preventive Maintenance)</li>
            </ul>
        </div>
        
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:8px;">
            <div style="color:var(--tm2); font-weight:700; font-family:var(--font-mono); margin-bottom:8px;">2. APPRAISAL COSTS (Biaya Penilaian)</div>
            <p style="font-size:13px; color:var(--text-secondary); margin-bottom:8px;">Biaya untuk <strong>mendeteksi, mengukur, atau menilai</strong> apakah produk sudah sesuai dengan standar kualitas.</p>
            <ul style="font-size:12px; margin-left:16px; color:var(--text-primary);">
                <li>Inspeksi bahan baku (Incoming inspection)</li>
                <li>Pengujian produk jadi (Product testing)</li>
                <li>Kalibrasi alat ukur (Calibration)</li>
            </ul>
        </div>
        
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:8px;">
            <div style="color:var(--tm3); font-weight:700; font-family:var(--font-mono); margin-bottom:8px;">3. INTERNAL FAILURE COSTS (Kegagalan Internal)</div>
            <p style="font-size:13px; color:var(--text-secondary); margin-bottom:8px;">Biaya akibat cacat yang ditemukan <strong>SEBELUM</strong> produk dikirim ke pelanggan.</p>
            <ul style="font-size:12px; margin-left:16px; color:var(--text-primary);">
                <li>Pengerjaan ulang (Rework)</li>
                <li>Produk sisa/buangan (Scrap & Spoilage)</li>
                <li>Downtime akibat cacat produk</li>
            </ul>
        </div>
        
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:8px;">
            <div style="color:var(--tm6); font-weight:700; font-family:var(--font-mono); margin-bottom:8px;">4. EXTERNAL FAILURE COSTS (Kegagalan Eksternal)</div>
            <p style="font-size:13px; color:var(--text-secondary); margin-bottom:8px;">Biaya akibat cacat yang ditemukan <strong>SESUDAH</strong> produk dikirim ke pelanggan. (Ini yang paling mahal!)</p>
            <ul style="font-size:12px; margin-left:16px; color:var(--text-primary);">
                <li>Klaim garansi (Warranty claims)</li>
                <li>Retur barang dari pelanggan</li>
                <li>Kehilangan reputasi & penjualan di masa depan</li>
            </ul>
        </div>
    </div>
</div>

<div class="card color-tm7">
    <div class="card-title">Kerugian Produksi <span class="term-en">Production Losses</span> <span class="tag">AKUNTANSI</span></div>

    <div class="table-container">
        <table>
            <tr>
                <th>Istilah</th>
                <th>Definisi</th>
                <th>Perlakuan</th>
            </tr>
            <tr>
                <td><strong>Spoiled Goods</strong> (Cacat)</td>
                <td>Tidak memenuhi standar dan tidak ekonomis diperbaiki.</td>
                <td>Normal: Masuk cost produk baik. Abnormal: Rugi periode.</td>
            </tr>
            <tr>
                <td><strong>Rework</strong> (Pengerjaan Ulang)</td>
                <td>Cacat tapi masih bisa diperbaiki menjadi normal.</td>
                <td>Sama dengan spoilage. Normal masuk FOH.</td>
            </tr>
            <tr>
                <td><strong>Scrap</strong> (Sisa Material)</td>
                <td>Sisa bahan (mis: serutan kayu) bernilai jual rendah.</td>
                <td>Penjualan scrap mengurangi FOH atau COGS.</td>
            </tr>
        </table>
    </div>
</div>

<div class="card color-tm7">
    <div class="card-title">Normal vs Abnormal Spoilage <span class="tag">PENTING</span></div>
    
    <div class="grid-2">
        <div style="background:rgba(66,245,160,0.05); border:1px solid rgba(66,245,160,0.2); padding:16px; border-radius:8px;">
            <h4 style="color:var(--tm4); margin-bottom:8px;">Normal Spoilage</h4>
            <p style="font-size:13px;">Tidak bisa dihindari meski proses efisien. Dianggap sebagai bagian tak terpisahkan dari produksi.</p>
            <div class="formula-box" style="margin-top:12px; background:var(--bg-primary);">
                <div class="formula-main" style="font-size:13px; color:var(--text-primary);">Biaya ini <strong>DIALOKASIKAN</strong> (diserap) oleh unit produk yang BAIK (Transfer Out). Menambah cost per unit produk baik.</div>
            </div>
        </div>
        
        <div style="background:rgba(245,66,100,0.05); border:1px solid rgba(245,66,100,0.2); padding:16px; border-radius:8px;">
            <h4 style="color:var(--tm3); margin-bottom:8px;">Abnormal Spoilage</h4>
            <p style="font-size:13px;">Seharusnya bisa dicegah (karena mesin rusak, keteledoran). Bukan kondisi wajar.</p>
            <div class="formula-box" style="margin-top:12px; background:var(--bg-primary);">
                <div class="formula-main" style="font-size:13px; color:var(--text-primary);">Biaya ini diakui sebagai <strong>RUGI PERIODE</strong> (Loss on Abnormal Spoilage) dan langsung masuk ke Laporan Laba Rugi.</div>
            </div>
        </div>
    </div>
    
    <div class="callout info" style="margin-top:16px;">
        <div class="callout-title">💡 Scrap Value (Nilai Sisa)</div>
        Jika barang cacat (spoiled) masih bisa dijual rongsokan, maka <code>Net Spoilage Cost = Gross Spoilage Cost − Scrap Value</code>. Net Spoilage inilah yang nantinya dialokasikan (jika normal) atau di-expense-kan (jika abnormal).
    </div>
</div>
`;
