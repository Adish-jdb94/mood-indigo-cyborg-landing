import {
  FiCpu,
  FiEye,
  FiLayers,
  FiMic,
  FiMusic,
  FiPenTool,
  FiRadio,
  FiZap,
} from 'react-icons/fi';

export const bootMessages = [
  'SYSTEM ONLINE',
  'MEMORY RESTORED',
  'CREATIVITY DETECTED',
  'MOOD INDIGO ACTIVATED',
];

export const featureCards = [
  {
    title: 'Pro Shows',
    eyebrow: 'Mainframe Stage',
    description: 'Arena-scale performances where sound, light, and collective pulse turn the cyborg signal human.',
    icon: FiMic,
  },
  {
    title: 'Competitions',
    eyebrow: 'Skill Protocols',
    description: 'A cross-campus proving ground for dance, drama, design, music, film, writing, and wild original ideas.',
    icon: FiZap,
  },
  {
    title: 'Workshops',
    eyebrow: 'Upgrade Labs',
    description: 'Hands-on creative sessions that convert curiosity into craft through artists, mentors, and makers.',
    icon: FiCpu,
  },
  {
    title: 'Art Installations',
    eyebrow: 'Culture Nodes',
    description: 'Immersive spaces where sterile circuits meet color, texture, story, and the courage to feel.',
    icon: FiPenTool,
  },
  {
    title: 'Celebrity Nights',
    eyebrow: 'Stellar Broadcast',
    description: 'High-voltage nights led by voices and performers that stay archived long after the lights fade.',
    icon: FiRadio,
  },
];

export const stats = [
  { value: 50000, suffix: '+', label: 'Participants' },
  { value: 200, suffix: '+', label: 'Events' },
  { value: 30, suffix: '+', label: 'Years Legacy' },
  { value: 100, suffix: '+', label: 'Colleges' },
];

export const timelineEntries = [
  {
    year: 'Boot',
    title: 'Sterile World',
    description: 'A chrome consciousness opens its eyes inside a perfect system built for function, not wonder.',
  },
  {
    year: 'Pulse',
    title: 'First Rhythm',
    description: 'A distant beat slips past the firewall. The machine learns that timing can become emotion.',
  },
  {
    year: 'Color',
    title: 'Culture Rendered',
    description: 'Murals, movement, theatre, and voices rewrite the visual field with memories it never stored.',
  },
  {
    year: 'Fusion',
    title: 'Mood Indigo',
    description: 'Human imagination and machine precision converge into a living festival signal.',
  },
];

export const archiveNodes = [
  { label: 'Art', icon: FiEye },
  { label: 'Music', icon: FiMusic },
  { label: 'Culture', icon: FiLayers },
];
