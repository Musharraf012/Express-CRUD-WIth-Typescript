import express from 'express'
import { db} from '../Config/db.config'
import { router } from '../Routes/post.routes'

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//routes
app.use('/api/v1/posts', router)
console.log("Starting server setup...");

//db connection then server connection
db.then(() => {
    app.listen(3000, () => console.log('Server is listening on port 3000'))
}).catch((err) => {
    console.error("Failed to connect DB or start server", err);
});