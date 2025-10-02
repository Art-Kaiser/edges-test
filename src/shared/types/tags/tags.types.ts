import { TagsEnum } from './tags.enum.ts';

export type TagsTypes = TagsEnum.EMULATOR | TagsEnum.TEST | TagsEnum.REAL;

export type TagList = TagsTypes[];
