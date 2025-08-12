// Script de interacción: colapsar sidebar, accesibilidad y gráfico

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('toggleSidebar');
  const dashboard = document.getElementById('dashboard');

  // Estado persistente simple
  const saved = localStorage.getItem('sidebar-open');
  if (saved === 'false'){
    sidebar.classList.add('collapsed');
    toggle.setAttribute('aria-expanded','false');
  }

  function toggleSidebar(){
    const isCollapsed = sidebar.classList.toggle('collapsed');
    const expanded = (!isCollapsed).toString();
    toggle.setAttribute('aria-expanded', expanded);
    localStorage.setItem('sidebar-open', expanded);
  }

  toggle.addEventListener('click', toggleSidebar);
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSidebar(); }
  });

  // En mobile abrimos/cerramos con clase open
  const mq = window.matchMedia('(max-width:720px)');
  function handleMobile(){
    if (mq.matches){
      // en pantallas pequeñas el botón abre el menú desde fuera
      toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
    }
  }
  handleMobile();

  // Hacer tarjetas accesibles por teclado (enter abre detalle simulado)
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('keydown', (e) =>{
      if(e.key === 'Enter'){
        card.classList.toggle('expanded');
        card.setAttribute('aria-pressed', card.classList.contains('expanded'));
      }
    })
  })

  // Crear gráfico con Chart.js (ejemplo sencillo)
  const ctx = document.getElementById('lineChart');
  if (ctx){
    const data = {
      labels: ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'],
      datasets: [{
        label: 'Ingresos',
        data: [1200, 1900, 900, 2400, 1600, 2000, 2360],
        tension: 0.35,
        borderWidth: 2,
        fill: true,
        backgroundColor: 'rgba(96,165,250,0.08)',
        borderColor: 'rgba(96,165,250,0.9)',
        pointRadius: 3
      }]
    };

    new Chart(ctx, {
      type: 'line',
      data,
      options: {
        responsive:true,
        plugins:{
          legend:{display:false}
        },
        scales:{
          y:{grid:{color:'rgba(255,255,255,0.03)'},ticks:{color:'rgba(255,255,255,0.7)'}},
          x:{ticks:{color:'rgba(255,255,255,0.7)'}}
        }
      }
    });
  }

});
