window.AKBI_DATA.tm3 = `
<div class="page-header">
    <div class="page-badge" style="background: rgba(245,66,100,0.15); color: var(--tm3);">TM 03</div>
    <h1 class="page-title">Siklus Biaya <span class="term-id"></span> <span class="term-en">Cost Cycle</span></h1>
    <p class="page-desc">Alur Biaya Manufaktur · Laporan Harga Pokok Penjualan (COGS) · Jurnal Dasar</p>
</div>

<div class="card color-tm3">
    <div class="card-title">4 Langkah Perhitungan HPP <span class="term-en">COGS Formula</span> <span class="tag">KUNCI</span></div>

    <div class="formula-box">
        <div class="formula-label">LANGKAH 1 — Pemakaian Bahan Baku (Direct Materials Used)</div>
        <div class="formula-main">DM Used = Pers. Awal BB + Pembelian BB − Pers. Akhir BB</div>
    </div>
    
    <div class="formula-box">
        <div class="formula-label">LANGKAH 2 — Total Biaya Manufaktur (Total Manufacturing Cost)</div>
        <div class="formula-main">TMC = DM Used + TKL (DL) + FOH</div>
        <div class="formula-note">Mencakup SEMUA biaya yang dimasukkan ke proses produksi pada periode ini.</div>
    </div>
    
    <div class="formula-box">
        <div class="formula-label">LANGKAH 3 — Kos Produk Selesai (Cost of Goods Manufactured / COGM)</div>
        <div class="formula-main">COGM = Pers. Awal WIP + TMC − Pers. Akhir WIP</div>
        <div class="formula-note">Hanya produk yang SELESAI diproses dan ditransfer ke gudang barang jadi.</div>
    </div>
    
    <div class="formula-box">
        <div class="formula-label">LANGKAH 4 — Harga Pokok Penjualan (Cost of Goods Sold / COGS)</div>
        <div class="formula-main">COGS = Pers. Awal FG + COGM − Pers. Akhir FG</div>
        <div class="formula-note">Hanya produk yang TELAH DIJUAL ke pelanggan. Masuk ke Laporan Laba Rugi.</div>
    </div>
</div>

<div class="card color-tm3">
    <div class="card-title">Jurnal-Jurnal Penting Manufaktur <span class="term-en">Journal Entries</span> <span class="tag">JURNAL</span></div>
    
    <div class="table-container">
        <table>
            <tr>
                <th>Transaksi</th>
                <th>Debit</th>
                <th>Kredit</th>
            </tr>
            <tr>
                <td>Pembelian Bahan Baku (Kredit)</td>
                <td>Persediaan Bahan Baku <span class="term-en">Raw Material Inv</span></td>
                <td>Hutang Dagang <span class="term-en">Accounts Payable</span></td>
            </tr>
            <tr>
                <td>Pemakaian Bahan Baku Langsung</td>
                <td>Persediaan Barang Dalam Proses <span class="term-en">WIP Inv</span></td>
                <td>Persediaan Bahan Baku <span class="term-en">Raw Material Inv</span></td>
            </tr>
            <tr>
                <td>Pemakaian Tenaga Kerja Langsung</td>
                <td>Persediaan Barang Dalam Proses <span class="term-en">WIP Inv</span></td>
                <td>Hutang Gaji / Kas <span class="term-en">Payroll Payable</span></td>
            </tr>
            <tr>
                <td>Pembebanan Overhead Pabrik</td>
                <td>Persediaan Barang Dalam Proses <span class="term-en">WIP Inv</span></td>
                <td>FOH Dibebankan <span class="term-en">Applied FOH</span></td>
            </tr>
            <tr>
                <td><strong>Transfer Produk Selesai ke Gudang</strong></td>
                <td><span class="hl-red">Persediaan Barang Jadi (FG Inv)</span></td>
                <td><span class="hl-red">Persediaan Barang Dalam Proses (WIP Inv)</span></td>
            </tr>
        </table>
    </div>
    
    <div class="callout warning">
        <div class="callout-title">⚠️ Ingat Jurnal Produk Selesai!</div>
        Saat produk <strong>selesai diproduksi</strong>, jurnalnya adalah mendebit Barang Jadi dan mengkredit Barang Dalam Proses. Belum ada COGS atau Penjualan yang dicatat karena produk belum diserahkan ke pembeli!
    </div>
</div>
`;
