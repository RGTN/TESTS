var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.Builder');
var roleMelee = require('role.Melee');
var roleRanged = require('role.Ranged');

module.exports.loop = function () {

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
		if(creep.memory.role == 'builder') {
			roleBuilder.run(creep);
    	}
		if(creep.memory.role == 'melee') {
			roleMelee.run(creep);
		}
		if(creep.memory.role == 'ranged') {
			roleRanged.run(creep);
		}
	}
}
