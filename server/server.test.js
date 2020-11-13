
// process.env.TEST = true;

// // Setup supertest
// const supertest = require('supertest');
// const app = require('./server');
// const agent = supertest.agent(app);

// const pool = require('../server/modules/pool');
// const { ExpansionPanelActions } = require('@material-ui/core');

// describe('Updating a users collection', () => {
//     let user;

// beforeEach(async() => {
//     // Clean up my user table
//     await pool.query('DELETE FROM "user"')

//     // SETUP: Register a new user
//     /*
//     let registerRes = await agent
//       .post('/api/user/register')
//       .send({
//         username: 'EG_Johnson',
//         password: '12345'
//       });
//       expect(registerRes.statusCode).toBe(201);
//       user = registerRes.body;
//       expect(user.username).toBe('EG_Johnson');
//       */
      

//       /*
//       await pool.query(`
//       UPDATE "user"
//       SET "authLevel" = 'INSTRUCTOR'
//       WHERE "id" = $1
//       `, [user.id]);
//       */

//       let loginRes = await agent
//       .post(`/api/user/login`)
//       .send({ username: 'Real_Arthur', password: '12345'});
//       expect(loginRes.statusCode).toBe(200);
//     });
// })

// test(`can't delete unless authorized`, async() => {
//     await pool.query(`
//     DELETE FROM "user_movie"
//     WHERE "user_id" = 1
//     AND
//     "movie_id" = 12;
//     `);
//     let deleteResponse = await agent
//     .delete(`/api/collection/delete`);

//     expect(deleteResponse.statusCode).toBe(403)
// })
// */