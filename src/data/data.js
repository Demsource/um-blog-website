import { v4 as uuidv4 } from "uuid";

// NOTE: slugs for each blog data should be unique

const data = [
  {
    title: "About Sadhguru",
    content:
      '\tSadhguru is a yogi and a mystic a man whose passion spills into everything he encounters. Named one of India\'s 50 most influential people, Sadhguru\'s work has touched the lives of millions worldwide through his transformational programs. Sadhguru has a unique ability to make the ancient yogic sciences relevant to contemporary minds, acting as a bridge to the deeper dimensions of life. His approach does not ascribe to any belief system, but offers methods for self-transformation that are both proven and powerful. \n \tAn author, poet, visionary, internationally renowned speaker and bestselling author, Sadhguru has been an influential voice at major global forums including the United Nations World Headquarters and the World Economic Forum, addressing issues as diverse as socioeconomic development, leadership and spirituality. He has also been invited to speak at leading educational institutions, including Oxford, London Business School, IMD, Stanford, Harvard, Yale, Wharton and MIT, to name a few. \n \tDedicated to the physical, mental and spiritual wellbeing of humanity and gifted with utter clarity of perception, Sadhguru possesses a perspective on life and living that never fails to intrigue, challenge and surprise all those he encounters. \n \tSadhguru - More Than a Life. A book that empowers you to explore your spiritual self and could well change your life. "More Than a Life" is the extraordinary story of Sadhguru – a young agnostic who turned yogi, a wild motorcyclist who turned mystic, a skeptic who turned spiritual guide. Pulsating with his razor-sharp intelligence, bracing wit and modern-day vocabulary, the book empowers you to explore your spiritual self and could well change your life. In his early years, Jaggi Vasudev (or Sadhguru as he is now known) was a chronic truant, a boisterous prankster, and later a lover of motorbikes and fast cars. It is evident that the same urgency, passion and vitality echo in his spiritual pursuits to this day, from his creation of the historic Dhyanalinga - the mission of three lifetimes - to his approach as a guru. In Sadhguru\'s view, faith and reason, spirituality and science, the sacred and the material, cannot be divided into easy binaries. He sees people as "spiritual beings dabbling with the material rather than the reverse", and liberation as the fundamental longing in every form of life. Truth for him is a living experience instead of a destination, a conclusion, or a matter of metaphysical speculation. The possibility of self-realization, he strongly believes, is available to all. Drawing upon extended conversations with Sadhguru, interviews with Isha colleagues and fellow meditators, poet Arundhathi Subramaniam presents an evocative portrait of a contemporary mystic and guru – a man who seems to pack the intensity and adventure of several lifetimes into a single one.',
    publishDate: new Date("August 17, 1995 03:24:00").toDateString(),
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Sadhguru-Jaggi-Vasudev.jpg/250px-Sadhguru-Jaggi-Vasudev.jpg",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Sadhguru-Jaggi-Vasudev.jpg/800px-Sadhguru-Jaggi-Vasudev.jpg",
    comments: [
      {
        commentId: uuidv4(),
        name: "Jane Doe",
        message:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, pariatur.",
      },
      {
        commentId: uuidv4(),
        name: "John Doe",
        message:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, pariatur.",
      },
    ],
    tags: ["Mysticism", "Bio"],
    slug: "about-sadhguru",
  },
  {
    title: "About Isha Foundation",
    content:
      "\tIsha Foundation. An opportunity to engineer an inner transformation that deepens your perception, bringing about a dimensional shift in the very way you look at your life. - Sadhguru. \n \tMission. Isha Foundation is dedicated to raising human consciousness, and fosters global harmony through individual transformation. Guided by Sadhguru, it is an essential resource for exploring the ancient science of yoga in all its depth and dimensions. The foundation offers a variety of programs that provide methods for anyone to attain physical, mental and spiritual wellbeing. Its offerings allow participants to deepen their experience of life, and reach their ultimate potential. \n \tActivities. Supported by 17 million volunteers in 300 centers worldwide, Isha Foundation’s activities address all aspects of human wellbeing. From its powerful yoga programs for inner transformation to its inspiring projects for society, environment and education, Isha activities are designed to create an inclusive culture that is the basis for global harmony and progress. \n \tPrograms. At the core of the Foundation's activities is a customized system of yoga called Isha Yoga. Isha Yoga distills powerful, ancient yogic methods for a modern person, creating peak physical, mental, and emotional wellbeing. At Isha, yoga is taught in its full depth and dimension, and communicated on an experiential level. The programs provide methods for establishing oneself in a way of life that affirms wholeness and vitality. They show that spiritual life does not deny worldly, social, and family responsibilities, but rather uses them as vehicles for personal growth and self-realization. \n \tProjects. Over the last three decades, Isha Foundation's activities have touched the lives of over 200 million people, reaching out to individuals irrespective of their economic, cultural or religious background. The foundation’s social outreach projects are designed to be easily replicable and scalable, and serve as a thriving model for human empowerment and community revitalization throughout the world.",
    publishDate: new Date("December 12, 2000 04:14:00").toDateString(),
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Adiyogi_Shiva_steel_burst_2018.jpg/250px-Adiyogi_Shiva_steel_burst_2018.jpg",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Adiyogi_Shiva_steel_burst_2018.jpg",
    comments: [
      {
        commentId: uuidv4(),
        name: "James Doe",
        message:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, pariatur.",
      },
    ],
    tags: ["Mysticism"],
    slug: "about-isha-foundation",
  },
  {
    title: "About Mahatma Gandhi",
    content:
      "\tMahatma Gandhi (born October 2, 1869, Porbandar, India—died January 30, 1948, Delhi) was an Indian lawyer, politician, social activist, and writer who became the leader of the Indian Independence Movement against British rule. As such, he came to be considered the father of his country. Gandhi is internationally esteemed for his doctrine of nonviolent protest (satyagraha) to achieve political and social progress. \n \tIn the eyes of millions of his fellow Indians, Gandhi was the Mahatma (“Great Soul”). The unthinking adoration of the huge crowds that gathered to see him all along the route of his tours made them a severe ordeal; he could hardly work during the day or rest at night. “The woes of the Mahatmas,” he wrote, “are known only to the Mahatmas.” His fame spread worldwide during his lifetime and only increased after his death. The name Mahatma Gandhi is now one of the most universally recognized on earth. \n \tYouth. Gandhi was the youngest child of his father’s fourth wife. His father—Karamchand Gandhi, who was the dewan (chief minister) of Porbandar, the capital of a small principality in western India (in what is now Gujarat state) under British suzerainty—did not have much in the way of a formal education. He was, however, an able administrator who knew how to steer his way between the capricious princes, their long-suffering subjects, and the headstrong British political officers in power. /nGandhi’s mother, Putlibai, was completely absorbed in religion, did not care much for finery or jewelry, divided her time between her home and the temple, fasted frequently, and wore herself out in days and nights of nursing whenever there was sickness in the family. Mohandas grew up in a home steeped in Vaishnavism—worship of the Hindu god Vishnu—with a strong tinge of Jainism, a morally rigorous Indian religion whose chief tenets are nonviolence and the belief that everything in the universe is eternal. Thus, he took for granted ahimsa (noninjury to all living beings), vegetarianism, fasting for self-purification, and mutual tolerance between adherents of various creeds and sects. \n \tThe educational facilities at Porbandar were rudimentary; in the primary school that Mohandas attended, the children wrote the alphabet in the dust with their fingers. Luckily for him, his father became dewan of Rajkot, another princely state. Though Mohandas occasionally won prizes and scholarships at the local schools, his record was on the whole mediocre. One of the terminal reports rated him as 'good at English, fair in Arithmetic and weak in Geography; conduct very good, bad handwriting.' He was married at the age of 13 and thus lost a year at school. A diffident child, he shone neither in the classroom nor on the playing field. He loved to go out on long solitary walks when he was not nursing his by then ailing father (who died soon thereafter) or helping his mother with her household chores.",
    publishDate: new Date("January 2, 1990 04:14:00").toDateString(),
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/250px-Mahatma-Gandhi%2C_studio%2C_1931.jpg",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg",
    comments: [
      {
        commentId: uuidv4(),
        name: "Josh Doe",
        message:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, pariatur.",
      },
    ],
    tags: ["Bio"],
    slug: "about-mahatma-gandhi",
  },
  {
    title: "About Chandrayaan-3",
    content:
      "\tThe Chandrayaan programme (Sanskrit: Candra 'Moon', Yāna 'Craft, Vehicle') also known as the Indian Lunar Exploration Programme is an ongoing series of outer space missions by the Indian Space Research Organisation (ISRO) for the exploration of the Moon. The program incorporates a lunar orbiter, an impactor, a soft lander and a rover spacecraft. \n \tThere have been three missions so far with a total of two orbiters, landers and rovers each. While the two orbiters were successful, the first lander and rover which were part of the Chandrayaan-2 mission, crashed on the surface. The second lander and rover mission Chandrayaan-3 successfully landed on the Moon on 23 August 2023, making India the first nation to successfully land a spacecraft in the lunar south pole region, and the fourth country to soft land on the Moon after the Soviet Union, the United States and China. \n \tThe Indian space programme had begun with no intentions of undertaking sophisticated initiatives like human spaceflight and extraterrestrial missions during the initial days. It was only after ISRO developed the capabilities of creating satellites and orbital launch vehicles like PSLV, that the possibilities of India's first extraterrestrial exploration mission to the Moon were being explored in the early 2000s. The idea of a lunar scientific mission was first raised in 1999 during a meeting of the Indian Academy of Sciences (IAS) which was then carried forward by the Astronautical Society of India (ASI) in 2000. The robotic exploration programme is intended as a precursor until Indian astronauts land on the Moon to carry forward further explorations, with the robotic programme planned to continue beyond crewed landings as a support to the crewed missions. \n \tChandrayaan-3 is the third mission in the Chandrayaan programme, a series of lunar-exploration missions developed by the Indian Space Research Organisation (ISRO). The mission consists of a Vikram lunar lander and a Pragyan lunar rover. It was launched on July 14, 2023, at 2:35 PM IST (14:35 Hrs IST) from the Satish Dhawan Space Centre (SDSC) in Sriharikota. The spacecraft entered lunar orbit on 5 August, and India became the first country to touch down near the lunar south pole, at 69°S, the southernmost lunar landing  on 23 August 2023 at 18:04 IST (12:33 UTC), ISRO became the first agency to land near the south pole of the moon in its first attempt and overall the fourth space agency to successfully land on the Moon, after USSR, NASA and the CNSA. \n \tThe spacecraft entered lunar orbit on 5 August, and became the first lander to touch down near the lunar south pole on 23 August at 18:03 IST (12:33 UTC), making India the fourth country to successfully land on the Moon, and at 69°S, the southernmost lunar landing, until IM-1 landed further southwards in Malapert A crater on 22 February 2024. The lander was not built to withstand the cold temperatures of the lunar night, and sunset over the landing site ended the surface mission twelve days after landing. The propulsion module, still operational, transited back to a high Earth orbit from lunar orbit on 22 November 2023 for continued scientific observations of Earth. It operated until 22 August 2024.",
    publishDate: new Date("February 24, 2024 12:10:00").toDateString(),
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/LVM3_M4%2C_Chandrayaan-3_-_Launch_vehicle_lifting_off_from_the_Second_Launch_Pad_%28SLP%29_of_SDSC-SHAR%2C_Sriharikota_03.webp/330px-LVM3_M4%2C_Chandrayaan-3_-_Launch_vehicle_lifting_off_from_the_Second_Launch_Pad_%28SLP%29_of_SDSC-SHAR%2C_Sriharikota_03.webp.png",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/LVM3_M4%2C_Chandrayaan-3_-_Launch_vehicle_lifting_off_from_the_Second_Launch_Pad_%28SLP%29_of_SDSC-SHAR%2C_Sriharikota_03.webp",
    comments: [
      {
        commentId: uuidv4(),
        name: "James Doe",
        message:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ab distinctio neque consectetur soluta, asperiores aperiam repudiandae a similique voluptas.",
      },
    ],
    tags: ["Space"],
    slug: "about-chandrayaan-3",
  },
];

export default data;
