import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderAppointmentsService from './ListProviderAppointmentsService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderAppointmentsService: ListProviderAppointmentsService;

describe('ListProviderAppointments', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();

    listProviderAppointmentsService = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the appointments on a specific day', async () => {
    const appointment1 = await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: 'user_id',
      date: new Date(2020, 7, 31, 12, 0, 0),
    });

    const appointment2 = await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: 'user_id',
      date: new Date(2020, 7, 31, 13, 0, 0),
    });

    const appointments = await listProviderAppointmentsService.execute({
      provider_id: 'provider',
      year: 2020,
      month: 8,
      day: 31,
    });

    expect(appointments).toEqual([appointment1, appointment2]);
  });
});
