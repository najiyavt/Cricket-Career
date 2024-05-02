
const Profile = require('../models/player');

exports.postProfile = async (req, res) => {
    try {
        const { name , dob , imgUrl , place, career, score} = req.body;
        const newProfile = await Profile.create({ 
            name: name,
            dob: dob,
            imgUrl: imgUrl,
            place: place,
            career: career,
            score: score
        });
        res.json(newProfile);
    } catch (error) {
        console.error('Error saving profile data:', error);
        res.status(500).json({ error: 'Failed to save profile data' });
    }
};
exports.getByName = async (req, res) => {
    const playerName = req.params.name;
    try {
        const profile = await Profile.findOne({ where: { name: playerName } });
        res.json(profile);
    } catch (error) {
        console.error('Error searching for profile:', error);
        res.status(500).json({ error: 'Failed to search for profile' });
    }
};
exports.editProfile= async (req, res) => {
    try {
      const playerId = req.params.id;
      const player = await Profile.findByPk(playerId);
        res.json(player);
      
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

exports.deleteProfile = async (req, res) => {
    try {
      const playerId = req.params.id;
      const player = await Profile.findByPk(playerId);
      if (!player) {
        return res.status(404).json({ error: 'Player not found' });
      }
      await player.destroy();
  
      res.json({ message: 'Player deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }