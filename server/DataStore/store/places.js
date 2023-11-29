import db from '../knex.js';

export default async function GetLocationCoordinates(location) {
    try {
        return await db.select('*').from('places').where('name', location)
    } catch (error) {
        console.error("Failed to fetch location coordinates :", error.message);
        throw error;
    }
}