const Topic = require('../models/topicModel');

const getTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (error) {
    res.status(500).json({ message: 'Unable to fetch topics' });
  }
};

const getTopicById = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);

    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' });
    }

    res.json(topic);
  } catch (error) {
    res.status(500).json({ message: 'Unable to fetch topic' });
  }
};

const createTopic = async (req, res) => {
  const { title, description, category } = req.body;

  try {
    const topic = await Topic.create({ title, description, category });
    res.status(201).json(topic);
  } catch (error) {
    res.status(400).json({ message: 'Unable to create topic' });
  }
};

module.exports = {
  getTopics,
  getTopicById,
  createTopic,
};
