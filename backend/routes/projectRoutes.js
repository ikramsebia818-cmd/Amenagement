const express = require('express');
const router = express.Router();

const {
  getProjects,
  createProject
} = require('../controllers/projectController');

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Get all projects
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   result:
 *                     type: string
 */
router.get('/projects', getProjects);

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Create project
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               result:
 *                 type: string
 *     responses:
 *       200:
 *         description: Saved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post('/projects', createProject);

module.exports = router;