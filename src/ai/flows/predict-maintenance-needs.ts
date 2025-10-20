'use server';

/**
 * @fileOverview Analyzes real-time vehicle data to predict maintenance needs.
 *
 * - predictMaintenanceNeeds - A function that handles the prediction of maintenance needs.
 * - PredictMaintenanceNeedsInput - The input type for the predictMaintenanceNeeds function.
 * - PredictMaintenanceNeedsOutput - The return type for the predictMaintenanceNeeds function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictMaintenanceNeedsInputSchema = z.object({
  vehicleData: z.string().describe('Real-time data from the vehicle sensors.'),
  historicalMaintenanceData: z.string().describe('Historical maintenance records for the vehicle.'),
});
export type PredictMaintenanceNeedsInput = z.infer<typeof PredictMaintenanceNeedsInputSchema>;

const PredictMaintenanceNeedsOutputSchema = z.object({
  predictedMaintenance: z.string().describe('Predicted maintenance needs based on the input data.'),
  urgency: z.string().describe('The urgency of the predicted maintenance (e.g., high, medium, low).'),
  confidenceLevel: z.number().describe('The confidence level of the prediction (0 to 1).'),
});
export type PredictMaintenanceNeedsOutput = z.infer<typeof PredictMaintenanceNeedsOutputSchema>;

export async function predictMaintenanceNeeds(input: PredictMaintenanceNeedsInput): Promise<PredictMaintenanceNeedsOutput> {
  return predictMaintenanceNeedsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'predictMaintenanceNeedsPrompt',
  input: {schema: PredictMaintenanceNeedsInputSchema},
  output: {schema: PredictMaintenanceNeedsOutputSchema},
  prompt: `You are an AI assistant specialized in predicting vehicle maintenance needs.

  Analyze the real-time vehicle data and historical maintenance records to predict potential maintenance issues, their urgency, and the confidence level of your predictions.

  Real-time Vehicle Data: {{{vehicleData}}}
  Historical Maintenance Data: {{{historicalMaintenanceData}}}

  Based on the provided data, predict the maintenance needs and provide the urgency (high, medium, low) and a confidence level (0 to 1).

  Return the results in JSON format.
  `,
});

const predictMaintenanceNeedsFlow = ai.defineFlow(
  {
    name: 'predictMaintenanceNeedsFlow',
    inputSchema: PredictMaintenanceNeedsInputSchema,
    outputSchema: PredictMaintenanceNeedsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
