

import raven1 from '../assets/media/images/projects/raven/raven1.webp';
import raven2 from '../assets/media/images/projects/raven/raven2.webp';
import raven3 from '../assets/media/images/projects/raven/raven3.webp';

import owl1 from '../assets/media/images/projects/owl/owl1.webp';
import owl2 from '../assets/media/images/projects/owl/owl2.webp';
import owl3 from '../assets/media/images/projects/owl/owl3.webp';
import owl4 from '../assets/media/images/projects/owl/owl4.webp';
import owl5 from '../assets/media/images/projects/owl/owl5.webp';
import owl6 from '../assets/media/images/projects/owl/owl6.webp';

import chicken1 from '../assets/media/images/projects/chickens/chickens1.webp';
import chicken2 from '../assets/media/images/projects/chickens/chickens2.webp';
import chicken3 from '../assets/media/images/projects/chickens/chickens3.webp';
import chicken4 from '../assets/media/images/projects/chickens/chickens4.webp';
import chicken5 from '../assets/media/images/projects/chickens/chickens5.webp';
import chicken6 from '../assets/media/images/projects/chickens/chickens6.webp';

import hawk1 from '../assets/media/images/projects/hawk/hawk1.webp';
import hawk2 from '../assets/media/images/projects/hawk/hawk2.webp';

import cow1 from '../assets/media/images/projects/cow/cow1.webp';
import cow2 from '../assets/media/images/projects/cow/cow2.webp';
import cow3 from '../assets/media/images/projects/cow/cow3.webp';
import cow4 from '../assets/media/images/projects/cow/cow4.webp';
import cow5 from '../assets/media/images/projects/cow/cow5.webp';
import cow6 from '../assets/media/images/projects/cow/cow6.webp';
import cow7 from '../assets/media/images/projects/cow/cow7.webp';

import bamse1 from '../assets/media/images/projects/bamse/bamse1.webp';
import bamse2 from '../assets/media/images/projects/bamse/bamse2.webp';
import bamse3 from '../assets/media/images/projects/bamse/bamse3.webp';

import church1 from '../assets/media/images/projects/church/church1.webp';
import church2 from '../assets/media/images/projects/church/church2.webp';
import church3 from '../assets/media/images/projects/church/church3.webp';
import church4 from '../assets/media/images/projects/church/church4.webp';

import lamp1 from '../assets/media/images/projects/lamp/lamp1.webp';
import lamp2 from '../assets/media/images/projects/lamp/lamp2.webp';
import lamp3 from '../assets/media/images/projects/lamp/lamp3.webp';
import lamp4 from '../assets/media/images/projects/lamp/lamp4.webp';

import rakel1 from '../assets/media/images/projects/rakel/web_rakel1.webp';
import rakel2 from '../assets/media/images/projects/rakel/web_rakel2.webp';
import rakel3 from '../assets/media/images/projects/rakel/web_rakel3.webp';
import rakel4 from '../assets/media/images/projects/rakel/web_rakel4.webp';


const sculptureData = [
  {
    id: 1,
    img: raven3,
    images: { raven1, raven2, raven3 },
    title: 'Hugin och Munin',
    description: 'En rolig beställning från LApland Guesthouse i Kangos',
    year: 2016,
    location: 'Kangos, Sweden',
    dimensions: 'Skala 1:1',
    material: 'Furu',
  },
  {
    id: 2,
    img: owl2,
    images: { owl5, owl2, owl4, owl3, owl1, owl6 },
    title: 'Lappugglan',
    description: 'En beställning från Lapland guesthouse i Kangos',
    year: 2016,
    location: 'KAngos, Sweden',
    dimensions: 'Skala 1:1',
    material: 'Furu',
  },
  {
    id: 3,
    img: chicken1,
    images: { chicken1, chicken2, chicken3, chicken4, chicken5, chicken6 },
    title: 'Bjurholmshönor',
    description: 'Örnskoldsviks museum beställde ett gäng hönor som var med på utsällningen Titta en fågel! ',
    year: 2022,
    location: 'Örnsköldsvik, Sweden',
    dimensions: 'Skala 1:1',
    material: 'Pine Wood',
  },
  {
    id: 4,
    img: hawk1,
    images: { hawk1, hawk2 },
    title: 'Ormvråk',
    description: 'En av våra första skulpturer till en privatperson som ville föreviga ett minne av ett möte med en ormvråk',
    year: 2015,
    location: 'Skivsjö, Sweden',
    dimensions: 'Skala 1:1',
    material: 'Furu',
  },
  {
    id: 5,
    img: cow6,
    images: { cow1, cow2, cow3, cow4, cow5, cow6, cow7 },
    title: 'Gullblom',
    description: 'Vindelns hembygdsförening utvecklar sin verksamhet med att skapa miljöer som tar besökaren tillbaka i tiden. Vi skulpterade en ko i naturlig storlek som nu står i deras ladugård.',
    year: 2023,
    location: 'Vindeln, Sweden',
    dimensions: 'Skala 1:1',
    material: 'Furu',
  },
  {
    id: 6,
    img: bamse2,
    images: { bamse1, bamse2, bamse3 },
    title: 'Bamse, Världens starkaste björn',
    description: 'Privat beställning till en privatperson',
    year: 2017,
    location: 'Vindeln, Sweden',
    dimensions: 'Skala 1:1',
    material: 'Furu',
  },
  {
    id: 7,
    img: church4,
    images: { church4, church1, church2, church3 },
    title: 'Kyrkspiran',
    description: 'Ett spännande och lärorikt projekt för Vindelns församling. Vi restaurerade en kyrkspira som nu pryder Vindelns kyrka.',
    year: 2018,
    location: 'Vindeln, Sweden',
    dimensions: '3.8m x 2.4m',
    material: 'Furu',
  },
  {
    id: 8,
    img: lamp1,
    images: { lamp1, lamp2, lamp3, lamp4 },
    title: 'Lampor',
    description: 'Vi har alltid varit nyfikna på hur belysning kan förändra en miljö. Därför har vi skapat en serie lampor som vi säljer.',
    year: 2018,
    location: 'Vindeln, Sweden',
    dimensions: 'Olika storlekar',
    material: 'Björk',
  },
  {
    id: 9,
    img: rakel1,
    images: { rakel1, rakel2, rakel3, rakel4 },
    title: 'Tavlor av Rakel',
    description: 'Rakel målade en serie tavlor med olika skatmotiv som vi ställde ut på en utställning på Sjungaregården i Granö.',
    year: 2018,
    location: 'Vindeln, Sweden',
    dimensions: '2.4m x 2.4m',
    material: 'Akryl på Canvas',
  },
];

export default sculptureData;
