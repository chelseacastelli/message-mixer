

const sentenceCatalog = {
    "Sentences": {
        "You": {
            "verb": ['hold', 'ate', 'have', 'launched', 'love', 'will'],
            "number": [1, 4, 6, 12, 2, 0],
            "adjective": ['hairy', 'smelly', 'tall', 'cuddly', 'moist'],
            "noun": ['socks', 'superheros', 'monkeys', 'baseball mitts', 'raspberrys'],
        },
        "You're": {
            "verb": ['holding', 'walking', 'snoring', 'dodging'],
            "number": [1, 4, 6, 12, 2, 0],
            "adjective": ['heavy', 'slow', 'tired', 'smart'],
            "noun": ['earmuffs', 'beepers', 'pillows', 'sandals']
        },
        "I": {
            "verb": ['told', 'worked', 'called', 'tried', 'sniffed'],
            "number": [1, 4, 6, 12, 2, 0],
            "adjective": ['long', 'cold', 'pretty', 'gigantic'],
            "noun": ['stickers', 'belts', 'shovels', 'pomegranate seeds', 'spine-broken books']
        },
        "They": {
            "verb": ['stole', 'smells', 'knitted', 'sold', 'hung'],
            "number": [1, 4, 6, 12, 2, 0, 54],
            "adjective": ['bouncing', 'icky', 'wet', 'blinding'],
            "noun": ['desks', 'alarm clocks', 'pool floats', 'vinyl records']
        },
        "He": {
            "verb": ['owns', 'cursed', 'played', 'dug'],
            "number": [1, 4, 6, 12, 2, 0],
            "adjective": ['obedient', 'lazy', 'microscopic', 'chubby'],
            "noun": ['napkins', 'chargers', 'straws', 'croissants']
        },
        "She": {
            "verb": ['wipes', 'swung', 'moonwalked', 'cleaned', 'berates'],
            "number": [1, 4, 6, 12, 2, 0],
            "adjective": ['flabby', 'worried', 'zealous', 'gentle'],
            "noun": ['watermelons', 'ostriches', 'camping tents', 'pianos', 'bushes']
        }
    }
}

/**
 * Randomly walk through object to create sentence
 */
const randomWalk = () => {
    let subject = Object.keys(sentenceCatalog["Sentences"]);
    subject = subject[Math.floor(Math.random() * subject.length)];

    let verb = sentenceCatalog["Sentences"][subject]["verb"];
    verb = verb[Math.floor(Math.random() * verb.length)];

    let number = sentenceCatalog["Sentences"][subject]["number"];
    number = number[Math.floor(Math.random() * number.length)];

    let adjective = sentenceCatalog["Sentences"][subject]["adjective"];
    adjective = adjective[Math.floor(Math.random() * adjective.length)];

    let noun = sentenceCatalog["Sentences"][subject]["noun"];
    noun = noun[Math.floor(Math.random() * noun.length)];

    // Change noun from plural to singular when referring to 1 instance of it
    if (number === 1 && noun[noun.length-1] === 's') { 
        let cutChars = 1;
        if (noun[noun.length-2] == 'e'){
            cutChars += 1;
        }

        noun = noun.slice(0, noun.length-cutChars);
    }

    console.log(subject, verb, String(number), adjective, noun);
}

randomWalk();