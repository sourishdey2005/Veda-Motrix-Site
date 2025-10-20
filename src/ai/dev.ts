import { config } from 'dotenv';
config();

import '@/ai/flows/predict-maintenance-needs.ts';
import '@/ai/flows/get-efficiency-recommendations.ts';
import '@/ai/flows/receive-real-time-security-alerts.ts';