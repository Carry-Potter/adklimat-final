'use client';

import { ProjectDetail } from '@/components/ProjectDetail';
import { useParams } from 'next/navigation';

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;

  return <ProjectDetail slug={slug} />;
}
