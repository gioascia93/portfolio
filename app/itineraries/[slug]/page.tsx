import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ItineraryDetailHero } from "@/components/itineraries/itinerary-detail-hero"
import { ItineraryContent } from "@/components/itineraries/itinerary-content"
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
  activities: string[]
  accommodation: string
  designRationale: string
  gridImages: { src: string; alt: string; span?: "wide" | "tall" | "normal" }[]
}> = {
  "lofoten-arctic-summer": {
    title: "Lofoten Islands",
    subtitle: "Arctic Summer Journey",
    heroImage: "/images/lofoten-rorbu.jpg",
    heroTagline: "Shaped by light, distance, and stillness.",
    overview: "The Lofoten Islands emerge from the Arctic Sea like jagged teeth — a chain of granite peaks rising improbably from still water, connected by narrow straits and separated from mainland Norway by a deep channel. This is where midnight sun bathes dramatic landscapes in perpetual golden light, fishing villages perch impossibly on stilts above glassy fjords, and the connection between sea, mountain, and human craft feels immediate and profound. There is nothing else like it on earth.",
    guestProfile: "Well-travelled couples and small groups of 2–6 seeking remote landscapes, genuine privacy, and experiences that resist easy comparison. Drawn to nature photography, soft adventure, and cultural immersion. Travellers who value space, considered design, and days without agenda over choreographed itineraries.",
    whenToVisit: "June through August. Late June's summer solstice brings nearly 24-hour daylight — light that never quite leaves the sky, only softens to a perpetual golden dusk. July offers warmest water for kayaking. Any month in this window gives extraordinary conditions for photography and extended outdoor days.",
    journeyFlow: ["Tromsø", "Lofoten Islands", "Svolvær", "Reine", "Vesterålen"],
    activities: [
      "Private fjord exploration by traditional wooden vessel with local skipper",
      "Guided hikes to remote coastal viewpoints at golden hour",
      "Sea kayaking through sea stacks and sheltered inlets",
      "Encounters with sea eagles, puffins, and Arctic wildlife",
      "Immersion in traditional rorbu fishing cabin culture with local fishermen",
      "Midnight sun photography sessions on empty mountain ridgelines"
    ],
    accommodation: "Properties here are chosen for their sense of belonging to the landscape rather than imposing on it. Historic red rorbu cabins sitting on stilts above the water — converted with restraint and attention to craft. Small-scale design lodges where floor-to-ceiling glass frames the peaks and water. Local ownership, regional materials, and views that render everything else irrelevant.",
    designRationale: "This itinerary is built around extended stays in two carefully chosen villages rather than daily movement. The pacing is deliberate — these peaks demand time to register fully. Active days of kayaking and hiking are sequenced alongside unscheduled afternoons, allowing the landscape's scale to become emotionally familiar rather than visually processed. The midnight sun creates a temporal freedom unlike anywhere else: days without end, where dinner at eleven feels entirely natural.",
    gridImages: [
      { src: "/images/lofoten-rorbu.jpg", alt: "Red rorbu fishing cabins on Lofoten fjord", span: "wide" },
      { src: "/images/lofoten-kayak.jpg", alt: "Sea kayaking through Lofoten sea stacks", span: "normal" },
      { src: "/images/puffins.jpg", alt: "Atlantic puffins on Lofoten cliff", span: "normal" },
      { src: "/images/hero-fjord.jpg", alt: "Aerial fjord landscape", span: "wide" },
    ]
  },
  "norwegian-fjords-hidden-valleys": {
    title: "Norwegian Fjords",
    subtitle: "Hidden Valleys Experience",
    heroImage: "/images/fjord-waterfall.jpg",
    heroTagline: "Where waterfalls dissolve into silence.",
    overview: "The Sognefjord is Norway’s 'King of Fjords'—a deep, emerald artery cutting 200 kilometers into the heart of the mountains. This journey focuses on the transition from the Hanseatic maritime history of Bergen to the high-alpine pastures and hidden hamlets of the Sognefjord region. It is a tribute to the 'Slow-Living' philosophy, where luxury is found in the creak of an 18th-century timber floor, the steam of a wood-fired sauna, and the taste of the world's finest goat cheese at its source.",
    guestProfile: "This itinerary is specifically curated for couples or a small group of friends (2–4 guests) who seek a profound sense of place. It is tailored for the Curious Explorer—the traveler who enjoys being physically active through high-pasture hiking and fjord kayaking but prioritizes the warmth and storytelling of a heritage farmstead over a traditional hotel. This flow balances high-end urban design in Oslo with the rustic, authentic heritage of the fjords.",
    whenToVisit: "The definitive window for this crossing is May through September, a period that transitions from the dramatic 'thaw' to the golden harvest. In May and June, the landscape is a theater of roaring waterfalls and blossoming orchards set against snow-capped peaks. High summer (July and August) brings the 'White Nights' and full access to the mountain pastures, while September offers crisp, golden light and a quiet, artisanal focus on the autumn harvest.",
    journeyFlow: ["Bergen", "The Sognefjord Region", "Oslo"],
    activities: [
      "Private guiding through fjord valleys absent from mainstream tourism circuits",
      "Multi-day hiking routes to remote viewpoints and abandoned mountain farms",
      "Waterfall walks and swimming in glacially cold plunge pools",
      "Farm-to-table dining with local producers and regional cheesemakers",
      "Kayaking through UNESCO-listed Nærøyfjord at dawn",
      "Cider tasting in Hardanger apple orchards"
    ],
    accommodation: "In Bergen, you will stay at a Neo-Renaissance Gem, a grand, family-run hotel housed in a 19th-century bank building that celebrates the city's musical legacy. In the Aurland Valley, you move to a Soulful Boutique Farmstead, a cluster of restored farm buildings that define 'luxury through authenticity.' The journey concludes at a Restored 1930s Masterpiece in Oslo, featuring Art Deco elegance and the city's most vibrant rooftop social scene.",
    designRationale: "The structure of this journey mirrors the fjord landscape itself — intervals of intense visual and physical engagement followed by passages of quiet. Destinations are sequenced to build gradually from accessible to remote, giving your eye and body time to recalibrate to a different scale of wilderness. Accommodation types shift in parallel, moving from urban design sensibility to something older and more rooted, deepening the sense of arrival.",
    gridImages: [
      { src: "/images/fjord-waterfall.jpg", alt: "Waterfall cascading into Norwegian fjord", span: "wide" },
      { src: "/images/hero-fjord.jpg", alt: "Aerial fjord view", span: "normal" },
      { src: "/images/norway-train.jpg", alt: "Mountain railway through fjord landscape", span: "normal" },
      { src: "/images/lapland-lodge.jpg", alt: "Nordic lodge interior", span: "normal" },
    ]
  },
  "finnish-lapland-northern-lights": {
    title: "Finnish Lapland",
    subtitle: "Northern Lights Escape",
    heroImage: "/images/northern-lights.jpg",
    heroTagline: "The Finnish Synthesis: Helsinki & The Arctic Circle",
    overview: "This journey is a study in Finnish refinement, bridging the sophisticated urbanity of the south with the raw, elemental beauty of the Arctic north. We begin in Helsinki—a capital defined by its status as a global design hub—before flying north to Rovaniemi. Here, the experience shifts into a deep-winter immersion, where modern architectural design is used as a tool to frame the infinite beauty of the polar sky and the silent, snow-heavy Taiga.",
    guestProfile: "Couples and small groups of 2–6 seeking a winter Arctic experience grounded in movement and outdoor immersion rather than mere spectacle. This journey is crafted for those drawn to architectural expression, active exploration, and the kind of contemplative space that extreme environments create. It is particularly suited to travellers at ease with the quiet and the cold, who value physical engagement with the landscape and the restorative power of the wild.",
    whenToVisit: "December through March provides the most evocative winter conditions. December and January are defined by the Blue Hour (Kaamos)—a period where the sun remains below the horizon, bathing the landscape in a surreal, ethereal cobalt light. This is the peak time for atmospheric photography and cozy, fireside luxury. From February onwards, the return of the sun brings a brilliant 'white-out' aesthetic, while the dark evenings continue to offer an optimal stage for the Aurora Borealis.",
    journeyFlow: ["Helsinki", "Rovaniemi", "The Arctic Forest", "Helsinki"],
    activities: [
      "Private Gastronomic Walking Tour: A curated exploration of Helsinki’s food scene, led by a specialist to discover artisanal producers, hidden bistros, and the evolution of New Nordic cuisine.",
      "Arctic Dog Sledding: A high-welfare, private mushing expedition through deep-snow forest trails, emphasizing the heritage of the dogs and the silence of the wilderness.",
      "Private Reindeer Encounter: A quiet, respectful visit to a remote forest setting to observe these iconic Arctic animals and learn about their role in the northern ecosystem.",
      "Backcountry Snowshoeing: A guided, off-the-beaten-path trek through the Taiga forest to reach panoramic viewpoints and experience the absolute stillness of the snow-caked trees.",
      "Traditional Ice Fishing: A contemplative morning on a frozen lake, learning the patience and technique of this ancestral northern pastime.",
      "Electric Snowmobile Safari: A silent, emission-free exploration of the backcountry, allowing for an undisturbed connection with the winter landscape.",
      "Blueberry Forest Sauna & Dinner: An exclusive wellness ritual in a secluded forest sauna, followed by a private dinner featuring hand-picked Arctic ingredients and local delicacies.",
      "Private Aurora Photography: A nocturnal expedition with a professional photographer to master the art of capturing the Northern Lights in the dark-sky zones around Rovaniemi."
    ],
    accommodation: "Accommodation has been selected to reflect the highest level of Finnish design and hospitality, balancing urban sophistication with architectural escapism. In Helsinki, the choice rests between a historic landmark of 19th-century elegance with a world-class spa, or a contemporary sanctuary known for its curated art collection and residential feel. In Rovaniemi, we begin with a boutique urban retreat that celebrates Nordic light and monochrome palettes. For the final nights, the experience becomes more expressive: you will reside in a cantilevered forest suite elevated on stilts. Designed to mimic the nesting of Arctic birds, these suites feature expansive glass walls that pull the snow-heavy canopy and the polar sky directly into your living space.",
    designRationale: "This itinerary is designed to move beyond the typical tourist experience by emphasizing the topographical and sensory shift from the city center to the deep forest. By structuring the stay to include a dedicated 4 or 5-night window in the north, I ensure a slow-paced rhythm that maximizes the potential for Aurora sightings without the fatigue of a rushed schedule. To allow for total immersion in the cold, I provide a complete Arctic outfitting service upon arrival, ensuring you are prepared for the elements in technical comfort. This logistical ease allows the focus to remain where it belongs: on the ethereal glow of the Blue Hour and the restorative silence of the Arctic wild.",
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
    guestProfile: "Design-conscious couples and small groups of 2–6 who hold architectural and cultural experience in equal regard to wilderness adventure. Designed for travellers drawn to architectural expression and understated luxury, this journey appeals to those who value access, atmosphere, and discretion. It is particularly suited to clients who seek rare perspectives — experiencing the Northern Lights not as an excursion, but as something encountered privately, within the quiet context of their surroundings.",
    whenToVisit: "November through March offers the most complete winter experience, with frozen rivers, snow-covered forests, and conditions suited to Arctic exploration. From January onwards, longer daylight hours are balanced by consistently dark evenings, creating favourable conditions for viewing the Aurora Borealis. While never guaranteed, the remote setting of Harads — far from artificial light — provides an exceptional environment for sightings, often visible directly from your accommodation.",
    journeyFlow: ["Stockholm", "Luleå", "The Lule River (Harads)", "The Boreal Canopy (Harads)", "Stockholm"],
    activities: [
      "Private Guided Walking Tour: A tailored exploration of Stockholm’s historic architecture and hidden design corners, led by a local expert.",
      "Curated Museum Visits: Priority access and guided insights at the Vasa Museum to witness the 17th-century maritime marvel, or an immersive journey through pop history at ABBA The Museum.",
      "Snowmobile Forest Safari: An exhilarating private journey across frozen wetlands and up to panoramic viewpoints overlooking the Lule River valley.",
      "Boreal Snowshoeing: A slow-paced, guided trek through deep snow to track local wildlife and experience the absolute silence of the Taiga forest.",
      "The Arctic Bath Wellness Ritual: A traditional hydrotherapy circuit involving a sequence of heat and cold plunges in the river’s frozen heart.",
      "Private Aurora Photography: A nocturnal expedition with a professional photographer to master the art of capturing the Northern Lights.",
      "Sámi Heritage Encounter: An intimate, meaningful afternoon with a local Sámi family to learn about reindeer husbandry and indigenous Arctic survival.",
      "Arctic Dog Sledding: A daytime expedition through the snow-heavy boreal forests, navigating the silent wilderness by dog power.",
      "Dining on Ice: A private, white-tablecloth culinary experience set upon the frozen Lule River, illuminated by torches and starlight."
    ],
    accommodation: "Accommodation has been selected to reflect the highest level of Swedish design and hospitality, with each property offering a distinct sense of place. In Stockholm, options include either a historic landmark known for its enduring elegance, or a more contemporary, design-led residence with a residential, highly curated atmosphere. In the Arctic, the experience becomes more architectural. One setting is positioned directly on the river, where the focus is on stillness, ritual, and a deeply considered approach to wellness. The other is set within the forest canopy, where individually designed structures offer a more expressive and unexpected interpretation of the landscape. Together, they provide two complementary perspectives on life in the north.",
    designRationale: "The luxury traveler today seeks isolation without deprivation. While the two Arctic properties are geographical neighbors in Harads, we have paired them to provide two entirely different sensory experiences: one rooted in the therapeutic stillness of the river and the other in the playful escapism of the forest. By spending time in both, the guest experiences the full spectrum of Arctic design without the fatigue of long travel days, maximizing their time in 'the great silence.'",
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
    heroImage: "/images/svalbard-polar.jpg",
    heroTagline: "At the outer edge of the known world.",
    overview: "Svalbard exists at the frontier of the habitable — an Arctic archipelago at 78° North where polar bears outnumber humans, where glaciers calve directly into a sea that freezes for months each year, and where the midnight sun never dips below the horizon in summer. This is expedition travel in its most essential form: no schedules kept from a distance, no pre-determined itinerary, only the daily negotiation between weather, ice, wildlife, and opportunity.",
    guestProfile: "Experienced, independently-minded travellers — small groups of 4–12 — who understand that the best expeditions are shaped by conditions rather than calendars. Wildlife photographers, natural historians, and those for whom proximity to genuine wilderness is the primary metric of a journey's value. Comfortable with the compact world of an expedition vessel and entirely willing to trade resort infrastructure for encounters that cannot be manufactured.",
    whenToVisit: "June through August. July brings optimal conditions: stable weather, sea ice at its most navigable, wildlife in full activity, and the sun perpetually above the horizon. June offers slightly different ice patterns and the possibility of fewer expedition vessels in the archipelago. Both months provide the extraordinary experience of a sun that never sets.",
    journeyFlow: ["Longyearbyen", "Isfjorden", "Spitsbergen west coast", "Monaco Glacier", "Pack ice at 80°N"],
    activities: [
      "Zodiac expeditions into polar bear habitat with expert wildlife naturalists",
      "Sea kayaking beneath calving glacier faces",
      "Landings on remote beaches to explore abandoned trappers' huts and bird colonies",
      "Extended time in pack ice searching for bears, walrus, and Arctic wildlife",
      "Midnight sun photography sessions from the bow of the vessel",
      "Naturalist-led geology and glaciology briefings in the field"
    ],
    accommodation: "An intimate expedition vessel carrying no more than 12 guests — small enough to navigate channels closed to larger ships, agile enough to respond immediately to wildlife sightings. Private cabins with portholes that frame sea and ice. Communal spaces designed for naturalist briefings and the unhurried review of the day's images. The vessel is not a floating hotel; it is a working base for serious exploration.",
    designRationale: "This expedition does not have a fixed daily itinerary, and this is precisely the point. Routing decisions are made each morning in response to ice reports, wildlife activity, and weather. Multiple landing sites are prepared for every day, ensuring that closed conditions in one area open possibilities in another. The rhythm is determined by the Arctic itself — which is, ultimately, what you came for.",
    gridImages: [
      { src: "/images/svalbard-polar.jpg", alt: "Polar bear on Arctic sea ice", span: "wide" },
      { src: "/images/zodiac-glacier.jpg", alt: "Zodiac expedition approaching glacier", span: "normal" },
      { src: "/images/whale-tail.jpg", alt: "Whale surfacing in Arctic waters", span: "normal" },
      { src: "/images/iceland-glacier.jpg", alt: "Glacier lagoon with icebergs", span: "wide" },
    ]
  },
  "iceland-summer-fire-ice": {
    title: "Iceland",
    subtitle: "Summer Along the Edge of Fire and Ice",
    heroImage: "/images/iceland-glacier.jpg",
    heroTagline: "Where fire and ancient ice meet open sky.",
    overview: "Iceland compresses geological time into a single landscape — volcanic terrain still exhaling heat from the earth's interior, glaciers that have been grinding through valleys since the last ice age, waterfalls of a scale that renders photography inadequate, and geothermal features that feel like evidence of ongoing creation. This is a journey through a landscape in the process of becoming, tracing Iceland's volcanic spine from the capital's cultural edge to uninhabited interior highlands.",
    guestProfile: "Couples and small groups of 2–6 with genuine interest in geology, landscape photography, and the culture of a place defined by its relationship with elemental forces. Comfortable with road-based exploration, variable weather, and days shaped by light rather than clock. Photographers in particular find Iceland's quality of illumination — that long, low, perpetual-summer light — unlike anywhere else.",
    whenToVisit: "June through August. June offers extraordinary light with a slight offset from peak season. July provides the warmest conditions and full accessibility to interior highland routes. August maintains excellent weather while approaching the shoulder season — when the first hints of autumn add drama to an already dramatic landscape.",
    journeyFlow: ["Reykjavik", "Golden Circle", "South Coast", "Jökulsárlón", "East Fjords", "Interior Highlands"],
    activities: [
      "Private glacier hiking and ice cave exploration with certified mountain guides",
      "Zodiac boat tours among icebergs on Jökulsárlón glacier lagoon",
      "Volcanic landscape hiking through lava fields and caldera rims",
      "Geothermal bathing in natural pools far from tourist infrastructure",
      "Waterfall and canyon exploration timed for optimal morning light",
      "Interior highland drives across surreal black sand and obsidian plains"
    ],
    accommodation: "Design-led hotels in Reykjavik that reflect Iceland's particular aesthetic — clean Nordic lines, volcanic material, the tension between the civilised and the elemental — paired with small owner-operated lodges in the countryside. Properties chosen for their location relative to early-morning light, their connection to the land, and the quality of local knowledge their owners bring to the table.",
    designRationale: "Iceland's landscape has an emotional arc — accessible beauty near the capital that deepens into something more austere and confronting as you move east and into the interior. This itinerary follows that arc deliberately, building from the familiar to the genuinely remote. Extended time in each region prevents the tendency to treat this country as a collection of highlights to be photographed and moved on from. The goal is genuine comprehension of how fire and ice have created this singular place.",
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
