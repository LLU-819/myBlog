import Express from 'express'
const app = Express()
import authRouter from './routes/auth.js'
import commentRouter from './routes/comments.js'
import likeRouter from './routes/likes.js'
import postRouter from './routes/posts.js'
import userRouter from './routes/users.js'


app.use('/api/auth', authRouter)
app.use('/api/comments', commentRouter)
app.use('/api/likes', likeRouter)
app.use('/api/posts', postRouter)
app.use('/api/users', userRouter)

app.listen(8800, ()=>{
    console.log('API working1')
})