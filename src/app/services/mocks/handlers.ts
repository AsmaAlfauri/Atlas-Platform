import { rest } from 'msw';

export const handlers = [
  rest.get('/api/tenants/:tenantId/users', (req, res, ctx) => {
    const { tenantId } = req.params;
    return res(
      ctx.delay(500), // simulate network latency
      ctx.status(200),
      ctx.json([
        { id: 'u1', name: 'Alice', role: 'Admin' },
        { id: 'u2', name: 'Bob', role: 'Manager' },
      ])
    );
  }),
];
