import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') ?? [], credentials: true }));

app.get('/health', (_req, res) => {
  res.json({ ok: true, ts: Date.now() });
});

const port = Number(process.env.PORT || 4000);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on :${port}`);
});
