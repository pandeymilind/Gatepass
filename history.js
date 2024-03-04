// This script fetches data from the server-side script and populates the table

const historyTable = document.getElementById('history-table');

// Replace this with your actual code to fetch data from the server-side script (e.g., using AJAX)
const approvalHistoryData = [
    { name: 'Shivansh Dubey', date: '2024-03-02 10:00:00', purpose: 'Meeting with client', status: 'Approved' },
    
];

function displayHistory(data) {
    data.forEach(entry => {
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.date}</td>
            <td>${entry.purpose}</td>
            <td>${entry.status}</td>
        `;
        historyTable.appendChild(tableRow);
    });
}

displayHistory(approvalHistoryData); // Replace with actual data fetching logic
