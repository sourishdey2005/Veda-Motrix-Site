'use server';
/**
 * @fileOverview This file defines a Genkit flow for providing efficiency recommendations to drivers.
 *
 * It includes:
 * - `getEfficiencyRecommendations` - A function that takes driver input and returns efficiency recommendations.
 * - `EfficiencyRecommendationsInput` - The input type for the getEfficiencyRecommendations function.
 * - `EfficiencyRecommendationsOutput` - The return type for the getEfficiencyRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EfficiencyRecommendationsInputSchema = z.object({
  drivingStyle: z.string().describe('The current driving style of the driver.'),
  vehicleType: z.string().describe('The type of vehicle being driven.'),
  routeConditions: z.string().describe('The current road and traffic conditions.'),
  fuelConsumption: z.string().describe('Current fuel consumption.'),
});
export type EfficiencyRecommendationsInput = z.infer<typeof EfficiencyRecommendationsInputSchema>;

const EfficiencyRecommendationsOutputSchema = z.object({
  optimizedRoute: z.string().describe('A description of the optimized route.'),
  drivingPractices: z.string().describe('Recommended driving practices for better fuel efficiency.'),
  estimatedSavings: z.string().describe('Estimated fuel and cost savings from the recommendations.'),
});
export type EfficiencyRecommendationsOutput = z.infer<typeof EfficiencyRecommendationsOutputSchema>;

export async function getEfficiencyRecommendations(input: EfficiencyRecommendationsInput): Promise<EfficiencyRecommendationsOutput> {
  return getEfficiencyRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'efficiencyRecommendationsPrompt',
  input: {schema: EfficiencyRecommendationsInputSchema},
  output: {schema: EfficiencyRecommendationsOutputSchema},
  prompt: `You are an AI assistant designed to provide drivers with recommendations to improve fuel efficiency and reduce emissions.

  Analyze the following information to provide actionable advice:

  Current Driving Style: {{{drivingStyle}}}
  Vehicle Type: {{{vehicleType}}}
  Route Conditions: {{{routeConditions}}}
  Current Fuel Consumption: {{{fuelConsumption}}}

  Provide the recommendations as an object containing the keys optimizedRoute, drivingPractices, and estimatedSavings. Be concise and practical.
  `,
});

const getEfficiencyRecommendationsFlow = ai.defineFlow(
  {
    name: 'getEfficiencyRecommendationsFlow',
    inputSchema: EfficiencyRecommendationsInputSchema,
    outputSchema: EfficiencyRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
