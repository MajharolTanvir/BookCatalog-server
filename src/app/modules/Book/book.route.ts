import express from "express";

const router = express.Router();

// router.post(
//   "/create-student",
//   validationRequest(UserValidation.createStudentZodSchema),
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   UserController.createStudent,
// );

// router.post(
//   "/create-faculty",
//   validationRequest(UserValidation.createFacultyZodSchema),
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   UserController.createFaculty,
// );

// router.post(
//   "/create-admin",
//   auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
//   validationRequest(UserValidation.createAdminZodSchema),
//   UserController.createAdmin,
// );

export const BookRoutes = router;
