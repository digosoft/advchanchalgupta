// This script fetches cases.json and renders the cases in the table
fetch('cases.json')
  .then(response => response.json())
  .then(data => {
    const tbody = document.getElementById('casesTableBody');
    tbody.innerHTML = '';
    data.forEach(caseItem => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${caseItem.parties}</td>
        <td>${caseItem.court}</td>
        <td>${caseItem.judge}</td>
        <td>${caseItem.caseType}</td>
        <td>${caseItem.caseDetails}</td>
      `;
      tbody.appendChild(tr);
    });
  })
  .catch(err => {
    document.getElementById('casesTableBody').innerHTML = '<tr><td colspan="5">Could not load cases.</td></tr>';
  });
