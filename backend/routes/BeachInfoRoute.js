const express = require("express");
const BeachInfoController = require('../controllers/BeachInfoController');
const isAdmin = require('../middlewares/isAdminMiddleWare');
const router = express.Router();

router.get("/", isAdmin, BeachInfoController.getAllBeachInfo);
router.get("/:id", isAdmin, BeachInfoController.getBeachInfoById);
router.post("/create", BeachInfoController.createBeachInfo);
router.patch("/update", isAdmin, BeachInfoController.updateBeachInfo);
router.delete("/delete", isAdmin, BeachInfoController.deleteBeachInfo);

module.exports = router;
// [{
//     "_id": {
//         "$oid": "947e274b961b8485a84dbdc1"
//     },
//     "spot": "Ashdod",
//     "lat": 31.8009,
//     "long": 34.6324,
//     "description": "The best beach location at the south part of israel",
//     "video": "https://www.youtube.com/embed/1sl7o94YvEA?autoplay=1&mute=1"
//
// },
//     {
//         "_id": {
//             "$oid": "947e274b961b8485a84dbdc2"
//         },
//         "spot": "Bat-Yam",
//         "lat": 32.0298,
//         "long": 34.74088,
//         "description": "Just 10 min driving from the center of Tel Aviv",
//         "video": "https://www.youtube.com/embed/GBGYGJAXDKw?autoplay=1&mute=1"
//     }
// ]