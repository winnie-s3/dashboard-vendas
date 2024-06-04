document.addEventListener('DOMContentLoaded', function() {
  const createChart = (ctx, type, data) => {
      return new Chart(ctx, {
          type: type,
          data: data,
          options: {
              responsive: true,
              maintainAspectRatio: true
          }
      });
  };

  const ctxOverview = document.getElementById('overviewChart').getContext('2d');
  const ctxSales = document.getElementById('salesChart').getContext('2d');
  const ctxCustomers = document.getElementById('customersChart').getContext('2d');
  const ctxInventory = document.getElementById('inventoryChart').getContext('2d');
  const ctxFinance = document.getElementById('financeChart').getContext('2d');

  createChart(ctxOverview, 'line', {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
          label: 'Vendas',
          data: [12, 15, 13, 25, 20, 23, 25, 20, 23, 18, 20, 23, 0, 50],
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          fill: true
      }]
  });

  createChart(ctxSales, 'bar', {
      labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D'],
      datasets: [{
          label: 'Vendas',
          data: [83, 54, 47, 53],
          backgroundColor: [
              'rgba(0, 170, 255, 0.2)',
              'rgba(2, 193, 196, 0.2)',
              'rgba(76, 0, 255, 0.2)',
              'rgba(0, 0, 255, 0.2)'
          ],
          borderColor: [
              'rgba(0, 170, 255, 1)',
              'rgba(2, 193, 196, 1)',
              'rgba(76, 0, 255, 1)',
              'rgba(0, 0, 255, 1)'
          ],
          borderWidth: 1
      }]
  });

  createChart(ctxCustomers, 'pie', {
      labels: ['Pessoa Física (PF)', 'Pessoa Jurídica (PJ)', 'Outros'],
      datasets: [{
          label: 'Clientes por Tipo',
          data: [150, 80, 20],
          backgroundColor: [
              'rgba(0, 170, 255, 0.2)',
              'rgba(2, 193, 196, 0.2)',
              'rgba(0, 60, 255, 0.2)'
          ],
          borderColor: [
              'rgba(0, 170, 255, 1)',
              'rgba(2, 193, 196, 1)',
              'rgba(0, 60, 255, 1)'
          ],
          borderWidth: 1
      }]
  });

  createChart(ctxInventory, 'doughnut', {
      labels: ['Estoque A', 'Estoque B', 'Estoque C', 'Estoque D'],
      datasets: [{
          label: 'Estoque',
          data: [20, 10, 15, 5],
          backgroundColor: [
              'rgba(0, 170, 255, 0.2)',
              'rgba(2, 193, 196, 0.2)',
              'rgba(76, 0, 255, 0.2)',
              'rgba(0, 0, 255, 0.2)'
          ],
          borderColor: [
              'rgba(0, 170, 255, 1)',
              'rgba(2, 193, 196, 1)',
              'rgba(76, 0, 255, 1)',
              'rgba(0, 0, 255, 1)'
          ],
          borderWidth: 1
      }]
  });

  createChart(ctxFinance, 'doughnut', {
      labels: ['Receitas', 'Despesas', 'Lucro Bruto', 'Empréstimos', 'Economias'],
      datasets: [{
          label: 'Finanças',
          data: [80000, 60000, 20000, 10000, 15000],
          backgroundColor: [
              'rgba(0, 170, 255, 0.2)',
              'rgba(2, 193, 196, 0.2)',
              'rgba(76, 0, 255, 0.2)',
              'rgba(0, 0, 255, 0.2)',
              'rgba(38, 0, 255, 0.2)'
          ],
          borderColor: [
              'rgba(0, 170, 255, 1)',
              'rgba(2, 193, 196, 1)',
              'rgba(76, 0, 255, 1)',
              'rgba(0, 0, 255, 1)',
              'rgba(38, 0, 255, 1)'
          ],
          borderWidth: 1
      }]
  });
});
