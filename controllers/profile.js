
const Profile = require('../models/player');

exports.postProfile = async (req, res) => {
    try {
        const { name , dob , imgUrl , place, career, score} = req.body;
        console.log(req.body)
        const newProfile = await Profile.create(req.body);
        res.status(201).json(newProfile);
    } catch (error) {
        console.error('Error saving profile data:', error);
        res.status(500).json({ error: 'Failed to save profile data' });
    }
};
exports.getProfile = async (req, res) => {
    const playerName = req.params.name;
    try {
        const profile = await Profile.findOne({ where: { name: playerName } });
        res.status(200).json(profile);
    } catch (error) {
        console.error('Error searching for profile:', error);
        res.status(500).json({ error: 'Failed to search for profile' });
    }
};
exports.getBySearch= async(req,res) => {
    try{
        const id = req.params.id;

        const profile = await Profile.findByPk(id);
        res.status(200).json(profile);
        
    }catch(error){
        console.error('Error :', error);
        res.status(500).json({ error: 'Failed' });
    }
}

exports.deleteProfile = async(req,res) => {
    try{
        const id  = req.params.id;
        const profile = await Profile.findByPk(id);
        if(!profile){
            return res.status(404).json({ error: 'Player not found' });
        }
        await profile.destroy();
        res.json({ message: 'Player deleted successfully' });
    }catch(error){
        console.error('Error searching for profile :', error);
        res.status(500).json({ error: 'Failed to delete for profile'});
    }
}
