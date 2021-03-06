import { intField, stringField, booleanField, dateField } from './custom-validators';

export const createExceptionByScheduleValidator = [
  dateField('date'),
  dateField('currentDate').optional(),
  booleanField('occurrenceDeleted').optional(),
  intField('amount').optional(),
  stringField('description').optional(),
];

export const createExceptionValidator = [...createExceptionByScheduleValidator, stringField('schedule')];

export const updateExceptionValidator = [
  dateField('currentDate').optional(),
  booleanField('occurrenceDeleted').optional(),
  intField('amount').optional(),
  stringField('description').optional(),
];
