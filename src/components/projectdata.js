import burkar from "../media/burkar.jpeg";
import hush from "../media/hush_hush_stories.jpeg";
import soritoni from "../media/soritoni.jpeg";
import gamling from "../media/uppdrag_gamling.jpg";
import project7 from "../media/project7.png";
import project8 from "../media/project8.png";
import looney from "../media/looney_talks.jpeg";
import lust from "../media/Lust_for_life.jpeg";
import patient from "../media/Patientochundertecknad.png";
import undersokning2 from "../media/undersokningen2.jpeg";
import together from "../media/2gether.jpeg";
import hogtspel from "../media/hogt_spel.jpeg";
import lararlyftet from "../media/Lärarlyftet_ljudläggare_mixare_2021.png";
import minavanner from "../media/Mina vänner_inspelningstekniker_mixare.jpeg";
import p3id from "../media/P3 ID_ljudläggare_mixare.jpeg";
import kampen from "../media/Kampen om gården_ljudläggare_mixare.jpeg";
import Hallbart from "../media/Hållbart professionell_ljudläggare_mixare_2021.png";
import p3klubben from "../media/P3 klubben_inspelningstekniker_mixare.jpeg";
import salong1 from "../media/Salong ett_mixare.jpeg";
import caravan from "../media/Caravan Mannen utan spår_ljudläggare_mixare.jpeg";
import valfardsmiljadarerna from "../media/Väldfärdsmiljardärerna_mixare.jpeg";
import onanera from "../media/Året jag slutade prestera och började onanera_inspelningstekniker_2021.jpeg";
import atillb from "../media/Från A till B_mixare.png";
// PROJECTS DATA
const projectData = [
	{
		id: "1",
		img: minavanner,
		imgalt: "Mina vänner",
		title: "Mina vänner",
		year: "2022",
		info: "Inspelningstekniker & mixare",
		url: "",
	},
	{
		id: "2",
		img: p3id,
		imgalt: "P3ID",
		title: "P3 ID",
		year: "2022",
		info: "Ljudläggare & mixare / Studio Olga",
		url: "",
	},
	{
		id: "3",
		img: kampen,
		imgalt: "Kampen om gården",
		title: "Kampen om gården",
		year: "2022",
		info: "ljudläggare & mixare ",
		url: "",
	},
	{
		id: "4",
		img: p3klubben,
		imgalt: "P3 Klubben",
		title: "P3 Klubben",
		year: "2022",
		info: "Inspelningstekniker & mixare",
		url: "",
	},
	{
		id: "5",
		img: salong1,
		imgalt: "Salong Ett",
		title: "Salong Ett",
		year: "2022",
		info: "Mixare",
		url: "",
	},
	{
		id: "6",
		img: caravan,
		imgalt: "Caravan - Mannen utan spår",
		title: "Caravan - Mannen utan spår",
		year: "2022",
		info: "Ljudläggare & mixare",
		url: "",
	},
	{
		id: "7",
		img: atillb,
		imgalt: "Från A till B",
		title: "Från A till B",
		year: "2022",
		info: "Mixare",
		url: "",
	},
	{
		id: "8",
		img: valfardsmiljadarerna,
		imgalt: "Välfärdsmiljadärerna",
		title: "Välfärdsmiljadärerna",
		year: "2022",
		info: "Mixare",
		url: "",
	},
	{
		id: "9",
		img: onanera,
		imgalt: "Året jag slutade prestera och började onanera",
		title: "Året jag slutade prestera och började onanera",
		year: "2022",
		info: "Netflix. Inspelningstekniker",
		url: "",
	},
	{
		id: "10",
		img: Hallbart,
		imgalt: "Hållbart professionell",
		title: "Hållbart professionell",
		year: "2021",
		info: "Mixare",
		url: "",
	},
	{
		id: "11",
		img: lararlyftet,
		imgalt: "Lärarlyftet",
		title: "Lärarlyftet",
		year: "2021",
		info: "Ljudläggare & mixare",
		url: "",
	},
	{
		id: "12",
		img: patient,
		imgalt: "Patient och Undertecknad",
		title: "Patient och Undertecknad",
		year: "2021",
		info: "Kortfilm / ljudtekniker & ljudläggare",
		url: "",
	},
	{
		id: "13",
		img: together,
		imgalt: "2gether",
		title: "2gether",
		year: "2021",
		info: "Drama kortfilm / foley",
		url: "",
	},
	{
		id: "14",
		img: hogtspel,
		imgalt: "Högt Spel",
		title: "Högt Spel",
		year: "2021",
		info: "Podcast / ljudläggare & mixare / Studio Olga",
		url: "",
	},
	{
		id: "15",
		img: project8,
		imgalt: "Som blommor som fåglar och så",
		title: "Som blommor som fåglar och så",
		year: "2020",
		info: "ljudtekniker, ljudläggare",
		url: "",
	},
	{
		id: "16",
		img: soritoni,
		imgalt: "Soritoni",
		title: "Soritoni",
		year: "2020",
		info: "ljudtekniker, ljudläggare",
		url: "",
	},
	{
		id: "17",
		img: undersokning2,
		imgalt: "Undersökningen",
		title: "Undersökningen",
		year: "2019",
		info: "kortfilm, dokumentär / ljudtekniker",
		url: "",
	},
	{
		id: "18",
		img: gamling,
		imgalt: "Uppdrag gamling",
		title: "Uppdrag gamling",
		year: "2019",
		url: "",
	},
	{
		id: "19",
		img: looney,
		imgalt: "Looney talks",
		title: "Looney talks",
		year: "2019",
		info: "Podcast / mixare",
		url: "",
	},
	{
		id: "20",
		img: lust,
		imgalt: "Lust for life",
		title: "Lust for life",
		year: "2018",
		info: "Drama kortfilm / ljudtekniker, ljuddesigner och mix",
		url: "",
	},
	{
		id: "21",
		img: project7,
		imgalt: "Lyssna på mig",
		title: "Lyssna på mig",
		year: "2018",
		url: "",
	},
	{
		id: "22",
		img: burkar,
		imgalt: "Gamla burkar flaskor och tanter",
		title: "Gamla burkar flaskor och tanter",
		year: "2017",
		info: "",
		url: "", // if no repo, the button will not show up
	},
	{
		id: "23",
		img: hush,
		imgalt: "Hush hush stories",
		title: "Hush Hush Stories",
		year: "2015",
		info: "dokumentärfilm kort/regi & produktion",
		url: "", // if no repo, the button will not show up
	},
	{
		id: "24",
		img: "",
		imgalt: "",
		title: "",
		year: "",
		info: "",
		url: "", // if no repo, the button will not show up
	},
];

export default projectData;
