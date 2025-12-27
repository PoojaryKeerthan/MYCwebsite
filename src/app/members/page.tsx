import type { Metadata } from 'next';
import Header from '../../components/common/Header';
import MembersInteractive from './components/MembersInteractive';

export const metadata: Metadata = {
  title: 'Members - Mardoli Youth Hub',
  description: 'Connect with fellow members of Mardoli Youth Hub, discover mentorship opportunities, track achievements, and build meaningful relationships within our vibrant community of young leaders.',
};

export default function MembersPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <MembersInteractive />
      </main>
    </>
  );
}