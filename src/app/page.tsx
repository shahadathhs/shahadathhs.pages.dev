import BentoLayout from '@/components/home/bento/BentoLayout';
import ContactSection from '@/components/home/ContactSection';
import MediumBlogSection from '@/components/home/MediumBlogSection';
import ProjectSection from '@/components/home/ProjectSection';

export default function Home() {
  return (
    <>
      <BentoLayout />
      <ProjectSection />
      <MediumBlogSection />
      <ContactSection />
    </>
  );
}
