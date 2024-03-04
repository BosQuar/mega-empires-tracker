import type { Turn } from '@prisma/client';
import { writable } from 'svelte/store';

export const turnsStore = writable<Turn[]>([]);
