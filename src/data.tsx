import type { Subject } from "./type";

// export const DATA: Subject[] = [
//   {
//     id: "science",
//     title: "Science (Year 3) for Gabi",
//     exams: [
//       {
//         id: "science-midterm-1",
//         title: "Science - Mid Term (Round 1)",
//         questions: [
//           {
//             id: "s-q1",
//             prompt: "What do we call the condition of the air around us?",
//             choices: [
//               { id: "A", text: "Rain" },
//               { id: "B", text: "Climate" },
//               { id: "C", text: "Weather" },
//               { id: "D", text: "Cloud" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "s-q2",
//             prompt: "Which tool measures temperature?",
//             choices: [
//               { id: "A", text: "Ruler" },
//               { id: "B", text: "Thermometer" },
//               { id: "C", text: "Clock" },
//               { id: "D", text: "Compass" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "s-q3",
//             prompt: "What is climate?",
//             choices: [
//               { id: "A", text: "The daily weather" },
//               { id: "B", text: "The weather of one day" },
//               { id: "C", text: "The usual weather of a place over time" },
//               { id: "D", text: "A rainy day" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "s-q4",
//             prompt: "Which season is the hottest?",
//             choices: [
//               { id: "A", text: "Winter" },
//               { id: "B", text: "Spring" },
//               { id: "C", text: "Summer" },
//               { id: "D", text: "Autumn" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "s-q5",
//             prompt: "On a rainy day, the sky is usually:",
//             choices: [
//               { id: "A", text: "Blue" },
//               { id: "B", text: "Clear" },
//               { id: "C", text: "Cloudy" },
//               { id: "D", text: "Bright" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "s-q6",
//             prompt: "How many seasons are in a year?",
//             choices: [
//               { id: "A", text: "3" },
//               { id: "B", text: "4" },
//               { id: "C", text: "5" },
//               { id: "D", text: "2" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "s-q7",
//             prompt: "What season comes after spring?",
//             choices: [
//               { id: "A", text: "Autumn" },
//               { id: "B", text: "Summer" },
//               { id: "C", text: "Winter" },
//               { id: "D", text: "Rainy" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "s-q8",
//             prompt: "In which season do trees lose their leaves?",
//             choices: [
//               { id: "A", text: "Winter" },
//               { id: "B", text: "Autumn" },
//               { id: "C", text: "Summer" },
//               { id: "D", text: "Spring" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "s-q9",
//             prompt: "Animals with a backbone are called:",
//             choices: [
//               { id: "A", text: "Insects" },
//               { id: "B", text: "Vertebrates" },
//               { id: "C", text: "Invertebrates" },
//               { id: "D", text: "Worms" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "s-q10",
//             prompt: "Animals without a backbone are called:",
//             choices: [
//               { id: "A", text: "Vertebrates" },
//               { id: "B", text: "Mammals" },
//               { id: "C", text: "Invertebrates" },
//               { id: "D", text: "Birds" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "s-q11",
//             prompt: "Which of these is a vertebrate?",
//             choices: [
//               { id: "A", text: "Snail" },
//               { id: "B", text: "Cat" },
//               { id: "C", text: "Spider" },
//               { id: "D", text: "Worm" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "s-q12",
//             prompt: "Which of these is an invertebrate?",
//             choices: [
//               { id: "A", text: "Dog" },
//               { id: "B", text: "Bird" },
//               { id: "C", text: "Fish" },
//               { id: "D", text: "Snail" },
//             ],
//             answerId: "D",
//           },
//           {
//             id: "s-q13",
//             prompt: "The owl can see well at night because it has:",
//             choices: [
//               { id: "A", text: "Small eyes" },
//               { id: "B", text: "Big eyes" },
//               { id: "C", text: "No eyes" },
//               { id: "D", text: "Sunglasses" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "s-q14",
//             prompt: "The impala can run fast because it has:",
//             choices: [
//               { id: "A", text: "Short legs" },
//               { id: "B", text: "Long legs" },
//               { id: "C", text: "No legs" },
//               { id: "D", text: "Fat legs" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "s-q15",
//             prompt: "The owl catches its prey quietly because of its:",
//             choices: [
//               { id: "A", text: "Sharp claws" },
//               { id: "B", text: "Soft feathers" },
//               { id: "C", text: "Loud wings" },
//               { id: "D", text: "Long tail" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "s-q16",
//             prompt: "Why do animals adapt?",
//             choices: [
//               { id: "A", text: "To sleep longer" },
//               { id: "B", text: "To have fun" },
//               { id: "C", text: "To survive in their environment" },
//               { id: "D", text: "To fly high" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "s-q17",
//             prompt: "What is a habitat?",
//             choices: [
//               { id: "A", text: "An animal’s home" },
//               { id: "B", text: "A playground" },
//               { id: "C", text: "A mountain" },
//               { id: "D", text: "A sky" },
//             ],
//             answerId: "A",
//           },
//           {
//             id: "s-q18",
//             prompt: "Which animal lives in the grasslands?",
//             choices: [
//               { id: "A", text: "Owl" },
//               { id: "B", text: "Impala" },
//               { id: "C", text: "Whale" },
//               { id: "D", text: "Snail" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "s-q19",
//             prompt: "What does a snail need in its habitat?",
//             choices: [
//               { id: "A", text: "Dry sand" },
//               { id: "B", text: "Soft soil and leaves" },
//               { id: "C", text: "Hot rocks" },
//               { id: "D", text: "Ice" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "s-q20",
//             prompt: "Which of these is not weather?",
//             choices: [
//               { id: "A", text: "Rainy" },
//               { id: "B", text: "Sunny" },
//               { id: "C", text: "Windy" },
//               { id: "D", text: "Happy" },
//             ],
//             answerId: "D",
//           },
//           {
//             id: "s-q21",
//             prompt: "What do we wear when it rains?",
//             choices: [
//               { id: "A", text: "Shorts" },
//               { id: "B", text: "Raincoat" },
//               { id: "C", text: "Sunglasses" },
//               { id: "D", text: "Hat" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "s-q22",
//             prompt: "Which season is coldest?",
//             choices: [
//               { id: "A", text: "Summer" },
//               { id: "B", text: "Spring" },
//               { id: "C", text: "Winter" },
//               { id: "D", text: "Autumn" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "s-q23",
//             prompt: "Which of these animals is warm-blooded?",
//             choices: [
//               { id: "A", text: "Fish" },
//               { id: "B", text: "Snake" },
//               { id: "C", text: "Bird" },
//               { id: "D", text: "Spider" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "s-q24",
//             prompt: "Which of these can live both on land and in water?",
//             choices: [
//               { id: "A", text: "Frog" },
//               { id: "B", text: "Dog" },
//               { id: "C", text: "Cat" },
//               { id: "D", text: "Cow" },
//             ],
//             answerId: "A",
//           },
//           {
//             id: "s-q25",
//             prompt: "Which animal has a shell?",
//             choices: [
//               { id: "A", text: "Frog" },
//               { id: "B", text: "Dog" },
//               { id: "C", text: "Snail" },
//               { id: "D", text: "Bird" },
//             ],
//             answerId: "C",
//           },
//         ],
//       },
//       {
//         id: "science-midterm-2",
//         title: "Science - Mid Term (Round 2)",
//         questions: [
//           {
//             id: "s2-q1",
//             prompt: "Which of these is a vertebrate animal?",
//             choices: [
//               { id: "A", text: "Spider" },
//               { id: "B", text: "Snail" },
//               { id: "C", text: "Fish" },
//               { id: "D", text: "Crab" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "s2-q2",
//             prompt: "What do insects have covering their body?",
//             choices: [
//               { id: "A", text: "Fur" },
//               { id: "B", text: "Scales" },
//               { id: "C", text: "Feathers" },
//               { id: "D", text: "Exoskeleton" },
//             ],
//             answerId: "D",
//           },
//           {
//             id: "s2-q3",
//             prompt: "How many body parts do insects have?",
//             choices: [
//               { id: "A", text: "2" },
//               { id: "B", text: "3" },
//               { id: "C", text: "4" },
//               { id: "D", text: "5" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "s2-q4",
//             prompt: "Which of these is an arachnid?",
//             choices: [
//               { id: "A", text: "Butterfly" },
//               { id: "B", text: "Spider" },
//               { id: "C", text: "Crab" },
//               { id: "D", text: "Earthworm" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "s2-q5",
//             prompt: "What do owls have that help them see well at night?",
//             choices: [
//               { id: "A", text: "Large eyes" },
//               { id: "B", text: "Webbed feet" },
//               { id: "C", text: "Long tail" },
//               { id: "D", text: "Striped fur" },
//             ],
//             answerId: "A",
//           },
//           {
//             id: "s2-q6",
//             prompt: "How do impalas protect themselves from predators?",
//             choices: [
//               { id: "A", text: "By flying away" },
//               { id: "B", text: "By swimming" },
//               { id: "C", text: "By running very fast" },
//               { id: "D", text: "By playing dead" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "s2-q7",
//             prompt: "What is important to include when making a snail habitat?",
//             choices: [
//               { id: "A", text: "Sand and heat lamp" },
//               { id: "B", text: "Rocks and sunlight" },
//               { id: "C", text: "Soil and moisture" },
//               { id: "D", text: "Gravel and dry leaves" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "s2-q8",
//             prompt: "Which animal would you find in a desert habitat?",
//             choices: [
//               { id: "A", text: "Polar bear" },
//               { id: "B", text: "Penguin" },
//               { id: "C", text: "Camel" },
//               { id: "D", text: "Seal" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "s2-q9",
//             prompt: "What do mammals have that other vertebrates don't?",
//             choices: [
//               { id: "A", text: "Scales" },
//               { id: "B", text: "Fur or hair" },
//               { id: "C", text: "Fins" },
//               { id: "D", text: "Gills" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "s2-q10",
//             prompt: "Where do crustaceans mostly live?",
//             choices: [
//               { id: "A", text: "In deserts" },
//               { id: "B", text: "In forests" },
//               { id: "C", text: "In water" },
//               { id: "D", text: "In mountains" },
//             ],
//             answerId: "C",
//           },
//         ],
//       },
//     ],
//   },

//   {
//     id: "history",
//     title: "History (Year 3) for Gabi",
//     exams: [
//       {
//         id: "history-midterm-1",
//         title: "History - Mid Term (Round 1)",
//         questions: [
//           {
//             id: "h-q1",
//             prompt: "Where was Ancient Rome?",
//             choices: [
//               { id: "A", text: "Africa" },
//               { id: "B", text: "Italy" },
//               { id: "C", text: "Egypt" },
//               { id: "D", text: "England" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h-q2",
//             prompt: "What river was near Rome?",
//             choices: [
//               { id: "A", text: "Nile" },
//               { id: "B", text: "Amazon" },
//               { id: "C", text: "Tiber" },
//               { id: "D", text: "Blue Nile" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h-q3",
//             prompt: "What were the people of Rome called?",
//             choices: [
//               { id: "A", text: "Romans" },
//               { id: "B", text: "Greeks" },
//               { id: "C", text: "Egyptians" },
//               { id: "D", text: "Knights" },
//             ],
//             answerId: "A",
//           },
//           {
//             id: "h-q4",
//             prompt: "Who was the leader of Ancient Rome?",
//             choices: [
//               { id: "A", text: "King" },
//               { id: "B", text: "President" },
//               { id: "C", text: "Emperor" },
//               { id: "D", text: "Mayor" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h-q5",
//             prompt: "What language did the Romans speak?",
//             choices: [
//               { id: "A", text: "English" },
//               { id: "B", text: "Latin" },
//               { id: "C", text: "Greek" },
//               { id: "D", text: "French" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h-q6",
//             prompt: "What did the Romans use for writing?",
//             choices: [
//               { id: "A", text: "Paper" },
//               { id: "B", text: "Wax tablets" },
//               { id: "C", text: "Stone walls" },
//               { id: "D", text: "Computers" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h-q7",
//             prompt: "What kind of big building did the Romans use for games?",
//             choices: [
//               { id: "A", text: "Stadium" },
//               { id: "B", text: "Colosseum" },
//               { id: "C", text: "School" },
//               { id: "D", text: "Castle" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h-q8",
//             prompt: "What are Romans famous for building?",
//             choices: [
//               { id: "A", text: "Airplanes" },
//               { id: "B", text: "Roads and bridges" },
//               { id: "C", text: "Ships" },
//               { id: "D", text: "Bicycles" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h-q9",
//             prompt: "Who went to school in Ancient Rome?",
//             choices: [
//               { id: "A", text: "Only girls" },
//               { id: "B", text: "Only boys" },
//               { id: "C", text: "Everyone" },
//               { id: "D", text: "Only soldiers" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h-q10",
//             prompt: "What did Roman children use to write with?",
//             choices: [
//               { id: "A", text: "Pen and ink" },
//               { id: "B", text: "Pencil" },
//               { id: "C", text: "Stylus" },
//               { id: "D", text: "Brush" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h-q11",
//             prompt: "What did Roman teachers use to teach?",
//             choices: [
//               { id: "A", text: "TV" },
//               { id: "B", text: "Books" },
//               { id: "C", text: "Wax tablets" },
//               { id: "D", text: "Chalkboard" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h-q12",
//             prompt: "Did Roman children have books like today?",
//             choices: [
//               { id: "A", text: "Yes" },
//               { id: "B", text: "No" },
//               { id: "C", text: "Sometimes" },
//               { id: "D", text: "Only on weekends" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h-q13",
//             prompt: "What subject did Roman boys learn most?",
//             choices: [
//               { id: "A", text: "Reading and writing" },
//               { id: "B", text: "Drawing" },
//               { id: "C", text: "Dancing" },
//               { id: "D", text: "Music" },
//             ],
//             answerId: "A",
//           },
//           {
//             id: "h-q14",
//             prompt: "Who taught the Roman children?",
//             choices: [
//               { id: "A", text: "Friends" },
//               { id: "B", text: "Tutors" },
//               { id: "C", text: "Parents only" },
//               { id: "D", text: "Soldiers" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h-q15",
//             prompt: "What did Roman men wear?",
//             choices: [
//               { id: "A", text: "Coats" },
//               { id: "B", text: "Togas" },
//               { id: "C", text: "Shorts" },
//               { id: "D", text: "Uniforms" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h-q16",
//             prompt: "What did Roman women wear?",
//             choices: [
//               { id: "A", text: "Stolas" },
//               { id: "B", text: "Pants" },
//               { id: "C", text: "Capes" },
//               { id: "D", text: "Aprons" },
//             ],
//             answerId: "A",
//           },
//           {
//             id: "h-q17",
//             prompt: "What did children wear?",
//             choices: [
//               { id: "A", text: "Uniform" },
//               { id: "B", text: "Tunics" },
//               { id: "C", text: "Robes" },
//               { id: "D", text: "Shirts" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h-q18",
//             prompt: "Why did rich Romans wear colorful clothes?",
//             choices: [
//               { id: "A", text: "To look rich" },
//               { id: "B", text: "To play games" },
//               { id: "C", text: "To hide" },
//               { id: "D", text: "To go to bed" },
//             ],
//             answerId: "A",
//           },
//           {
//             id: "h-q19",
//             prompt: "What were Roman shoes called?",
//             choices: [
//               { id: "A", text: "Boots" },
//               { id: "B", text: "Sandals" },
//               { id: "C", text: "Sneakers" },
//               { id: "D", text: "Socks" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h-q20",
//             prompt: "What were Roman baths used for?",
//             choices: [
//               { id: "A", text: "Sleeping" },
//               { id: "B", text: "Washing and relaxing" },
//               { id: "C", text: "Running" },
//               { id: "D", text: "Shopping" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h-q21",
//             prompt: "Were Roman baths only for washing?",
//             choices: [
//               { id: "A", text: "Yes" },
//               { id: "B", text: "No" },
//               { id: "C", text: "Maybe" },
//               { id: "D", text: "Sometimes" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h-q22",
//             prompt: "What else did Romans do at the baths?",
//             choices: [
//               { id: "A", text: "Read and talk" },
//               { id: "B", text: "Work" },
//               { id: "C", text: "Sleep" },
//               { id: "D", text: "Fight" },
//             ],
//             answerId: "A",
//           },
//           {
//             id: "h-q23",
//             prompt: "Were Roman baths hot or cold?",
//             choices: [
//               { id: "A", text: "Both" },
//               { id: "B", text: "Only hot" },
//               { id: "C", text: "Only cold" },
//               { id: "D", text: "Neither" },
//             ],
//             answerId: "A",
//           },
//           {
//             id: "h-q24",
//             prompt: "Why were Roman baths important?",
//             choices: [
//               { id: "A", text: "For cleaning and meeting friends" },
//               { id: "B", text: "To cook food" },
//               { id: "C", text: "To learn" },
//               { id: "D", text: "To sleep" },
//             ],
//             answerId: "A",
//           },
//           {
//             id: "h-q25",
//             prompt: "What did Romans build to carry water?",
//             choices: [
//               { id: "A", text: "Bridges" },
//               { id: "B", text: "Aqueducts" },
//               { id: "C", text: "Pipes" },
//               { id: "D", text: "Wells" },
//             ],
//             answerId: "B",
//           },
//         ],
//       },
//       {
//         id: "history-midterm-2",
//         title: "History - Mid Term (Round 2)",
//         questions: [
//           {
//             id: "h2-q1",
//             prompt: "What was the main purpose of Roman baths besides washing?",
//             choices: [
//               { id: "A", text: "Cooking food" },
//               { id: "B", text: "Entertainment and meeting friends" },
//               { id: "C", text: "Sleeping overnight" },
//               { id: "D", text: "Farming" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-q2",
//             prompt: "What was the warm room called in a Roman bath house?",
//             choices: [
//               { id: "A", text: "Caldarium" },
//               { id: "B", text: "Tepidarium" },
//               { id: "C", text: "Frigidarium" },
//               { id: "D", text: "Hypocaust" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-q3",
//             prompt: "What was the hot room called where Romans would sweat?",
//             choices: [
//               { id: "A", text: "Caldarium" },
//               { id: "B", text: "Tepidarium" },
//               { id: "C", text: "Frigidarium" },
//               { id: "D", text: "Strigil" },
//             ],
//             answerId: "A",
//           },
//           {
//             id: "h2-q4",
//             prompt:
//               "What tool did Romans use to scrape dirt and oil from their skin?",
//             choices: [
//               { id: "A", text: "Stylus" },
//               { id: "B", text: "Strigil" },
//               { id: "C", text: "Spatula" },
//               { id: "D", text: "Scraper" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-q5",
//             prompt: "How did Romans heat the water in their bath houses?",
//             choices: [
//               { id: "A", text: "With electric heaters" },
//               { id: "B", text: "With firewood under the pools" },
//               { id: "C", text: "With a hypocaust system" },
//               { id: "D", text: "With solar power" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-q6",
//             prompt: "What was the most common material for Roman clothing?",
//             choices: [
//               { id: "A", text: "Cotton" },
//               { id: "B", text: "Silk" },
//               { id: "C", text: "Linen" },
//               { id: "D", text: "Wool" },
//             ],
//             answerId: "D",
//           },
//           {
//             id: "h2-q7",
//             prompt: "What garment did married Roman women typically wear?",
//             choices: [
//               { id: "A", text: "Toga" },
//               { id: "B", text: "Tunic" },
//               { id: "C", text: "Stola" },
//               { id: "D", text: "Palla" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-q8",
//             prompt:
//               "What was the main garment worn by Roman men on official occasions?",
//             choices: [
//               { id: "A", text: "Tunic" },
//               { id: "B", text: "Stola" },
//               { id: "C", text: "Toga" },
//               { id: "D", text: "Palla" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-q9",
//             prompt: "What color clothing did Roman men usually wear?",
//             choices: [
//               { id: "A", text: "Bright colors" },
//               { id: "B", text: "Dark black" },
//               { id: "C", text: "White or off-white" },
//               { id: "D", text: "Patterned colors" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-q10",
//             prompt: "What type of shoes did most Romans wear?",
//             choices: [
//               { id: "A", text: "Leather sandals" },
//               { id: "B", text: "Wooden clogs" },
//               { id: "C", text: "Fur boots" },
//               { id: "D", text: "Rubber shoes" },
//             ],
//             answerId: "A",
//           },
//           {
//             id: "h2-q11",
//             prompt: "Why didn't poor Roman children go to school?",
//             choices: [
//               { id: "A", text: "Schools were too far away" },
//               { id: "B", text: "They didn't want to learn" },
//               { id: "C", text: "School was not free" },
//               { id: "D", text: "They were too young" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-q12",
//             prompt: "What did Roman children use to write their lessons?",
//             choices: [
//               { id: "A", text: "Paper and pencil" },
//               { id: "B", text: "Chalk and slate" },
//               { id: "C", text: "Wax tablet and stylus" },
//               { id: "D", text: "Clay tablet and stick" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-q13",
//             prompt: "At what age did Roman children typically start school?",
//             choices: [
//               { id: "A", text: "4 years old" },
//               { id: "B", text: "6 years old" },
//               { id: "C", text: "8 years old" },
//               { id: "D", text: "10 years old" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-q14",
//             prompt:
//               "What did poor Roman boys learn instead of going to school?",
//             choices: [
//               { id: "A", text: "How to be soldiers" },
//               { id: "B", text: "Their father's trade" },
//               { id: "C", text: "How to read scrolls" },
//               { id: "D", text: "Mathematics" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-q15",
//             prompt: "What did Roman girls learn from their mothers?",
//             choices: [
//               { id: "A", text: "How to read and write" },
//               { id: "B", text: "Household skills like weaving" },
//               { id: "C", text: "Mathematics with pebbles" },
//               { id: "D", text: "How to use a stylus" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-q16",
//             prompt: "What is the Roman numeral for 50?",
//             choices: [
//               { id: "A", text: "X" },
//               { id: "B", text: "L" },
//               { id: "C", text: "C" },
//               { id: "D", text: "D" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-q17",
//             prompt: "What is the Roman numeral for 100?",
//             choices: [
//               { id: "A", text: "L" },
//               { id: "B", text: "C" },
//               { id: "C", text: "D" },
//               { id: "D", text: "M" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-q18",
//             prompt: "How did rich families sometimes educate their children?",
//             choices: [
//               { id: "A", text: "With online teachers" },
//               { id: "B", text: "With educated slaves as teachers" },
//               { id: "C", text: "By sending them to Greece" },
//               { id: "D", text: "They didn't educate them" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-q19",
//             prompt:
//               "Which game did Roman children play that started as soldier training?",
//             choices: [
//               { id: "A", text: "Tag" },
//               { id: "B", text: "Hopscotch" },
//               { id: "C", text: "Noughts and crosses" },
//               { id: "D", text: "Knuckle bones" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-q20",
//             prompt: "What was the most popular pet for Roman children?",
//             choices: [
//               { id: "A", text: "Cats" },
//               { id: "B", text: "Birds" },
//               { id: "C", text: "Mice" },
//               { id: "D", text: "Dogs" },
//             ],
//             answerId: "D",
//           },
//           {
//             id: "h2-q21",
//             prompt: "What did Roman children read instead of books?",
//             choices: [
//               { id: "A", text: "Scrolls" },
//               { id: "B", text: "Tablets" },
//               { id: "C", text: "Papyrus sheets" },
//               { id: "D", text: "Stone carvings" },
//             ],
//             answerId: "A",
//           },
//           {
//             id: "h2-q22",
//             prompt: "What did Roman girls play with?",
//             choices: [
//               { id: "A", text: "Only with dolls" },
//               { id: "B", text: "Only with swords" },
//               { id: "C", text: "Dolls and board games" },
//               { id: "D", text: "Only household tools" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-q23",
//             prompt: "What was a 'stylus' used for in Roman schools?",
//             choices: [
//               { id: "A", text: "To scrape skin in baths" },
//               { id: "B", text: "To write on wax tablets" },
//               { id: "C", text: "To style hair" },
//               { id: "D", text: "To eat food" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-q24",
//             prompt: "Why did rich Roman children have more time to play?",
//             choices: [
//               { id: "A", text: "They didn't go to school" },
//               { id: "B", text: "They had slaves to do work" },
//               { id: "C", text: "They didn't have homework" },
//               { id: "D", text: "They played instead of sleeping" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-q25",
//             prompt: "What did Romans use to fasten their cloaks?",
//             choices: [
//               { id: "A", text: "Zippers" },
//               { id: "B", text: "Buttons" },
//               { id: "C", text: "Velcro" },
//               { id: "D", text: "Broaches" },
//             ],
//             answerId: "D",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "science-year2",
//     title: "Science (Year 2) for Pina",
//     exams: [
//       {
//         id: "science-year2-midterm",
//         title: "Science - Year 2 Mid Term Exam",
//         questions: [
//           {
//             id: "y2-q1",
//             prompt: "Why do humans need to drink water regularly?",
//             choices: [
//               { id: "A", text: "To make our bones stronger" },
//               { id: "B", text: "To stay hydrated and replace lost water" },
//               { id: "C", text: "To help us sleep better" },
//               { id: "D", text: "To make our hair grow" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "y2-q2",
//             prompt: "What does it mean when you feel thirsty?",
//             choices: [
//               { id: "A", text: "Your body needs more food" },
//               { id: "B", text: "Your body needs more sleep" },
//               { id: "C", text: "Your body needs more water" },
//               { id: "D", text: "Your body needs more exercise" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "y2-q3",
//             prompt: "Which food group helps our body to grow?",
//             choices: [
//               { id: "A", text: "Protein" },
//               { id: "B", text: "Sugar" },
//               { id: "C", text: "Starch" },
//               { id: "D", text: "Fats" },
//             ],
//             answerId: "A",
//           },
//           {
//             id: "y2-q4",
//             prompt: "What is a balanced diet?",
//             choices: [
//               { id: "A", text: "Eating only fruits and vegetables" },
//               { id: "B", text: "Eating the same food every day" },
//               {
//                 id: "C",
//                 text: "Eating correct amounts of different food groups",
//               },
//               { id: "D", text: "Eating only sweet foods" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "y2-q5",
//             prompt: "Which of these is a starchy food?",
//             choices: [
//               { id: "A", text: "Chocolate" },
//               { id: "B", text: "Potato" },
//               { id: "C", text: "Cheese" },
//               { id: "D", text: "Apple" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "y2-q6",
//             prompt: "Where does sugar come from?",
//             choices: [
//               { id: "A", text: "From animals" },
//               { id: "B", text: "From rocks" },
//               { id: "C", text: "From plants" },
//               { id: "D", text: "From the ocean" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "y2-q7",
//             prompt: "What do we call people who don't eat meat or fish?",
//             choices: [
//               { id: "A", text: "Carnivores" },
//               { id: "B", text: "Vegetarians" },
//               { id: "C", text: "Omnivores" },
//               { id: "D", text: "Herbivores" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "y2-q8",
//             prompt: "Which foods give us energy quickly?",
//             choices: [
//               { id: "A", text: "Starchy foods" },
//               { id: "B", text: "Protein foods" },
//               { id: "C", text: "Sugary foods" },
//               { id: "D", text: "Dairy foods" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "y2-q9",
//             prompt: "Why do we need to eat fruits and vegetables?",
//             choices: [
//               { id: "A", text: "They give us vitamins and minerals" },
//               { id: "B", text: "They make us tall" },
//               { id: "C", text: "They help us sleep" },
//               { id: "D", text: "They make our bones strong" },
//             ],
//             answerId: "A",
//           },
//           {
//             id: "y2-q10",
//             prompt: "What is exercise?",
//             choices: [
//               { id: "A", text: "Eating healthy food" },
//               { id: "B", text: "Moving to stay healthy" },
//               { id: "C", text: "Sleeping well" },
//               { id: "D", text: "Drinking water" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "y2-q11",
//             prompt: "What happens to our breathing when we exercise?",
//             choices: [
//               { id: "A", text: "It slows down" },
//               { id: "B", text: "It stops" },
//               { id: "C", text: "It gets faster" },
//               { id: "D", text: "It stays the same" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "y2-q12",
//             prompt: "Why do we sweat when we exercise?",
//             choices: [
//               { id: "A", text: "To warm our body" },
//               { id: "B", text: "To cool our body" },
//               { id: "C", text: "To make us thirsty" },
//               { id: "D", text: "To clean our skin" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "y2-q13",
//             prompt: "What is parental care?",
//             choices: [
//               { id: "A", text: "Children looking after parents" },
//               { id: "B", text: "Parents looking after their babies" },
//               { id: "C", text: "Teachers looking after students" },
//               { id: "D", text: "Doctors looking after patients" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "y2-q14",
//             prompt: "Which animal carries its baby in a pouch?",
//             choices: [
//               { id: "A", text: "Lion" },
//               { id: "B", text: "Kangaroo" },
//               { id: "C", text: "Elephant" },
//               { id: "D", text: "Bird" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "y2-q15",
//             prompt: "Why is it important to wash our hands before eating?",
//             choices: [
//               { id: "A", text: "To make food taste better" },
//               { id: "B", text: "To remove dirt and germs" },
//               { id: "C", text: "To warm our hands" },
//               { id: "D", text: "To make our skin soft" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "y2-q16",
//             prompt: "How often should we brush our teeth?",
//             choices: [
//               { id: "A", text: "Once a week" },
//               { id: "B", text: "Once a month" },
//               { id: "C", text: "Regularly, at least twice a day" },
//               { id: "D", text: "Only when they hurt" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "y2-q17",
//             prompt:
//               "What should we do with food to stop flies from landing on it?",
//             choices: [
//               { id: "A", text: "Put it in the sun" },
//               { id: "B", text: "Cover it" },
//               { id: "C", text: "Add salt to it" },
//               { id: "D", text: "Leave it uncovered" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "y2-q18",
//             prompt: "What does 'best before' date on food mean?",
//             choices: [
//               { id: "A", text: "The food will be poisonous after this date" },
//               {
//                 id: "B",
//                 text: "The food is not so good to eat after this date",
//               },
//               { id: "C", text: "The food must be cooked by this date" },
//               { id: "D", text: "The food will taste better after this date" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "y2-q19",
//             prompt: "Who should you tell if you feel unwell?",
//             choices: [
//               { id: "A", text: "A friend" },
//               { id: "B", text: "A pet" },
//               { id: "C", text: "An adult" },
//               { id: "D", text: "No one" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "y2-q20",
//             prompt: "What tool does a doctor use to check your temperature?",
//             choices: [
//               { id: "A", text: "Stethoscope" },
//               { id: "B", text: "Thermometer" },
//               { id: "C", text: "Microscope" },
//               { id: "D", text: "Telescope" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "y2-q21",
//             prompt:
//               "What should adults do with medicines to keep children safe?",
//             choices: [
//               { id: "A", text: "Leave them on the kitchen table" },
//               { id: "B", text: "Store them where children cannot reach" },
//               { id: "C", text: "Give them to children to play with" },
//               { id: "D", text: "Put them in toy boxes" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "y2-q22",
//             prompt: "Why is it dangerous to take someone else's medicine?",
//             choices: [
//               { id: "A", text: "It could make you very ill" },
//               { id: "B", text: "It might taste bad" },
//               { id: "C", text: "It could be too sweet" },
//               { id: "D", text: "It might be the wrong color" },
//             ],
//             answerId: "A",
//           },
//           {
//             id: "y2-q23",
//             prompt: "Which of these is NOT a type of exercise?",
//             choices: [
//               { id: "A", text: "Running" },
//               { id: "B", text: "Sleeping" },
//               { id: "C", text: "Dancing" },
//               { id: "D", text: "Cycling" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "y2-q24",
//             prompt:
//               "What do fruits and vegetables give us that helps keep us healthy?",
//             choices: [
//               { id: "A", text: "Sugar and salt" },
//               { id: "B", text: "Vitamins and minerals" },
//               { id: "C", text: "Fat and oil" },
//               { id: "D", text: "Water and air" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "y2-q25",
//             prompt: "Why do we need to wash after playing sport?",
//             choices: [
//               { id: "A", text: "To remove sweat and dirt" },
//               { id: "B", text: "To make our skin darker" },
//               { id: "C", text: "To make our hair grow" },
//               { id: "D", text: "To help us sleep" },
//             ],
//             answerId: "A",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "history-year2",
//     title: "History (Year 2) for Pina",
//     exams: [
//       {
//         id: "history-year2-midterm",
//         title: "History - Year 2 Mid Term Exam",
//         questions: [
//           {
//             id: "h2-y2-q1",
//             prompt: "Where was Florence Nightingale from?",
//             choices: [
//               { id: "A", text: "South Africa" },
//               { id: "B", text: "Ethiopia" },
//               { id: "C", text: "England" },
//               { id: "D", text: "America" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q2",
//             prompt: "What was Florence Nightingale famous for?",
//             choices: [
//               { id: "A", text: "Being a famous artist" },
//               { id: "B", text: "Being a president" },
//               { id: "C", text: "Improving hospitals and nursing" },
//               { id: "D", text: "Fighting for freedom" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q3",
//             prompt: "What was Florence Nightingale's nickname?",
//             choices: [
//               { id: "A", text: "The Rose Lady" },
//               { id: "B", text: "The Lady with the Lamp" },
//               { id: "C", text: "The Medicine Woman" },
//               { id: "D", text: "The Hospital Helper" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-y2-q4",
//             prompt: "Where was Nelson Mandela born?",
//             choices: [
//               { id: "A", text: "England" },
//               { id: "B", text: "Ethiopia" },
//               { id: "C", text: "South Africa" },
//               { id: "D", text: "America" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q5",
//             prompt: "What was Nelson Mandela's birth name?",
//             choices: [
//               { id: "A", text: "Tata" },
//               { id: "B", text: "Rolihlahla" },
//               { id: "C", text: "Thabo" },
//               { id: "D", text: "F.W." },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-y2-q6",
//             prompt: "What does 'Rolihlahla' mean?",
//             choices: [
//               { id: "A", text: "Peacemaker" },
//               { id: "B", text: "Troublemaker" },
//               { id: "C", text: "Leader" },
//               { id: "D", text: "Teacher" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-y2-q7",
//             prompt: "How many years was Nelson Mandela in prison?",
//             choices: [
//               { id: "A", text: "10 years" },
//               { id: "B", text: "15 years" },
//               { id: "C", text: "27 years" },
//               { id: "D", text: "5 years" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q8",
//             prompt: "What was Nelson Mandela's prison number?",
//             choices: [
//               { id: "A", text: "12345" },
//               { id: "B", text: "46664" },
//               { id: "C", text: "10001" },
//               { id: "D", text: "99999" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-y2-q9",
//             prompt: "What important job did Nelson Mandela get in 1994?",
//             choices: [
//               { id: "A", text: "Doctor" },
//               { id: "B", text: "Teacher" },
//               { id: "C", text: "President of South Africa" },
//               { id: "D", text: "Artist" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q10",
//             prompt: "What did people call Nelson Mandela to show respect?",
//             choices: [
//               { id: "A", text: "Teacher" },
//               { id: "B", text: "Doctor" },
//               { id: "C", text: "Tata (father)" },
//               { id: "D", text: "Chief" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q11",
//             prompt: "Where was Afewerk Tekle born?",
//             choices: [
//               { id: "A", text: "South Africa" },
//               { id: "B", text: "England" },
//               { id: "C", text: "Ethiopia" },
//               { id: "D", text: "Italy" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q12",
//             prompt: "What was Afewerk Tekle's main job?",
//             choices: [
//               { id: "A", text: "Doctor" },
//               { id: "B", text: "President" },
//               { id: "C", text: "Artist" },
//               { id: "D", text: "Teacher" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q13",
//             prompt: "What did Afewerk Tekle first want to study in England?",
//             choices: [
//               { id: "A", text: "Medicine" },
//               { id: "B", text: "Mining engineering" },
//               { id: "C", text: "Teaching" },
//               { id: "D", text: "Politics" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-y2-q14",
//             prompt: "What is Afewerk Tekle's most famous creation?",
//             choices: [
//               { id: "A", text: "A big statue" },
//               { id: "B", text: "A famous painting" },
//               { id: "C", text: "Stained-glass windows" },
//               { id: "D", text: "A book" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q15",
//             prompt:
//               "What is the name of Afewerk Tekle's famous stained-glass window?",
//             choices: [
//               { id: "A", text: "The Beautiful Africa" },
//               { id: "B", text: "The Total Liberation of Africa" },
//               { id: "C", text: "African Dreams" },
//               { id: "D", text: "Ethiopian History" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-y2-q16",
//             prompt: "What special title was given to Afewerk Tekle?",
//             choices: [
//               { id: "A", text: "President" },
//               { id: "B", text: "Doctor" },
//               { id: "C", text: "Maitre Artist (Master Artist)" },
//               { id: "D", text: "Chief" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q17",
//             prompt:
//               "What did Nelson Mandela burn to protest against unfair laws?",
//             choices: [
//               { id: "A", text: "His school books" },
//               { id: "B", text: "His pass book" },
//               { id: "C", text: "His clothes" },
//               { id: "D", text: "His house" },
//             ],
//             answerId: "B",
//           },
//           {
//             id: "h2-y2-q18",
//             prompt: "What prize did Nelson Mandela win in 1993?",
//             choices: [
//               { id: "A", text: "Art prize" },
//               { id: "B", text: "Sports prize" },
//               { id: "C", text: "Nobel Peace Prize" },
//               { id: "D", text: "Music prize" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q19",
//             prompt: "What did Afewerk Tekle design besides stained glass?",
//             choices: [
//               { id: "A", text: "Cars" },
//               { id: "B", text: "Buildings" },
//               { id: "C", text: "Stamps and national dresses" },
//               { id: "D", text: "Computers" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q20",
//             prompt:
//               "What important lesson did young Nelson learn from his uncle?",
//             choices: [
//               { id: "A", text: "How to draw" },
//               { id: "B", text: "How to be strong" },
//               { id: "C", text: "To listen to everyone's ideas" },
//               { id: "D", text: "How to build things" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q21",
//             prompt: "Where was Nelson Mandela's prison located?",
//             choices: [
//               { id: "A", text: "Mainland prison" },
//               { id: "B", text: "City prison" },
//               { id: "C", text: "Robben Island" },
//               { id: "D", text: "Mountain prison" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q22",
//             prompt:
//               "What did Afewerk Tekle use in his art to show Ethiopian culture?",
//             choices: [
//               { id: "A", text: "Only black and white" },
//               { id: "B", text: "Dark colors" },
//               { id: "C", text: "Bright colors" },
//               { id: "D", text: "Only pencil drawings" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q23",
//             prompt: "What did Nelson Mandela write about his life?",
//             choices: [
//               { id: "A", text: "A song" },
//               { id: "B", text: "A poem" },
//               { id: "C", text: "A book called 'Long Walk to Freedom'" },
//               { id: "D", text: "A play" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q24",
//             prompt: "What did Afewerk Tekle study in Europe besides art?",
//             choices: [
//               { id: "A", text: "Medicine" },
//               { id: "B", text: "Engineering" },
//               { id: "C", text: "Stained glass and mosaics" },
//               { id: "D", text: "Farming" },
//             ],
//             answerId: "C",
//           },
//           {
//             id: "h2-y2-q25",
//             prompt: "Why are all three people considered important?",
//             choices: [
//               { id: "A", text: "They were all rich" },
//               { id: "B", text: "They all traveled a lot" },
//               { id: "C", text: "They made the world better in different ways" },
//               { id: "D", text: "They were all presidents" },
//             ],
//             answerId: "C",
//           },
//         ],
//       },
//     ],
//   },

// ];

export const DATA: Subject[] = [
  {
    id: "geography",
    title: "Geography for Gabi",
    exams: [
      {
        id: "geography-full-1",
        title: "Geography - Comprehensive Test (Weather, Climate, Seasons)",
        questions: [
          {
            id: "g-q1",
            prompt: "What do we call the condition of the air at a specific time and place?",
            choices: [
              { id: "A", text: "Climate" },
              { id: "B", text: "Weather" },
              { id: "C", text: "Atmosphere" },
              { id: "D", text: "Season" }
            ],
            answerId: "B"
          },
          {
            id: "g-q2",
            prompt: "What is the average weather pattern in a place over many years called?",
            choices: [
              { id: "A", text: "Daily forecast" },
              { id: "B", text: "Climate" },
              { id: "C", text: "Temperature" },
              { id: "D", text: "Humidity" }
            ],
            answerId: "B"
          },
          {
            id: "g-q3",
            prompt: "How many main seasons are there in most parts of the world?",
            choices: [
              { id: "A", text: "2" },
              { id: "B", text: "3" },
              { id: "C", text: "4" },
              { id: "D", text: "6" }
            ],
            answerId: "C"
          },
          {
            id: "g-q4",
            prompt: "Which season comes after winter?",
            choices: [
              { id: "A", text: "Summer" },
              { id: "B", text: "Autumn" },
              { id: "C", text: "Spring" },
              { id: "D", text: "Monsoon" }
            ],
            answerId: "C"
          },
          {
            id: "g-q5",
            prompt: "Which instrument is used to measure temperature?",
            choices: [
              { id: "A", text: "Barometer" },
              { id: "B", text: "Thermometer" },
              { id: "C", text: "Anemometer" },
              { id: "D", text: "Hygrometer" }
            ],
            answerId: "B"
          },
          {
            id: "g-q6",
            prompt: "What do we call the amount of water vapor in the air?",
            choices: [
              { id: "A", text: "Pressure" },
              { id: "B", text: "Humidity" },
              { id: "C", text: "Density" },
              { id: "D", text: "Temperature" }
            ],
            answerId: "B"
          },
          {
            id: "g-q7",
            prompt: "Which season is typically the hottest?",
            choices: [
              { id: "A", text: "Winter" },
              { id: "B", text: "Spring" },
              { id: "C", text: "Summer" },
              { id: "D", text: "Autumn" }
            ],
            answerId: "C"
          },
          {
            id: "g-q8",
            prompt: "What falls from clouds during rainy weather?",
            choices: [
              { id: "A", text: "Snow" },
              { id: "B", text: "Hail" },
              { id: "C", text: "Rain" },
              { id: "D", text: "Fog" }
            ],
            answerId: "C"
          },
          {
            id: "g-q9",
            prompt: "Which season is known for trees losing their leaves?",
            choices: [
              { id: "A", text: "Spring" },
              { id: "B", text: "Summer" },
              { id: "C", text: "Autumn" },
              { id: "D", text: "Winter" }
            ],
            answerId: "C"
          },
          {
            id: "g-q10",
            prompt: "What do we call moving air?",
            choices: [
              { id: "A", text: "Breeze" },
              { id: "B", text: "Wind" },
              { id: "C", text: "Gust" },
              { id: "D", text: "Storm" }
            ],
            answerId: "B"
          },
          {
            id: "g-q11",
            prompt: "Which type of climate is hot and humid all year round?",
            choices: [
              { id: "A", text: "Polar" },
              { id: "B", text: "Tropical" },
              { id: "C", text: "Desert" },
              { id: "D", text: "Temperate" }
            ],
            answerId: "B"
          },
          {
            id: "g-q12",
            prompt: "What do we see in the sky during sunny weather?",
            choices: [
              { id: "A", text: "Clouds" },
              { id: "B", text: "The sun" },
              { id: "C", text: "Rainbows" },
              { id: "D", text: "Stars" }
            ],
            answerId: "B"
          },
          {
            id: "g-q13",
            prompt: "Which season has the shortest days?",
            choices: [
              { id: "A", text: "Spring" },
              { id: "B", text: "Summer" },
              { id: "C", text: "Autumn" },
              { id: "D", text: "Winter" }
            ],
            answerId: "D"
          },
          {
            id: "g-q14",
            prompt: "What is frozen rain called?",
            choices: [
              { id: "A", text: "Snow" },
              { id: "B", text: "Sleet" },
              { id: "C", text: "Hail" },
              { id: "D", text: "Frost" }
            ],
            answerId: "C"
          },
          {
            id: "g-q15",
            prompt: "Which instrument measures wind speed?",
            choices: [
              { id: "A", text: "Thermometer" },
              { id: "B", text: "Barometer" },
              { id: "C", text: "Anemometer" },
              { id: "D", text: "Hygrometer" }
            ],
            answerId: "C"
          },
          {
            id: "g-q16",
            prompt: "What type of clouds are fluffy and white?",
            choices: [
              { id: "A", text: "Stratus" },
              { id: "B", text: "Cumulus" },
              { id: "C", text: "Cirrus" },
              { id: "D", text: "Nimbus" }
            ],
            answerId: "B"
          },
          {
            id: "g-q17",
            prompt: "Which season comes before autumn?",
            choices: [
              { id: "A", text: "Winter" },
              { id: "B", text: "Spring" },
              { id: "C", text: "Summer" },
              { id: "D", text: "Monsoon" }
            ],
            answerId: "C"
          },
          {
            id: "g-q18",
            prompt: "What do we call the prediction of future weather?",
            choices: [
              { id: "A", text: "Climate report" },
              { id: "B", text: "Weather forecast" },
              { id: "C", text: "Seasonal outlook" },
              { id: "D", text: "Atmospheric analysis" }
            ],
            answerId: "B"
          },
          {
            id: "g-q19",
            prompt: "Which type of precipitation falls as ice crystals?",
            choices: [
              { id: "A", text: "Rain" },
              { id: "B", text: "Sleet" },
              { id: "C", text: "Hail" },
              { id: "D", text: "Snow" }
            ],
            answerId: "D"
          },
          {
            id: "g-q20",
            prompt: "What causes seasons to change?",
            choices: [
              { id: "A", text: "The moon's rotation" },
              { id: "B", text: "The Earth's tilt and orbit around the sun" },
              { id: "C", text: "Changes in ocean currents" },
              { id: "D", text: "Volcanic eruptions" }
            ],
            answerId: "B"
          },
          {
            id: "g-q21",
            prompt: "Which weather condition involves strong winds and heavy rain?",
            choices: [
              { id: "A", text: "Drought" },
              { id: "B", text: "Storm" },
              { id: "C", text: "Fog" },
              { id: "D", text: "Heatwave" }
            ],
            answerId: "B"
          },
          {
            id: "g-q22",
            prompt: "What do we wear to protect ourselves from rain?",
            choices: [
              { id: "A", text: "Sunglasses" },
              { id: "B", text: "Raincoat" },
              { id: "C", text: "Swimsuit" },
              { id: "D", text: "Scarf" }
            ],
            answerId: "B"
          },
          {
            id: "g-q23",
            prompt: "Which season is associated with blooming flowers?",
            choices: [
              { id: "A", text: "Winter" },
              { id: "B", text: "Spring" },
              { id: "C", text: "Summer" },
              { id: "D", text: "Autumn" }
            ],
            answerId: "B"
          },
          {
            id: "g-q24",
            prompt: "What is the main difference between weather and climate?",
            choices: [
              { id: "A", text: "Weather is short-term, climate is long-term" },
              { id: "B", text: "Weather is about temperature, climate is about rain" },
              { id: "C", text: "Weather changes slowly, climate changes quickly" },
              { id: "D", text: "There is no difference" }
            ],
            answerId: "A"
          },
          {
            id: "g-q25",
            prompt: "Which instrument measures air pressure?",
            choices: [
              { id: "A", text: "Thermometer" },
              { id: "B", text: "Barometer" },
              { id: "C", text: "Anemometer" },
              { id: "D", text: "Hygrometer" }
            ],
            answerId: "B"
          }
        ]
      }
    ]
  },
  {
    id: "french",
    title: "French for Gabi",
    exams: [
      {
        id: "french-full-1",
        title: "French - Comprehensive Test (Alphabets, Vowels)",
        questions: [
          {
            id: "f-q1",
            prompt: "How many letters are in the French alphabet?",
            choices: [
              { id: "A", text: "25" },
              { id: "B", text: "26" },
              { id: "C", text: "27" },
              { id: "D", text: "28" }
            ],
            answerId: "B"
          },
          {
            id: "f-q2",
            prompt: "Which of these is a French vowel?",
            choices: [
              { id: "A", text: "B" },
              { id: "B", text: "Z" },
              { id: "C", text: "U" },
              { id: "D", text: "T" }
            ],
            answerId: "C"
          },
          {
            id: "f-q3",
            prompt: "How do you say 'Hello' or 'Good day' in French?",
            choices: [
              { id: "A", text: "Bonsoir" },
              { id: "B", text: "Au revoir" },
              { id: "C", text: "Bonjour" },
              { id: "D", text: "Merci" }
            ],
            answerId: "C"
          },
          {
            id: "f-q4",
            prompt: "What does 'Au revoir' mean?",
            choices: [
              { id: "A", text: "Hello" },
              { id: "B", text: "Goodbye" },
              { id: "C", text: "Thank you" },
              { id: "D", text: "Please" }
            ],
            answerId: "B"
          },
          {
            id: "f-q5",
            prompt: "To tell someone your name in French, you would say:",
            choices: [
              { id: "A", text: "Je m'appelle..." },
              { id: "B", text: "J'ai ... ans" },
              { id: "C", text: "Je habite..." },
              { id: "D", text: "Comment ça va?" }
            ],
            answerId: "A"
          },
          {
            id: "f-q6",
            prompt: "How do you say 'Thank you' in French?",
            choices: [
              { id: "A", text: "Bonjour" },
              { id: "B", text: "S'il vous plaît" },
              { id: "C", text: "Merci" },
              { id: "D", text: "Excusez-moi" }
            ],
            answerId: "C"
          },
          {
            id: "f-q7",
            prompt: "Which of these is NOT a French vowel?",
            choices: [
              { id: "A", text: "A" },
              { id: "B", text: "E" },
              { id: "C", text: "I" },
              { id: "D", text: "B" }
            ],
            answerId: "D"
          },
          {
            id: "f-q8",
            prompt: "How do you ask 'How are you?' formally in French?",
            choices: [
              { id: "A", text: "Comment tu t'appelles?" },
              { id: "B", text: "Comment allez-vous?" },
              { id: "C", text: "Quel âge as-tu?" },
              { id: "D", text: "Où habites-tu?" }
            ],
            answerId: "B"
          },
          {
            id: "f-q9",
            prompt: "What is the French word for 'please'?",
            choices: [
              { id: "A", text: "Merci" },
              { id: "B", text: "Bonjour" },
              { id: "C", text: "S'il vous plaît" },
              { id: "D", text: "Excusez-moi" }
            ],
            answerId: "C"
          },
          {
            id: "f-q10",
            prompt: "How many vowels are in the French alphabet?",
            choices: [
              { id: "A", text: "5" },
              { id: "B", text: "6" },
              { id: "C", text: "7" },
              { id: "D", text: "8" }
            ],
            answerId: "B"
          },
          {
            id: "f-q11",
            prompt: "What does 'Je m'appelle Marie' mean?",
            choices: [
              { id: "A", text: "I am 10 years old" },
              { id: "B", text: "My name is Marie" },
              { id: "C", text: "I live in Paris" },
              { id: "D", text: "How are you Marie?" }
            ],
            answerId: "B"
          },
          {
            id: "f-q12",
            prompt: "How do you say 'Good evening' in French?",
            choices: [
              { id: "A", text: "Bonjour" },
              { id: "B", text: "Bonne nuit" },
              { id: "C", text: "Bonsoir" },
              { id: "D", text: "Bon après-midi" }
            ],
            answerId: "C"
          },
          {
            id: "f-q13",
            prompt: "Which letter comes after 'L' in the French alphabet?",
            choices: [
              { id: "A", text: "K" },
              { id: "B", text: "N" },
              { id: "C", text: "M" },
              { id: "D", text: "O" }
            ],
            answerId: "C"
          },
          {
            id: "f-q14",
            prompt: "What is the response to 'Merci'?",
            choices: [
              { id: "A", text: "Bonjour" },
              { id: "B", text: "Au revoir" },
              { id: "C", text: "De rien" },
              { id: "D", text: "S'il vous plaît" }
            ],
            answerId: "C"
          },
          {
            id: "f-q15",
            prompt: "How do you say 'My name is' informally?",
            choices: [
              { id: "A", text: "Je m'appelle" },
              { id: "B", text: "Tu t'appelles" },
              { id: "C", text: "Il s'appelle" },
              { id: "D", text: "Elle s'appelle" }
            ],
            answerId: "A"
          },
          {
            id: "f-q16",
            prompt: "Which of these is a proper greeting for the morning?",
            choices: [
              { id: "A", text: "Bonsoir" },
              { id: "B", text: "Bonne nuit" },
              { id: "C", text: "Bonjour" },
              { id: "D", text: "Au revoir" }
            ],
            answerId: "C"
          },
          {
            id: "f-q17",
            prompt: "What does 'Bonne nuit' mean?",
            choices: [
              { id: "A", text: "Good day" },
              { id: "B", text: "Good evening" },
              { id: "C", text: "Good night" },
              { id: "D", text: "Good afternoon" }
            ],
            answerId: "C"
          },
          {
            id: "f-q18",
            prompt: "How do you ask someone's name informally?",
            choices: [
              { id: "A", text: "Comment allez-vous?" },
              { id: "B", text: "Comment tu t'appelles?" },
              { id: "C", text: "Quel âge as-tu?" },
              { id: "D", text: "Où habites-tu?" }
            ],
            answerId: "B"
          },
          {
            id: "f-q19",
            prompt: "Which letter comes before 'G' in the French alphabet?",
            choices: [
              { id: "A", text: "E" },
              { id: "B", text: "F" },
              { id: "C", text: "H" },
              { id: "D", text: "I" }
            ],
            answerId: "B"
          },
          {
            id: "f-q20",
            prompt: "What is the French word for 'sorry' or 'excuse me'?",
            choices: [
              { id: "A", text: "Merci" },
              { id: "B", text: "S'il vous plaît" },
              { id: "C", text: "Excusez-moi" },
              { id: "D", text: "Bonjour" }
            ],
            answerId: "C"
          },
          {
            id: "f-q21",
            prompt: "How do you say 'See you tomorrow' in French?",
            choices: [
              { id: "A", text: "Au revoir" },
              { id: "B", text: "À demain" },
              { id: "C", text: "À bientôt" },
              { id: "D", text: "Bonne journée" }
            ],
            answerId: "B"
          },
          {
            id: "f-q22",
            prompt: "Which of these is the correct way to say 'I am 8 years old'?",
            choices: [
              { id: "A", text: "Je m'appelle huit" },
              { id: "B", text: "J'ai huit ans" },
              { id: "C", text: "Je suis huit ans" },
              { id: "D", text: "J'ai huit" }
            ],
            answerId: "B"
          },
          {
            id: "f-q23",
            prompt: "What is the last letter of the French alphabet?",
            choices: [
              { id: "A", text: "X" },
              { id: "B", text: "Y" },
              { id: "C", text: "Z" },
              { id: "D", text: "W" }
            ],
            answerId: "C"
          },
          {
            id: "f-q24",
            prompt: "How do you say 'Nice to meet you' in French?",
            choices: [
              { id: "A", text: "Comment allez-vous?" },
              { id: "B", text: "Enchanté(e)" },
              { id: "C", text: "Bienvenue" },
              { id: "D", text: "Félicitations" }
            ],
            answerId: "B"
          },
          {
            id: "f-q25",
            prompt: "What does 'Oui' mean in English?",
            choices: [
              { id: "A", text: "No" },
              { id: "B", text: "Yes" },
              { id: "C", text: "Maybe" },
              { id: "D", text: "Please" }
            ],
            answerId: "B"
          }
        ]
      }
    ]
  },
  {
    id: "geography-year1",
    title: "Geography for Pina",
    exams: [
      {
        id: "geography-year1-1",
        title: "Geography - Year 1 Test (Neighborhood, Community)",
        questions: [
          {
            id: "gy1-q1",
            prompt: "What is a neighborhood?",
            choices: [
              { id: "A", text: "A big city" },
              { id: "B", text: "The area around where you live" },
              { id: "C", text: "A different country" },
              { id: "D", text: "A shopping mall" }
            ],
            answerId: "B"
          },
          {
            id: "gy1-q2",
            prompt: "Which of these is a community helper?",
            choices: [
              { id: "A", text: "A tree" },
              { id: "B", text: "A firefighter" },
              { id: "C", text: "A car" },
              { id: "D", text: "A house" }
            ],
            answerId: "B"
          },
          {
            id: "gy1-q3",
            prompt: "What does a doctor do in our community?",
            choices: [
              { id: "A", text: "Fixes cars" },
              { id: "B", text: "Helps sick people get better" },
              { id: "C", text: "Puts out fires" },
              { id: "D", text: "Delivers mail" }
            ],
            answerId: "B"
          },
          {
            id: "gy1-q4",
            prompt: "What is a map?",
            choices: [
              { id: "A", text: "A type of food" },
              { id: "B", text: "A drawing that shows places" },
              { id: "C", text: "A musical instrument" },
              { id: "D", text: "A kind of animal" }
            ],
            answerId: "B"
          },
          {
            id: "gy1-q5",
            prompt: "Which direction is the opposite of north?",
            choices: [
              { id: "A", text: "East" },
              { id: "B", text: "West" },
              { id: "C", text: "South" },
              { id: "D", text: "Up" }
            ],
            answerId: "C"
          },
          {
            id: "gy1-q6",
            prompt: "How many continents are there on Earth?",
            choices: [
              { id: "A", text: "5" },
              { id: "B", text: "6" },
              { id: "C", text: "7" },
              { id: "D", text: "8" }
            ],
            answerId: "C"
          },
          {
            id: "gy1-q7",
            prompt: "What does a police officer do?",
            choices: [
              { id: "A", text: "Teaches children" },
              { id: "B", text: "Keeps people safe" },
              { id: "C", text: "Grows food" },
              { id: "D", text: "Flies airplanes" }
            ],
            answerId: "B"
          },
          {
            id: "gy1-q8",
            prompt: "Which direction does the sun rise from?",
            choices: [
              { id: "A", text: "North" },
              { id: "B", text: "South" },
              { id: "C", text: "East" },
              { id: "D", text: "West" }
            ],
            answerId: "C"
          },
          {
            id: "gy1-q9",
            prompt: "Which continent do we live in?",
            choices: [
              { id: "A", text: "Africa" },
              { id: "B", text: "Asia" },
              { id: "C", text: "Europe" },
              { id: "D", text: "Australia" }
            ],
            answerId: "A"
          },
          {
            id: "gy1-q10",
            prompt: "What might you find in a neighborhood?",
            choices: [
              { id: "A", text: "Houses, schools, and parks" },
              { id: "B", text: "Volcanoes and deserts" },
              { id: "C", text: "Whales and dolphins" },
              { id: "D", text: "Stars and planets" }
            ],
            answerId: "A"
          },
          {
            id: "gy1-q11",
            prompt: "Who delivers letters and packages to our homes?",
            choices: [
              { id: "A", text: "Doctor" },
              { id: "B", text: "Mail carrier" },
              { id: "C", text: "Farmer" },
              { id: "D", text: "Chef" }
            ],
            answerId: "B"
          },
          {
            id: "gy1-q12",
            prompt: "What does a map key or legend tell us?",
            choices: [
              { id: "A", text: "What time it is" },
              { id: "B", text: "What the symbols on the map mean" },
              { id: "C", text: "How old the map is" },
              { id: "D", text: "Who made the map" }
            ],
            answerId: "B"
          },
          {
            id: "gy1-q13",
            prompt: "Which direction is to your left when you face north?",
            choices: [
              { id: "A", text: "East" },
              { id: "B", text: "South" },
              { id: "C", text: "West" },
              { id: "D", text: "North" }
            ],
            answerId: "C"
          },
          {
            id: "gy1-q14",
            prompt: "Which continent is the coldest?",
            choices: [
              { id: "A", text: "Africa" },
              { id: "B", text: "Australia" },
              { id: "C", text: "Antarctica" },
              { id: "D", text: "South America" }
            ],
            answerId: "C"
          },
          {
            id: "gy1-q15",
            prompt: "What is a community?",
            choices: [
              { id: "A", text: "A single house" },
              { id: "B", text: "A group of people living in the same area" },
              { id: "C", text: "A type of car" },
              { id: "D", text: "A kind of food" }
            ],
            answerId: "B"
          },
          {
            id: "gy1-q16",
            prompt: "Who helps put out fires?",
            choices: [
              { id: "A", text: "Teacher" },
              { id: "B", text: "Firefighter" },
              { id: "C", text: "Dentist" },
              { id: "D", text: "Pilot" }
            ],
            answerId: "B"
          },
          {
            id: "gy1-q17",
            prompt: "What does a compass show?",
            choices: [
              { id: "A", text: "How hot it is" },
              { id: "B", text: "Directions (north, south, east, west)" },
              { id: "C", text: "How much something weighs" },
              { id: "D", text: "What time it is" }
            ],
            answerId: "B"
          },
          {
            id: "gy1-q18",
            prompt: "Which continent is also a country?",
            choices: [
              { id: "A", text: "Africa" },
              { id: "B", text: "Asia" },
              { id: "C", text: "Australia" },
              { id: "D", text: "Europe" }
            ],
            answerId: "C"
          },
          {
            id: "gy1-q19",
            prompt: "Where might you see a community helper working?",
            choices: [
              { id: "A", text: "In a hospital, school, or fire station" },
              { id: "B", text: "On the moon" },
              { id: "C", text: "In a deep ocean" },
              { id: "D", text: "Inside a volcano" }
            ],
            answerId: "A"
          },
          {
            id: "gy1-q20",
            prompt: "What does location mean?",
            choices: [
              { id: "A", text: "What something looks like" },
              { id: "B", text: "Where something is" },
              { id: "C", text: "How big something is" },
              { id: "D", text: "What color something is" }
            ],
            answerId: "B"
          },
          {
            id: "gy1-q21",
            prompt: "Which direction is the opposite of east?",
            choices: [
              { id: "A", text: "North" },
              { id: "B", text: "South" },
              { id: "C", text: "West" },
              { id: "D", text: "Up" }
            ],
            answerId: "C"
          },
          {
            id: "gy1-q22",
            prompt: "Which continent has the most people?",
            choices: [
              { id: "A", text: "Africa" },
              { id: "B", text: "Asia" },
              { id: "C", text: "North America" },
              { id: "D", text: "Europe" }
            ],
            answerId: "B"
          },
          {
            id: "gy1-q23",
            prompt: "Who teaches children in school?",
            choices: [
              { id: "A", text: "Police officer" },
              { id: "B", text: "Teacher" },
              { id: "C", text: "Doctor" },
              { id: "D", text: "Farmer" }
            ],
            answerId: "B"
          },
          {
            id: "gy1-q24",
            prompt: "What might you use to find your way in a new place?",
            choices: [
              { id: "A", text: "A map" },
              { id: "B", text: "A spoon" },
              { id: "C", text: "A pillow" },
              { id: "D", text: "A shoe" }
            ],
            answerId: "A"
          },
          {
            id: "gy1-q25",
            prompt: "Which continent is connected to Asia?",
            choices: [
              { id: "A", text: "Australia" },
              { id: "B", text: "Antarctica" },
              { id: "C", text: "Africa" },
              { id: "D", text: "Europe" }
            ],
            answerId: "D"
          }
        ]
      }
    ]
  }
];
