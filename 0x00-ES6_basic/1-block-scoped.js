export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    task = true; // eslint-disable-line no-unused-vars
    task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}
