const Building = require("../models/Building");
const Block = require("../models/Block");
const Floor = require("../models/Floor");

exports.setBuildingDetails = async (req, res) => {
    try {
        const { building, blocks, floors, controller } = req.body;
        const buildingDetail = await Building.create({
            building_name: building,
            controlled_by: controller
        });
    
        // create and save all blocks
        blocks.forEach(async (block) => {
            const blockDetail = await Block.create({
                block_name: block,
                of_building: buildingDetail._id
            });
            floors.forEach(async (floor) => {
                await Floor.create({
                    floor_name: floor,
                    of_block: blockDetail._id,
                    of_building: buildingDetail._id
                });
            })
        })
        res.status(200).json({
            msg: "ok"
        });
    } catch(err) {
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}