window.__RENDER_PEYA_PROMOTIONAL_BANNER_JS__ = function (id = '') {
  const headerElement = document.createElement('header');
  headerElement.innerHTML = `¡Descargá hoy la aplicación de PedidosYa y obtené un descuento de $99 en tu primer pedido en heladerías! `;

  const link = document.createElement('a');
  link.innerHTML = 'Más info';
  link.href = 'https://pedidosya.com.ar';
  headerElement.appendChild(link);

  headerElement.style.backgroundColor = 'rgb(250, 0, 80)';
  headerElement.style.color = 'white';
  headerElement.style.fontFamily = 'sans-serif';
  headerElement.style.fontWeight = 'bold';
  headerElement.style.padding = '12px';
  headerElement.style.width = '100%';

  if (id) {
    const element = document.getElementById(id);
    if (element) {
      return element.appendChild(headerElement);
    }
  }

  // Defaults prepends to body element
  return document.body.prepend(headerElement);
};
