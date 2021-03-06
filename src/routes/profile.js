const router = require('express').Router()
const uploadImage = require('../middleware/multer')
const { get_personal, patch_personal_name, patch_personal_phone, patch_profile_image, deleteImage } = require('../controller/profile/profile')

router.get('/personal/:id', get_personal)
router.patch('/profile_image/:id', uploadImage, patch_profile_image)
router.patch('/personal_name/:id', patch_personal_name)
router.patch('/personal_phone/:id', patch_personal_phone)
router.patch('/delete/image/:id', deleteImage)

module.exports = router
