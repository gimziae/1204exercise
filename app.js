// @ts-check

const express = require('express');

// 주요정보 암호화
require('dotenv').config();

const app = express();

const { PORT } = process.env;

// router 불러오기
const indexRouter = require('./routes');
const memberRouter = require('./routes/userInfo')


// ejs 설정
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/member', memberRouter);

// 에러 컨트롤러
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(err.statusCode || 500);
    res.send(err.message);
})

app.listen(PORT, () => {
    console.log(`서버는 ${PORT}번에서 실행 중 입니다.`)
})