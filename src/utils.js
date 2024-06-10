// src/utils/splitText.js
import SplitType from 'split-type';

export function splitInLine(element) {
  if (!element) return null;
  return new SplitType(element, {
    types: 'lines, words, chars',
  });
};

export function SplitInChar(element) {
  if (!element) return null;
  return new SplitType(element, {
    types: 'chars',
  });
}