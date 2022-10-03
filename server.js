
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
    'divider':{
        'name': 'Dividers',

        'description': 'Dividers are tall, thin Necromorphs with the unique ability to break apart into smaller creatures.',
        
        'attack':['Dividers use their claws to slash prey.', 'They can choke and eventually decapitate their victims with a long, tongue like appendage.', 'They can split apart into smaller, individual Necromorphs that are composed of miscellaneous body parts.'],

        'strategy': ['Dividers are always heard shortly before they are encountered, as they emit a deep, loud bellow. ', 'When contact is established with one, freezing it with Stasis and using the Flamethrower or Contact Beam to destroy it is a good tactic.'] 
    },
    'infector':{

        'name': 'Infectors',

        'description': 'The Infector is a unique Necromorph. The Infector\'s sole purpose is to spread the Necromorph contagion, thus creating more Necromorphs to spread the infestation.',
        
        'attack':['Infectors use the talons on their wings to slash prey.', 'They can impale victims through the forehead with their proboscis.'],

        'strategy': ['They can impale victims through the forehead with their proboscis.', 'A risky strategy is by baiting an Infector to attack the player, which can prompt a Quick-Time-Event. Winning the event will have Isaac kill the Infector instantly.'] 
    },
    'pod':{

        'name': 'Pods',

        'description': 'Pods are small embryo-like Necromorphs that Guardians eject as a means of self-defense.',
        
        'attack':['Whips small projectiles to deal damage.'],

        'strategy': ['Some weapons are better suited for severing a Pods tentacle, more specifically weapons with a wide-ranged blast such as the Line Gun.', 'After a Pod fires a projectile it takes time for it to "recharge",giving you a small window of opportunity to sever the tentacle.'] 
    },
    'swarmers':{

        'name': 'Swarmers',

        'description': 'Swarmers are tiny Necromorphs that appear to be composed only of re-animated bits of flesh that attack in large numbers and attempt to latch onto Isaac and overwhelm him.',
        
        'attack':['They lunge upon their foes en mass, biting unfortunate victims until they succumb.'],

        'strategy': ['A shot of Stasis can slow down an entire swarm, making them easier to kill and escape from.', 'The best weapons for eliminating a swarm are those with splash-damage weaponry.','The Flamethrower is a great choice for clearing a swarm if you\'re carrying it.'] 
    },
    'cyst':{

        'name': 'Cyst',

        'description': 'The Cyst is a stationary Necromorph variant.',
        
        'attack':['Excreting organic pods that explodes and damages surrounding targets.'],

        'strategy': ['One strategy is to turn your back to the Cyst when you have found it and slowly walk backwards to it. As soon as you hear it launch the mine,  sprint straight forward to avoid the explosion. The Stasis Module can help with this.'] 
    },
    'puker':{

        'name': 'Puker',

        'description': 'The Puker\'s digestive acids drastically alters their appearance, melting and merging their flesh. The host\'s original legs have entwined, and a clump of intestines, nerves and muscles have grown down to form an additional leg.',
        
        'attack':['Projects corrosive bile.', 'Slashing with its disfigured claws when approached too closely.'],

        'strategy': ['It is always recommended to engage the Puker from a distance or at least put some space between you and it.','If you choose to attack the Puker up close, it is advised that you Stasis it in order to stunt its reflexes.'] 
    },
    'slasher':{

        'name': 'Slashers',

        'description': 'Slashers are the most common form of Necromorphs. While relatively weak when alone, and possessing slow reflexes, Slashers can pose a serious threat when in groups',
        
        'attack':['Slash and rend prey with sharp, elongated arm/shoulder blades.','Bites its victim\'s head off','Attempts to stab its victim to death, usually by penetrating the neck' ],

        'strategy': ['A Slasher dies immediately after losing both arms.', 'When a leg is severed, a Slasher\'s mobility is severely hindered,and it becomes a much more vulnerable target.', 'Usually the most effective way to kill a Slasher is to dismember one of its legs, and then one of its arms.'] 
    },
    'unkown':{
        'name': 'unkown creature',

        'description': 'No records of this creature',
        
        'attack':['No records of this creature'],

        'strategy': ['No records of this creature'] 
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
        response.json(necromorphs['unkown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})