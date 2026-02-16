export function getExperienceYears(startDate = new Date(2020, 8, 20), now = new Date()) {
  const start = new Date(startDate);
  let years = now.getFullYear() - start.getFullYear();

  const hasNotReachedAnniversaryYet =
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());

  if (hasNotReachedAnniversaryYet) years -= 1;

  return Math.max(0, years);
}
