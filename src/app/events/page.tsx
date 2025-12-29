import type { Metadata } from 'next';
import Header from '../../components/common/Header';
import EventsInteractive from './components/EventsInteractive';

export const metadata: Metadata = {
  title: 'Events Calendar - Mardoli Youths Club',
  description: 'Discover and register for upcoming youth events, workshops, community service projects, and social activities at Mardoli Youth Hub. Join us in building a stronger community through engagement and participation.',
};

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <EventsInteractive />
      </main>
    </>
  );
}