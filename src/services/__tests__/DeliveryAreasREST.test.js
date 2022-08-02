import { DeliveryAreasREST } from '../DeliveryAreasREST';

describe('DeliveryAreasREST', () => {
  it('getAll should retrieve all the delivery areas', async () => {
    const service = new DeliveryAreasREST('http://localhost:8090');
    const deliveryAreas = [];
    let error = false;
    await service.allDeliveryAreas(deliveryAreas, error);
    expect(deliveryAreas.length).toEqual(30);
    expect(error).toEqual(false);
  });
});
