require('dotenv').config({ path: './config.env' });
import express from 'express';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { createServer } from 'http';

import handleError from './controller/HandleError';
import { userRouter, postRouter, commentRouter, replyCommentRouter } from './routes';
import AppError from './util/AppError';

const app = express();

//config

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', `${process.env.HOST_CLIENT}`);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(cors());
app.options('*', cors());
app.use(express.json({ limit: '10kb' }));
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(cookieParser());

app.use(express.static(`${__dirname}/public`)); // khai các file

// Bảo mật app
app.use(
  hpp({
    whitelist: ['duration', 'ratingsQuantity', 'ratingsAverage', 'maxGroupSize', 'difficulty', 'price'],
    // ngoại lệ
  }),
); // chặn 2 lần query parama giống nhau vd :  /api/v1/users?sort=price&sort=duration

// MIDDLEWARE
app.use(mongoSanitize()); // chặn những mã try vấn đến db từ text của người dùng

app.use(morgan('dev'));

app.use(xss()); // chặng người dùng chằn những mã html vs <script/> ...

//1 set security header
app.use(helmet());
app.use(
  // fix error csp //!https://stackoverflow.com/questions/67601708/axios-cdn-link-refused-to-load
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", 'data:', 'blob:'],

      fontSrc: ["'self'", 'https:', 'data:'],

      scriptSrc: ["'self'", 'unsafe-inline'],

      scriptSrc: ["'self'", 'https://*.cloudflare.com'],

      scriptSrcElem: ["'self'", 'https:', 'https://*.cloudflare.com'],

      styleSrc: ["'self'", 'https:', 'unsafe-inline'],

      connectSrc: ["'self'", 'data', 'https://*.cloudflare.com'],
    },
  }),
);

//2 limiter request something ip
const limiter = rateLimit({
  // midleware giới hạn các lần gửi req quá nhiều từ một ip nào đó
  max: 100,
  windowMs: 60 * 60 * 1000, // 60 minutes,
  message: 'Too many requests from this ip , please try again in a hour!',
});
app.use('/api/', limiter);

app.use((req, res, next) => {
  console.log('hello middleware 😘');
  req.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/comments', commentRouter);
app.use('/api/v1/replyComments', replyCommentRouter);

app.use('*', (req, res, next) => {
  return next(new AppError('404', 404));
});

app.use(handleError());

const httpServer = createServer(app);

export default httpServer;
