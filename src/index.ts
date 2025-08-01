import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 API ready at :${PORT}`));
