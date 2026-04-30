import { notFound } from 'next/navigation';
import { LEVEL_1_PROCEDURES } from '../../page';
import AssessmentFormClient from '@/components/AssessmentFormClient';

interface Props {
  params: Promise<{ procedure: string }>;
}

export default async function MiniCEXPage({ params }: Props) {
  const { procedure } = await params;
  const proc = LEVEL_1_PROCEDURES.find(p => p.slug === procedure);
  if (!proc) notFound();

  const procedureSlug = `emergency/level-1/${proc.slug}`;

  return (
    <>
      <div className="page-header">
        <div className="label">Streams / Emergency / Level 1 / {proc.name}</div>
        <h1>Mini CEX Assessment</h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
          Mini Clinical Evaluation Exercise — {proc.name}
        </p>
      </div>
      <div className="content-prose">
        <AssessmentFormClient
          formType="mini-cex"
          streamSlug="emergency"
          procedureSlug={procedureSlug}
          title={`Mini CEX — ${proc.name}`}
        />
      </div>
    </>
  );
}
