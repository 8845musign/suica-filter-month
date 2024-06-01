// 特定の月を設定（ここでは5月）
const targetMonth = "05";

// .historyTable > tableを取得
const table = document.querySelector('.historyTable > table');

// テーブルが存在するか確認
if (table) {
    // 行を取得
    const rows = table.querySelectorAll('tr');

    // 各行をループ
    rows.forEach(row => {
        // チェックボックスと日付セルを取得
        const checkbox = row.querySelector('td:first-child input[type="checkbox"]');
        const dateCell = row.querySelector('td:nth-child(2)');

        // チェックボックスと日付セルが存在する場合
        if (checkbox && dateCell) {
            const dateText = dateCell.textContent.trim();
            const month = dateText.split('/')[0];

            // 対象の月ではない場合、チェックボックスを外す
            if (month !== targetMonth) {
                checkbox.checked = false;
            }
        }
    });
} else {
    console.log('.historyTable > table が見つかりません');
}