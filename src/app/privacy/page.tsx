'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ParticleCanvas from '@/components/landing/particle-canvas';

export default function PrivacyPage() {
  return (
    <>
      <ParticleCanvas />
      <div className="relative z-10 min-h-screen bg-background/80 px-4 py-12 text-white/80 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-primary transition-all hover:text-glow hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Return to Holo-Net
          </Link>

          <h1 className="text-glow mb-6 text-4xl font-bold tracking-tight text-white">
            Privacy Protocol Directive
          </h1>
          <p className="mb-8 text-lg text-white/70">
            Last Updated: Sector 7, Cycle 2024
          </p>

          <div className="space-y-8">
            <div className="rounded-xl border border-primary/20 bg-background/50 p-6 backdrop-blur-sm">
              <h2 className="text-glow mb-3 text-2xl font-semibold text-primary">
                1.0 Data Ingestion
              </h2>
              <p>
                VEDA-MOTRIX AI interfaces with vehicle operational data streams, including but not limited to, telemetry, system diagnostics, performance metrics, and locational data. This data is processed in real-time to facilitate core platform functionalities. All data is encrypted in transit and at rest using industry-standard quantum-resistant algorithms.
              </p>
            </div>

            <div className="rounded-xl border border-primary/20 bg-background/50 p-6 backdrop-blur-sm">
              <h2 className="text-glow mb-3 text-2xl font-semibold text-primary">
                2.0 Information Utilization
              </h2>
              <p>
                Ingested data is utilized exclusively for the provision and enhancement of VEDA-MOTRIX services. This includes predictive maintenance analysis, performance optimization, security threat assessment, and route efficiency calculations. Data is anonymized and aggregated for system-wide statistical modeling to improve the collective intelligence of the network.
              </p>
            </div>

            <div className="rounded-xl border border-primary/20 bg-background/50 p-6 backdrop-blur-sm">
              <h2 className="text-glow mb-3 text-2xl font-semibold text-primary">
                3.0 Data Segregation & Sharing
              </h2>
              <p>
                Individual user or vehicle data is not shared with, sold to, or leased to any third-party entities without explicit, opt-in consent from the operator. Data may be shared with authorized service partners for the purpose of fulfilling maintenance requests initiated by the user. Aggregated, anonymized data may be used in industry reports and research, containing no personally identifiable information.
              </p>
            </div>

            <div className="rounded-xl border border-primary/20 bg-background/50 p-6 backdrop-blur-sm">
              <h2 className="text-glow mb-3 text-2xl font-semibold text-primary">
                4.0 Security Protocols
              </h2>
              <p>
                Our infrastructure is secured within a multi-layered defense system, employing advanced intrusion detection, continuous monitoring, and automated threat response. Access to raw data is restricted to authorized personnel with multi-factor authentication and on a need-to-know basis, logged and audited for compliance.
              </p>
            </div>

            <div className="rounded-xl border border-primary/20 bg-background/50 p-6 backdrop-blur-sm">
              <h2 className="text-glow mb-3 text-2xl font-semibold text-primary">
                5.0 Operator Control & Data Rights
              </h2>
              <p>
                Operators retain full control over their data. Through the VEDA-MOTRIX dashboard, users can request data access reports, initiate data purges, and manage consent for specific data processing activities. We are committed to data portability and operator sovereignty in the digital domain.
              </p>
            </div>
            
            <div className="rounded-xl border border-primary/20 bg-background/50 p-6 backdrop-blur-sm">
              <h2 className="text-glow mb-3 text-2xl font-semibold text-primary">
                6.0 Protocol Amendments
              </h2>
              <p>
                This Privacy Protocol may be updated to reflect changes in our operational parameters or regulatory requirements. Operators will be notified of any significant changes via their registered communication channel. Continued use of the VEDA-MOTRIX platform constitutes acceptance of the amended protocol.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}