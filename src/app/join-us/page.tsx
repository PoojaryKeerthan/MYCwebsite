import type { Metadata } from 'next';
import Header from '../../components/common/Header';
import JoinUsInteractive from './components/JoinUsInteractive';

export const metadata: Metadata = {
  title: 'Join Us - Mardoli Youth Hub',
  description:
    'Join Mardoli Youth Hub and become part of a vibrant community dedicated to youth empowerment, leadership development, and positive community impact. Apply for membership, volunteer opportunities, partnerships, or alumni reconnection.',
};

export default function JoinUsPage() {
  return (
    <>
      <Header />
      <JoinUsInteractive />
    </>
  );
}