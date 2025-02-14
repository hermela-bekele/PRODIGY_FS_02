import express from 'express';
import con from '../utils/db.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post( '/adminlogin', (req, res) => {
    //console.log(req.body)
    const sql = "SELECT * from admin where email = ? and password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if(err) return res.json({loginStatus: false, Error: "Query failed"});
            if (result.length > 0){
                const email = result[0].email;
                const token = jwt.sign({ role: "admin", email: email}, "jwt_secret_key", {expiresIn: '1d'}
                );
                res.cookie('token', token)
                return res.json({loginStatus: false});
            } else {
                return res.json({loginStatus: false, Error: "Wrong email or password"});
            }
    });
});

export { router as adminRouter}



