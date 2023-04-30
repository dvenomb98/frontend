import { DateTime } from 'luxon';

export const formatDate = (date: DateTime): string => date.toISODate()!;
