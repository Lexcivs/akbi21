window.AKBI_DATA.tm5 = `
<div class="page-header">
    <div class="page-badge" style="background: rgba(200,66,245,0.15); color: var(--tm5);">TM 05</div>
    <h1 class="page-title">Process Costing <span class="term-en">Weighted Average</span></h1>
    <p class="page-desc">Metode Rata-Rata Tertimbang · Unit Ekuivalen · Cost per EU</p>
</div>

<div class="card color-tm5">
    <div class="card-title">Kapan Process Costing Digunakan? <span class="tag">DEFINISI</span></div>
    <p>Digunakan saat perusahaan memproduksi barang secara <strong>massal dan berkelanjutan</strong> (homogen). Karena tidak bisa melacak biaya per unit secara spesifik, kita menghitung <em>biaya rata-rata per unit ekuivalen</em>.</p>
    
    <div class="callout info">
        <div class="callout-title">💡 Prinsip Metode Rata-Rata (Weighted Average)</div>
        Biaya dari persediaan awal (Beginning WIP) <strong>DIGABUNGKAN</strong> dengan biaya yang ditambahkan pada periode berjalan. Semua unit dianggap "dimulai dari awal" di periode ini.
    </div>
</div>

<div class="card color-tm5">
    <div class="card-title">4 Langkah Process Costing <span class="tag">LANGKAH UTAMA</span></div>
    
    <div style="display:flex; flex-direction:column; gap:16px;">
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:8px;">
            <div style="color:var(--tm5); font-weight:700; margin-bottom:8px;">1. Skedul Kuantitas (Quantity Schedule)</div>
            <p style="font-size:13px; color:var(--text-secondary);">Selalu pastikan balance: <code>Beg. WIP + Units Started = Transfer Out + End. WIP</code></p>
        </div>
        
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:8px;">
            <div style="color:var(--tm5); font-weight:700; margin-bottom:8px;">2. Menghitung Unit Ekuivalen (Equivalent Units / EU)</div>
            <div class="formula-box" style="margin:8px 0;">
                <div class="formula-main">EU (Average) = Transfer Out + (Ending WIP × % Penyelesaian)</div>
            </div>
            <p style="font-size:13px; color:var(--text-secondary);">Dihitung terpisah untuk Bahan Baku Langsung (Direct Materials) dan Biaya Konversi (Conversion Costs).</p>
        </div>
        
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:8px;">
            <div style="color:var(--tm5); font-weight:700; margin-bottom:8px;">3. Menghitung Cost per EU</div>
            <div class="formula-box" style="margin:8px 0;">
                <div class="formula-main">Cost/EU = (Beg. WIP Cost + Cost Added) / EU</div>
            </div>
            <p style="font-size:13px; color:var(--text-secondary);"><strong>KUNCI AVERAGE:</strong> Pembilang adalah penjumlahan biaya awal DAN biaya yang ditambahkan.</p>
        </div>
        
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:8px;">
            <div style="color:var(--tm5); font-weight:700; margin-bottom:8px;">4. Alokasi Biaya (Cost Accounted For)</div>
            <p style="font-size:13px; color:var(--text-secondary);">
                <strong>Biaya Transfer Out:</strong> Unit Transfer Out × Total Cost/EU<br>
                <strong>Biaya Ending WIP:</strong> Jumlahkan (EU per elemen × Cost/EU per elemen)
            </p>
        </div>
    </div>
</div>

<div class="card color-tm5">
    <div class="card-title">Biaya Departemen Sebelumnya <span class="term-en">Transferred-In Costs</span></div>
    <p>Dalam perusahaan dengan lebih dari satu departemen (misal: Dept. Cutting lalu Dept. Assembly), biaya yang dibawa dari departemen sebelumnya disebut Transferred-In Costs.</p>
    
    <div class="callout warning">
        <div class="callout-title">⚠️ Aturan Transferred-In Cost (TI)</div>
        <ul style="margin-left:20px; font-size:14px; margin-top:8px;">
            <li>Diperlakukan sebagai <strong>elemen biaya tersendiri</strong> (terpisah dari DM, DL, FOH).</li>
            <li>Persentase penyelesaian untuk komponen TI pada Ending WIP adalah <strong>selalu 100%</strong> (karena unit tersebut sudah selesai sepenuhnya di departemen sebelumnya).</li>
            <li>EU (TI) = Transfer Out + (Ending WIP × 100%).</li>
        </ul>
    </div>
</div>
`;
