const express = require('express');
const router = express.Router();
const db = require('../util/database');
const { v4: uuidv4 } = require('uuid');

router.get('/',(req, res, next) => {
    const query = 'SELECT * FROM todolist';
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            todos: dbRes.rows
        });
    }).catch(dbErr => {
        next(dbErr);
    });
});

router.post('/', (req, res, next) => {
    const query = `
        INSERT INTO todolist
        VALUES (
            '${uuidv4()}', 
            '${req.body.task}'
          
            )`;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            data: dbRes.rows,
            message: 'Task added successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
});
router.delete('/:id',(req, res, next) => {
    const query = `
        DELETE FROM todolist
        WHERE id='${req.params.id}'
    `;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            message: 'Task Deleted Successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
});

module.exports = router;
