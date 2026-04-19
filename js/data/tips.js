window.AKBI_DATA.tips = `
<div class="page-header">
    <div class="page-badge" style="background: rgba(245,200,66,0.15); color: var(--tm1);">🎯 TIPS UTS</div>
    <h1 class="page-title">Tips & Trik UTS AKBI</h1>
    <p class="page-desc">Jebakan Umum · Cheat Sheet · Strategi Menjawab</p>
</div>

<div class="card color-tm1">
    <div class="card-title">Jebakan Paling Umum di UTS <span class="tag">AWAS JEBAKAN</span></div>
    
    <div class="grid-2">
        <div class="callout warning" style="margin:0;">
            <div class="callout-title">🪤 Jebakan Gas LPG (Pisang Goreng)</div>
            Gas LPG = <span class="hl-red">Overhead Pabrik (FOH)</span>, BUKAN biaya langsung. Gas sulit diukur pemakaiannya per unit produk sehingga diklasifikasikan sebagai biaya tak langsung.
        </div>
        
        <div class="callout warning" style="margin:0;">
            <div class="callout-title">🪤 Jebakan "Biaya Produksi" vs "COGM"</div>
            <strong>Total Biaya Manufaktur:</strong> Semua pesanan yang diproses (termasuk yang masih WIP).<br>
            <strong>Kos Produksi (COGM):</strong> HANYA produk yang selesai (ditransfer ke FG).
        </div>
        
        <div class="callout warning" style="margin:0;">
            <div class="callout-title">🪤 Jebakan Regresi (Least Squares)</div>
            Output R Squared (R²) dan Standard Error <strong>TIDAK</strong> dimasukkan ke dalam persamaan <code>TC = a + bX</code>.
        </div>
        
        <div class="callout warning" style="margin:0;">
            <div class="callout-title">🪤 Jebakan Jurnal Barang Jadi</div>
            Saat produk selesai diproduksi (baru jadi, belum dijual): <strong>Dr. Pers. Barang Jadi | Cr. Pers. BDP</strong>. JANGAN catat COGS/Penjualan dulu!
        </div>
    </div>
</div>

<div class="card color-tm1">
    <div class="card-title">Cheat Sheet Rumus Cepat <span class="tag">CHEAT SHEET</span></div>
    
    <div class="table-container">
        <table>
            <tr><th>Konsep</th><th>Rumus / Formula</th></tr>
            <tr>
                <td>Pemakaian BB <span class="term-en">DM Used</span></td>
                <td>Beg. BB + Pembelian − End. BB</td>
            </tr>
            <tr>
                <td>Harga Pokok Penjualan <span class="term-en">COGS</span></td>
                <td>Beg. FG + COGM − End. FG</td>
            </tr>
            <tr>
                <td>EU (Average Method)</td>
                <td>Transfer Out + (End.WIP × %)</td>
            </tr>
            <tr>
                <td>EU (FIFO Method)</td>
                <td>[Beg.WIP × (1−%)] + S&C + [End.WIP × %]</td>
            </tr>
            <tr>
                <td>Laba Operasi <span class="term-en">Operating Income</span></td>
                <td>Penjualan − COGS − Beban Operasi (Selling & Admin)</td>
            </tr>
        </table>
    </div>
</div>
`;
