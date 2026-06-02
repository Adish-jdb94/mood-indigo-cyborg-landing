import { AwakeningSection } from './components/AwakeningSection.jsx';
import { CountdownSection } from './components/CountdownSection.jsx';
import { Footer } from './components/Footer.jsx';
import { HeroSection } from './components/HeroSection.jsx';
import { HologramFeatures } from './components/HologramFeatures.jsx';
import { HumanMachineSection } from './components/HumanMachineSection.jsx';
import { LoadingScreen } from './components/LoadingScreen.jsx';
import { StatsSection } from './components/StatsSection.jsx';
import { TimelineSection } from './components/TimelineSection.jsx';
import { useLenis } from './hooks/useLenis.js';

export default function App() {
  useLenis();

  return (
    <>
      <LoadingScreen />
      <main id="top" className="relative min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
        <HeroSection />
        <AwakeningSection />
        <HologramFeatures />
        <HumanMachineSection />
        <StatsSection />
        <TimelineSection />
        <CountdownSection />
      </main>
      <Footer />
    </>
  );
}
