import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ItineraryDetailHero } from "@/components/itineraries/itinerary-detail-hero"
import { ItineraryContent, type ActivityPhase } from "@/components/itineraries/itinerary-content"
import { RelatedItineraries } from "@/components/itineraries/related-itineraries"

const itineraryData: Record<string, {
  title: string
  subtitle: string
  heroImage: string
  heroTagline: string
  overview: string
  guestProfile: string
  whenToVisit: string
  journeyFlow: string[]
  activities: ActivityPhase[]
  accommodation: string
  designRationale: string
  gridImages: { src: string; alt: string; span?: "wide" | "tall" | "normal" }[]
}> = {
  "lofoten-arctic-summer": {
    title: "Lofoten Islands",
    subtitle: "Arctic Summer Journey",
    heroImage: "/images/lofoten_hero.jpg",
    heroTagline: "Lofoten: Where the Mountains Meet the Sea",
    overview: "The Lofoten Islands are a geological anomaly—a dramatic spine of ancient granite peaks rising directly from the turquoise waters of the Norwegian Sea. This journey is a study in the region's coastal identity, where traditional fishing heritage has been reimagined through the lens of contemporary design and culinary activism. From the active harbor of Ballstad to the raw, wild tip of the archipelago in Sørvågen, I focus on the interplay between the sea and the summits, celebrating the profound, 24-hour light of the Arctic summer.",
    guestProfile: "This itinerary is crafted for the **Active Aestheticist**—travellers who want to engage physically with the landscape but return to a space of high-design and culinary excellence. It is perfect for couples or small groups who value the context of a private guide, local provenance (from 'women-powered' seaweed to artisanal cheese), and the luxury of exploring the archipelago’s most iconic corners away from the midday crowds.",
    whenToVisit: "**June through August** is the season of the **Midnight Sun**. The 24-hour light transforms the islands into a playground where time becomes irrelevant. This is the optimal window for mountain biking, kayaking the crystal-clear fjords, and seeing the 'Stockfish' heritage in its peak summer rhythm.",
    journeyFlow: ["Oslo", "Leknes", "Ballstad", "Sørvågen", "Leknes"],
    activities: [
      {
        title: "Phase I: The Central Peaks (Based in Ballstad)",
        items: [
          {
            name: "Svolvær & Henningsvær Circuit",
            description: "A private guided exploration of the 'Venice of the North.' Embark on a **RIB Boat Safari** to witness the vertical walls of the Trollfjord before visiting the art galleries of Henningsvær."
          },
          {
            name: "The Wild West & Artisanal Lunch",
            description: "A day of coastal contrasts. Start with a morning walk on the white sands of **Unstad Beach** (the Arctic’s surfing mecca), followed by an organic lunch at **Lofoten Gårdsysteri**—a family-run cheese farm in the hills. Conclude with the rugged ruins of **Eggum** and a sunset **horseback trek** on the sands of Hov."
          },
          {
            name: "The Legendary Fishery",
            description: "Join a private sea charter from the Hattvika docks to learn the art of the Lofoten catch directly from local fishers."
          },
        ]
      },
      {
        title: "Phase II: The Southern Wilds (Based in Sørvågen)",
        items: [
          {
            name: "Women Power & The Golden Weed",
            description: "On the drive south, stop in Napp to visit **Lofoten Seaweed**. This female-led initiative is a masterclass in modern sustainability, showing how the 'truffle of the sea' is harvested for the world’s best restaurants."
          },
          {
            name: "Reinefjord Kayaking",
            description: "A silent, guided paddle through the most photographed fjord in the world, weaving between islands and the shadow of the granite peaks."
          },
          {
            name: "The End of the Road",
            description: "Explore the village of **Å**, where time has stood still. Stop at the historic stone-oven bakery for their famous cinnamon rolls before a private guided tour of the village’s living history."
          },
          {
            name: "Tundra Picnic & Hike",
            description: "Guests can enjoy bespoke, guided mountain treks directly from the retreat in Sørvågen. These outings often include a chef-prepared picnic featuring foraged ingredients and local delicacies, to be enjoyed at a panoramic viewpoint overlooking the Atlantic."
          },
        ]
      },
    ],
    accommodation: "Accommodation is divided between two distinct architectural expressions of the north. In Ballstad, you will reside in a **Hillside View Cabin**—a contemporary, free-standing sanctuary perched above the harbor. These cabins are designed to bridge the gap between tradition and modernity, featuring weathered timber exteriors and expansive picture windows with built-in seats, perfect for watching the gold-leaf light of the Midnight Sun. For the final two nights, the experience shifts to a **Boutique Culinary Retreat** in Sørvågen. Here, the stay is 'horizontal'—occupying a cluster of repurposed 19th-century warehouses and modern suites designed by architects Schelderup & Gram. These rooms sit so close to the water you can hear the tide against the stone foundations, offering a tactile, minimalist luxury that works in perfect rhythm with the surrounding wild landscape.",
    designRationale: "Lofoten’s beauty is undeniable, but its popularity in summer can compromise the sense of isolation that luxury travellers seek. **I have designed this journey as a split-stay to provide two entirely different perspectives: the vibrant, artisanal pulse of central Ballstad and the raw, end-of-the-road seclusion of Sørvågen**. By utilizing a **private guide and vehicle** for all land-based exploration, I remove the friction of navigating narrow coastal roads and searching for parking in crowded villages. This ensures that even the most 'iconic' locations are experienced with a sense of quiet, personal discovery.",
    gridImages: [
      { src: "/images/lofoten-rorbu.jpg", alt: "Red rorbu fishing cabins on Lofoten fjord", span: "wide" },
      { src: "/images/lofoten-kayak.jpg", alt: "Sea kayaking through Lofoten sea stacks", span: "normal" },
      { src: "/images/unstad_beach.jpg", alt: "Unstad Beach", span: "normal" },
      { src: "/images/seaweed.webp", alt: "Seaweed", span: "wide" },
    ]
  },
  "norwegian-fjords-hidden-valleys": {
    title: "Norwegian Fjords",
    subtitle: "Hidden Valleys Experience",
    heroImage: "/images/fjord-waterfall.jpg",
    heroTagline: "Where waterfalls dissolve into silence.",
    overview: "The Sognefjord is Norway’s 'King of Fjords'—a deep, emerald artery cutting 200 kilometers into the heart of the mountains. This journey focuses on the transition from the Hanseatic maritime history of Bergen to the high-alpine pastures and hidden hamlets of the **Sognefjord region**. It is a tribute to the 'Slow-Living' philosophy, where luxury is found in the creak of an 18th-century timber floor, the steam of a wood-fired sauna, and the taste of the world's finest goat cheese at its source.",
    guestProfile: "This itinerary is specifically curated for **couples or a small group of friends (2–4 guests)** who seek a profound sense of place. It is tailored for the **Curious Explorer**—the traveler who enjoys being physically active through high-pasture hiking and fjord kayaking but prioritizes the warmth and storytelling of a heritage farmstead over a traditional hotel. This flow balances high-end urban design in Oslo with the rustic, authentic heritage of the fjords.",
    whenToVisit: "The definitive window for this crossing is **May through September**, a period that transitions from the dramatic 'thaw' to the golden harvest. In May and June, the landscape is a theater of roaring waterfalls and blossoming orchards set against snow-capped peaks. High summer (July and August) brings the 'White Nights' and full access to the mountain pastures, while September offers crisp, golden light and a quiet, artisanal focus on the autumn harvest.",
    journeyFlow: ["Bergen", "The Sognefjord Region", "Oslo"],
    activities: [
      {
        title: "Phase I: The Hanseatic Palate (Bergen)",
        items: [
          {
            name: "The Archipelago Culinary Safari",
            description: "Embark on a private maritime expedition into the Bergen archipelago. Board a vessel from the harbour and weave through the islets to forage for periwinkles and seaweed. On a remote shore, enjoy a gastronomic meal — including fresh scallops and signature shellfish soup — prepared over an open fire as the tide comes in."
          },
          {
            name: "Mt. Fløyen Panorama",
            description: "Take the funicular for a sunset view over the seven mountains, a perfect introduction to the fjord topography that will define the days ahead."
          },
          {
            name: "Bryggen & the Hanseatic Museum",
            description: "A private guided walk through the UNESCO-listed wooden wharf district with a historian who can unlock the stories behind its extraordinary preservation."
          },
        ]
      },
      {
        title: "Phase II: Crossing the King of Fjords (Transfer Day)",
        items: [
          {
            name: "The Waterfall & Valley Route",
            description: "Your private guide will drive you east, stopping at **Tvindefossen**, a tiered waterfall known for its rejuvenating mist."
          },
          {
            name: "The Silent Cruise (Gudvangen to Flåm)",
            description: "Board the award-winning electric vessel at **Gudvangen**. Glide through the **Nærøyfjord** where the mountain walls rise 1,700 meters directly from the water. Your guide will meet you at the pier in **Flåm** with your luggage."
          },
          {
            name: "Stegastein Viewpoint at Dusk",
            description: "A cantilevered platform 650 metres above the Aurlandsfjord, designed by architectural firm Fehn & Grung. Arrive late in the day when the coach parties have gone."
          },
          {
            name: "Flåm Exploration",
            description: "Enjoy a craft beer and lunch at a **Boutique Brewpub** housed in a stave-church-inspired building, before a short transfer to the stillness of your farmstead."
          },
        ]
      },
      {
        title: "Phase III: The Aurland Valley & High Pastures",
        items: [
          {
            name: "The Leim Pasture Hike",
            description: "A private guided trek up to a remote summer farm. Enjoy a traditional pasture picnic with fresh-made pancakes and local cheese while overlooking the valley."
          },
          {
            name: "Floating Fjord Sauna",
            description: "Spend an afternoon alternating between the wood-fired heat of a private floating sauna on the **Aurlandsfjord** and an invigorating plunge into the glacial waters."
          },
          {
            name: "Bike & Kayak Adventure",
            description: "A gentle cycle from the lodge followed by a sea kayak session, paddling past roadless hamlets and ancient Viking mounds."
          },
        ]
      },
      {
        title: "Phase IV: The Iron Path & Urban Oslo",
        items: [
          {
            name: "The Flåm Railway (Flåmsbana)",
            description: "Ascend from the fjord to the mountain station of **Myrdal**. It is one of the steepest and most beautiful rail journeys in the world."
          },
          {
            name: "Oslo’s Urban Treasures",
            description: "A private guided walk through the capital's hidden gems, from the secret gardens of the Royal Palace to the cutting-edge architecture of the **Barcode district**."
          },
          {
            name: "Oslo on Wheels (Optional)",
            description: "If you prefer a higher pace, opt for a private bike tour along the harbor, passing the **Opera House** and the **Munch Museum**."
          },
        ]
      }
    ],
    accommodation: "In Bergen, you will stay at a **Neo-Renaissance Gem**, a grand, family-run hotel housed in a 19th-century bank building that celebrates the city's musical legacy. In the Aurland Valley, you move to a **Soulful Boutique Farmstead**, a cluster of restored farm buildings that define 'luxury through authenticity.' The journey concludes at a **Restored 1930s Masterpiece** in Oslo, featuring Art Deco elegance and the city's most vibrant rooftop social scene.",
    designRationale: "I have designed this journey to eliminate the 'travel friction' often found in the fjords. By utilizing a **private transfer from Bergen**, I gain you access to the dramatic high-altitude viewpoints that standard rail-tours bypass. I have split your logistics at Gudvangen: you will board a silent electric vessel to experience the UNESCO Nærøyfjord in its natural stillness, while your guide moves your luggage by road to meet you in Flåm. This 'Split Transit' approach buys back hours of leisure, ensuring your arrival at the **heritage farmstead** is effortless. By basing you in the **Aurland Valley**, I have pulled you away from the high-traffic ports and into a setting defined by wood-smoke and mountain air—a sophisticated, rural counterpoint to your final stay in an **architectural landmark** in Oslo.",
    gridImages: [
      { src: "/images/fjord-waterfall.jpg", alt: "Waterfall cascading into Norwegian fjord", span: "wide" },
      { src: "/images/hero-fjord.jpg", alt: "Aerial fjord view", span: "normal" },
      { src: "/images/norway_train.webp", alt: "Mountain railway through fjord landscape", span: "normal" },
      { src: "/images/farm_hike.jpg", alt: "Farm Hike", span: "normal" },
    ]
  },
  "finnish-lapland-northern-lights": {
    title: "Finnish Lapland",
    subtitle: "Northern Lights Escape",
    heroImage: "/images/northern-lights.jpg",
    heroTagline: "The Finnish Synthesis: Helsinki & The Arctic Circle",
    overview: "This journey is a study in Finnish refinement, bridging the sophisticated urbanity of the south with the raw, elemental beauty of the **Arctic north**. We begin in Helsinki—a capital defined by its status as a global design hub—before flying north to Rovaniemi. Here, the experience shifts into a deep-winter immersion, where modern architectural design is used as a tool to frame the infinite beauty of the polar sky and the silent, snow-heavy Taiga.",
    guestProfile: "**Couples and small groups of 2–6** seeking a winter Arctic experience grounded in movement and outdoor immersion rather than mere spectacle. This journey is crafted for those drawn to architectural expression, active exploration, and the kind of contemplative space that extreme environments create. It is particularly suited to travellers at ease with the quiet and the cold, who value physical engagement with the landscape and the restorative power of the wild.",
    whenToVisit: "**December through March** provides the most evocative winter conditions. December and January are defined by the **Blue Hour** (Kaamos)—a period where the sun remains below the horizon, bathing the landscape in a surreal, ethereal cobalt light. This is the peak time for atmospheric photography and cozy, fireside luxury. From February onwards, the return of the sun brings a brilliant 'white-out' aesthetic, while the dark evenings continue to offer an optimal stage for the Aurora Borealis.",
    journeyFlow: ["Helsinki", "Rovaniemi", "The Arctic Forest", "Helsinki"],
    activities: [
      {
        title: "Phase I: The Design Capital (Helsinki)",
        items: [
          { name: "Private Gastronomic Walking Tour", description: "A curated exploration of Helsinki’s food scene led by a specialist. Discover the evolution of New Nordic cuisine through visits to artisanal producers, hidden bistros, and the historic market halls." },
          { name: "Urban Design & Architecture", description: "Wander the Design District and the iconic Oodi library to see how Finnish functionality meets world-class aesthetic." },
          { name: "Löyly Sauna & Dinner", description: "The award-winning **Löyly** waterfront sauna complex — a masterwork of birch and glass — followed by dinner at its celebrated restaurant overlooking the sea." },
        ]
      },
      {
        title: "Phase II: Into the Silent Taiga (Rovaniemi)",
        items: [
          { name: "Arctic Dog Sledding", description: "A high-welfare, private mushing expedition through deep-snow forest trails. This experience emphasizes the heritage of the dogs and the profound silence of the wilderness, away from the standard tourist tracks." },
          { name: "Private Reindeer Encounter", description: "A quiet, respectful visit to a remote forest setting to observe these iconic Arctic animals and learn about their vital role in the northern ecosystem from a local perspective." },
          { name: "Electric Snowmobile Safari", description: "A silent, emission-free exploration of the backcountry. These specialized sleds allow for an undisturbed connection with the winter landscape, moving through the trees without the noise of a traditional engine." },
          { name: "Traditional Ice Fishing", description: "A contemplative morning on a frozen lake, learning the patience and technique of this ancestral northern pastime alongside a local expert." },
          { name: "Backcountry Snowshoeing", description: "A guided, off-the-beaten-path trek through the Taiga forest to reach panoramic viewpoints and experience the absolute stillness of 'crown snow' caking the trees." },
        ]
      },
      {
        title: "Phase III: Arctic Wellness & Celestial Skies",
        items: [
          { name: "Blueberry Forest Sauna & Dinner", description: "An exclusive wellness ritual in a secluded forest sauna. After the heat, enjoy a private dinner featuring hand-picked Arctic ingredients and local delicacies served in the glow of a fire." },
          { name: "Private Aurora Photography", description: "A nocturnal expedition with a professional photographer. Venture into the dark-sky zones to master the art of capturing the Northern Lights while learning the science and folklore behind the lights." },
        ]
      }
    ],
    accommodation: "Accommodation has been selected to reflect the highest level of Finnish design and hospitality, balancing urban sophistication with architectural escapism. In Helsinki, the choice rests between a **historic landmark** of 19th-century elegance with a world-class spa, or a contemporary sanctuary known for its curated art collection and residential feel. In Rovaniemi, we begin with a boutique urban retreat that celebrates **Nordic light and monochrome palettes**. For the final nights, the experience becomes more expressive: you will reside in a cantilevered forest suite elevated on stilts. Designed to mimic the nesting of Arctic birds, these suites feature expansive **glass walls** that pull the snow-heavy canopy and the polar sky directly into your living space.",
    designRationale: "This itinerary is designed to move beyond the typical tourist experience by emphasizing the topographical and sensory shift from the city center to the deep forest. By structuring the stay to include a dedicated 4 or 5-night window in the north, I ensure a slow-paced rhythm that maximizes the potential for Aurora sightings without the fatigue of a rushed schedule. **To allow for total immersion in the cold, I provide a complete Arctic outfitting service upon arrival, ensuring you are prepared for the elements in technical comfort**. This logistical ease allows the focus to remain where it belongs: on the ethereal glow of the **Blue Hour** and the restorative silence of the **Arctic** wild.",
    gridImages: [
      { src: "/images/northern-lights.jpg", alt: "Aurora borealis over Finnish Lapland", span: "wide" },
      { src: "/images/glass-igloo-interior.jpg", alt: "Glass igloo interior with aurora overhead", span: "normal" },
      { src: "/images/husky-sled.jpg", alt: "Husky sledding through boreal forest", span: "normal" },
      { src: "/images/finland-winter.jpg", alt: "Finnish Lapland winter forest", span: "normal" },
    ]
  },
  "swedish-lapland-arctic-winter": {
    title: "Swedish Lapland",
    subtitle: "Arctic Winter Experience",
    heroImage: "/images/treehotel.jpg",
    heroTagline: "Where design meets the frozen frontier.",
    overview: "Swedish Lapland presents a distinctly Scandinavian proposition—a place where cutting-edge architectural design coexists without contradiction with untamed Arctic wilderness. Here, you might sleep suspended in a mirrored glass cube invisible in the forest canopy, or within a floating sanctuary that drifts upon the seasonal rhythms of the Lule River. This is a journey that honours Sweden's particular genius: the belief that functional elegance and deep wilderness immersion are not competing values, but complementary ones.",
    guestProfile: "**Design-conscious couples and small groups of 2–6** who hold architectural and cultural experience in equal regard to wilderness adventure. Designed for travellers drawn to architectural expression and understated luxury, this journey appeals to those who value access, atmosphere, and discretion. It is particularly suited to clients who seek rare perspectives — experiencing the Northern Lights not as an excursion, but as something encountered privately, within the quiet context of their surroundings.",
    whenToVisit: "**November through March** offers the most complete winter experience, with frozen rivers, snow-covered forests, and conditions suited to Arctic exploration. From January onwards, longer daylight hours are balanced by consistently dark evenings, creating favourable conditions for viewing the Aurora Borealis. While never guaranteed, the remote setting of Harads — far from artificial light — provides an exceptional environment for sightings, often visible directly from your accommodation.",
    journeyFlow: ["Stockholm", "Luleå", "The Lule River (Harads)", "The Boreal Canopy (Harads)", "Stockholm"],
    activities: [
      {
        title: "Phase I: The Design Capital (Stockholm)",
        items: [
          { name: "Private Guided Walking Tour", description: "A tailored exploration of Stockholm’s historic architecture and hidden design corners, led by a local expert who reveals the city beyond the typical guidebooks." },
          { name: "Curated Museum Visits", description: "Enjoy priority access and guided insights at the Vasa Museum to witness the 17th-century maritime marvel, or opt for an immersive journey through pop history at ABBA The Museum." },
        ]
      },
      {
        title: "Phase II: Taiga & Tundra (The Lule River Valley)",
        items: [
          { name: "Snowmobile Forest Safari", description: "An exhilarating private journey across frozen wetlands and up to panoramic viewpoints overlooking the vast Lule River valley." },
          { name: "Boreal Snowshoeing", description: "A slow-paced, guided trek through deep snow to track local wildlife and experience the absolute silence of the snow-caked Taiga forest." },
          { name: "Sámi Heritage Encounter", description: "An intimate, meaningful afternoon with a local Sámi family. Engage in a respectful exchange to learn about reindeer husbandry and the traditions of indigenous Arctic survival." },
          { name: "Arctic Dog Sledding", description: "A daytime expedition through the snow-heavy boreal forests, navigating the silent wilderness by dog power in a high-welfare, private setting." },
        ]
      },
      {
        title: "Phase III: Arctic Wellness & Elemental Dining",
        items: [
          { name: "The Wellness Ritual", description: "A traditional hydrotherapy circuit involving a sequence of rhythmic heat and cold plunges in the frozen heart of the river—a grounding experience for the body and mind." },
          { name: "Dining on Ice", description: "A private, white-tablecloth culinary experience set upon the frozen Lule River. Dine under the Arctic sky, illuminated only by torches and starlight, featuring the finest regional ingredients." },
          { name: "Private Aurora Photography", description: "A nocturnal expedition with a professional photographer. Venture into the dark-sky zones to master the art of capturing the Northern Lights while learning the folklore of the Swedish North." },
        ]
      }
    ],
    accommodation: "Accommodation has been selected to reflect the highest level of Swedish design and hospitality, with each property offering a distinct sense of place. In Stockholm, options include either a **historic landmark** known for its enduring elegance, or a more contemporary, design-led residence with a residential, highly curated atmosphere. In the Arctic, the experience becomes more architectural. One setting is positioned directly on the river, where the focus is on stillness, ritual, and a deeply considered approach to wellness. The other is set within the forest canopy, where individually designed structures offer a more expressive and unexpected interpretation of the landscape. Together, they provide two complementary perspectives on **life in the north**.",
    designRationale: "The **luxury traveler** today seeks isolation without deprivation. While the two Arctic properties are geographical neighbors in Harads, we have paired them to provide two entirely different sensory experiences: one rooted in the therapeutic stillness of the river and the other in the playful escapism of the forest. By spending time in both, the guest experiences the full **spectrum of Arctic design** without the fatigue of long travel days, maximizing their time in 'the great silence.'",
    gridImages: [
      { src: "/images/treehotel.jpg", alt: "Mirrored cube treehouse in Swedish Lapland forest", span: "wide" },
      { src: "/images/dog.jpg", alt: "Dog sledding through boreal forest", span: "normal" },
      { src: "/images/ice-dining.webp", alt: "Ice Dining", span: "normal" },
      { src: "/images/reindeer.jpg", alt: "Reindeer", span: "normal" },
    ]
  },
  "svalbard-polar-summer-expedition": {
    title: "Svalbard",
    subtitle: "Polar Arctic Summer Expedition",
    heroImage: "/images/polar_bear_lying.jpg",
    heroTagline: "The Polar Frontier: Svalbard’s Remote Horizons",
    overview: "Svalbard represents the ultimate northern frontier—a vast, glaciated archipelago situated halfway between mainland Norway and the North Pole. This journey is a tribute to the golden age of polar exploration, reimagined for the modern traveler. We bridge the colonial-industrial history of Longyearbyen with the absolute isolation of a remote coastal radio station. It is a land of 24-hour daylight or total polar night, where the scale of the landscape is matched only by the profound silence of the High Arctic.",
    guestProfile: "Design-conscious **couples and small groups of 2–6** who hold architectural and cultural heritage in equal regard to wilderness adventure. This itinerary is for the true 'frontier-seeker'—travellers drawn to the stark beauty of the tundra, the history of Arctic maritime life, and the quiet dignity of a remote outpost. It appeals to those who value access and discretion, and who understand that in this extreme environment, true luxury is defined by warmth, safety, and a front-row seat to the rawest nature on Earth.",
    whenToVisit: "**May through September** is the definitive window for this coastal expedition. During these months, the 'Midnight Sun' provides 24-hour daylight, allowing the landscape to be explored without the constraints of time. Early summer offers the spectacle of flowing meltwater and vast colonies of nesting seabirds, while the transition into September brings a soft, golden light to the tundra and the first dusting of snow on the surrounding peaks.",
    journeyFlow: ["Oslo/Tromsø", "Longyearbyen", "SIsfjord Radio", "Longyearbyen"],
    activities: [
      {
        items: [
          { name: "Historic Station Walk", description: "A guided exploration of the Kapp Linné outpost, uncovering the fascinating history of Arctic telecommunications and life at the 78th parallel." },
          { name: "Open RIB Boat Safari", description: "A maritime expedition along the coast to search for walruses, whales, and the dramatic, bird-filled cliffs of the fjords." },
          { name: "High Arctic Hiking", description: "Full-day guided treks across the tundra and mountain ridges, offering panoramic views of the glacier-carved landscape." },
          { name: "Dog Sledding on Wheels", description: "A unique way to experience the power and enthusiasm of Arctic huskies during the snow-free months, navigating the coastal roads of Longyearbyen." },
          { name: "Polar Degustation & Wine Pairing", description: "Multi-course dinners at the remote station that defy the isolation of the setting, featuring Arctic char, reindeer, and curated pairings from a world-class cellar." },
          { name: "Tundra Wildlife Spotting", description: "Guided outings to observe the endemic Svalbard reindeer, Arctic foxes, and the diverse birdlife that thrives in the summer sun." },
        ]
      }
    ],
    accommodation: "Accommodation on Svalbard is a study in 'Arctic Chic'—warm, tactile, and deeply rooted in local history. In Longyearbyen, your stay is at a refined hilltop lodge that was once the social hub for mining directors, now reimagined as a sanctuary of soft textiles, open fireplaces, and one of the Arctic’s most impressive wine cellars. At the edge of the Isfjord, the experience becomes more evocative: a repurposed radio station that balances its industrial, utilitarian heritage with modern Nordic interior design. This remote outpost is a sanctuary of 'monastic luxury', where the views of the Greenland Sea are uninterrupted and the atmosphere is one of total, peaceful seclusion.",
    designRationale: "I have designed this journey to address the logistical intensity of the High Arctic while ensuring a sense of effortless flow. By including an 'arrival night' in Longyearbyen, I provide a crucial buffer for flight schedules and a soft transition into the environment. The move to **Isfjord Radio** is the centerpiece of the trip—it offers the 'Remote Horizon' that my clients seek, moving them away from the town center and into a space where the wilderness is the only neighbor. **To ensure complete peace of mind, all specialized boat transfers and Arctic safety measures are seamlessly integrated, allowing the guest to focus entirely on the surreal scale of the North**.",
    gridImages: [
      { src: "/images/arctic_fox_.jpg", alt: "Arctic Fox", span: "wide" },
      { src: "/images/lofoten_swim.webp", alt: "Lofoten swim", span: "normal" },
      { src: "/images/walrus.jpg", alt: "Walrus", span: "normal" },
      { src: "/images/lofoten_mountain.jpg", alt: "Lofoten Mountain", span: "wide" },
    ]
  },
  "iceland-summer-fire-ice": {
    title: "Iceland",
    subtitle: "Summer Along the Edge of Fire and Ice",
    heroImage: "/images/iceland-glacier.jpg",
    heroTagline: "The Volcanic Pulse: Glacial Highlands & Elemental Wellness",
    overview: "Iceland is a landscape in a constant state of becoming—a raw, geological theatre where the earth’s internal heat meets the crushing weight of the glaciers. This journey is designed to peel back the layers of the North Atlantic, moving from the curated streets of the capital to the black-sand fringes of the south. We focus on the concept of 'Elemental Contrast': the thrill of ice caves and highland treks balanced by the profound, geothermal stillness of the world’s most iconic lagoon.",
    guestProfile: "This journey is specifically curated for **couples or a small group of friends (2–4 guests)** who seek an immersive and active connection with nature. It is tailored for the **Curious Explorer**—the traveler who enjoys being physically engaged with the landscape, whether through coastal trekking or glacial exploration, but who prioritizes a refined and comfortable environment at the end of each day. While the activities require a good level of physical mobility, the pace is designed to be rewarding rather than exhausting, making it ideal for those who value private, expert-led storytelling and the intimacy of shared, world-class meals.",
    whenToVisit: "**June through August** is the definitive window for highland access. This is the only time the interior roads to Landmannalaugar are open, and the Midnight Sun provides endless visibility for late-evening whale watching. The summer months offer the most stable conditions for snorkeling the Silfra Fissure and exploring the ice caves of Katla, ensuring a safe yet high-adrenaline immersion.",
    journeyFlow: ["Reykjavík", "The South Coast", "The Reykjanes Peninsula", "Reykjavík"],
    activities: [
      {
        title: "Phase I: The Capital & The Midnight Sea",
        items: [
          { name: "Gastronomic Walking Tour", description: "A private guided exploration of Reykjavík’s food scene, tasting artisanal products like local rye-bread ice cream and the freshest North Atlantic seafood." },
          { name: "Midnight Sun Whale Safari", description: "A thrilling RIB boat expedition into **Faxaflói Bay**. These high-speed, stable vessels allow you to cover more area in search of Humpbacks and Minke whales, offering an exhilarating 'water-level' perspective that larger boats cannot provide." },
        ]
      },
      {
        title: "Phase II: The Southern Elements",
        items: [
          { name: "Þingvellir & The Tectonic Drift", description: "Explore the UNESCO World Heritage site of **Þingvellir National Park**. Walk through the **Almannagjá Gorge**, a dramatic rift where the North American and Eurasian tectonic plates are visibly pulling apart. Visit **Lögberg (Law Rock)**, the site of the world’s first parliament, and the crystal-clear waters of **Silfra**, where you can snorkel between the two continents." },
          { name: "The Greenhouse Lunch", description: "Mid-exploration, enjoy a delicious lunch at **Friðheimar**. Dine on world-famous tomato soup and fresh-baked bread inside a glowing, geothermal greenhouse, surrounded by 10,000 tomato plants." },
          { name: "Geysers & Golden Falls", description: "Witness the explosive power of the **Strokkur geyser** and the thundering, two-tiered cascade of **Gullfoss**." },
          { name: "Ice Caves & Noir Coastlines", description: "A private 4x4 expedition to the 'Dragon Glass' ice caves of the **Katla Volcano**. Afterward, walk the world-famous **Reynisfjara black sand beach**, framed by massive hexagonal basalt columns and the **Reynisdrangar** sea stacks rising from the Atlantic. Visit the 60-meter-high **Skógafoss** and walk behind the water curtain at **Seljalandsfoss**." },
          { name: "Landmannalaugar Expedition", description: "A full-day private 4x4 journey into the interior. Witness the neon-green moss of **Grænagil**, the obsidian lava fields of **Laugahraun**, and the multicolored rhyolite peaks of **Brennisteinsalda**." },
          { name: "Westman Islands Safari", description: "A short transfer to the southern harbor for a private sea crossing to **Heimaey**. See the world's largest puffin colonies at the **Stórhöfði** cliffs and walk the still-warm lava fields of the **Eldfell** volcano. Enjoy a shared culinary experience at **Næs**. This bright, open-kitchen bistro specialises in 'social plates' like cod wings, wild-caught fish, and local lamb—the perfect communal meal to toast to your island expedition" },
        ]
      },
      {
        title: "Phase III: The Geothermal Reset",
        items: [
          { name: "The Ritual of the Lagoon", description: "A final transition to the Reykjanes Peninsula. Guests can enjoy a private geothermal lagoon and subterranean spa ritual, concluding with a farewell tasting menu overlooking the volcanic horizon." },
        ]
      }
    ],
    accommodation: "Accommodation is selected to bridge the gap between boutique urbanism and rural heritage. In Reykjavík, you will stay in a **Design Boutique** on the city’s main artery—a hotel that blends art-deco elegance with contemporary Icelandic minimalism. In the south, the experience shifts to a **Luxury Farmhouse Estate**—a family-run boutique lodge that celebrates the heritage of the Icelandic horse. Here, the rooms offer views of the southern fells and the Atlantic, combining the warmth of a private home with the services of a high-end lodge. For the final night, you move to the **Volcanic Retreat**—an architectural landmark built into an 800-year-old lava flow. Featuring a private lagoon and subterranean spa, it is a space designed for total sensory decompression.",
    designRationale: "Iceland’s popularity requires a strategy of 'Smart Logistics' and 'Private Access.' **I have designed this itinerary to utilize dedicated 7-8 hour private guided transfers for all land-based exploration**. By basing the mid-trip stay at a southern equestrian estate, I significantly reduce travel times to the Westman Islands and the Highlands, buying back hours of leisure for the guest. The journey concludes with a final night in a high-design volcanic retreat to ensure you return home from the land of 'Fire and Ice' feeling completely restored.",
    gridImages: [
      { src: "/images/iceland-lava.jpg", alt: "Moss-covered Icelandic lava field", span: "normal" },
      { src: "/images/puffins.jpg", alt: "Puffins on Icelandic coastal cliffs", span: "normal" },
      { src: "/images/arctic-fox.jpg", alt: "Arctic fox in Iceland", span: "normal" },
      { src: "/images/whale-tail.jpg", alt: "Whale watching off Iceland coast", span: "wide" },
    ]
  },
}

export async function generateStaticParams() {
  return Object.keys(itineraryData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const itinerary = itineraryData[slug]

  if (!itinerary) {
    return { title: "Itinerary Not Found" }
  }

  return {
    title: `${itinerary.title} | Nordic & Arctic Travel Designer`,
    description: itinerary.introduction,
  }
}

export default async function ItineraryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const itinerary = itineraryData[slug]

  if (!itinerary) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main>
        <ItineraryDetailHero
          title={itinerary.title}
          subtitle={itinerary.subtitle}
          heroImage={itinerary.heroImage}
          heroTagline={itinerary.heroTagline}
        />
        <ItineraryContent
          overview={itinerary.overview}
          guestProfile={itinerary.guestProfile}
          whenToVisit={itinerary.whenToVisit}
          journeyFlow={itinerary.journeyFlow}
          activities={itinerary.activities}
          accommodation={itinerary.accommodation}
          designRationale={itinerary.designRationale}
          gridImages={itinerary.gridImages}
        />
        <RelatedItineraries currentSlug={slug} />
      </main>
      <Footer />
    </>
  )
}
