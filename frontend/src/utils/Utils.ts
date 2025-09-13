/**
 * Capitalizes the first letter of a string.
 *
 * @param string string to be capitalized
 * @returns capitalized string
 */
function capitalize(string: string) {
  string = string.trim()
  if (string.length === 0) return string

  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * Normalizes a cost string by removing non-numeric characters and converting it to a float.
 *
 * @param cost string representing a cost, e.g. "$ 12.99" or "12,99"
 * @returns normalized cost as a string (e.g. "12.99"). Returns "0" if the input is invalid.
 */
function normalizeCost(cost: string) {
  const cleaned = cost.trim().replace(/,/g, ".")
  const parsed = parseFloat(cleaned)
  return isNaN(parsed) ? "0" : String(parsed)
}

export default { capitalize, normalizeCost }
