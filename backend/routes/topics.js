const express = require('express');
const router = express.Router();
const {
  getTopics,
  getTopicById,
  createTopic,
} = require('../controllers/topicsController');

router.route('/').get(getTopics).post(createTopic);
router.route('/:id').get(getTopicById);

module.exports = router;
