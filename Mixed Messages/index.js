
const collection = [

    signs = ["Leo", "Aries", "Sagittarius","Taurus","Virgo","Capricorn","Gemini","Libra","Aquarium","Cancer","Scorpio","Pisces"],

    attributes = ["generous and open-minded", "adventurous and courageous", "intelligent and philosophical","romantics","born under the sign are very analytical","prudent and practical",
    "versatile and quick-witted","romantic and act with serenity","have outstanding intelligent and a good sense of humor",
"people are sentimental","are passionate individuals with a magnetic personality", "are sensitive and sympathetic"],
    personality = ["have a good sense of humor", "show deep love for magnificence and luxury", "generally independent","tend to think overly on any given subject","love for style and beauty is apparent in their way of living","plan before playing any game of life",
"be independent thinkers with great originality in their thoughts and actions","be balanced in nature and know how to remain calm at all occasions","love towards life, is evident from their living",
"cautious in their actions","have clarity of thought and expression","can go out of their way to help their dear ones"],
    weaks = ["start to act impatiently", "may be egotistic and bossy", "have many moods and whims can be bothersome","may come across as sadistic individuals who are orthodox and rigid","can be possessive about everything  have","can become a cause of their troubles",
    "tend to worry too much on certain issues and fail in managing their stress","find it difficult to express themselves","may appear indifferent and less emotional",
"are subject to varying moods","due to their possessive nature, they become jealous quite easily","opinions of others can easily influence themv"],

    love = ["their impulsiveness love is incurable","are good lover","are the most passionate of all","often frequents shady places to find love","are a liares by nature, they are a real heartbreaker","don't care about love, in fact hates it",
    "are fearful in relationships, they don't trust anyone","are true Romeo if they talk to you they make you fall in love","despise love and even themselves","fully engage in relationships","are very violent and aggressive in sex","depending on their mood, they only love you, they only want you, they only hate you, or all inclusive"],
    number = [11,99,3,45,78,6,8,13,21,48,25,12],
    color = ["yellow","blue","red","gray","green","purple","white","black","pink","brown","cian","orange"]
]

const complement = ["The sign", ["these people are","they are","are people"], ["are characterized by","are highlighted by","their quality are"],["very often they","sometimes they","almost never they"],["cupid thinks that","the others believe that","themselves and the whole world knows that"],["and 0","and 7","and 17"],["dark","standar","light"]]

function random(){
    return Math.floor(Math.random() * 11);
}

const randomData = {
    returnData(){
        let message = []
        collection.forEach((e,i) => {
            message[i] = e[random()]
        })
        return message;
    }
}

