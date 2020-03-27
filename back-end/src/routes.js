import Router from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from "./app/controllers/AppointmentController";
import authMiddleware from './app/middlewares/auth';
import multer from 'multer';
import multerConfig from './config/multer';
import ScheduleController from "./app/controllers/ScheduleController";
import NotificationController from "./app/controllers/NotificationController";

const upload = multer(multerConfig);

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.post("/appointments", AppointmentController.store);
routes.get("/appointments", AppointmentController.index);
routes.get("/schedule", ScheduleController.index);

routes.put("/users", UserController.update);
routes.post('/files', upload.single('file'), FileController.store);
routes.get("/provider", ProviderController.index);
routes.get("/notifications", NotificationController.index);
routes.put("/notifications:id", NotificationController.update);


export default routes;