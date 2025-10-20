'use server';
/**
 * @fileOverview An AI agent that generates real-time security alerts for vehicles.
 *
 * - receiveRealTimeSecurityAlerts - A function that handles the generation of security alerts.
 * - ReceiveRealTimeSecurityAlertsInput - The input type for the receiveRealTimeSecurityAlerts function.
 * - ReceiveRealTimeSecurityAlertsOutput - The return type for the receiveRealTimeSecurityAlerts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ReceiveRealTimeSecurityAlertsInputSchema = z.object({
  vehicleData: z.string().describe('Real-time data from the vehicle, including sensor readings, location, and system status.'),
});
export type ReceiveRealTimeSecurityAlertsInput = z.infer<typeof ReceiveRealTimeSecurityAlertsInputSchema>;

const ReceiveRealTimeSecurityAlertsOutputSchema = z.object({
  alertType: z.string().describe('The type of security alert (e.g., unauthorized access, suspicious activity, potential theft).'),
  alertMessage: z.string().describe('A detailed message describing the security threat and recommended actions.'),
  severity: z.enum(['low', 'medium', 'high']).describe('The severity level of the security alert.'),
});
export type ReceiveRealTimeSecurityAlertsOutput = z.infer<typeof ReceiveRealTimeSecurityAlertsOutputSchema>;

export async function receiveRealTimeSecurityAlerts(input: ReceiveRealTimeSecurityAlertsInput): Promise<ReceiveRealTimeSecurityAlertsOutput> {
  return receiveRealTimeSecurityAlertsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'receiveRealTimeSecurityAlertsPrompt',
  input: {schema: ReceiveRealTimeSecurityAlertsInputSchema},
  output: {schema: ReceiveRealTimeSecurityAlertsOutputSchema},
  prompt: `You are an AI security expert specializing in vehicle security.

You will receive real-time data from a vehicle and analyze it for potential security threats. Based on the analysis, you will generate a security alert with a type, a detailed message, and a severity level.

Vehicle Data: {{{vehicleData}}}

Consider the following when generating the alert:
- Unauthorized access attempts
- Suspicious activity (e.g., unusual sensor readings, unexpected system behavior)
- Potential theft indicators (e.g., vehicle location changes, alarm triggers)

Ensure that the alert message provides clear and actionable information for the vehicle owner.
`,
});

const receiveRealTimeSecurityAlertsFlow = ai.defineFlow(
  {
    name: 'receiveRealTimeSecurityAlertsFlow',
    inputSchema: ReceiveRealTimeSecurityAlertsInputSchema,
    outputSchema: ReceiveRealTimeSecurityAlertsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
