import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">404</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-text">Page not found</h1>
      <p className="mt-3 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <ButtonLink href="/" className="mt-8" icon="arrow-right">
        Back to home
      </ButtonLink>
    </Container>
  );
}
