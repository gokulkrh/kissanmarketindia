/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('places').del()
  await knex('places').insert([
    {
      name: 'Konni',
      latitude: 9.2267,
      longitude: 76.8497,
    },
    {
      name: 'Ayravon',
      latitude: 9.2225,
      longitude: 76.86,
    },
    {
      name: 'Attachakal',
      latitude: 9.2516,
      longitude: 76.8447,
    },
    {
      name: 'Perinjottackal',
      latitude: 9.2363,
      longitude: 76.8707,
    },
    {
      name: 'Pathanamthitta',
      latitude: 9.2648,
      longitude: 76.787,
    },
    {
      name: 'Ranni',
      latitude: 9.3866,
      longitude: 76.7856,
    },
    {
      name: 'Kumbazha',
      latitude: 9.2678,
      longitude: 76.8058,
    },
    {
      name: 'Thiruvalla',
      latitude: 9.3853,
      longitude: 76.575,
    },
    {
      name: 'Kochi',
      latitude: 9.9312,
      longitude: 76.2673,
    },
    {
      name: 'Thiruvananthapuram',
      latitude: 8.5241,
      longitude: 76.9366,
    },
    {
      name: 'Kollam',
      latitude: 8.8932,
      longitude: 76.6141,
    },
    {
      name: 'Kanjirapally',
      latitude: 9.5595,
      longitude: 76.7874,
    },
    {
      name: 'Karunagapally',
      latitude: 9.0598,
      longitude: 76.5356,
    },
    {
      name: 'Mavelikkara',
      latitude: 9.2506,
      longitude: 76.5401,
    },
    {
      name: 'Vennikulam',
      latitude: 9.4061,
      longitude: 76.6682,
    },
  ]);
}
