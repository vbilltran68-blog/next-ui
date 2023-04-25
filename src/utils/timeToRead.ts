export function calculateTimeToRead(content: string | undefined): string {
  // https://thereadtime.com/
  const words = `${content}`.split(' ')

  const minutes = Math.ceil(words.length / 238)

  if (minutes < 60) {
    return `${minutes} phút đọc`;
  }

  const nextHours = Math.ceil(minutes / 60);
  const nextMinutes = Math.ceil(minutes % 60);

  if (nextMinutes === 0) {
    return `${nextHours} giờ đọc`;
  }

  return `${nextHours} giờ ${nextMinutes} phút đọc`
}
