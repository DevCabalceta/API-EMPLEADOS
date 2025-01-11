import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import routerEmpleado from './routes/empleado'

const app = express();

/* Config */
dotenv.config();
app.use(morgan("tiny"))
app.set("port", process.env.PORT || 5000);

/* routes*/
app.use('/empleado', routerEmpleado);

/* Start */
const port = app.get("port");

app.listen(port, () => {
    console.log(`Server on port ${port}`);
})