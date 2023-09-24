import express from 'express';
import { Signale } from 'signale';

import { leadRouter } from './lead/insfraestructure/leadRoute';
import { bookRouter } from './book/infraestructure/bookRouter';
import { authRouter } from './auth/infraestructure/authRouter';

const app = express();
const signale = new Signale();

app.use(express.json());
app.use('/leads',leadRouter);
app.use('/books',bookRouter);
app.use('/auth', authRouter);

app.listen(3000, () => {
    signale.success("Server online in port 3000");
});