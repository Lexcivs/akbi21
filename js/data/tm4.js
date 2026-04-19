window.AKBI_DATA.tm4 = `
<div class="page-header">
    <div class="page-badge" style="background: rgba(66,245,160,0.15); color: var(--tm4);">TM 04</div>
    <h1 class="page-title">Job Order Costing</h1>
    <p class="page-desc">Sistem Pesanan · WIP · Finished Goods · Cost of Goods Sold</p>
</div>

<div class="card color-tm4">
    <div class="card-title">Karakteristik Job Order Costing <span class="tag">DEFINISI</span></div>
    
    <div class="grid-2">
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:8px;">
            <div style="color:var(--tm4); font-weight:700; margin-bottom:8px;">Job Order Costing ✅</div>
            <ul style="margin-left:20px; font-size:13px; color:var(--text-secondary); line-height:1.6;">
                <li>Produksi berdasarkan <strong>pesanan spesifik pelanggan</strong>.</li>
                <li>Produk memiliki variasi yang sangat luas dan tidak standar.</li>
                <li>Biaya diakumulasi untuk setiap <em>job</em> atau pesanan.</li>
                <li>Dokumen utama: <span class="hl-green">Job Order Cost Sheet</span> (Kartu Biaya Pesanan).</li>
                <li><strong>Cocok untuk:</strong> Percetakan, bengkel custom, kantor pengacara, rumah sakit.</li>
            </ul>
        </div>
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:8px;">
            <div style="color:var(--tm2); font-weight:700; margin-bottom:8px;">Process Costing ❌ (Perbandingan)</div>
            <ul style="margin-left:20px; font-size:13px; color:var(--text-secondary); line-height:1.6;">
                <li>Produksi berdasarkan <strong>proses massal dan berkelanjutan</strong>.</li>
                <li>Produk homogen (seragam) untuk lini produk yang sama.</li>
                <li>Biaya diakumulasi untuk setiap <em>departemen</em>.</li>
                <li>Dokumen utama: <span class="hl-blue">Cost of Production Report</span>.</li>
                <li><strong>Cocok untuk:</strong> Kilang minyak, pabrik mie, pabrik semen.</li>
            </ul>
        </div>
    </div>
</div>

<div class="card color-tm4">
    <div class="card-title">Status Pesanan & Akun Terkait <span class="tag">ALUR</span></div>
    <p>Pahami status setiap pesanan untuk menghitung Total Biaya Manufaktur, Ending FG, dan COGS.</p>

    <div class="table-container">
        <table>
            <tr>
                <th>Status Pesanan</th>
                <th>Akun Terkait</th>
                <th>Posisi Laporan</th>
            </tr>
            <tr>
                <td>Masih dalam proses pengerjaan (belum selesai)</td>
                <td><span class="hl">Persediaan Barang Dalam Proses</span> <span class="term-en">Work In Process</span></td>
                <td>Neraca (Aset)</td>
            </tr>
            <tr>
                <td>Sudah selesai, TAPI belum diserahkan ke pelanggan</td>
                <td><span class="hl">Persediaan Barang Jadi</span> <span class="term-en">Finished Goods</span></td>
                <td>Neraca (Aset)</td>
            </tr>
            <tr>
                <td>Sudah selesai, DAN sudah diserahkan (dijual) ke pelanggan</td>
                <td><span class="hl">Harga Pokok Penjualan</span> <span class="term-en">Cost of Goods Sold</span></td>
                <td>Laba Rugi (Beban)</td>
            </tr>
        </table>
    </div>
    
    <div class="callout info">
        <div class="callout-title">💡 Total Biaya Manufaktur (Total Manufacturing Cost)</div>
        Jika ditanya "Berapa Total Biaya Manufaktur?", hitunglah <strong>SEMUA</strong> biaya dari <strong>SEMUA</strong> pesanan yang sedang diproses pada periode tersebut (baik yang masih WIP, sudah jadi FG, maupun yang sudah COGS).
    </div>
</div>

<div class="card color-tm4">
    <div class="card-title">Contoh Soal (Framework UTS) <span class="tag">CONTOH</span></div>
    
    <div style="background:var(--bg-tertiary); padding:20px; border-radius:8px;">
        <p style="font-style:italic; margin-bottom:12px;"><strong>Data Pesanan:</strong><br>
        Pesanan 101 = Rp4.500<br>
        Pesanan 102 = Rp3.500<br>
        Pesanan 103 = Rp3.000<br>
        Pesanan 104 = Rp1.500<br><br>
        <strong>Status:</strong> Pesanan 101, 102, 103 <strong>selesai diproduksi</strong>. Pesanan 101 dan 102 <strong>sudah terjual</strong>.</p>
        
        <ol style="margin-left:20px; font-family:var(--font-mono); font-size:14px; line-height:1.8;">
            <li><strong>Total Biaya Manufaktur:</strong> Semua pesanan (101+102+103+104) = <strong>Rp12.500</strong></li>
            <li><strong>Persediaan Barang Dalam Proses Akhir:</strong> Belum selesai (104) = <strong>Rp1.500</strong></li>
            <li><strong>Persediaan Barang Jadi Akhir:</strong> Selesai tapi belum terjual (103) = <strong>Rp3.000</strong></li>
            <li><strong>Harga Pokok Penjualan (COGS):</strong> Sudah terjual (101+102) = <strong>Rp8.000</strong></li>
        </ol>
    </div>
</div>
`;
