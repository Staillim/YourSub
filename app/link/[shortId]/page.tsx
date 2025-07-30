
import ClientComponent from './ClientComponent';

/**
 * This is the main Server Component for the short link page.
 * Its only job is to receive the `shortId` from the URL parameters
 * and render the corresponding ClientComponent, which handles all
 * interactive logic.
 */
export default async function ShortLinkPage({ params }: { params: Promise<{ shortId: string }> }) {
  const { shortId } = await params;
  return <ClientComponent shortId={shortId} />;
}
