
const express = require('express')

const app = express()

const cors = require('cors')

const PORT = 7000

app.use(cors())

const necromorphs = {
    'brute':{
        'name': 'Brute',

        'description': 'The Brute is a large Necromorph composed of multiple human corpses. It has heavy organic armor in its  front and possesses extreme physical strength, making it a deadly foe in combat.',

        'attack':['The Brute is a large Necromorph composed of multiple human corpses. It has heavy organic armor in its  front and possesses extreme physical strength, making it a deadly foe in combat.', 'They are also able to produce ranged attacks consisting of explosive organic bombs, provided that an arm or leg has been dismembered.'],

        'strategy': ['The Flamethrower is one of the most effective weapons to use on a Brute. It can even be used from the front, as the flames can still reach its back, just keep up a continuous spray of fire.', 'When the Brute charges, use Stasis on it and at the right time, run behind it and shoot its hind leg as much as possible very quickly with either the Plasma Cutter or the Line Gun.'] 
    },
    'dividers':{
        'name': 'Dividers',

        'description': 'Dividers are tall, thin Necromorphs with the unique ability to break apart into smaller creatures.',
        
        'attack':['Dividers use their claws to slash prey.', 'They can choke and eventually decapitate their victims with a long, tongue like appendage.', 'They can split apart into smaller, individual Necromorphs that are composed of miscellaneous body parts.'],

        'strategy': ['Dividers are always heard shortly before they are encountered, as they emit a deep, loud bellow. ', 'When contact is established with one, freezing it with Stasis and using the Flamethrower or Contact Beam to destroy it is a good tactic.'] 
    },
    'infectors':{

        'name': 'Infectors',

        'description': 'The Infector is a unique Necromorph. The Infector\'s sole purpose is to spread the Necromorph contagion, thus creating more Necromorphs to spread the infestation.',
        
        'attack':['Infectors use the talons on their wings to slash prey.', 'They can impale victims through the forehead with their proboscis.'],

        'strategy': ['They can impale victims through the forehead with their proboscis.', 'A risky strategy is by baiting an Infector to attack the player, which can prompt a Quick-Time-Event. Winning the event will have Isaac kill the Infector instantly.'] 
    },
    'pods':{

        'name': 'Pods',

        'description': 'Pods are small embryo-like Necromorphs that Guardians eject as a means of self-defense.',
        
        'attack':['Whips small projectiles to deal damage.'],

        'strategy': ['Some weapons are better suited for severing a Pods tentacle, more specifically weapons with a wide-ranged blast such as the Line Gun.', 'After a Pod fires a projectile it takes time for it to "recharge",giving you a small window of opportunity to sever the tentacle.'] 
    },
    'slasher':{

        'name': 'Slashers',

        'description': 'Slashers are the most common form of Necromorphs. While relatively weak when alone, and possessing slow reflexes, Slashers can pose a serious threat when in groups',
        
        'attack':['Slash and rend prey with sharp, elongated arm/shoulder blades.','Bites its victim\'s head off','Attempts to stab its victim to death, usually by penetrating the neck' ],

        'strategy': ['A Slasher dies immediately after losing both arms.', 'When a leg is severed, a Slasher\'s mobility is severely hindered,and it becomes a much more vulnerable target.', 'Usually the most effective way to kill a Slasher is to dismember one of its legs, and then one of its arms.'] 
    },
    'unkown creature':{
        'name': 'Unkown',

        'description': 'unkown creature',
        
        'attack':['unkown creature'],

        'strategy': ['unkown creature'] 
    }
}

app.get('/', (request, response)=>{
    //__dirname just says that wherever the server.js is located, that is where we are gonna start looking for our html.
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:necromorph', (request,response)=>{
    //Rapper name is now a query parameter, it takes the rapper name from the query param.
    const necromorphName = request.params.necromorph.toLowerCase()
    //If rappersName inside of the objects of rappers
    if(necromorphs[necromorphName]){
        response.json(necromorphs[necromorphName])
    }else{
        response.json(rappers['unkown creature'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})