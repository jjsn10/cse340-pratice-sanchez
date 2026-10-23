import { getFacultyById, getSortedFaculty } from "../../models/faculty/faculty.js";

// Route handler for the course catalog list page
const facultyListPage = (req, res) => {
    const faculties = getSortedFaculty(req.query.sort);

    res.render('faculty/list', {
        title: 'Faculty List',
        faculties: faculties,
    });
};

const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    console.log(`Fetching faculty with ID: ${facultyId}`);
    const faculty = getFacultyById(facultyId);
    console.log(`Fetched faculty: ${JSON.stringify(faculty)}`);

    // If faculty doesn't exist, create 404 error
    if (!faculty) {
        const err = new Error(`Faculty ${facultyId} not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: `${faculty.name}`,
        faculty: faculty
    });
};


export { facultyListPage, facultyDetailPage };