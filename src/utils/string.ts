export function concatString(...str: (string | number)[]): string {
  return str.join('-')
}

export function normalizeString(str: string): string {
  return str.replace(/\s\s/g, ' ')
}

export function cutString(str: string, maxLength: number): string {
  const normalizeStr = normalizeString(str) + ' '
  const lastSpaceIndex = normalizeStr.substring(0, maxLength + 1).lastIndexOf(' ')
  return `${normalizeStr.substring(0, lastSpaceIndex)}${lastSpaceIndex + 1 < normalizeStr.length ? '...' : ''}`
}
