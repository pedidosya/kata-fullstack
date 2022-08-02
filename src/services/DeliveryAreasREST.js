export class DeliveryAreasREST {
  constructor(host = 'http://localhost:8090') {
    this.host = host;
  }

  async allDeliveryAreas(deliveryAreas = [], error = false) {
    const url = `${this.host}/v2/api/rest/getDeliveryAreas`;
    const response = await fetch(url, { method: 'POST' });
    if (response.status === 201) {
      const deliveryAreasResponse = await response.json();
      deliveryAreasResponse.forEach((deliveryArea) => {
        deliveryAreas.push(deliveryArea);
      });

      error = false;
      return;
    } else {
      error = true;
      return;
    }
  }
}
