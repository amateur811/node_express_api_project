import express from 'express';
import {createUser, newUrl,getUserById,deleteUserById,updateUserById} from '../controllers/users.js';

const router = express.Router();

router.get('/users',newUrl);

router.post('/post',createUser);

//users/2 here 2 is stored in request parameter
router.get('/:id', getUserById);

router.delete('/:id',deleteUserById);

router.patch('/:id',updateUserById);

export default router;