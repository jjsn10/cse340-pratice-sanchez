import { Router } from 'express';

// Create a new router instance
const router = Router();

// Import controllers
import { homePage, aboutPage, demoPage, testErrorPage } from './index.js';
import { catalogPage, courseDetailPage } from './catalog/catalog.js';
import { facultyListPage, facultyDetailPage } from './faculty/faculty.js';

// Import middleware
import { addDemoHeaders } from '../middleware/demo/headers.js';

// Home and basic pages
router.get('/', homePage);
router.get('/about', aboutPage);

// Course catalog routes
router.get('/catalog', catalogPage);
router.get('/catalog/:courseId', courseDetailPage);

//Faculty
router.get('/faculty', facultyListPage);
router.get('/faculty/:facultyId', facultyDetailPage);


// Demo page with special middleware
router.get('/demo', addDemoHeaders, demoPage);

// Route to trigger a test error
router.get('/test-error', testErrorPage);

export default router;