import type { Metadata } from 'next';
import Header from '../../components/common/Header';
import ProgramsInteractive from './components/ProgramsInteractive';

export const metadata: Metadata = {
  title: 'Programs & Activities - Mardoli Youths Club',
  description: 'Explore diverse youth development programs including leadership training, community service, educational workshops, sports & fitness, and arts & culture initiatives designed to empower young minds.',
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <ProgramsInteractive />
      </main>
    </>
  );
}