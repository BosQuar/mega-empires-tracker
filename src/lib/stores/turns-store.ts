import type { Turn } from '@prisma/client';
import { derived, writable } from 'svelte/store';

export const turnsStore = writable<Turn[]>([]);

export const turnAccumulatedStore = derived(turnsStore, (turns) =>
	turns.filter((turn) => turn.isTurnPlayed)
);
