/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      user_id: "usr_IqoKFSodwCQHrr7q",
      fullname: "Max Verstappen",
      password: "password",
      email: "gokulkrh@gmail.com",
      phone: "8086183925",
    },
  ]);
}
