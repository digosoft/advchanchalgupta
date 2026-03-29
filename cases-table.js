// This script fetches cases.json and renders the cases in the table with pagination
const PAGE_SIZE = 10;
let casesData = [];
let currentPage = 1;

function renderTablePage(page) {
  const tbody = document.getElementById('casesTableBody');
  tbody.innerHTML = '';
  if (!casesData.length) return;
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const pageData = casesData.slice(start, end);
  pageData.forEach(caseItem => {
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
}

function renderPagination() {
  const pagDiv = document.getElementById('casesPagination');
  pagDiv.innerHTML = '';
  if (!casesData.length) return;
  const totalPages = Math.ceil(casesData.length / PAGE_SIZE);
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.style.margin = '0 2px';
    btn.style.padding = '4px 10px';
    btn.style.borderRadius = '6px';
    btn.style.border = '1px solid #f0d080';
    btn.style.background = i === currentPage ? '#f0d080' : 'transparent';
    btn.style.color = i === currentPage ? '#08090c' : '#f0d080';
    btn.style.cursor = 'pointer';
    btn.onclick = function() {
      if (currentPage !== i) {
        currentPage = i;
        renderTablePage(currentPage);
        renderPagination();
      }
    };
    pagDiv.appendChild(btn);
  }
}

fetch('https://drchanchalsingh.netlify.app/cases.json', { mode: 'cors' })
  .then(response => response.json())
  .then(data => {
    casesData = data;
    currentPage = 1;
    renderTablePage(currentPage);
    renderPagination();
  })
  .catch(err => {
    console.error('Failed to load cases:', err);
    document.getElementById('casesTableBody').innerHTML = '<tr><td colspan="5">Could not load cases.</td></tr>';
  });
